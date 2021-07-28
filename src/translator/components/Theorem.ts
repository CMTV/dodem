import { Translator } from "../Translator";

export class TheoremView
{
    title =     'Теорема';
    statement:  string;
    proof:      string;

    constructor(title: string, content: string)
    {
        if (title !== null)
            this.title = Translator.renderMath(title.trim());
        
        let parts = content.split(/^\|\|\| proof$/gm);

        this.statement = Translator.renderSimple(parts[0]);

        if (parts.length > 1)
            this.proof = Translator.renderSimple(parts[1]);
    }
}