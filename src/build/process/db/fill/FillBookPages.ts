import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { BookPage, BookPageDependency } from "src/db/Entity";
import { HelpLink } from "src/translator/components/HelpLink";
import { IO } from "src/util/IO";
import { Md } from "src/util/Md";

export class FillBookPages extends Process
{
    processName() { return 'Добавление страниц справочника'; }
    
    process()
    {
        let bookPages: BookPage[] = [];
        let dependencies: BookPageDependency[] = [];

        let tocPages = JSON.parse(IO.readFile('data/book/toc/toc-pages.json'));
        let orderCounter = 1;

        Object.keys(tocPages).forEach(tocItemId =>
        {
            let pageIds = tocPages[tocItemId];

            pageIds.forEach(pageId =>
            {
                this.stage = `Прото задача '${pageId}'`;

                pageId = tocItemId + '/' + pageId;
                let rawPage = Md.parse(IO.readFile('data/book/pages/' + pageId + '/page.md'));

                rawPage.content.replace((new HelpLink).regexp, (match, placeholder, helpId) =>
                {
                    let dependency = new BookPageDependency;
                    dependency.dependentId = pageId;
                    dependency.pageId = helpId;
                    dependencies.push(dependency);

                    return '';
                });

                let bookPage = new BookPage;
                bookPage = {
                    ...bookPage,
                    ...rawPage.config,
                    ...{
                        bookPageId: pageId,
                        content: rawPage.content,
                        order: orderCounter++
                    }
                };

                bookPages.push(bookPage);
            });
        });

        DB.transaction(() =>
        {
            bookPages.forEach(page => DB.insert.bookPage(page));
            dependencies.forEach(dependency => DB.insert.bookPageDependency(dependency));
        });
    }
}