import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { GroupTask, Task, TaskTocItem, TocItemType } from "src/db/Entity";
import { Assets } from "src/translator/Assets";
import { Translator } from "src/translator/Translator";
import { Range } from "src/util/Range";
import { PageOgImg } from "src/view/pages/Page";
import { GroupContentItem, TaskContentItem, TaskTocSingle as Page } from "src/view/pages/TaskTocSingle";
import { LocationPart } from "src/view/partials/location";
import { Difficulty, TaskAttr } from "src/view/partials/task";

export class Page_TaskTocSingle extends Process
{
    processName() { return 'Сборка отдельных страниц оглавления задач'; }

    process()
    {
        let paragraphs = DB.select.taskTocItems(TocItemType.Paragraph);
        paragraphs.forEach(paragraph => this.makePage(paragraph));

        let topics = DB.select.taskTocItems(TocItemType.Topic);
        topics.forEach(topic => this.makePage(topic));
    }

    makePage(taskTocItem: TaskTocItem)
    {
        let range = new Range(taskTocItem.taskStart, taskTocItem.taskEnd);

        if (DB.db.prepare(`SELECT COUNT(*) count FROM task WHERE task_id >= ${range.start} AND task_id <= ${range.end}`).get().count === 0)
            return;

        let page = new Page;

        page.seo.title =    `Задачи: ${taskTocItem.title}`;
        page.seo.desc =     `Все задачи по теме "${taskTocItem.title}" из задачника Демидовича с подробными решениями.`;

        page.ogImg = new PageOgImg(`З: ${taskTocItem.title}`);

        page.locId = taskTocItem.tocTaskId;
        this.getLocParts(taskTocItem).forEach(part => page.location.parts.push(part));

        page.contentItems = this.getContentItems(range);

        page.compile();
    }

    getLocParts(taskTocItem: TaskTocItem): LocationPart[]
    {
        let partIds = taskTocItem.tocTaskId.split('/');
        let parts = [];

        let chapterId = partIds[0];
        let chapter = new LocationPart(null, chapterId + '. ' + DB.select.taskTocTitle(chapterId), chapterId, null, false);
        parts.push(chapter);

        let paragraphId = chapterId + '/' + partIds[1];
        let paragraph = new LocationPart('/tasks/' + paragraphId, '§' + partIds[1] + '. ' + DB.select.taskTocTitle(paragraphId), '§' + partIds[1], null, false);
        parts.push(paragraph);

        if (partIds.length === 3)
            parts.push(new LocationPart('/tasks/' + taskTocItem.tocTaskId, taskTocItem.title, null, null, false));

        return parts;
    }

    getContentItems(range: Range): (TaskContentItem|GroupContentItem)[]
    {
        let rawItemsObj = {};

        let groupTasks = DB.select.groupTasks(range.start, range.end);
        groupTasks.forEach(groupTask => groupTask.task = Translator.renderMath(groupTask.task));

        range.iterate(taskNum =>
        {
            let task = DB.select.task(taskNum);
            
            if (!task) return;

            /* */ Translator.MUSTACHE.assets = Assets.task(taskNum);
            task.task = Translator.renderAll(task.task);

            let isFree = true;
            groupTasks.forEach(groupTask =>
            {
                if (!(groupTask.taskStart <= taskNum && taskNum <= groupTask.taskEnd))
                    return;

                if (!(groupTask.taskStart in rawItemsObj))
                    rawItemsObj[groupTask.taskStart] = [groupTask];

                rawItemsObj[groupTask.taskStart].push(task);
                isFree = false;
            });
            
            if  (isFree)
                rawItemsObj[taskNum] = task;
        });

        let contentItems = [];
        let orderedItems = Object.keys(rawItemsObj).map(key => +key).sort((a, b) => a - b);

        orderedItems.forEach(taskNum =>
        {
            let rawItem = rawItemsObj[taskNum];

            if (!Array.isArray(rawItem))
                contentItems.push(this.toContentItemTask(rawItem));
            else
            {
                let rawGroup = rawItem.shift() as GroupTask;
                let group = new GroupContentItem;
                group.groupTask = rawGroup.task;
                rawItem.forEach(rawTask => group.tasks.push(this.toContentItemTask(rawTask)));

                contentItems.push(group);
            }
        });

        return contentItems;
    }

    toContentItemTask(dbTask: Task): TaskContentItem
    {
        let task = new TaskContentItem(dbTask.taskId);

        task.task = dbTask.task;
        task.difficulty = Difficulty.get('difficulty', dbTask.difficulty);
        task.attrs = dbTask.attrs.map(attr => TaskAttr.get('taskAttr', attr));

        return task;
    }
}