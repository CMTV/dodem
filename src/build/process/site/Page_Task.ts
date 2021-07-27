import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Task } from "src/view/pages/Task";
import { Task as DbTask } from "src/db/Entity";
import { Task as PartialTask, Difficulty, GroupTask, TaskAttr } from "src/view/partials/task";
import { LocationPart } from "src/view/partials/location";
import { Range } from "src/util/Range";
import { Solution, SolutionAttr } from "src/view/partials/solution";
import { BaseSolver } from "src/view/partials/solver";
import { IO } from "src/util/IO";
import { Translator } from "src/translator/Translator";
import { Assets } from "src/translator/Assets";
import { BookPageInfo } from "src/view/partials/book";

export class Page_Task extends Process
{
    processName() { return 'Сборка страниц задач'; }

    process()
    {
        let taskNums = DB.select.taskNums();

        taskNums.forEach((taskNum, i) => 
        {
            /* */ this.stage = 'Задача ' + taskNum;
            
            let dbTask = DB.select.task(taskNum);

            let taskPage = new Task;

            taskPage.seo.title =    'Задача ' + taskNum;
            taskPage.seo.desc =     Translator.removeMathDelimiters(dbTask.taskSeo);

            this.getLocParts(taskNum).forEach(part => taskPage.location.parts.push(part));

            taskPage.task = this.getTask(dbTask);
            taskPage.solutions = this.getSolutions(taskNum);

            taskPage.nav = {};
            if (i !== 0)                    taskPage.nav.previous = taskNums[i-1];
            if (i !== taskNums.length - 1)  taskPage.nav.next = taskNums[i+1];

            this.moveTaskFiles(taskNum);

            taskPage.compile();
        });

        this.clearStage();
    }

    getLocParts(taskNum: number)
    {
        let parts = [];
        let dbParts = DB.select.taskTocItemsByNum(taskNum);
    
        let chapter =   new LocationPart(null, dbParts.chapter.tocTaskId + '. ' + dbParts.chapter.title, dbParts.chapter.tocTaskId, null, false);
        let paragraph = new LocationPart('/tasks/' + dbParts.paragraph.tocTaskId, '§' + dbParts.paragraph.tocTaskId.split('/').pop() + '. ' + dbParts.paragraph.title, '§' + dbParts.paragraph.tocTaskId.split('/').pop(), null, false);
        
        parts.push(chapter, paragraph);

        if (dbParts.topic)
            parts.push( new LocationPart('/tasks/' + dbParts.topic.tocTaskId, dbParts.topic.title, null, null, false));

        parts.push(new LocationPart('/tasks/' + taskNum, 'Задача ' + taskNum, null, null, false));

        return parts;
    }

    getTask(dbTask: DbTask)
    {
        let task = new PartialTask;

        task.num =              dbTask.taskId;

        let groupTask =         DB.select.groupTask(task.num);

        if (groupTask)
        {
            groupTask.task = Translator.renderMath(groupTask.task);
            task.groupTask = new GroupTask(new Range(groupTask.taskStart, groupTask.taskEnd), groupTask.task);
        }

        /* */ Translator.MUSTACHE.assets = Assets.task(dbTask.taskId);

        task.task =             Translator.renderAll(dbTask.task);
        task.hint.content =     Translator.renderAll(dbTask.hint);
        task.answer.content =   Translator.renderAll(dbTask.answer);
        task.note.content =     Translator.renderAll(dbTask.note);

        task.difficulty =       Difficulty.get('difficulty', dbTask.difficulty);
        task.attrs =            dbTask.attrs.map(attr => TaskAttr.get('taskAttr', attr));

        return task;
    }

    getSolutions(taskNum: number): Solution[]
    {
        let solutions = [];

        DB.select.solutions(taskNum).forEach((dbSolution, i) =>
        {
            let solution = new Solution;

            solution.solver = BaseSolver.fromDb(dbSolution.solverId);

            /* */ Translator.MUSTACHE.assets = Assets.solution(taskNum, i+1, dbSolution.solverId);

            solution.hint.content =     Translator.renderAll(dbSolution.hint);
            solution.solution.content = Translator.renderAll(dbSolution.solution);

            solution.taskDeps = DB.select.solutionTaskDeps(dbSolution.solutionId);
            solution.helpDeps = DB.select.solutionHelpDeps(dbSolution.solutionId).map(helpId => {
                let helpPage = BookPageInfo.fromDb(helpId);
                helpPage.desc = Translator.renderMath(helpPage.desc);

                return helpPage;
            });

            let attrs = [];
            dbSolution.attrs.forEach(rawAttr => attrs.push(SolutionAttr.get('solutionAttr', rawAttr)));
            
            if (attrs.length > 0)
                solution.attrs = attrs;

            this.moveSolutionFiles(taskNum, (i+1) + '-' + solution.solver.id);

            solutions.push(solution);
        });

        return solutions;
    }

    moveTaskFiles(taskNum: number)
    {
        let ignore = [
            "solutions",
            "solutions/**/*",
            "config.json",
            "note.md",
            "hint.md",
            "task.md",
            "taskSeo.txt"
        ];

        let taskDir = `data/tasks/list/${taskNum}/`;
        
        IO.globDir(taskDir, ignore).forEach(relFilePath =>
        {
            IO.copyFile(taskDir + relFilePath, `dist/assets/tasks/${taskNum}/${relFilePath}`);
        });
    }

    moveSolutionFiles(taskNum: number, solutionDirName: string)
    {
        let ignore = [
            'config.json',
            'hint.md',
            'solution.md'
        ];

        let solutionDir = `data/tasks/list/${taskNum}/solutions/${solutionDirName}/`;
        
        IO.globDir(solutionDir, ignore).forEach(relFilePath =>
        {
            IO.copyFile(solutionDir + relFilePath, `dist/assets/solutions/${taskNum}-${solutionDirName}/${relFilePath}`);
        });
    }
}