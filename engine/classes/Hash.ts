import { Const } from './Const';
import { UtilIO } from './Util';
import { Task } from './Task';

class Hash
{
    private hash: any = {};
    private solvedArr: number[] = null;

    constructor()
    {
        this.buildHash();
    }

    buildHash()
    {
        this.hash = {};

        for (let i = 1; i <= Const.TASKS_NUM; i++)
        {
            if (UtilIO.fExists(Task.getDirPath(i)))
                this.hash[i] = null;
        }
    }

    getHash(): any { return Object.assign(this.hash); }

    getSolved(): number[]
    {
        if (!this.solvedArr)
        {
            this.solvedArr = Object.keys(this.hash).map((taskStr) => { return parseInt(taskStr); });
        }

        return [...this.solvedArr];
    }

    checkSolved(task: number): boolean
    {
        return this.hash[task] !== undefined;
    }

    reset()
    {
        this.buildHash();
        this.solvedArr = null;
    }
}

export let hash = new Hash();