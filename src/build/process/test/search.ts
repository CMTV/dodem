import { Process } from "@cmtv/processes";
import { BookRef, SearchIndex } from "../site/search";

export class Test_Search extends Process
{
    searchIndex: SearchIndex;

    processName() { return 'Построение тестового поискового индекса'; }
    
    process()
    {
        this.prepareSearchData();
        this.searchIndex.write();
    }

    prepareSearchData()
    {
        this.searchIndex = new SearchIndex;

        this.prepareBook();
        this.prepareTasks();
    }

    prepareBook()
    {
        let bookRef1 = new BookRef;
        bookRef1.id = 'id1';
        bookRef1.title = 'Уникальный заголовок номер один!';
        bookRef1.type = 0;
        bookRef1.searchContent = 'Содержимое книжной ссылки номер 1';
        this.searchIndex.addBookItem(bookRef1);

        let bookRef2 = new BookRef;
        bookRef2.id = 'id2';
        bookRef2.title = 'Кролик Жожо больше не придет';
        bookRef2.type = 1;
        bookRef2.searchContent = 'Трогательная история про маленького кролика';
        this.searchIndex.addBookItem(bookRef2);

        let bookRef3 = new BookRef;
        bookRef3.id = 'id3';
        bookRef3.title = 'Обычный нейромод. Тифоны умрут!';
        bookRef3.type = 2;
        bookRef3.searchContent = 'Интересная книга про компьютерную игру!';
        this.searchIndex.addBookItem(bookRef3);
    }

    prepareTasks()
    {
        this.searchIndex.addToHash(49);
        this.searchIndex.addToHash(3222);
        this.searchIndex.addToHash(111);

        this.searchIndex.addTaskItem(49, 'Это содержимое задачи по номером 49');
        this.searchIndex.addTaskItem(3222, 'Это особенно содержимое. Тут у нас есть ДНК. Высшие функции тут не работают!');
        this.searchIndex.addTaskItem(111, 'В этом доме мы живем. Меня зовут Петр, кстати!');

        this.searchIndex.addTaskPreview(49, 'Локация 1', 'Это содержимое задачи по номером 49');
        this.searchIndex.addTaskPreview(3222, 'Локация 2', 'Это особенно содержимое. Тут у нас есть ДНК. Высшие функции тут не работают!');
        this.searchIndex.addTaskPreview(111, 'Локация 3', 'В этом доме мы живем. Меня зовут Петр, кстати!');
    }
}