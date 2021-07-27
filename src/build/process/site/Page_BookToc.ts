import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { TocItemType } from "src/db/Entity";
import { BookToc as BookTocPage, Paragraph, Topic } from "src/view/pages/BookToc";

export class Page_BookToc extends Process
{
    processName() { return 'Сборка оглавления справочника'; }

    process()
    {
        let page = new BookTocPage;

        ['elementary', 'advanced'].forEach(chapterId =>
        {
            let paragraphs = DB.select.bookTocItems(TocItemType.Paragraph, chapterId);
            page[chapterId] = [];

            paragraphs.forEach(paragraph =>
            {
                let pageParagraph = new Paragraph;
                    pageParagraph.id =          paragraph.tocBookId;
                    pageParagraph.title =       paragraph.title;
                    pageParagraph.termCount =   paragraph.termCount;

                page[chapterId].push(pageParagraph);

                let topics = DB.select.bookTocItems(TocItemType.Topic, paragraph.tocBookId);
                pageParagraph.topics = [];

                topics.forEach(topic =>
                {
                    let pageTopic = new Topic;
                        pageTopic.id =          topic.tocBookId;
                        pageTopic.title =       topic.title;
                        pageTopic.termCount =   topic.termCount;

                    pageParagraph.topics.push(pageTopic);
                });
            });
        });

        page.compile();
    }
}