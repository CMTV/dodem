import { Process } from "@cmtv/processes";
import { DB } from "src/db/Db";
import { TocItemType } from "src/db/Entity";
import { IO } from "src/util/IO";

export class FillTaskToc extends Process
{
    processName() { return 'Добавление оглавления задач'; }

    process()
    {
        let toc =       JSON.parse(IO.readFile('data/tasks/toc/toc.json'));
        let topics =    JSON.parse(IO.readFile('data/tasks/toc/toc-topics.json'));

        let orderCounter = 1;

        DB.transaction(() => 
        {

            Object.keys(toc).forEach(chapterId =>
            {
                let chapter = toc[chapterId];
    
                let pFirst =    chapter.paragraphs[0];
                let pLast =     chapter.paragraphs[chapter.paragraphs.length - 1];
    
                DB.insert.taskTocItem({
                    tocTaskId:  chapterId,
                    order:      orderCounter++,
                    type:       TocItemType.Chapter,
                    title:      chapter.title,
                    taskStart:  pFirst[1][0],
                    taskEnd:    pLast[1][1]
                });
    
                chapter.paragraphs.forEach((paragraph, pI) =>
                {
                    let paragraphId = chapterId + '/' + (pI + 1);

                    DB.insert.taskTocItem({
                        tocTaskId:  paragraphId,
                        order:      orderCounter++,
                        type:       TocItemType.Paragraph,
                        title:      paragraph[0],
                        taskStart:  paragraph[1][0],
                        taskEnd:    paragraph[1][1]
                    });

                    if (!(paragraphId in topics))
                        return;

                    Object.keys(topics[paragraphId]).forEach(topicId =>
                    {
                        let topic = topics[paragraphId][topicId];

                        DB.insert.taskTocItem({
                            tocTaskId:  paragraphId + '/' + topicId,
                            order:      orderCounter++,
                            type:       TocItemType.Topic,
                            title:      topic[0],
                            taskStart:  topic[1][0],
                            taskEnd:    topic[1][1]
                        });
                    });
                });
            });

        });

    }
}