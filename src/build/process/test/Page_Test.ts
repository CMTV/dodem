import { Process } from "@cmtv/processes";

import { Translator } from "src/translator/Translator";
import { IO } from "src/util/IO";

import { TestPage } from "src/view/pages/TestPage";

export class Page_Test extends Process
{
    processName() { return 'Сборка тестовой страницы'; }

    process()
    {
        let page = new TestPage;

        Translator.MUSTACHE.assets = '/test/';
        page.content = Translator.renderAll(IO.readFile('data/test/content.md'));
        
        page.compile();
    }
}