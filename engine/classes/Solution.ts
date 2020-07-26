import { Solver } from "./Solver";
import { ITag } from "./Tag";

export class Solution
{
    num: number;

    hint: string = null;
    explanation: string;

    solver: Solver;
    tags: ITag[];
}