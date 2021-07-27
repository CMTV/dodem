import { Preprocessor } from "src/util/Preprocessor";

export abstract class Component<TView>
{
    readonly abstract name: string;
    readonly abstract regexp: RegExp;
    abstract render(str: string): string;

    getComponentHtml(view: TView)
    {
        return Preprocessor.renderPug(`components/${this.name}.pug`, view);
    }
}