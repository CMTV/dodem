import { Constant } from "src/util/Constant";
import { Page, PageOgImg } from "./Page";

export class Index extends Page
{
    pageName = 'index';

    lastUpdate: string;

    progressPercent: string;
    progressParts: ProgressPart[];

    helpNum: number;
    solvedNum: number;
    solverNum: number;

    setupProgress(solvedArr: number[])
    {
        this.solvedNum = solvedArr.length;
        this.progressPercent = ((solvedArr.length / Constant.TASK_NUM) * 100).toFixed(2);
        this.setupProgressParts(solvedArr);
    }

    setupProgressParts(solvedArr: number[])
    {
        let progress: ProgressPart[] = [];
        let solved = true;

        let group = [];

        for (let i = 1; i <= Constant.TASK_NUM; i++)
        {
            let currentSolved = solvedArr.includes(i);

            if (currentSolved !== solved)
                switchGroup();

            group.push(i);

            if (i === Constant.TASK_NUM)
                switchGroup();
        }

        function switchGroup()
        {
            if (group.length !== 0)
                progress.push(new ProgressPart(solved, group));
        
            solved = !solved;
            group = [];
        }

        this.progressParts = progress;
    }

    constructor()
    {
        super();

        this.seo.title = 'Демидович. Математический анализ для всех';
        this.seo.fullTitle = true;
        this.seo.desc = 'Проект Демидович — справочник по математическому анализу и задачник с подробными и понятными решениями. Качественные учебные материалы по высшей математике для всех.';
    }

    dest() { return 'index.html'; }
}

class ProgressPart
{
    solved: boolean;
    start: number;
    end: number;
    frac: number;

    constructor(solved: boolean, group: number[])
    {
        this.solved = solved;

        this.start = group[0];
        this.end = group[group.length - 1];
        this.frac = (this.end - this.start + 1) / Constant.TASK_NUM;
    }

    getTitle()
    {
        if (!this.solved)
            return null;
        
        if (this.start === this.end)
            return 'Задача ' + this.start;

        return `Задачи с ${this.start} по ${this.end}`;
    }
}