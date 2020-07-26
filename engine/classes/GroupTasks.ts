import { UtilIO, Range } from "./Util";
import { Translator } from "./Translator";

class GroupTasks
{
    groups: {[key: string]: number} = {};

    constructor()
    {
        UtilIO.dirArr('data/groupTasks').forEach((rangeStr) =>
        {
            let splitted = rangeStr.split('-');
            this.groups[splitted[0]] = +splitted[1];
        });
    }

    getGroupRange(taskNum: number)
    {
        let starts = Object.keys(this.groups).reverse();
        let i = 0;

        while(+starts[i] > taskNum) i++;

        if (!(taskNum <= this.groups[starts[i]])) return null;
        
        return new Range([starts[i], this.groups[starts[i]]]);
    }

    getGroupTask(range: Range): string
    {
        return Translator.renderSimple(UtilIO.fRead(`data/groupTasks/${range.start}-${range.end}/task.md`));
    }

    getAll(taskNum: number): { range: string, task: string }
    {
        let range = this.getGroupRange(taskNum);

        if (range === null) return null;

        let task = this.getGroupTask(range);

        return {
            range: range.toString(),
            task: task
        }
    }
}

export let groupTasks = new GroupTasks();