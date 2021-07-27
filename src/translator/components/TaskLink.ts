import { Component } from "./Component";

class TaskLinkView
{
    taskNum: number;

    constructor(taskNum: string)
    {
        this.taskNum = +taskNum;
    }
}

export class TaskLink extends Component<TaskLinkView>
{
    name = 'taskLink';
    regexp = /<t:(\d+)>/gm;

    render(str: string): string
    {
        return str.replace(this.regexp, (match, taskNum) => this.getComponentHtml(new TaskLinkView(taskNum)));
    }
}