import { Process } from "@cmtv/processes";
import { DB } from "src/db/Db";
import { GroupTask } from "src/db/Entity";
import { Translator } from "src/translator/Translator";
import { IO } from "src/util/IO";
import { Range } from "src/util/Range";

export class FillGroupTasks extends Process
{
    processName() { return 'Добавление условий для групп задач'; }

    process()
    {
        let groups = [];

        IO.readDir('data/tasks/groups').forEach(groupFile =>
        {
            let group = new GroupTask;
            let range = new Range(groupFile.replace('.md', ''));

            group.taskStart =   range.start;
            group.taskEnd =     range.end;
            group.task =        IO.readFile('data/tasks/groups/' + groupFile);
            
            groups.push(group);
        });

        DB.transaction(() => { groups.forEach(group => DB.insert.groupTask(group)); });
    }
}