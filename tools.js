const fs =          require('fs');
const p =           require('path');
const translator =  require('./translator');
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

            if (!('solver' in meta) && !('solvers' in meta))
            {
                throw new Error("'Solvers' iterator error on task " + i + ". Missing 'solver' or 'solvers' properties!");
            }

            let solvers = [];

            if ('solver' in meta)
            {
                solvers.push(meta.solver);
            }
            else
            {
                Object.keys(meta.solvers).forEach((solver) =>
                {
                    if (typeof meta.solvers[solver] === 'string')
                    {
                        solvers.push(solver)
                    }
                    else
                    {
                        solvers.push({ id: solver, num: meta.solvers[solver].length });
                    }
                })
                
            }

            solvers.forEach((solver) =>
            {
                if (typeof solver === 'string')
                {
                    if (solver in data)
                    {
                        data[solver].push({ num: i });
                    }
                    else
                    {
                        data[solver] = [{ num: i }];
                    }
                }
                else
                {
                    if (!solver.id in data)
                    {
                        data[solver.id] = [{ num: i, sub: 1 }];
                    }
                    else
                    {
                        data[solver.id].push({ num: i, sub: 1 });
                    }

                    for (let j = 2; j <= solver.num; j++)
                    {
                        data[solver.id].push({ num: i, sub: j });
                    }
                }
            });

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

    let task = { task_src: null, solutions_src: [], meta: null };

    task.task_src = readFile(p.join(path, 'task.html'));

    task.meta = JSON.parse(readFile(p.join(path, 'meta.json')));

    if ('solver' in task.meta)
    {
        task.solutions_src = [
            {
                solver: task.meta.solver,
                reason: null,
                data: readFile(p.join(path, 'solution.html'))
            }
        ];
    }
    else
    {
        Object.keys(task.meta.solvers).forEach((solver) =>
        {
            if (typeof task.meta.solvers[solver] === 'string')
            {
                task.solutions_src.push(
                    {
                        solver: solver,
                        reason: task.meta.solvers[solver],
                        data: readFile(p.join(path, `solution_${solver}.html`))
                    }
                );
            }
            else
            {
                task.meta.solvers[solver].forEach((reason, i) =>
                {
                    task.solutions_src.push(
                        {
                            solver: solver,
                            reason: reason,
                            data: readFile(p.join(path, `solution_${solver}_${i+1}.html`))
                        }
                    );
                });
            }
        });
    }

    if (fs.existsSync(p.join(path, 'hint.html')))
    {
        task.hint_src =  readFile(p.join(path, 'hint.html'));
    }

    return task;
}

function getTask(taskNumber, removeSrc = true)
{
    let srcTask = getSrcTask(taskNumber);

    let translators = ['paragraph'];

    srcTask.task_html = translator.translate(srcTask.task_src, translators);

    srcTask.solutions_html = srcTask.solutions_src;

    srcTask.solutions_html.forEach((solution, i) =>
    {
        srcTask.solutions_html[i].data = translator.translate(
            solution.data,
            translators
        );
    });

    if (srcTask.hint_src)
    {
        srcTask.hint_html = translator.translate(srcTask.hint_src, translators);
    }

    if (removeSrc)
    {
        delete srcTask.task_src;
        delete srcTask.solutions_src;
        delete srcTask.hint_src;
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

            let solutions = [];

            task.solutions_html.forEach((solution, j) =>
            {
                solution.solver = DATA.solvers[solution.solver];

                solutions.push(Object.assign({ index: j + 1 }, solution));
            });

            let isOneSolution = (solutions.length === 1);

            let view =
            {
                title: `${taskNumber} | Демидович. Решения`,
                description: (task.task_src).replace(/(\r\n|\n|\r)/gm, "").replace('"', '').substring(0, 400),
                task: taskNumber,

                taskHtml: task.task_html,

                isOneSolution: isOneSolution,
                solutions: solutions,

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