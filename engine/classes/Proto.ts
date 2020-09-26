import { Chalk } from './Chalk';
import { UtilIO, UtilMd } from './Util';
import { ILink } from './Link';

import glob from 'glob';
import { ProtoCategory } from './ProtoCategory';

export class Dependent
{
    content: string;
    title: string;
    link: string;
    isProto = false;
}

export class ProtoTask
{
    info: IProtoTaskInfo;
    category: ProtoCategory;

    seo: { title: string; desc: string; }

    task: string;
    solution: string;

    dependents: Dependent[];

    protos: IProtoTaskInfo[];
    links: ILink[];

    getCategoryID(): string
    {
        return this.info.id.split('/').filter((val, i, self) => i !== self.length - 1).join('/');
    }

    //
    // STATIC
    //

    static getRelPath(protoId: string, relPath: string): string
    {
        return `data/proto/${protoId}/${relPath}`;
    }
}

export interface IProtoTaskInfo
{
    num: number;
    id: string;
    title: string;
    description: string;
}

export class ProtoManager
{
    private protoHash: any = {};

    dependMaps: { tasks: {[key: number]: number[]}, protoTasks: {[key: number]: number[]} } =
    {
        tasks: {},
        protoTasks: {}
    }

    constructor()
    {
        this.buildProtoHash();
    }

    buildProtoHash()
    {
        this.protoHash = {};

        let rawPaths = glob.sync('data/proto/**/*/task.md');
        let numId = 0;

        // DEV MODE ONLY
        if ('isDev' in global)
            rawPaths = rawPaths.slice(0, 2);
        //

        rawPaths.forEach(path =>
        {
            path = path.replace('data/proto/', '').replace('/task.md', '');
            
            let pathArr = path.split('/');
            let cursor = this.protoHash;

            for(let i = 0; i < pathArr.length; i++)
            {
                if (!(pathArr[i] in cursor))
                {
                    if (i === pathArr.length - 1)
                    {
                        cursor[pathArr[i]] = numId;
                        numId++;
                        break;
                    }
                    else cursor[pathArr[i]] = {};
                }

                cursor = cursor[pathArr[i]];
            }
        });
    }

    addTaskDependent(protoId: string, taskNum: number)
    {
        let protoNum = this.getNumId(protoId);

        if (!(protoNum in this.dependMaps.tasks))
        {
            this.dependMaps.tasks[protoNum] = [taskNum];
            return;
        }

        if (!this.dependMaps.tasks[protoNum].includes(taskNum))
            this.dependMaps.tasks[protoNum].push(taskNum);
    }

    addProtoDependent(parentId: string, dependentId: string)
    {
        let parentNum = this.getNumId(parentId);
        let dependentNum = this.getNumId(dependentId);

        if (!(parentNum in this.dependMaps.protoTasks))
        {
            this.dependMaps.protoTasks[parentNum] = [dependentNum];
            return;
        }

        if (!this.dependMaps.protoTasks[parentNum].includes(dependentNum))
            this.dependMaps.protoTasks[parentNum].push(dependentNum);
    }

    getNumId(path: string): number
    {
        ProtoManager.ensureExists(path);

        let pathArr = path.split('/');

        let cursor = this.protoHash;
        for(let i = 0; i < pathArr.length; i++)
        {
            if (i === pathArr.length - 1)
                return cursor[pathArr[i]];

            cursor = cursor[pathArr[i]];
        }
    }

    getStrId(numId: number): string
    {
        let digRec = (cursor: any, path: string = ''): string =>
        {
            let result = null;

            for (let i = 0; i < Object.keys(cursor).length; i++)
            {
                let key = Object.keys(cursor)[i];

                if (cursor[key] === numId)
                    result = path + key;
                else if (typeof cursor[key] !== "number")
                {
                    let digFurtherResult = digRec(cursor[key], path + key + '/');

                    if (digFurtherResult !== null)
                        result = digFurtherResult;
                }
            }
            
            return result;
        }

        return digRec(this.protoHash);
    }

    iterateProtos(callback: (protoId: string) => void)
    {
        let digRec = (cursor: any, path: string = '') =>
        {
            Object.keys(cursor).forEach((key) =>
            {
                if (typeof cursor[key] === "number")
                    callback(path + key);
                else
                    digRec(cursor[key], path + key + '/');
            });
        }

        digRec(this.protoHash);
    }

    //
    // STATIC
    //

    static isExists(path: string): boolean
    {
        return UtilIO.fExists(ProtoManager.getRelativePath(path + '/task.md'));
    }

    static ensureExists(path: string, context: string = null)
    {
        if (!ProtoManager.isExists(path))
            Chalk.error(`There is no proto-task with the following ID: '${path}'!`, context);
    }

    static getRelativePath(path: string)
    {
        return 'data/proto/' + path;
    }

    static getDirPath(protoId: string): string
    {
        return `data/proto/${protoId}`;
    }

    static getProtoTaskInfo(path: string): IProtoTaskInfo
    {
        ProtoManager.ensureExists(path);

        let meta: any = UtilMd.getMeta(UtilIO.fRead(ProtoManager.getRelativePath(path + '/task.md')));

        return <IProtoTaskInfo> {
            num: protoManager.getNumId(path) + 1,
            id: path,
            title: meta.title,
            description: meta.description
        };
    }

    static getProtoTitle(path: string)
    {
        ProtoManager.ensureExists(path);

        return UtilMd.getMeta(UtilIO.fRead(ProtoManager.getRelativePath(path + '/task.md'))).title;
    }
}

export let protoManager = new ProtoManager();