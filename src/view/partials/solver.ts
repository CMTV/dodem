import { DB } from "src/db/Db";
import { IO } from "src/util/IO";
import { BlockActionPane } from "./blockAction";

export class BaseSolver
{
    id: string;
    name: string;
    hasAvatar: boolean;
    
    constructor(id: string, name: string)
    {
        this.id = id;
        this.name = name;
        this.hasAvatar = IO.exists(`site/graphics/solvers/${id}.png`);
    }

    avatar() { return `/site/graphics/solvers/${this.id}.png`; }

    static fromDb(solverId: string): BaseSolver
    {
        let dbSolver = DB.select.solver(solverId);
        return new BaseSolver(dbSolver.solverId, dbSolver.name ? dbSolver.name : dbSolver.solverId);
    }
}

export class FullSolver extends BaseSolver
{
    slogan: string;
    link: string;
    tasks: number[];

    bio: BlockActionPane;

    constructor(id: string, name: string)
    {
        super(id, name);
        this.bio = new BlockActionPane('bio', 'fas fa-info', 'О решателе');
    }

    getOutTasks(): { taskNum: number, label: string }[] 
    {
        let out = [];
        let map = {};

        this.tasks.forEach(task =>
        {
            if (!(task in map))
                map[task] = 0;
            
            map[task]++;
        });

        Object.keys(map).sort((a, b) => +a - +b).forEach(taskNum =>
        {
            for (let i = 1; i <= map[taskNum]; i++)
            {
                out.push({
                    taskNum: taskNum,
                    label: taskNum + (map[taskNum] > 1 ? '.' + i : '')
                });
            }
        });

        return out;
    }
}