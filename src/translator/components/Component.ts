import { Preprocessor } from "src/util/Preprocessor";

export abstract class Component<TView>
{
    readonly abstract name: string;
    readonly abstract regexp: RegExp;
    abstract render(str: string): string;

    getComponentHtml(view: TView)
    {
        return Component.getRender(this.name, view);
    }

    static getRender(componentName: string, view)
    {
        return Preprocessor.renderPug(`components/${componentName}.pug`, view);
    }
}