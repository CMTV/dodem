import { Page } from "./Page";
import { Difficulty, TaskAttr } from "../partials/task";
import { BlockActionLink } from "../partials/blockAction";
import { LocationPart } from "../partials/location";

export class TaskTocSingle extends Page
{
    pageName = 'taskTocSingle';

    locId: string;
    contentItems: ContentItem[];

    constructor()
    {
        super();
        this.location.parts.push(LocationPart.TASKS);
        this.location.accentLast = true;
    }

    dest() { return 'tasks/' + this.locId + '/index.html'; }
}

abstract class ContentItem
{
    abstract type: string;
}

export class TaskContentItem extends ContentItem
{
    type = 'task';

    num: number;
    task: string;
    goto: BlockActionLink;

    difficulty: Difficulty;
    attrs: TaskAttr[] = [];

    constructor(num: number)
    {
        super();
        this.num = num;
        this.goto = new BlockActionLink('goto', 'fas fa-arrow-right', 'К решению');
        this.goto.link = '/tasks/' + this.num;
    }
}

export class GroupContentItem extends ContentItem
{
    type = 'group';

    groupTask: string;
    tasks: TaskContentItem[] = [];
}