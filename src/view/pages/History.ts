import { LocationPart } from "../partials/location";
import { Page } from "./Page";

export class History extends Page
{
    pageName = 'history'
    hasScript = true;
    
    historyBlocks: HistoryBlock[] = [];

    constructor()
    {
        super();

        this.seo.title =    'Хронология';
        this.seo.desc =     'Новости о добавленной теории, решенных задачах и других важных событиях проекта.';

        this.location.parts.push(LocationPart.HISTORY);
        this.location.accentLast = true;
    }

    dest() { return 'history/index.html'; }
}

export class HistoryBlock
{
    date: string;
    content: string;

    taskData: AddEditCounter;
    bookData: AddEditCounter;

    hasStats = () =>
    {
        return this.taskData.hasAny() || this.bookData.hasAny();
    }

    getTitleDate = () =>
    {
        let dateArr = this.date.split('.');
        let dateObj = new Date(+dateArr[0], (+dateArr[1] - 1), +dateArr[2]);

        return dateObj.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    }
}

export class AddEditCounter
{
    add: number = 0;
    edit: number = 0;

    constructor(add: number, edit: number)
    {
        if (add)    this.add = add;
        if (edit)   this.edit = edit;
    }

    hasAny()
    {
        return !(this.add === 0 && this.edit === 0)
    }
}