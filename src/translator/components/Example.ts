import { Translator } from "../Translator";

export class ExampleView
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