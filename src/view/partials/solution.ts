import { BlockActionPane } from "./blockAction";
import { BlockAttr } from "./blockAttr";
import { BookPageInfo } from "./book";
import { BaseSolver } from "./solver";

export class SolutionAttr extends BlockAttr
{
    static PRETTY =     new SolutionAttr('pretty', 'Красивое', 'fas fa-gem', 'Красивое решение');

    static PREVIOUS =   new SolutionAttr('previous', 'Зависимость', 'fas fa-backward', 'В решении используются предыдущие задачи!');
    static NEXT =       new SolutionAttr('next', 'Зависимость', 'fas fa-forward', 'В решении используется будущий материал или следующие задачи!');
    
    static MASSIVE =    new SolutionAttr('massive', 'Громоздкое', 'fas fa-weight-hanging', 'Такие решения занимают много места, требуют многократного повторения рутинных действий.');
    static COMPLEX =    new SolutionAttr('complex', 'Составное', 'fas fa-cogs', 'Решение состоит из нескольких частей, которые могут не быть напрямую связаны друг с другом. Как правило, это решения сложных задач.');
    static PARTIAL =    new SolutionAttr('partial', 'Частичное', 'fas fa-adjust', 'Решена часть задачи или не все ее пункты.');

    static CHECK =      new SolutionAttr('check', 'Не проверено', 'fas fa-exclamation-triangle', 'Это решение не проверялось комиссией может содержать ошибки');

    constructor(nameId: string, nameLabel: string, icon: string, desc: string)
    {
        super(
            { id: 'solutionAttr', label: 'Атрибут' },
            { id: nameId, label: nameLabel },
            icon,
            desc
        );
    }
}

export class Solution
{
    solver: BaseSolver;

    hint:       BlockActionPane;
    solution:   BlockActionPane;

    attrs: SolutionAttr[];

    taskDeps: number[];
    helpDeps: BookPageInfo[];

    hasDeps = () => { return this.taskDeps.length > 0 || this.helpDeps.length > 0; }

    constructor()
    {
        this.hint =     new BlockActionPane('hint', 'fas fa-lightbulb', 'Указание');
        this.solution = new BlockActionPane('solution', 'fas fa-file-alt', 'Решение');
    }
}