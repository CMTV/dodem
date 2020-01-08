const fs =          require('fs');
const p =           require('path');
const showdown =    require('showdown');
const mustache =    require('mustache');

const TASKS_NUM = 4462;

//
// Util funcs
//

function writeFile(path, data)
{
    fs.promises
        .mkdir(p.dirname(path), { recursive: true })
        .then(() => fs.writeFileSync(path, data));
}

function readFile(path)
{
    return fs.readFileSync(path, { encoding: 'utf-8' });
}

//
// Tools funcs
//

function getIterateTasksData(devMode = false)
{
    let data = {};
    let iterators = Object.keys(_tasks_Iterators);

    for (let i = 1; i <= TASKS_NUM; i++)
    {
        if (devMode && i > 2) break;

        let path = p.join('tasks', i.toString());
        let taskExists = false;
        let meta = {};

        if (
            fs.existsSync(path) 
            &&
            fs.lstatSync(path).isDirectory()
        )
        {
            taskExists = true;
            meta = JSON.parse(readFile(p.join(path, 'meta.json')));
        }

        iterators.forEach((iterator) =>
        {
            if (!(iterator in data)) { data[iterator] = {}; }

            if ('step' in _tasks_Iterators[iterator])
            {
                data[iterator] = _tasks_Iterators[iterator].step
                (data[iterator], meta, i, i === 1, i === TASKS_NUM, taskExists);
            }
            else
            {
                data[iterator] = _tasks_Iterators[iterator]
                (data[iterator], meta, i, i === 1, i === TASKS_NUM, taskExists);
            }
        });
    }

    iterators.forEach((iterator) =>
    {
        if ('finally' in _tasks_Iterators[iterator])
        {
            data[iterator] = _tasks_Iterators[iterator].finally(data[iterator]);
        }
    });

    return data;
}

const _tasks_Iterators =
{
    hash: (data, meta, i, isFirst, isLast, taskExists) =>
    {
        if (taskExists) data[i] = null;

        return data;
    },

    nav:
    {
        step: (data, meta, i, isFirst, isLast, taskExists) =>
        {
            if (!taskExists) return data;

            data[i] = {};

            if ('prevExisting' in data)
            {
                data[i].prev = data.prevExisting;
                data[data.prevExisting].next = i;
            }

            data.prevExisting = i;

            return data;
        },

        finally: (data) =>
        {
            delete data.prevExisting;

            return data;
        }
    },

    solvers:
    {
        step: (data, meta, i, isFirst, isLast, taskExists) =>
        {
            if (!taskExists) return data;

            if (!('solver' in meta))
            {
                throw new Error("'Solvers' iterator error on task " + i + ". Missing 'solver' property!");
            }

            let solver = meta.solver;

            if (solver in data)
            {
                data[solver].push(i);
            }
            else
            {
                data[solver] = [i];
            }

            return data;
        },

        finally: (data) =>
        {
            let sortedSolvers = Object.keys(data).sort((a, b) =>
            {
                if (data[a].length < data[b].length) return 1;
                if (data[a].length > data[b].length) return -1;
    
                return 0;
            });
    
            let sortedObj = {};
    
            sortedSolvers.forEach((solver) =>
            {
                sortedObj[solver] = data[solver];
            });

            let solversInfo = JSON.parse(readFile('solvers.json'));

            Object.keys(solversInfo).forEach((solverId) =>
            {
                if (!(solverId in sortedObj)) return;

                sortedObj[solverId] = Object.assign(
                    { 
                        id: solverId, 
                        solvedNum: sortedObj[solverId].length, 
                        tasks: sortedObj[solverId],
                        hasAvatar: fs.existsSync(p.join('src', 'graphics', 'solvers', solverId + '.png'))
                    },
                    solversInfo[solverId]
                );
            });

            return sortedObj;
        }
    }
}

function getSrcTask(taskNumber)
{
    let path = p.join('tasks', taskNumber.toString());

    if (!fs.existsSync(path))
    {
        throw new Error("Task " + taskNumber + " not found!");
    }

    let task = { task_md: null, solution_md: null, meta: null };

    task.task_md =      readFile(p.join(path, 'task.md'));
    task.solution_md =  readFile(p.join(path, 'solution.md'));
    task.meta =         JSON.parse(readFile(p.join(path, 'meta.json')));

    if (fs.existsSync(p.join(path, 'hint.md')))
    {
        task.hint_md =  readFile(p.join(path, 'hint.md'));
    }

    return task;
}

