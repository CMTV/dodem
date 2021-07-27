import { Process } from "@cmtv/processes";
import { BookTocSingle } from "src/view/pages/BookTocSingle";
import { BookPageInfo, BookPageType } from "src/view/partials/book";
import { LocationPart } from "src/view/partials/location";

export class Test_BookTocSingle extends Process
{
    processName() { return 'Сборка тестовой страницы термов конкретной темы'; }

    process()
    {
        let page = new BookTocSingle;

        this.prepareLocation().forEach(locPart => page.location.parts.push(locPart));

        page.locId = 'bookPage1';
        page.terms = this.prepareTerms();

        page.compile();
    }

    prepareLocation()
    {
        let chapter = new LocationPart(null, 'Элементарная математика', 'База', null, false);
        let paragraph = new LocationPart(null, '§2 Прогрессии и последовательности', '§2', null, false);
        let topic = new LocationPart(null, 'Арифметическая прогрессия', null, null, false);

        return [chapter, paragraph, topic];
    }

    prepareTerms()
    {
        let term1 = new BookPageInfo;
        term1.id = 'id1';
        term1.type = BookPageType.DEFINITION;
        term1.title = 'Абсолютная величина';
        term1.desc = 'А это какое-нибудь длинное описание';

        let term2 = new BookPageInfo;
        term2.id = 'id2';
        term2.type = BookPageType.METHOD;
        term2.title = 'Неравенства с модулями';

        let term3 = new BookPageInfo;
        term3.id = 'id3';
        term3.type = BookPageType.THEOREM;
        term3.title = 'Теорема о двух милиционерах';
        term3.desc = 'Полезная теорема для доказательства сходимости "зажатых" последовательностей';

        return [
            term1,
            term2, 
            term3,
            term2,
            term3,
            term1
        ];
    }
}