import { hash } from "../classes/Hash";
import { Task, ITaskNav, IFAQItem, RESERVED_FILENAMES } from "../classes/Task";
import { toc } from "../classes/TOC";
import { UtilIO, UtilMd, Range } from "../classes/Util";
import { Link } from "../classes/Link";
import { Chalk } from "../classes/Chalk";
import { Renderer } from "../classes/Renderer";
import { Translator } from "../classes/Translator";
import { Solution } from "../classes/Solution";
import { Solver, solverHash } from "../classes/Solver";
import { Tag } from "../classes/Tag";
import { ProtoManager, protoManager } from "../classes/Proto";
import { groupTasks } from "../classes/GroupTasks";
import { todoList } from "./todo";
import { TodoItem } from "../classes/TodoItem";

export function buildTasks()
{
    hash.getSolved().forEach((taskNum, i) =>
    {
        //
        // TODO: Move most of this shit in Task constructor!
        //

        let task = new Task(taskNum);

        task.groupTask = groupTasks.getAll(taskNum);
        task.task = getRenderMdContent(taskNum, 'task.md');
        task.hint = getRenderMdContent(taskNum, 'hint.md');
        task.answer = getRenderMdContent(taskNum, 'answer.md');

        let solOut = handleSolutions(taskNum);
        task.solutions = solOut.solutions;
        task.protos = solOut.usedProtos.map((protoId: string) => ProtoManager.getProtoTaskInfo(protoId)).sort((a:any,b:any) => a.num - b.num);

        moveTaskFiles(taskNum)

        // FILLING PROTO DEPENDENTS
        solOut.usedProtos.forEach((protoId: string) => protoManager.addTaskDependent(protoId, taskNum));

        task.faq = getFAQ(taskNum);

        task.location = toc.getLocation(task.id);
        task.nav = getNav(i);
        task.links = Link.getLinks(Task.getDirPath(taskNum), `Handling links for task ${taskNum}.`);

        task._fillBookRefs();

        renderPreview(task);
        renderTask(task);
    });
}

function handleSolutions(taskNum: number): any
{
    let solutions: Solution[] = [];
    let usedProtos: string[] = [];

    let i = 0;

    Task.getSolvers(taskNum).forEach((solver) =>
    {
        let total = Task.getSolutionNum(taskNum, solver.id);

        // Updating Solver Hash

        if (total === 1) solverHash.addRecord(solver.id, taskNum);
        else (new Range([1,total])).iterate((current) => solverHash.addRecord(solver.id, `${taskNum}.${current}`));

        solverHash.addUnique(solver.id);

        //

        for (let j = 0; j < total; j++)
        {
            let path = Task.getDirPath(taskNum) + `/${solver.id}/` + ((total !== 1) ? `${j+1}/` : '');
            
            let result = handleSolution(taskNum, solver, i, path);
            solutions.push(result.solution);
            usedProtos = [...usedProtos, ...result.usedProtos].filter((value, index, self) => self.indexOf(value) === index);

            i++;
        }
    });

    return { solutions: solutions, usedProtos: usedProtos };
}

function handleSolution(taskNum: number, solver: Solver, i: number, path: string)
{
    // Creating Solution obj

    let solution = new Solution();
    let usedProtos: string[] = [];

    {
        solution.num = i + 1;

        let renderOptions = {
            context: `Task ${taskNum}. Solution from '${solver.id}'.`,
            mustaches: {
                assets: `/tasks/${taskNum}/solution-${i}-assets`
            },
            usedProtos: usedProtos
        };

        if (UtilIO.fExists(path + 'hint.md'))
            solution.hint = Translator.renderAll(UtilIO.fRead(path + 'hint.md'), renderOptions);
        
        if (!UtilIO.fExists(path + 'explanation.md'))
            Chalk.error(`One of solutions form '${solver.id}' for task ${taskNum} does not have an 'explanation.md' file!`);
        
        let explanationRaw = UtilIO.fRead(path + 'explanation.md');

        solution.explanation = Translator.renderAll(UtilMd.getContent(explanationRaw), renderOptions);
        
        let expMeta = UtilMd.getMeta(explanationRaw);

        // Todo

        todoListAnalize(taskNum, solver.id, expMeta);

        // Tags

        if (expMeta.tags)
        {
            solution.tags = Tag.getTags(expMeta.tags);
        }

        // Solver
        solution.solver = solver;
    }

    // Moving files

    {
        let dir = UtilIO.dirScan(path);

        if
        (!(
            dir.length === 1
            ||
            dir.length === 2 && dir.includes('hint.md')
        ))
            UtilIO.copy(path, `out/tasks/${taskNum}/solution-${i}-assets/`, ['hint.md', 'explanation.md']);
    }

    //

    return { solution: solution, usedProtos: usedProtos };
}

