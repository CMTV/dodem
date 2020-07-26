import { Const } from "./Const";
import { Chalk } from "./Chalk";
import { ITOCLocation } from "./TOC";
import { ILink } from "./Link";
import { Solution } from "./Solution";
import { Solver } from "./Solver";
import { UtilIO } from "./Util";
import { IProtoTaskInfo } from "./Proto";

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

export class Task
{
    id: number;

    plainDesc?: string;
    
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