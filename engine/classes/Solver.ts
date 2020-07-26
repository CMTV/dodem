import { Chalk } from "./Chalk";
import { UtilIO } from "./Util";

const solvers = require('../../data/solvers');

export interface IDataSolver
{
    name: string;
    link: string;
    slogan: string;
}

export class Solver
{
    id: string;
    name: string;
    avatar: string = null;

    link: string = null;
    slogan: string = null;

    constructor(id: string)
    {
        this.id = id;

        if (!(id in solvers))
            Chalk.error(`There is no solver with the following ID: "${id}"!`);

        let solverData: IDataSolver = solvers[id];

        this.name = solverData.name;

        if (solverData.link)
            this.link = solverData.link;
        
        if (solverData.slogan)
            this.slogan = solverData.slogan;

        if (UtilIO.fExists(`site/graphics/solvers/${id}.png`))
            this.avatar = `/site/graphics/solvers/${id}.png`;
    }

    // STATIC

    static iterate(callback: (solver: Solver) => any)
    {
        Object.keys(solvers).forEach((solverId) => callback(new Solver(solverId)));
    }
}

class SolverHash
{
    hash: { [solverId: string]: (number|string)[] } = {};
    hashUnique: { [solverId: string]: number } = {};

    addRecord(solverId: string, taskNum: number|string)
    {
        if (!(solverId in this.hash))
            this.hash[solverId] = [];

        this.hash[solverId].push(taskNum);
    }

    addUnique(solverId: string)
    {
        if (!(solverId in this.hashUnique))
            this.hashUnique[solverId] = 0;
        
        this.hashUnique[solverId]++;
    }

    getSolvedArr(solverId: string): (number|string)[]
    {
        if (!(solverId in this.hash))
            return [];

        return this.hash[solverId];
    }

    getSolvedUnique(solverId: string): number
    {
        if (!(solverId in this.hashUnique))
            return 0;

        return this.hashUnique[solverId];
    }
}

export let solverHash = new SolverHash();