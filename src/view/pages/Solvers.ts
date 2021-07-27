import { LocationPart } from "../partials/location";
import { FullSolver } from "../partials/solver";
import { Page } from "./Page";

export class Solvers extends Page
{
    pageName = 'solvers';
    hasScript = true;

    solvers: FullSolver[];

    constructor()
    {
        super();

        this.seo.title =    'Решатели';
        this.seo.desc =     'Решатели — люди, которые предложили свои решения для задач из задачника.';

        this.location.parts.push(LocationPart.SOLVERS);
        this.location.accentLast = true;
    }

    dest() { return 'solvers/index.html'; }
}