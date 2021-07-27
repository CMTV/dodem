import { DB } from "src/db/Db";
import { BookPage } from "src/db/Entity";

export class BookPageType
{
    static MAP = {};

    static DEFINITION = new BookPageType('definition', 'О', 'Определение');
    static THEOREM =    new BookPageType('theorem', 'Т', 'Теорема');
    static METHOD =     new BookPageType('method', 'М', 'Метод');
    static OTHER =      new BookPageType('other', 'Д', 'Другое');

    //

    className: string;
    letter: string;
    label: string;

    constructor(className: string, letter: string, label: string)
    {
        this.className = className;
        this.letter = letter;
        this.label = label;

        BookPageType.MAP[className] = this;
    }

    static get(type: string)
    {
        return BookPageType.MAP[type];
    }
}

export class BookPageInfo
{
    id:     string;
    type:   BookPageType;
    title:  string;
    desc:   string;

    getLink()
    {
        return `/book/${this.id}`;
    }
    
    static fromBookPage(bookPage: BookPage): BookPageInfo
    {
        let bookPageInfo = new BookPageInfo;
            bookPageInfo.id =       bookPage.bookPageId;
            bookPageInfo.title =    bookPage.title;
            bookPageInfo.desc =     bookPage.desc;
            bookPageInfo.type =     BookPageType.get(bookPage.type);

        return bookPageInfo;
    }

    static fromDb(bookPageId: string): BookPageInfo
    {
        let dbPage = DB.select.bookPage(bookPageId);
        return BookPageInfo.fromBookPage(dbPage);
    }
}

//
// Оглавление справочника
//

class BookTocItem
{
    id: string;
    title: string;
    termsCounter: number;
}