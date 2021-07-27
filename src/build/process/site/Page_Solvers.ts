import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Solvers as Page } from "src/view/pages/Solvers";
import { FullSolver } from "src/view/partials/solver";

export class Page_Solvers extends Process
{
    processName() { return 'Сборка страницы с решателями'; }

    process()
    {
        let page = new Page;
        page.solvers = [];

        DB.select.solvers().forEach(solver =>
        {
            let viewSolver = new FullSolver(solver.solverId, solver.name ? solver.name : solver.solverId);

            viewSolver.slogan =         solver.slogan;
            viewSolver.bio.content =    solver.bio;
            viewSolver.link =           solver.link;
            viewSolver.tasks =          DB.select.solverTaskIds(solver.solverId);

            page.solvers.push(viewSolver);
        });

        page.solvers.sort((a,b) => b.tasks.length - a.tasks.length);

        page.compile();
    }
}