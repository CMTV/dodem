import { BookPageInfo } from "../partials/book";
import { LocationPart } from "../partials/location";
import { Page } from "./Page";

export class BookTocSingle extends Page
{
    pageName = 'bookTocSingle';

    locId: string;

    terms: BookPageInfo[];

    constructor()
    {
        super();
        this.setupToc(null);
        
        this.seo.title = 'Название темы';
        this.seo.desc = 'Короткое описание темы. Не забыть добавить в базу данных!';
    }

    setupToc(toc)
    {
        this.location.parts.push(LocationPart.BOOK);
        this.location.accentLast = true;
    }

    dest() { return 'book/' + this.locId + '/index.html'; }
}