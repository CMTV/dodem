import { Process } from "@cmtv/processes";
import { GroupContentItem, TaskContentItem, TaskTocSingle } from "src/view/pages/TaskTocSingle";
import { LocationPart } from "src/view/partials/location";
import { Difficulty, TaskAttr } from "src/view/partials/task";

export class Test_TaskTocSingle extends Process
{
    processName() { return 'Сборка тестовых задач конкретной темы'; }

    process()
    {
        let page = new TaskTocSingle;
        
        page.seo.title = 'Задачи: Название темы';
        page.seo.desc = 'Все задачи по теме "..." из задачника Демидовича с подробными решениями.';

        this.prepareLocation().forEach(locPart => page.location.parts.push(locPart));

        page.locId = 'page1';
        page.contentItems = this.prepareContentItems();

        page.compile();
    }

    prepareLocation()
    {
        let chapter =   new LocationPart(null, 'I Введение в анализ', 'I', null, false);
        let paragraph = new LocationPart(null, '§2 Теория последовательностей', '§2', null, false);
        let topic =     new LocationPart(null, 'Свойства подпоследовательностей', null, null, false);

        return [chapter, paragraph, topic];
    }

    prepareContentItems()
    {
        let contentItems = [];
        let tasks = this.prepareTasks();

        let group = new GroupContentItem();
        group.groupTask = 'Это первое групповое условие!';
        group.tasks = [tasks[0], tasks[1]];

        contentItems.push(tasks[0]);
        contentItems.push(group);
        contentItems.push(tasks[1]);
        contentItems.push(group);
        contentItems.push(tasks[2]);

        return contentItems;
    }

    prepareTasks()
    {
        let tasks = [];

        let task1 = new TaskContentItem(12);
        task1.task = 'Условие первой задачи!!1';
        task1.difficulty = Difficulty.NORMAL;
        tasks.push(task1);

        let task2 = new TaskContentItem(322);
        task2.task = 'Очень интересное условие второй задачи!';
        task2.difficulty = Difficulty.IMPOSSIBLE;
        task2.attrs = [TaskAttr.IMPORTANT, TaskAttr.PRETTY];
        tasks.push(task2);

        let task3 = new TaskContentItem(1080);
        task3.task = 'Ну вот это все. Больше никак не будет.';
        task3.difficulty = Difficulty.EASY;
        tasks.push(task3);

        return tasks;
    }
}