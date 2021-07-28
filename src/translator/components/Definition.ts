import { Translator } from "../Translator";

export class DefinitionView
{
    content: string;

    constructor(content: string)
    {
        this.content = Translator.renderSimple(content.replace(/<def>(.+?)<\/def>/gm, `<strong class="defTerm">$1</strong>`));
    }
}