import { Const } from './Const';
import { UtilIO } from './Util';
import { Task } from './Task';

class Hash
{
    private hash: any = {};
    private solvedArr: number[] = null;
    private fractions: number[] = null;

    constructor()
    {
        this.buildHash();
    }

    buildHash()
    {
        this.hash = {};

        for (let i = 1; i <= Const.TASKS_NUM; i++)
        {
            // DEV MODE ONLY
            if ('isDev' in global && i >= 3)
                break;
            //

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

    getSolvedFractions(): number[]
    {
        if (this.fractions !== null)
            return this.fractions;

        let fractions: number[] = [];

        let pState = false;
        let tI = 0;

        for (let i = 1; i <= Const.TASKS_NUM; i++)
        {
            let cState = this.checkSolved(i);
            let shouldPush = i === Const.TASKS_NUM;

            if (i === 1) pState = cState;

            if (cState === pState) tI++;
            else shouldPush = true;

            if (shouldPush)
            {
                fractions.push((pState ? 1 : -1) * (tI / Const.TASKS_NUM));
                tI = 1;
            }

            pState = cState;
        }

        this.fractions = fractions;

        return fractions;
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