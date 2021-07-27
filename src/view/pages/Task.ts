import { LocationPart } from "../partials/location";
import { Solution } from "../partials/solution";
import { Task as PartialTask } from "../partials/task";
import { Page } from "./Page";

export class Task extends Page
{
    pageName = 'task';
    hasScript = true;

    task: PartialTask;
    solutions: Solution[];

    nav: {
        previous?: number,
        next?: number
    }

    constructor()
    {
        super();
        this.location.parts.push(LocationPart.TASKS);
    }

    dest() { return `tasks/${this.task.num}/index.html`;}
}
