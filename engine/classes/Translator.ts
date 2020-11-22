import { Chalk } from './Chalk';
import { ProtoManager, protoManager } from './Proto';
import { Renderer } from './Renderer';

const mdIt = require('markdown-it')({
    html: true,
    subscript: false, superscript: false
});

mdIt.use(require('markdown-it-attrs'), {
    leftDelimiter: '{:'
});

//

const mathMacro = require('../../data/math-macro');
const katex = require('../../site/libs/katex/katex.min.js');

//

export interface IRenderOptions
{
    context?: string;
    mustaches?: {[key: string]: string;};
    usedProtos?: string[];
}

export class Translator
{
    static currentContext: string;

    //
    // Math
    //

    static mathRegexp =
    {
        display: [
            /^\$\$([\s\S]*?)\$\$$/gm,
            /^\\\[([\s\S]*?)\\\]$/gm
        ],

        inline: [
            /(?<!\$)\$(?!\$)(.*?)\$/g,
            /\\\((.*?)\\\)/g
        ]
    }

    static renderMath(content: string): string
    {
        if (typeof content === 'undefined') return content;

        let katexOptions = (isDisplay = true) =>
        {
            let out: any = {};

            out.output = 'html';
            out.displayMode = isDisplay;
            out.strict = 'ignore';
            out.macros = mathMacro;
            
            return out;
        };

        // Display

        this.mathRegexp.display.forEach((regexp) =>
        {
            content = content.replace(regexp, (match, math) => { return katex.renderToString(math, katexOptions()) });
        });

        // Inline

        this.mathRegexp.inline.forEach((regexp) =>
        {
            content = content.replace(regexp, (match, math) => { return katex.renderToString(math, katexOptions(false)) });
        });

        return content;
    }

    //
    // Markdown
    //

    static renderMd(content: string): string
    {
        return mdIt.render(content);
    }

    //
    // Proto
    //

    static protoRegexp = /<p:\[(.*?)\]>/gm;

    static getProtos(content: string): string[]
    {
        let protos: string[] = [];

        content.replace(this.protoRegexp, (match, protoId) =>
        {
            if (!protos.includes(protoId))
                protos.push(protoId);

            return '';
        });

        return protos;
    }

    static renderProtos(content: string, usedProtos: string[] = []): string
    {
        content = content.replace(this.protoRegexp, (match, protoId) =>
        {
            if (!ProtoManager.isExists(protoId))
                Chalk.error(`There is no proto-task with the following ID: '${protoId}'!`, this.currentContext);

            if (!usedProtos.includes(protoId))
                usedProtos.push(protoId);

            return (new ProtoLink).renderProto(protoId);
        });

        return content;
    }

    //
    // Mustaches
    //

    static renderMustaches(content: string, values: any = {}): string
    {
        return content.replace(
            /\[\[(.*)?\]\]/gm,
            (match, group) =>
            {
                let key = group.trim();
                return (key in values) ? values[key] : match;
            }
        )
    }

    //
    // Components
    //

    static renderComponents(content: string): string
    {
        // Task link
        content = (new TaskLink).render(content);

        // Proto links are handled above!

        // Spoilers
        content = (new Spoiler).render(content);

        return content;
    }

    //
    //
    //
    
    static renderSimple(content: string): string
    {
        // Math
        content = this.renderMath(content);

        // Markdown
        content = this.renderMd(content);

        return content;
    }

    static renderAll(content: string, options?: IRenderOptions): string
    {
        if (typeof options === 'undefined')
        {
            options = {
                context: null,
                mustaches: {},
                usedProtos: []
            }
        }

        Translator.currentContext = options.context;

        // Math
        content = this.renderMath(content);
        
        // Mustaches
        content = this.renderMustaches(content, options.mustaches);

        // Proto-tasks
        content = this.renderProtos(content, options.usedProtos);

        // Components
        content = this.renderComponents(content);

        // Markdown
        content = this.renderMd(content);

        return content;
    }
}

//
// COMPONENTS
//

abstract class Component
{
    abstract name: string;
    abstract render(content: string): string;

    renderComponent(view: object): string
    {
        return Renderer.renderComponent(this.name, view);
    }
}

class Spoiler extends Component
{
    name = 'spoiler';

    static regexp = /^\|\|\| spoiler (?<name>.+)$(?<content>[\s\S]+?)^\|\|\|/gm;

    render(content: string): string
    {
        content = content.replace(Spoiler.regexp, (match, title, content) =>
        {
            let view =
            {
                title: Translator.renderSimple(title.trim()),
                content: Translator.renderSimple(content.trim())
            }

            view.title = view.title.replace(/^<p>/gm, '');
            view.title = view.title.replace(/<\/p>$/gm, '');

            return this.renderComponent(view);
        });

        return content;
    }
}

class TaskLink extends Component
{
    name = 'taskLink';

    static regexp = /<t:\[(.*?)\]>/gm;

    render(content: string): string
    {
        content = content.replace(TaskLink.regexp, (match, taskNum) =>
        {
            return this.renderComponent({ taskNum: taskNum });
        });

        return content;
    }
}

class ProtoLink extends Component
{
    name = 'protoLink';

    render(content: string): string
    {
        return '';
    }

    renderProto(protoId: string): string
    {
        let protoInfo = ProtoManager.getProtoTaskInfo(protoId);

        let view = 
        {
            id: protoInfo.id,
            num: protoInfo.num,
            title: protoInfo.title
        };

        return this.renderComponent(view);
    }
}