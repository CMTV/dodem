import { LocationPart } from "../partials/location";
import { Page, PageSEO } from "./Page";
import { Range } from "src/util/Range";

export class TaskToc extends Page
{
    pageName = 'taskToc';

    chapters: Chapter[];

    constructor()
    {
        super();

        let seo = new PageSEO;
        seo.title = 'Задачи';
        seo.desc = 'Удобная навигация по задачнику Демидовича. Все задачи разбиты на главы, параграфы и тематические разделы.';
        this.seo = seo;

        this.location.parts.push(LocationPart.TASKS);
        this.location.accentLast = true;
    }

    dest() { return 'tasks/index.html'; }
}

export class TaskTocItem
{
    id: string;
    title: string;
    taskRange: Range;
}

export class Chapter extends TaskTocItem
{
    paragraphs: Paragraph[];
}

export class Paragraph extends TaskTocItem
{
    topics: Topic[];
}

export class Topic extends TaskTocItem {}