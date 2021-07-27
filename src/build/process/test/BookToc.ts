import { Process } from "@cmtv/processes";
import { BookToc } from "src/view/pages/BookToc";

export class Test_BookToc extends Process
{
    processName() { return 'Сборка тестового оглавления справочника'; }   

    process()
    {
        let bookToc = new BookToc;

        bookToc.elementary = [];
        bookToc.advanced = [];

        bookToc.compile();
    }
}