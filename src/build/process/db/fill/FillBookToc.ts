import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { BookTocItem, TocItemType } from "src/db/Entity";
import { IO } from "src/util/IO";

export class FillBookToc extends Process
{
    processName() { return 'Добавление оглавления справочника'; }

    process()
    {
        let tocItems = [];
        let toc = JSON.parse(IO.readFile('data/book/toc/toc.json'));
        let orderCounter = 1;

        ['elementary', 'advanced'].forEach(level =>
        {
            Object.keys(toc[level]).forEach(paragraphId =>
            {
                let rawP = toc[level][paragraphId];
                paragraphId = level + '/' + paragraphId;

                let tocItem = new BookTocItem;
                    tocItem.tocBookId =     paragraphId;
                    tocItem.order =         orderCounter++;
                    tocItem.title =         rawP.title;
                    tocItem.type =          TocItemType.Paragraph;

                tocItems.push(tocItem);

                Object.keys(rawP.topics).forEach(topicId =>
                {
                    let topicTitle = rawP.topics[topicId];
                    topicId = paragraphId + '/' + topicId;

                    let tocItem = new BookTocItem;
                        tocItem.tocBookId =     topicId;
                        tocItem.order =         orderCounter++;
                        tocItem.title =         topicTitle;
                        tocItem.type =          TocItemType.Topic;
                    
                    tocItems.push(tocItem);
                });
            });
        });

        DB.transaction(() =>
        {
            tocItems.forEach(tocItem => DB.insert.bookTocItem(tocItem));
        });
    }
}