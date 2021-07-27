import { Translator } from "../Translator";
import { Component } from "./Component";

class TheoremView
{
    title =     'Теорема';
    statement:  string;
    proof:      string;

    constructor(title: string, content: string)
    {
        if (title.length !== 0)
            this.title = Translator.renderMath(title.trim());
        
        let parts = content.split(/^\|\|\| proof$/gm);

        this.statement = Translator.renderSimple(parts[0]);

        if (parts.length > 1)
            this.proof = Translator.renderSimple(parts[1]);
    }
}

export class Theorem extends Component<TheoremView>
{
    name = 'theorem';
    regexp = /^\|\|\| theorem(.*?)$([\s\S]*?)^\|\|\|$/gm;

    render(str: string): string
    {
        return str.replace(this.regexp, (match, title, content) => this.getComponentHtml(new TheoremView(title, content)));
    }
}