import { Process } from "@cmtv/processes";
import { Index } from "src/view/pages/Index";

export class Test_Index extends Process
{
    processName() { return 'Сборка тестовой главной страницы'; }
    
    process()
    {
        let index = new Index;

        index.lastUpdate = '08.06.2021';

        index.helpNum = 85;
        index.solvedNum = 1204;
        index.solverNum = 11;

        index.setupProgress([1,2,4]);
        
        index.compile();
    }
}