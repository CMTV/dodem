import { Solver, solverHash } from "../classes/Solver";
import { Renderer } from "../classes/Renderer";

export function buildSolvers()
{
    let solvers: any = [];

    Solver.iterate((solver) =>
    {
        solvers.push(
            { ...solver, solvedArr: solverHash.getSolvedArr(solver.id), solvedTasks: solverHash.getSolvedUnique(solver.id) }
        );
    });

    renderSolvers(solvers);
}

function renderSolvers(solvers: any)
{
    let SEO =
    {
        title: 'Решатели',
        desc: 'Решатели — люди, которые предложили свои решения для задач из задачника.',
        canonical: 'solvers'
    }

    Renderer.renderPage('solvers', SEO, 'site/_layout/solvers.pug', 'out/solvers/index.html', { solvers: solvers });
}