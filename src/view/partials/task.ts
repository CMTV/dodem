import { Range } from "src/util/Range";
import { BlockActionPane } from "./blockAction";
import { BlockAttr } from "./blockAttr";

export class Difficulty extends BlockAttr
{
    static EASY =       new Difficulty('easy', 'Легкая', 'far fa-laugh', 'Элементарно, Ватсон!');
    static NORMAL =     new Difficulty('normal', 'Нормальная', 'far fa-meh', 'Рядовая задача. Ничего невозможного.');
    static HARD =       new Difficulty('hard', 'Сложная', 'far fa-tired', 'Эта задача заставит вас попотеть.');
    static IMPOSSIBLE = new Difficulty('impossible', 'Невозможная', 'far fa-sad-cry', 'Бегите, глупцы!');

    constructor(nameId: string, nameLabel: string, icon: string, desc: string)
    {
        super(
            { id: 'difficulty', label: 'Сложность' },
            { id: nameId, label: nameLabel },
            icon,
            desc
        );
    }
}

export class TaskAttr extends BlockAttr
{
    static PRETTY =     new TaskAttr('pretty', 'Красивая', 'fas fa-gem', 'Очень красивая задача');
    static IMPORTANT =  new TaskAttr('important', 'Важная', 'fas fa-exclamation-circle', 'Эта задача очень важна!');
    static TRAINING =   new TaskAttr('training', 'Тренировочная', 'fas fa-dumbbell', 'Задача на отработку');

    constructor(nameId: string, nameLabel: string, icon: string, desc: string)
    {
        super(
            { id: 'taskAttr', label: 'Атрибут' },
            { id: nameId, label: nameLabel },
            icon,
            desc
        );
    }
}

export class GroupTask
{
    range: Range;
    task: string;

    constructor(range: Range|string, task: string)
    {
        this.range = (typeof range === 'string' ? new Range(range) : range);
        this.task = task;
    }
}

export class Task
{
    num: number;

    groupTask: GroupTask;
    task: string;

    hint:   BlockActionPane;
    answer: BlockActionPane;
    note:   BlockActionPane;

    difficulty: Difficulty;
    attrs: TaskAttr[];

    constructor()
    {
        this.hint =     new BlockActionPane('hint', 'fas fa-lightbulb', 'Указание');
        this.answer =   new BlockActionPane('answer', 'fas fa-check', 'Ответ');
        this.note =     new BlockActionPane('note', 'fas fa-star-of-life', 'Примечание');
    }
}