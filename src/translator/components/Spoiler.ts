import { Translator } from '../Translator';
import { Component } from "./Component";

class SpoilerView
{
    title =     'Спойлер';
    content =   '';

    constructor(title: string, content: string)
    {
        if (title.length !== 0)
            this.title = Translator.renderMath(title.trim());
        
        this.content = Translator.renderSimple(content.trim());
    }
}

export class Spoiler extends Component<SpoilerView>
{
    name = 'spoiler';
    regexp = /^\|\|\| spoiler(.*?)$([\s\S]*?)^\|\|\|$/gm;

    render(str: string): string
    {
        return str.replace(this.regexp, (match, title, content) => this.getComponentHtml(new SpoilerView(title, content)));
    }
}