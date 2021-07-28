import { Translator } from '../Translator';

export class SpoilerView
{
    title =     'Спойлер';
    content =   '';

    constructor(title: string, content: string)
    {
        if (title !== null)
            this.title = Translator.renderMath(title);
        
        this.content = Translator.renderSimple(content);
    }
}