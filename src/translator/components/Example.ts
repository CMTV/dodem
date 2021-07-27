import { Translator } from "../Translator";
import { Component } from "./Component";

class ExampleView
{
    task: string;
    solution: string;

    constructor(content: string)
    {
        let parts = content.split(/^\|\|\| solution$/gm);

        this.task = Translator.renderSimple(parts[0]);

        if (parts.length > 1)
            this.solution = Translator.renderSimple(parts[1]);
    }
}

export class Example extends Component<ExampleView>
{
    name = 'example';
    regexp = /^\|\|\| example$([\s\S]*?)^\|\|\|$/gm;

    render(str: string): string
    {
        return str.replace(this.regexp, (match, content) => this.getComponentHtml(new ExampleView(content)));
    }
}