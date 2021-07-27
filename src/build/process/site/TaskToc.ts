import { Process } from "@cmtv/processes";
import { DB } from "src/db/Db";
import { TocItemType } from "src/db/Entity";
import { Range } from "src/util/Range";
import { Chapter, Paragraph, TaskToc as TaskTocPage, Topic } from "src/view/pages/TaskToc";

export class TaskToc extends Process
{
    processName() { return 'Сборка оглавления задач'; }

    process()
    {
        let page = new TaskTocPage;
        page.chapters = [];

        let chapters = DB.select.taskTocItems(TocItemType.Chapter);
        chapters.forEach(chapter =>
        {
            let pageChapter = new Chapter;
            pageChapter.id =        chapter.tocTaskId;
            pageChapter.title =     chapter.tocTaskId + '. ' + chapter.title;
            pageChapter.taskRange = new Range(chapter.taskStart, chapter.taskEnd);
            
            let paragraphs = DB.select.taskTocItems(TocItemType.Paragraph, chapter.tocTaskId);
            pageChapter.paragraphs = [];
            
            paragraphs.forEach(paragraph =>
            {
                let pageParagraph = new Paragraph;
                pageParagraph.id =          paragraph.tocTaskId;
                pageParagraph.title =       paragraph.title;
                pageParagraph.taskRange =   new Range(paragraph.taskStart, paragraph.taskEnd);

                pageChapter.paragraphs.push(pageParagraph);

                let topics = DB.select.taskTocItems(TocItemType.Topic, paragraph.tocTaskId);
                pageParagraph.topics = [];

                topics.forEach(topic =>
                {
                    let pageTopic = new Topic;
                    pageTopic.id =          topic.tocTaskId;
                    pageTopic.title =       topic.title;
                    pageTopic.taskRange =   new Range(topic.taskStart, topic.taskEnd);

                    pageParagraph.topics.push(pageTopic);
                });
            });

            page.chapters.push(pageChapter);
        });

        page.compile();
    }
}