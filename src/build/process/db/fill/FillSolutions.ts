import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Solution, SolutionDependency } from "src/db/Entity";
import { HelpLink } from "src/translator/components/HelpLink";
import { TaskLink } from "src/translator/components/TaskLink";
import { IO } from "src/util/IO";
import { Md } from "src/util/Md";
import { SolutionAttr } from "src/view/partials/solution";

export class FillSolutions extends Process
{
    processName() { return 'Добавление решений'; }

    process()
    {
        let solutionId = 0;

        let solutions: Solution[] = [];
        let solutionDeps: SolutionDependency[] = [];

        IO.readDir('data/tasks/list').forEach(taskNum =>
        {
            if (!IO.exists(`data/tasks/list/${taskNum}/solutions`))
                return;

            IO.readDir(`data/tasks/list/${taskNum}/solutions`).forEach(solutionDir =>
            {
                let solutionDirPath = `data/tasks/list/${taskNum}/solutions/${solutionDir}/`;
                let solutionDirParts = solutionDir.split('-');

                this.stage = 'Решение ' + solutionDirParts[0] + ' от ' + solutionDirParts[1] + ' задачи ' + taskNum;

                let solution = new Solution;
            
                solution.solutionId =   solutionId++;
                solution.taskId =       +taskNum;
                solution.solverId =     solutionDirParts[1];

                if (IO.exists(solutionDirPath + 'hint.md'))
                    solution.hint = IO.readFile(solutionDirPath + 'hint.md');
                
                let parsedSolution = Md.parse(IO.readFile(solutionDirPath + 'solution.md'));
                solution = {...solution, ...parsedSolution.config};
                solution.solution = parsedSolution.content;

                // Отсылки к другим задачам и к справке
                let generatedAttrs = [];
                [solution.hint, solution.solution].forEach(content =>
                {
                    if (!content) return;

                    content.replace((new HelpLink).regexp, (match, placeholder, helpId) =>
                    {
                        let solutionDep = new SolutionDependency(solution.solutionId, helpId, 'help');                        
                        
                        /* */ solutionDeps.push(solutionDep);

                        return '';
                    });

                    content.replace((new TaskLink).regexp, (match, taskNum) =>
                    {
                        let solutionDep = new SolutionDependency(solution.solutionId, taskNum, 'task');
                        generatedAttrs.push((+taskNum > solution.taskId ? SolutionAttr.NEXT : SolutionAttr.PREVIOUS).name.id);
                        
                        /* */ solutionDeps.push(solutionDep);

                        return '';
                    }); 
                });

                generatedAttrs.forEach(attr =>
                {
                    if (solution.attrs.includes(attr)) return;
                    solution.attrs.splice(0, 0, attr);
                });

                /* */ solutions.push(solution);
            });
        });

        DB.transaction(() =>
        {
            solutions.forEach(solution => DB.insert.solution(solution));
            solutionDeps.forEach(solutionDep => DB.insert.solutionDependency(solutionDep));
        });
    }
}