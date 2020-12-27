import { Const } from "./Const";
import { Chalk } from "./Chalk";
import { ITOCLocation, TOC } from "./TOC";
import { ILink } from "./Link";
import { Solution } from "./Solution";
import { Solver } from "./Solver";
import { UtilIO, UtilMd } from "./Util";
import { IProtoTaskInfo } from "./Proto";
import { BookRef } from "./BookRef";

export const RESERVED_FILENAMES = {
    TASK:   'task.md',
    HINT:   'hint.md',
    ANSWER: 'answer.md',
    FAQ:    'faq.md',
    LINKS:  'links.json'
};

export interface ITaskNav
{
    next: number|null;
    prev: number|null;
}

export interface IFAQItem
{
    title: string;
    author: string;
    src: string;
    content: string;
}

interface TaskMeta
{
    plain?: string;
    bookRefs?: string[];
}

export class Task
{
    id: number;

    taskMeta: TaskMeta;
    
    groupTask: { range: string, task: string };
    task: string;
    hint: string;
    answer: string;

    solutions: Solution[];

    faq: IFAQItem[];

    location: ITOCLocation;
    nav: ITaskNav;
    links: ILink[];
    protos: IProtoTaskInfo[];

    bookRefs: BookRef[] = [];

    constructor(taskNum: number)
    {
        this.id = taskNum;
        this.taskMeta = UtilMd.getMeta(UtilIO.fRead(Task.getRelPath(this.id, 'task.md')));
    }

    _fillBookRefs()
    {
        let refIds: string[] = [];

        if ('bookRefs' in this.taskMeta)
            refIds = this.taskMeta.bookRefs;

        refIds = refIds.concat(BookRef.getTocBookRefIds(TOC.toStringLocation(this.location)));

        this.bookRefs = BookRef.getBookRefs(refIds, `Constructing book refs for task #${this.id}.`);
    }

    // STATIC

    static getSolvers(task: number): Solver[]
    {
        let out: Solver[] = [];

        UtilIO.dirArr(Task.getDirPath(task)).forEach((solverId) =>
        {
            out.push(new Solver(solverId));
        });

        return out;
    }

    static getCluster(task: number): string
    {
        if (task < 1 || task > Const.TASKS_NUM) { Chalk.error(`Incorrect '${task}' task number! Must be within 1-4462 interval!`); }

        for (let clusterEnd = 100; clusterEnd <= 4500; clusterEnd += 100)
        {
            if (task <= clusterEnd)
            {
                return clusterEnd - 99 + '-' + clusterEnd;
            }
        }
    }

    static getDirPath(task: number): string
    {
        return `data/tasks/${this.getCluster(task)}/${task}`;
    }

    static getRelPath(task: number, relPath: string): string
    {
        return this.getDirPath(task) + '/' + relPath;
    }

    static getSolutionNum(task: number, solverId: string): number
    {
        if (UtilIO.fExists(this.getDirPath(task) + `/${solverId}/explanation.md`))
            return 1;

        return UtilIO.dirArr(this.getDirPath(task) + `/${solverId}`).length;
    }
}