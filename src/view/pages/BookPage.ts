import { BookPageInfo } from "../partials/book";
import { LocationPart } from "../partials/location";
import { Page } from "./Page";

export class BookPage extends Page
{
    pageName = 'bookPage';

    info: BookPageInfo;
    content: string;

    tasks: number[];

    dependencies: BookPageInfo[];
    dependents: BookPageInfo[];

    constructor()
    {
        super();
        this.info = new BookPageInfo;
        this.location.parts.push(LocationPart.BOOK);
    }

    compile()
    {
        this.seo.title = this.info.title;

        if (!this.seo.desc)
            this.seo.desc = (this.info.desc ? this.info.desc : this.content.substring(0,160));

        super.compile();
    }

    dest()
    {
        return 'book/' + this.info.id + '/index.html';
    }
}