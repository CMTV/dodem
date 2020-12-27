import { Renderer } from "../classes/Renderer"
import { toc } from "../classes/TOC";
import { Range, UtilIO } from "../classes/Util";
import { hash } from "../classes/Hash";
import { groupTasks } from "../classes/GroupTasks";
import { BookRef } from "../classes/BookRef";

export function buildToc(devMode: boolean)
{
    let tocOut = toc.getOutToc();

    //
    // Rendering TOC tasks pages
    //

    tocOut.forEach((chapter:any) =>
    {
        chapter.paragraphs.forEach((paragraph: any) =>
        {
            renderTOCTasks(paragraph.link, paragraph.title, new Range(paragraph.range));

            paragraph.sections.forEach((section: any) =>
            {
                renderTOCTasks(section.link, section.title, new Range(section.range));
            });
        });
    });

    //
    // Rendering whole TOC page
    //

    let SEO =
    {
        title: 'Оглавление',
        desc: 'Удобная навигация по задачнику Демидовича. Все задачи разбиты на главы, параграфы и тематические разделы.',
        canonical: 'toc',
        ogImg: 'site/graphics/og/toc.png'
    }

    Renderer.renderPage('toc', SEO, 'site/_layout/toc.pug', 'out/toc/index.html', { toc: tocOut });
}

function renderTOCTasks(link: string, title: string, range: Range)
{
    let bookRefs = BookRef.getTocBookRefs(link.replace('/toc/', ''), `Building '${link}' TOC tasks page.`);

    if (range.start > hash.getSolved()[hash.getSolved().length - 1])
        return;

    let tasks: {[taskNum: number]: string} = {};
    let shouldRender = false;

    range.iterate((current, i) =>
    {
        if (!hash.checkSolved(current))
            return;
        
        shouldRender = true;
        tasks[current] = JSON.parse(UtilIO.fRead(`out/tasks/${current}/preview.json`))['task'];
    });

    if (!shouldRender) return;

    let currentRange: Range = null;

    let data: any =
    {
        title: title,
        bookRefs: bookRefs,
        tasksGroups: []
    };

    Object.keys(tasks).forEach((taskNum) =>
    {
        let gRange = groupTasks.getGroupRange(+taskNum);

        if (gRange === null)
        {
            data.tasksGroups.push({ num: taskNum, task: tasks[+taskNum] });
            return;
        }

        if (currentRange === null || !currentRange.equals(gRange))
        {
            currentRange = gRange;
            data.tasksGroups.push({
                isGroup: true,
                groupTask: groupTasks.getGroupTask(currentRange),
                tasks: [ { num: taskNum, task: tasks[+taskNum] } ]
            });

            return;
        }

        data.tasksGroups[data.tasksGroups.length - 1].tasks.push({ num: taskNum, task: tasks[+taskNum] });
    });

    let SEOTitle = title.replace(/<(.|\n)*?>/g, '');

    let SEO =
    {
        title: SEOTitle,
        desc: `Все задачи по теме "${SEOTitle}" из задачника Демидовича с подробными решениями.`,
        canonical: link.substr(1),
        ogImg: 'site/graphics/og/toc.png'
    }

    Renderer.renderPage('tocTasks', SEO, 'site/_layout/tocTasks.pug', `out/${link}/index.html`, { data: data });
}