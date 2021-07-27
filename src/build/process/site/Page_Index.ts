import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Index } from "src/view/pages/Index";

export class Page_Index extends Process
{
    processName() { return 'Сборка главной страницы'; }

    process()
    {
        let page = new Index;

        page.setupProgress(DB.select.taskNums());
        
        page.helpNum =      DB.select.bookPageCount();
        page.solverNum =    DB.select.solverCount();

        page.lastUpdate =   DB.select.lastUpdateDate();

        page.compile();
    }
}