function todoListAnalize(taskNum: number, solverId: string, meta: any)
{
    if (meta.tags)
    {
        for (let i = 0; i < meta.tags.length; i++)
        {
            let tag = meta.tags[i];

            if (tag === 'unDone' || tag.name === 'unDone')
            {
                todoList.push(new TodoItem({
                    id: taskNum.toString(),
                    title: taskNum.toString(),
                    solverId: solverId,
                    desc: tag.name ? tag.text : null
                }));
                break;
            }
        }
    }
}

function moveTaskFiles(taskNum: number)
{
    // Scanning for special files and moving them to `out` task location
    UtilIO.dirScanExp(Task.getDirPath(taskNum)).filter(dirent => { return !(Object.values(RESERVED_FILENAMES).includes(dirent.name) || dirent.isDirectory()) }).forEach(dirent =>
    {
        UtilIO.copy(Task.getRelPath(taskNum, dirent.name), `out/tasks/${taskNum}/${dirent.name}`);
    });
}

function getFAQ(taskNum: number): IFAQItem[]
{
    let path = Task.getRelPath(taskNum, 'faq.md');

    if (!UtilIO.fExists(path))
        return null;

    let rawContent = UtilIO.fRead(path);

    let rawFAQs = UtilIO.fRead(path).split('---').map((rawItem) => { return rawItem.trim(); });

    let faqItems: IFAQItem[] = [];

    rawFAQs.forEach((rawFAQ) =>
    {
        let title = null;
        let author = null;
        let src = null;

        rawFAQ = rawFAQ.replace(/^>title: (.+)$/gm, (match, group) =>
        {
            title = group;
            return '';
        });

        if (!title) { Chalk.error(`'title' property must be specified for every FAQ item in task ${taskNum}!`); }

        rawFAQ = rawFAQ.replace(/^>author: (.+)$/gm, (match, group) =>
        {
            author = group;
            return '';
        });

        rawFAQ = rawFAQ.replace(/^>src: (.+)$/gm, (match, group) =>
        {
            src = group;
            return '';
        });

        faqItems.push(<IFAQItem> {
            title: title,
            author: author,
            src: src,
            content: Translator.renderAll(rawFAQ.trim())
        });
    });

    return faqItems;
}

function getRenderMdContent(taskNum: number, relPath: string): string
{
    let path = Task.getRelPath(taskNum, relPath);

    if (!UtilIO.fExists(path))
        return null;

    let renderOptions = {
        mustaches: {
            task: `/tasks/${taskNum}`
        }
    };

    return Translator.renderAll(UtilMd.getContent(UtilIO.fRead(path)), renderOptions);
}

function getNav(i: number): ITaskNav
{
    let nav = { prev: null, next: null } as ITaskNav;

    if (i !== 0)
        nav.prev = hash.getSolved()[i-1];

    if (i !== hash.getSolved().length - 1)
        nav.next = hash.getSolved()[i+1];

    return nav;
}

function renderPreview(task: Task)
{
    let out: any = {};
    
    out.task = task.task;

    UtilIO.fWrite('out/tasks/' + task.id + '/preview.json', JSON.stringify(out));
}

function renderTask(task: Task)
{
    let SEO =
    {
        title: task.id.toString(),
        desc: ('plain' in task.taskMeta ? task.taskMeta.plain : `Подробное и понятное решение задачи ${task.id} из задачника Демидовича.`),
        canonical: 'tasks/' + task.id,
        ogImg: 'site/graphics/tasks/' + task.id + '.png'
    }

    Renderer.renderPage('task', SEO, 'site/_layout/task.pug', 'out/tasks/' + task.id + '/index.html', { task: task });
}