import { Task } from "src/view/pages/Task";
import { LocationPart } from "src/view/partials/location";
import { Solution, SolutionAttr } from "src/view/partials/solution";
import { Difficulty, GroupTask, Task as PartialTask, TaskAttr } from "src/view/partials/task";
import { Process } from "@cmtv/processes";
import { PageSEO } from "src/view/pages/Page";
import { BaseSolver } from "src/view/partials/solver";

export class Test_TaskPage extends Process
{
    taskPage: Task;

    processName() { return 'Сборка тестовой страницы задачи'; }

    process()
    {
        this.prepareTestData();
        this.taskPage.compile();
    }

    prepareTestData()
    {
        this.taskPage = new Task;

        this.prepareLocation().forEach(locPart => this.taskPage.location.parts.push(locPart));

        this.taskPage.task = this.prepareTask();
        this.taskPage.solutions = this.prepareSolutions();

        this.taskPage.nav = {
            previous: 3,
            next: 399
        }

        this.taskPage.seo = this.prepareSEO();
    }

    prepareSEO()
    {
        let seo = new PageSEO;
        seo.title = 'Задача 4224';
        seo.desc = 'Описание, которое мы будем использовать для SEO целей!';
        seo.keywords = ['говно', 'моча', 'давалка'];

        return seo;
    }

    prepareLocation()
    {
        let chapter =   new LocationPart(null, 'I Введение в анализ', 'I', null, false);
        let paragraph = new LocationPart(null, '§2 Теория последовательностей', '§2', null, false);
        let topic =     new LocationPart(null, 'Свойства подпоследовательностей', null, null, false);
        let task =      new LocationPart(null, 'Задача 4224', null, null, false);

        return [chapter, paragraph, topic, task];
    }

    prepareTask()
    {
        let task = new PartialTask();

        task.num = 4424;
        
        task.groupTask = new GroupTask('3-445', 'Содержимое общего задания. Дети, будьте внимательны!');
        task.task = 'Это условие задачи 4424! YAHOO! Хотя нет, его ведь уже закрыли. Печаль получается!';

        task.hint.content =     'Это указание от самого Демидовича! Век живи, век учись!';
        task.answer.content =   'Это прямой ответ. Иногда он есть даже в самом задачнике!';
        task.note.content =     'Примечание. Какие-то пометки от меня. Важная штука!';

        task.difficulty = Difficulty.HARD;
        task.attrs = [TaskAttr.PRETTY, TaskAttr.TRAINING];

        return task;
    }

    prepareSolutions()
    {
        let solution1 = new Solution();
        solution1.solver = new BaseSolver('CMTV', 'Петр Радько');
        solution1.hint.content = 'А вот это указание 1';
        solution1.solution.content = 'Это наше решение 1';
        solution1.attrs = [SolutionAttr.MASSIVE, SolutionAttr.NEXT];

        let solution2 = new Solution();
        solution2.solver = new BaseSolver('nnagibin', 'Николай Нагибин');
        solution2.solution.content = 'Это наше решение 2, но уже без указания!';

        let solution3 = new Solution();
        solution3.solver = new BaseSolver('iiilll_llliii', 'Семен Вдовыкин');
        solution3.hint.content = 'А вот это указание 3';
        solution3.solution.content = 'Это наше решение 3';
        solution3.attrs = [SolutionAttr.PRETTY];

        return [solution1, solution2, solution3];
    }
}