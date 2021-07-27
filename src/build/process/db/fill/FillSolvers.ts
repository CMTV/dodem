import { Process } from "@cmtv/processes";
import { DB } from 'src/db/Db';
import { Solver } from 'src/db/Entity';
import { Translator } from "src/translator/Translator";
import { IO } from "src/util/IO";

export class FillSolvers extends Process
{
    processName() { return 'Добавление решателей'; }

    process()
    {
        let solvers = [];

        IO.readDir('data/tasks/solvers').forEach(
            solverId => solvers.push(this.handleSolver(solverId))
        );

        DB.transaction(() => { solvers.forEach(solver => DB.insert.solver(solver)); });
    }

    handleSolver(solverId: string): Solver
    {
        let solver = new Solver(solverId);
        let solverDir = `data/tasks/solvers/${solverId}/`;

        if (IO.exists(solverDir + 'info.json'))
            solver = {...solver, ...JSON.parse(IO.readFile(solverDir + 'info.json'))}

        if (IO.exists(solverDir + 'bio.md'))
            solver.bio = Translator.renderAll(IO.readFile(solverDir + 'bio.md')); // TODO: TRANSLATOR

        return solver;
    }
}