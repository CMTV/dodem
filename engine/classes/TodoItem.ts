import { Solver } from "./Solver";

interface ITodoItemData
{
    id: string,
    title: string,
    isProto?: boolean,
    solverId?: string,
    desc?: string
}

export class TodoItem
{
    id: string;
    title: string;
    isProto: boolean = false;
    solver: Solver = null;
    desc: string = null;

    constructor(todoItemData: ITodoItemData)
    {
        this.id = todoItemData.id;
        this.title = todoItemData.title;
        
        if (todoItemData.isProto !== undefined)
            this.isProto = todoItemData.isProto;

        if (todoItemData.desc !== undefined)
            this.desc = todoItemData.desc;

        if (todoItemData.solverId !== undefined)
            this.solver = new Solver(todoItemData.solverId);
    }
}