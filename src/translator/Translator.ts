import katexRender from 'katex-render';

import { Definition } from './components/Definition';
import { Example } from './components/Example';
import { HelpLink } from './components/HelpLink';
import { Spoiler } from './components/Spoiler';
import { TaskLink } from './components/TaskLink';
import { Theorem } from './components/Theorem';

const mdIt = require('markdown-it')({
    html: true,
    subscript: false, superscript: false,
    typographer: true,
    quotes: '«»""',
});

mdIt.use(require('markdown-it-attrs'), {
    leftDelimiter: '{:'
});

const mathMacro = require('data/math.js');

export class Translator
{
    static MUSTACHE = {
        assets: ''
    }

    static renderSimple(str: string): string
    {
        if (typeof str !== 'string') return str;

        str = this.renderMustaches(str);

        str = this.renderTaskLinks(str);
        str = this.renderHelpLinks(str);

        str = this.renderMath(str);
        str = this.renderMd(str);

        return str;
    }

    static renderAll(str: string): string
    {
        if (typeof str !== 'string') return str;

        str = this.renderBlockComponents(str);
        str = this.renderSimple(str);

        return str;
    }

    static removeMathDelimiters(str: string): string
    {
        return str.replace(/\$/gm, '');
    }

    static renderMustaches(str: string): string
    {
        Object.keys(this.MUSTACHE).forEach(key => str = str.replace(new RegExp(`{{ ${key} }}`, 'gm'), this.MUSTACHE[key]));
        return str;
    }

    static renderBlockComponents(str: string): string
    {
        str = this.renderSpoilers(str);
        
        str = this.renderDefinitions(str);
        str = this.renderTheorems(str);
        str = this.renderExamples(str); 

        return str;
    }

    static renderMath(str: string): string
    {
        let katexConfig = {
            macros: mathMacro,
            minRuleThickness: 0.06
        }

        str = katexRender(str, { katexOptions: katexConfig });

        return str;
    }

    static renderMd(str: string): string
    {
        return mdIt.render(str);
    }

    //
    // COMPONENTS
    //

    static renderSpoilers(str: string): string  { return (new Spoiler).render(str); }
    static renderTaskLinks(str: string): string { return (new TaskLink).render(str); }
    static renderHelpLinks(str: string): string { return (new HelpLink).render(str); }

    static renderDefinitions(str: string): string   { return (new Definition).render(str); }
    static renderTheorems(str: string): string      { return (new Theorem).render(str); }
    static renderExamples(str: string): string      { return (new Example).render(str); }
}