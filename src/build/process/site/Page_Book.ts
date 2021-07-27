import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Assets } from "src/translator/Assets";
import { Translator } from "src/translator/Translator";
import { IO } from "src/util/IO";
import { BookPage } from "src/view/pages/BookPage";
import { BookPageInfo, BookPageType } from "src/view/partials/book";
import { LocationPart } from "src/view/partials/location";

export class Page_Book extends Process
{
    processName() { return 'Сборка страниц справочника'; }

    process()
    {
        let pageIds = DB.select.bookPageIds();

        pageIds.forEach((pageId, i) =>
        {
            /* */ this.stage = 'Страница справочника с ID: ' + pageId;

            let dbPage = DB.select.bookPage(pageId);                

            let bookPage = new BookPage;

                if (dbPage.seoDesc)
                    bookPage.seo.desc = dbPage.seoDesc;

                /* */ Translator.MUSTACHE.assets = Assets.book(pageId);

                bookPage.info =         BookPageInfo.fromBookPage(dbPage);
                bookPage.info.desc =    Translator.renderMath(bookPage.info.desc);

                bookPage.content =  Translator.renderAll(dbPage.content);
                bookPage.tasks =    DB.select.bookPageTasks(pageId);

                bookPage.dependencies = DB.select.bookPageDependencies(pageId).map(dependencyId =>  BookPageInfo.fromDb(dependencyId));
                bookPage.dependents =   DB.select.bookPageDependents(pageId).map(dependentId =>     BookPageInfo.fromDb(dependentId));

            this.moveBookPageFiles(dbPage.bookPageId);
            this.getLocParts(dbPage.bookPageId, dbPage.title).forEach(part => bookPage.location.parts.push(part));

            bookPage.compile();
        });
    }

    getLocParts(bookPageId: string, title: string): LocationPart[]
    {
        let parts = [];
        let idArr = bookPageId.split('/');

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

        if (idArr.length === 4)
        {
            let topicId = paragraphId + '/' + idArr[2];
            let topic = new LocationPart('/book/' + topicId, DB.select.bookTocTitle(topicId), null, null, false);
            parts.push(topic);
        }

        parts.push(new LocationPart('/book/' + bookPageId, title, null, null, false));
        
        return parts;
    }

    moveBookPageFiles(bookPageId: string)
    {
        let ignore = ['page.md'];
        let bookPageDir = `data/book/pages/${bookPageId}/`;
        
        IO.globDir(bookPageDir, ignore).forEach(relFilePath =>
        {
            IO.copyFile(bookPageDir + relFilePath, `dist/assets/book/${bookPageId}/${relFilePath}`);
        });
    }
}