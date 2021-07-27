import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { BookTocItem, TocItemType } from "src/db/Entity";
import { Translator } from "src/translator/Translator";
import { BookTocSingle as BookTocSinglePage } from "src/view/pages/BookTocSingle";
import { BookPageInfo, BookPageType } from "src/view/partials/book";
import { LocationPart } from "src/view/partials/location";

export class Page_BookTocSingle extends Process
{
    processName() { return 'Сборка отдельных страниц оглавления справочника'; }

    process()
    {
        let paragraphs = DB.select.bookTocItems(TocItemType.Paragraph);
        paragraphs.forEach(paragraph => this.makePage(paragraph));

        let topics = DB.select.bookTocItems(TocItemType.Topic);
        topics.forEach(topic => this.makePage(topic));
    }

    makePage(bookTocItem: BookTocItem)
    {
        if (DB.db.prepare(`SELECT COUNT(*) count FROM book_page WHERE book_page_id LIKE '${bookTocItem.tocBookId}%'`).get().count === 0)
            return;

        let page = new BookTocSinglePage;

        page.seo.title = '';
        page.seo.desc = `Все определения, теоремы и полезные фишки по теме "${bookTocItem.title}".`;

        page.locId = bookTocItem.tocBookId;
        this.getLocParts(bookTocItem).forEach((part, i) =>
        {
            if (i !== 0)
                page.seo.title = part.title + (i !== 1 ? ' | ' + page.seo.title : '');

            page.location.parts.push(part)
        });

        page.terms = this.getPages(bookTocItem.tocBookId);

        page.compile();
    }

    getLocParts(bookTocItem: BookTocItem): LocationPart[]
    {
        let idArr = bookTocItem.tocBookId.split('/');
        let parts = [];

        let chapterId = idArr[0];
        let chapterTitle = {
            full: '',
            short: ''
        }

        if (idArr[0] === 'elementary')
        {
            chapterTitle.full =     'Элементарная математика';
            chapterTitle.short =    'Математика';
        }
        else
        {
            chapterTitle.full =     'Высшая математика';
            chapterTitle.short =    'Вышмат';
        }

        let chapter = new LocationPart(null, chapterTitle.full, chapterTitle.short, null, false);
        parts.push(chapter);

        let paragraphId = chapterId + '/' + idArr[1];
        let paragraph = new LocationPart('/book/' + paragraphId, DB.select.bookTocTitle(paragraphId), null, null, false);
        parts.push(paragraph);

        if (idArr.length === 3)
            parts.push(new LocationPart('/book/' + bookTocItem.tocBookId, bookTocItem.title, null, null, false));
        
        return parts;
    }

    getPages(id: string)
    {
        let pages = [];
        let dbPages = DB.select.bookPages(id);
        
        dbPages.forEach(dbPage =>
        {
            let bookPage = new BookPageInfo;
                bookPage.id =       dbPage.bookPageId;
                bookPage.title =    dbPage.title;
                bookPage.type =     BookPageType.get(dbPage.type);
                bookPage.desc =     Translator.renderMath(dbPage.desc);
            
            pages.push(bookPage);
        });

        return pages;
    }
}