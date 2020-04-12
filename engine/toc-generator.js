const G =           require('./global');

const util =        require('./util');
const mdit =        require('./markdown');
const translator =  require('./translator');
const tools =       require('./tools');

function getTaskData(taskNumber)
{
    let taskData = {
        number: taskNumber,
        task: null,
        hint: null
    };

    // Getting Task

    let translators = ['isolateMath', 'protoScaner'];
    let path = `tasks/${taskNumber}/`;

    if (util.fExists(path + 'task.md'))
    {
        taskData.task = mdit.render(translator.translate(util.fRead(path + 'task.md'), translators));
    }
    else taskData.task = translator.translate(util.fRead(path + 'task.html'), translators);

    if (util.fExists(path + 'hint.md'))
    {
        taskData.hint = mdit.render(translator.translate(util.fRead(path + 'hint.md'), translators));
    }
    else if (util.fExists(path + 'hint.html')) taskData.hint = translator.translate(util.fRead(path + 'hint.html'), translators);
    
    //

    return taskData;
}

function createTocTasksPage(pageId, pageData, tasks)
{
    tasks.sort((a, b) => { return a-b; });

    let view = {
        site_root: pageData.siteRoot,
        title: pageData.title + ' | Демидович. Решения',
        description: `Все задачи по теме "${pageData.title}" из задачника Демидовича с подробными решениями.`,
        canonical_url: 'toc/' + pageId,

        preTitle: pageData.preTitle,
        pageTitle: pageData.title,
        hasTasks: !!tasks.length,
        tasks: tasks.map((taskNumber) => { return getTaskData(taskNumber); })
    };

    util.fWrite(`out/toc/${pageId}/index.html`, tools.genHtml('toc-tasks', view));
}

let paragraphsTasks = {};

function getTasksByLocation(location)
{
    let tasks = [];

    for (let i = 1; i <= G.TASKS_NUM; i++)
    {
        if (!util.fExists(`tasks/${i}`)) { continue; }

        let meta = JSON.parse(util.fRead(`tasks/${i}/meta.json`));

        if (meta.location === location)
            tasks.push(i);
    }

    paragraphsTasks[location] = { start: tasks[0], end: tasks[tasks.length - 1] };

    return tasks;
}

function getCustomTocs(location)
{
    let customTocs = [];

    //

    let customToc = JSON.parse(util.fRead('toc-custom.json'));

    Object.keys(customToc).forEach((_location) =>
    {
        Object.keys(customToc[_location]).forEach((tocItem) =>
        {
            if (location === _location)
                customTocs.push(Object.assign({ id: tocItem, link: location + "/" + tocItem }, customToc[_location][tocItem]));
        });
    });

    //

    return customTocs;
}

function getSitemapTocs()
{
    let tocs = [];

    //

    let toc = JSON.parse(util.fRead('toc.json'));

    Object.keys(toc).forEach((chapter) =>
    {
        for (let i = 0; i < toc[chapter].paragraphs.length; i++)
        {
            tocs.push(chapter + "." + (i+1));
        }
    });

    //

    let customToc = JSON.parse(util.fRead('toc-custom.json'));

    Object.keys(customToc).forEach((location) =>
    {
        Object.keys(customToc[location]).forEach((id) =>
        {
            tocs.push(location + "/" + id);
        });
    });

    //

    return tocs;
}

//
//
//

function createTocTasksPages()
{
    let tocJSON = JSON.parse(util.fRead('toc.json'));

    Object.keys(tocJSON).forEach((chapter) => 
    {
        tocJSON[chapter].paragraphs.forEach((paragraph, i) =>
        {
            let title = paragraph;
            let tasks = getTasksByLocation(`${chapter}.${i + 1}`);;

            createTocTasksPage(`${chapter}.${i + 1}`, { siteRoot: '../../', title: title }, tasks);
        });
    });
}

function createCustomTocTasksPages()
{
    let tocJSON = JSON.parse(util.fRead('toc-custom.json'));

    Object.keys(tocJSON).forEach((location) =>
    {
        Object.keys(tocJSON[location]).forEach((id) =>
        {
            let obj = tocJSON[location][id];

            let title = obj.title;
            let tasks = [];

            obj.tasks.forEach((task) =>
            {
                if (typeof task === 'number') { tasks.push(task); return; }

                let tStart = parseInt(task.split('-')[0]);
                let tEnd = parseInt(task.split('-')[1]);

                for (let i = tStart; i <= tEnd; i++) tasks.push(i);
            });

            let _tasks = [];
            for (let i = 0; i < tasks.length; i++)
            {
                if (util.fExists(`tasks/${tasks[i]}`)) _tasks.push(tasks[i]);
            }

            createTocTasksPage(`${location}/${id}`, { siteRoot: '../../../', title: title }, _tasks);
        });
    });
}

function createTocPage()
{
    let toc = JSON.parse(util.fRead('toc.json'));

    //

    let chapters = [];

    Object.keys(toc).forEach((chapter, cI) =>
    {
        let paragraphs = [];

        toc[chapter].paragraphs.forEach((paragraph, i) =>
        {
            let location = chapter + "." + (i+1);
            let customTocs = getCustomTocs(location);

            paragraphs.push(
                {
                    title: "§" + (i+1) + ". " + paragraph,
                    link: location,
                    hasCustom: !!customTocs.length,
                    custom: customTocs,
                    
                    tStart: paragraphsTasks[location].start,
                    tEnd: paragraphsTasks[location].end
                }
            );
        });

        chapters.push(
            {
                title: chapter + ". " + toc[chapter].title,
                paragraphs: paragraphs
            }
        );
    });

    //

    let view =
    {
        site_root: '../',
        chapters: chapters
    };

    util.fWrite(`out/toc/index.html`, tools.genHtml('toc', view));
}

//
//
//

module.exports =
{
    createTocTasksPages: createTocTasksPages,
    createCustomTocTasksPages: createCustomTocTasksPages,
    createTocPage: createTocPage,
    getSitemapTocs: getSitemapTocs
}