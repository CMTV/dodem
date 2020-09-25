import { ProtoTask, protoManager, ProtoManager, Dependent, IProtoTaskInfo } from "../classes/Proto";
import { Renderer } from "../classes/Renderer";
import { Translator } from "../classes/Translator";
import { UtilIO, UtilMd } from "../classes/Util";
import { Chalk } from "../classes/Chalk";
import { Link } from "../classes/Link";
import { ProtoCategory } from "../classes/ProtoCategory";

const getCatName = require('../../data/proto/category-names');

export function buildProtoTasks()
{
    // The next operation is not very performance-friendly
    fillProtoDependents();
    //

    let categoriesData: {
        [categoryId: string]: { id: string, title: string, protos: IProtoTaskInfo[] }
    } = {};

    protoManager.iterateProtos((protoId) =>
    {
        let pTask = new ProtoTask();

        pTask.info = ProtoManager.getProtoTaskInfo(protoId);

        pTask.category = ProtoCategory.getCategory(protoId);

        if (!(pTask.category.id in categoriesData))
            categoriesData[pTask.category.id] = { id: pTask.category.getOutID(), title: pTask.category.title, protos: [] };
        categoriesData[pTask.category.id].protos.push(pTask.info);

        pTask.seo = getSEO(protoId);

        pTask.task = Translator.renderAll(UtilMd.getContent(UtilIO.fRead(ProtoTask.getRelPath(protoId, 'task.md'))));
        
        let handleResult = handleSolution(protoId);
        pTask.solution = handleResult.solution;
        pTask.protos = handleResult.usedProtos.map((protoId) => ProtoManager.getProtoTaskInfo(protoId)).sort((a,b) => a.num - b.num);

        pTask.dependents = getDependents(protoId);

        pTask.links = Link.getLinks(ProtoManager.getDirPath(protoId), `Handling links for proto-task '${protoId}'.`);

        renderTask(pTask);
    });

    buildProtosPage(categoriesData);
}

function getSEO(protoId: string): { title: string; desc: string; }
{
    let meta: any = UtilMd.getMeta(UtilIO.fRead(ProtoManager.getDirPath(protoId) + '/task.md'));

    if (!('seo' in meta))
        return null;
    
    let title, desc;

    if ('title' in meta.seo)
        title = meta.seo.title;

    if ('desc' in meta.seo)
        desc = meta.seo.desc;

    return { title: title, desc: desc };
}

function getDependents(protoId: string): Dependent[]
{
    let protoNum = protoManager.getNumId(protoId);
    let dependents: Dependent[] = [];

    // Task dependents
    if (protoNum in protoManager.dependMaps.tasks)
        protoManager.dependMaps.tasks[protoNum].forEach((taskNum) =>
        {
            let dependent = new Dependent();

            dependent.content = taskNum.toString();
            dependent.title = `К задаче ${taskNum}`;
            dependent.link = `/tasks/${taskNum}`;

            dependents.push(dependent);
        });
    
    // Proto-task dependents
    if (protoNum in protoManager.dependMaps.protoTasks)
        protoManager.dependMaps.protoTasks[protoNum].forEach((dependentNum) =>
        {
            let dependent = new Dependent();

            dependent.isProto = true;
            dependent.content = `П.${dependentNum+1}`;
            dependent.title = `К прото-задаче ${dependentNum+1}`;
            dependent.link = `/proto/${protoManager.getStrId(dependentNum)}`;

            dependents.push(dependent);
        });

    return dependents;
}

function fillProtoDependents()
{
    protoManager.iterateProtos((protoId) =>
    {
        let path = ProtoTask.getRelPath(protoId, 'solution.md');

        if (!UtilIO.fExists(path))
            Chalk.error(`'solution.md' file not found!`, `Filling proto-dependents for proto-task '${protoId}'.`);

        let protos = Translator.getProtos(UtilIO.fRead(path));

        protos.forEach((parentId) =>
        {
            ProtoManager.ensureExists(parentId, `Filling proto-dependents for proto-task '${parentId}'.`);
            protoManager.addProtoDependent(parentId, protoId);
        });
    });
}

function handleSolution(protoId: string): { solution: string, usedProtos: string[] }
{
    let solution = '';
    let usedProtos: string[] = [];

    let context = `Handling solution for proto-task with ID: '${protoId}'.`

    {
        let path = ProtoTask.getRelPath(protoId, 'solution.md');
        
        solution = Translator.renderAll(
            UtilIO.fRead(path),
            {
                usedProtos: usedProtos,
                context: context
            }
        );
    }

    return { solution: solution, usedProtos: usedProtos };
}

function renderTask(pTask: ProtoTask)
{
    let SEO =
    {
        title: (pTask.seo && pTask.seo.title) ? pTask.seo.title : pTask.info.title,
        desc: (pTask.seo && pTask.seo.desc) ? pTask.seo.desc : pTask.info.description,
        canonical: 'proto/' + pTask.info.id,
        ogImg: 'site/graphics/og/proto.png'
    }

    Renderer.renderPage('protoTask', SEO, 'site/_layout/protoTask.pug', `out/proto/${pTask.info.id}/index.html`, { pTask: pTask });
}

function buildProtosPage(categoriesData: any)
{
    let data: any[] = [];

    Object.keys(categoriesData).forEach((catId) =>
    {
        let category = categoriesData[catId];
        data.push(category);
    });

    let SEO =
    {
        title: 'Прото-задачи',
        desc: 'Прото-задачи — полезные теоремы, свойства или задачи, которых нет в оригнальном задачнике Демидовича, но которые сильно помогают в решении задач.',
        canonical: 'proto',
        ogImg: 'site/graphics/og/proto.png'
    }

    Renderer.renderPage('protos', SEO, 'site/_layout/protos.pug', `out/proto/index.html`, { data: data });
}