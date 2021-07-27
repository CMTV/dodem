import { Process } from "@cmtv/processes";
import { DB } from "src/db/Db";
import { Translator } from "src/translator/Translator";
import { AddEditCounter, History as HistoryPage, HistoryBlock } from "src/view/pages/History";
import { writeHistoryBlock } from "./History";

export class Page_History extends Process
{
    processName() { return 'Сборка хронологии'; }

    process()
    {
        let page = new HistoryPage;
        let historyItems = DB.select.historyItems();
        let historyBlocks = [];

        historyItems.forEach(historyItem =>
        {
            let historyBlock = new HistoryBlock;

            historyBlock.date =     historyItem.date;
            historyBlock.content =  Translator.renderSimple(historyItem.content);
            historyBlock.taskData = new AddEditCounter(historyItem.taskAdd, historyItem.taskEdit);
            historyBlock.bookData = new AddEditCounter(historyItem.bookAdd, historyItem.bookEdit);
        
            historyBlocks.push(historyBlock);
        });

        historyBlocks.forEach(block => writeHistoryBlock(block));

        page.historyBlocks = historyBlocks;
        page.compile();
    }
}