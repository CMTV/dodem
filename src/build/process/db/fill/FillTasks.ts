import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Task } from "src/db/Entity";
import { IO } from "src/util/IO";
import { Md } from "src/util/Md";

export class FillTasks extends Process
{
    tasks: Task[] = [];

    processName() { return 'Добавление задач'; }

    process()
    {
        IO.readDir('data/tasks/list').forEach(
            taskNum => this.tasks.push(this.handleTask(taskNum))
        );

        DB.transaction(() => { this.tasks.forEach(task => DB.insert.task(task)); });
    }

    handleTask(taskNum: string): Task
    {
        let taskDir = `data/tasks/list/${taskNum}/`;
        
        let task = new Task;

        task.taskId = +taskNum;

        let parsedTask = Md.parse(IO.readFile(taskDir + 'task.md'));
        task = {...task, ...parsedTask.config};
        task.task = parsedTask.content;

        if (!task.difficulty)
            task.difficulty = 'normal';

        if (IO.exists(taskDir + 'taskSeo.txt'))
            task.taskSeo = IO.readFile(taskDir + 'taskSeo.txt');
        else
        {
            let groupTask = DB.select.groupTask(task.taskId);

            task.taskSeo = '';

            if (groupTask)
                task.taskSeo += groupTask.task + ' ';

            task.taskSeo += task.task;
            task.taskSeo = task.taskSeo.substr(0, 160);
        }

        if (IO.exists(taskDir + 'hint.md'))
            task.hint = IO.readFile(taskDir + 'hint.md');

        if (IO.exists(taskDir + 'answer.md'))
            task.answer = IO.readFile(taskDir + 'answer.md');

        if (IO.exists(taskDir + 'note.md'))
            task.note = IO.readFile(taskDir + 'note.md');

        return task;
    }
}