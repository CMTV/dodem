import { Process } from "@cmtv/processes";
import { Range } from "src/util/Range";
import { Chapter, Paragraph, TaskToc, Topic } from "src/view/pages/TaskToc";

export class Test_TaskToc extends Process
{
    processName() { return 'Сборка тестового оглавления задач'; }

    process()
    {
        let taskToc = new TaskToc;
        taskToc.chapters = this.prepareToc();
        taskToc.compile();
    }

    prepareTopic(id: string, title: string, range: string)
    {
        let topic = new Topic;

        topic.id = id;
        topic.title = title;
        topic.taskRange = new Range(range);

        return topic;
    }

    prepareParagraph(id: string, title: string, range: string, topics: Topic[])
    {
        let paragraph = new Paragraph();
        
        paragraph.id = id;
        paragraph.title = title;
        paragraph.taskRange = new Range(range);
        paragraph.topics = topics;

        return paragraph;
    }

    prepareChapter(title: string, paragraphs: Paragraph[])
    {
        let chapter = new Chapter;
     
        chapter.title = title;
        chapter.paragraphs = paragraphs;

        return chapter;
    }

    prepareToc()
    {
        let topics = [
            this.prepareTopic('I/1/tId1', 'Ограниченная функция', '381-400'),
            this.prepareTopic('I/1/tId1', 'Предел степенной функции с рациональным показателем', '435-470'),
            this.prepareTopic('IV/3/tId1', 'Нахождение функций по координатам', '197-200'),
            this.prepareTopic('III/2/tId2', 'Грани и наибольшие/наименьшие частичные пределы', '96-115')
        ];

        let paragraphs = [
            this.prepareParagraph('I/p1', 'Вещественные числа', '1-40', [topics[0], topics[1], topics[2]]),
            this.prepareParagraph('III/p2', 'Теория последовательностей', '41-150', []),
            this.prepareParagraph('VI/p3', 'Графическое изображение функции', '237-380', topics),
            this.prepareParagraph('V/p4', 'Непрерывность функции', '662-758', [topics[3]])
        ];

        let chapters = [
            this.prepareChapter('I. Введение в анализ', paragraphs),
            this.prepareChapter('II. Дифференциальное исчисление функций одной переменной', [paragraphs[0]]),
            this.prepareChapter('III. Неопределенный интеграл', [paragraphs[1], paragraphs[2]])
        ];

        return chapters;
    }
}