import { hash } from "../classes/Hash";
import { Task, ITaskNav, IFAQItem } from "../classes/Task";
import { toc } from "../classes/TOC";
import { UtilIO, UtilMd, Range } from "../classes/Util";
import { ILink, Link } from "../classes/Link";
import { Chalk } from "../classes/Chalk";
import { Renderer } from "../classes/Renderer";
import { Translator } from "../classes/Translator";
import { Solution } from "../classes/Solution";
import { Solver, solverHash } from "../classes/Solver";
import { Tag } from "../classes/Tag";
import { ProtoManager, protoManager } from "../classes/Proto";
import { groupTasks } from "../classes/GroupTasks";

export function buildTasks()
{
    hash.getSolved().forEach((taskNum, i) =>
    {
        let task = new Task();

        task.id = taskNum;

        task.plainDesc = getPlainDesc(taskNum);

        task.groupTask = groupTasks.getAll(taskNum);
        task.task = getRenderMdContent(taskNum, 'task.md');
        task.hint = getRenderMdContent(taskNum, 'hint.md');
        task.answer = getRenderMdContent(taskNum, 'answer.md');

        let solOut = handleSolutions(taskNum);
        task.solutions = solOut.solutions;
        task.protos = solOut.usedProtos.map((protoId: string) => ProtoManager.getProtoTaskInfo(protoId)).sort((a:any,b:any) => a.num - b.num);

        // FILLING PROTO DEPENDENTS
        solOut.usedProtos.forEach((protoId: string) => protoManager.addTaskDependent(protoId, taskNum));

        task.faq = getFAQ(taskNum);

        task.location = toc.getLocation(task.id);
        task.nav = getNav(i);
        task.links = Link.getLinks(Task.getDirPath(taskNum), `Handling links for task ${taskNum}.`);

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

        // Tags
        
        let expMeta = UtilMd.getMeta(explanationRaw);

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

    return Translator.renderAll(UtilMd.getContent(UtilIO.fRead(path)));
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

function getPlainDesc(taskNum: number): string
{
    let taskMeta = UtilMd.getMeta(UtilIO.fRead(Task.getRelPath(taskNum, 'task.md')));
    
    return taskMeta.plain ? taskMeta.plain : null;
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
        desc: task.plainDesc ? task.plainDesc : `Подробное и понятное решение задачи ${task.id} из задачника Демидовича.`,
        canonical: 'tasks/' + task.id,
        ogImg: 'site/graphics/tasks/' + task.id + '.png'
    }

    Renderer.renderPage('task', SEO, 'site/_layout/task.pug', 'out/tasks/' + task.id + '/index.html', { task: task });
}