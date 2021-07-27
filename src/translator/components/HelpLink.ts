import { BookPageInfo, BookPageType } from "src/view/partials/book";
import { Component } from "./Component";

class HelpLinkView
{
    label: string;
    pageInfo: BookPageInfo;

    constructor(label: string, id: string)
    {
        this.label = label;
        this.pageInfo = BookPageInfo.fromDb(id);
    }
}

export class HelpLink extends Component<HelpLinkView>
{
    name = 'helpLink';
    regexp = /<b:\[(.+?)\]\((.+?)\)>/gm;

    render(str: string): string
    {
        return str.replace(this.regexp, (match, label, id) =>
        {
            return this.getComponentHtml(new HelpLinkView(label, id));
        });
    }
}