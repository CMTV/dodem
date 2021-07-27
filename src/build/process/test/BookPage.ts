import { Process } from "@cmtv/processes";
import { BookPage } from "src/view/pages/BookPage";
import { BookPageInfo, BookPageType } from "src/view/partials/book";
import { LocationPart } from "src/view/partials/location";

export class Test_BookPage extends Process
{
    processName() { return 'Сборка тестовой страницы справочника'; }

    process()
    {
        let bookPage = new BookPage;

        bookPage.location.parts.push(new LocationPart('lol', 'Тестовая категория', null, null, false));

        bookPage.info.id =      'test/id/lol';
        bookPage.info.title =   'Элементарные пределы последовательностей';
        bookPage.info.desc =    'Удобная формула для вычисления пределов с помощью замены переменной';
        bookPage.info.type =    BookPageType.DEFINITION;

        bookPage.content = '<p>Это контент, детка!</p><p>Здесь у нас всякие теоремы, определения и куча всего другого</p>';

        bookPage.tasks = [24, 103, 4022, 5];

        bookPage.dependencies = this.prepareBookInfos();
        bookPage.dependents =   this.prepareBookInfos();

        bookPage.compile();
    }

    prepareBookInfos()
    {
        let info1 = new BookPageInfo;
        info1.id = 'idKek/1';
        info1.type = BookPageType.METHOD;
        info1.title = 'Прикольный прием номер один';
        info1.desc = 'А это его описание. Хотя, его может и не быть';

        let info2 = new BookPageInfo;
        info2.id = 'idKek/2';
        info2.type = BookPageType.THEOREM;
        info2.title = 'А вот это теорема без описания';

        let info3 = new BookPageInfo;
        info3.id = 'idKek/3';
        info3.type = BookPageType.OTHER;
        info3.title = 'А это что-то совершенно другое';
        info3.desc = 'Привет мир, вотафак примет'

        return [
            info1,
            info2,
            info3
        ];
    }
}