function setupShowdown()
{
    showdown.setOption('literalMidWordUnderscores', true);
}

function getTask(taskNumber, removeMd = true)
{
    let srcTask = getSrcTask(taskNumber);

    setupShowdown();

    let converter = new showdown.Converter();

    srcTask.task_html =     converter.makeHtml(srcTask.task_md);
    srcTask.solution_html = converter.makeHtml(srcTask.solution_md);

    if (srcTask.hint_md)
    {
        srcTask.hint_html = converter.makeHtml(srcTask.hint_md);
    }

    if (removeMd)
    {
        delete srcTask.task_md;
        delete srcTask.solution_md;
        delete srcTask.hint_md;
    }

    return srcTask;
}

function saveTaskPreview(taskNumber, preview)
{
    writeFile(p.join('out', 'tasks', taskNumber.toString(), 'preview.json'), JSON.stringify(preview));
}

function getPartials()
{
    let partials = {};
    
    fs.readdirSync(p.join('src', '_partials')).forEach((filename, i) =>
    {
        let partialName = filename.replace('.mustache', '');
        let partialContent = fs.readFileSync(p.join('src', '_partials', filename), { encoding: 'utf-8' });

        partials[partialName] = partialContent;
    });

    return partials;
}

function getHtml(templateName, view, partials = null)
{
    if (!partials)
    {
        partials = getPartials();
    }

    let path = p.join('src', '_templates', templateName, `${templateName}`);
    let template = readFile(`${path}.mustache`);

    view = Object.assign(JSON.parse(readFile(`${path}.json`)), view);

    return mustache.render(template, view, partials);
}

function genAll(devMode = false)
{
    let DATA = getIterateTasksData(devMode);
    let solvedArr = Object.keys(DATA.hash);
    let partials = getPartials();
    let toc = JSON.parse(readFile('toc.json'));

    // Saving CNAME
    {
        writeFile(
            p.join('out', 'CNAME'),
            'dodem.ru'
        );
    }

    // Saving sitemap.xml
    {
        let template = readFile(p.join('src', 'sitemap.xml'));

        writeFile(
            p.join('out', 'sitemap.xml'),
            mustache.render(template, { tasks: solvedArr })
        );
    }

    // Saving TOC
    {
        writeFile(
            p.join('out', 'scripts', 'toc.js'),
            `var TOC = ${JSON.stringify(toc)};`
        );
    }

    // Saving hash
    {
        writeFile(
            p.join('out', 'scripts', 'hash.js'),
            `var SOLVED = ${solvedArr.length}; var HASH = ${JSON.stringify(DATA.hash)};`
        );
    }

    // Saving index.html
    {
        writeFile(
            p.join('out', 'index.html'),
            getHtml('index', {}, partials)
        );
    }

    // Saving solvers.html
    {
        let view =
        {
            solvers: Object.values(DATA.solvers)
        }

        writeFile(
            p.join('out', 'solvers.html'),
            getHtml('solvers', view, partials)
        );
    }

    // Saving tasks
    {
        for (let i = 0; i < (devMode ? 2 : TASKS_NUM); i++)
        {
            if (typeof DATA.hash[i + 1] === 'undefined') continue;

            let task = getTask(solvedArr[i], false);
            let taskNumber = task.meta.task;

            saveTaskPreview(task.meta.task, { location: task.meta.location, taskHtml: task.task_html });

            let locationArr = (task.meta.location).split('.');

            let view =
            {
                title: `${taskNumber} | Демидович. Решения`,
                description: (task.task_md).replace(/(\r\n|\n|\r)/gm, "").replace('"', '').substring(0, 400),
                task: taskNumber,

                taskHtml: task.task_html,
                solutionHtml: task.solution_html,

                location:
                {
                    section: { 
                        id: locationArr[0], 
                        title: toc[locationArr[0]].title 
                    },

                    paragraph: {
                        id: locationArr[1], 
                        title: toc[locationArr[0]].paragraphs[locationArr[1] - 1]
                    }
                },

                solver: DATA.solvers[task.meta.solver],

                refs: task.meta.refs,

                nav: DATA.nav[taskNumber]
            }

            if (task.hint_html)
            {
                view.hintHtml = task.hint_html;
            }

            writeFile(
                p.join('out', 'tasks', taskNumber.toString(), 'index.html'),
                getHtml('task', view, partials)
            );
        }
    }
}



module.exports =
{
    genAll: genAll
}