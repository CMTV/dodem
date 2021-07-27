import { Translator } from "../Translator";
import { Component } from "./Component";

class DefinitionView
{
    content: string;

    constructor(content: string)
    {
        this.content = Translator.renderSimple(content.replace(/<def>(.+?)<\/def>/gm, `<strong class="defTerm">$1</strong>`));
    }
}

export class Definition extends Component<DefinitionView>
{
    name = 'definition';
    regexp = /^\|\|\| definition$([\s\S]*?)^\|\|\|$/gm;

    render(str: string): string
    {
        return str.replace(this.regexp, (match, content) => this.getComponentHtml(new DefinitionView(content)));
    }
}