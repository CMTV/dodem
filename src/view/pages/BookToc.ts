import { LocationPart } from "../partials/location";
import { Page } from "./Page";

export class BookToc extends Page
{
    pageName = 'bookToc';

    elementary: Paragraph[];
    advanced: Paragraph[];

    constructor()
    {
        super();

        this.seo.title = 'Справочник';
        this.seo.desc = 'Все необходимые определения, теоремы и приемы с подробными и понятными доказательствами и пояснениями.';

        this.location.parts.push(LocationPart.BOOK);
        this.location.accentLast = true;
    }

    dest() { return 'book/index.html'; }
}

export class BookTocItem
{
    id: string;
    title: string;
    termCount: number;
}

export class Paragraph extends BookTocItem
{
    topics: Topic[];
}

export class Topic extends BookTocItem {};