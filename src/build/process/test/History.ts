import { Process } from "@cmtv/processes";
import { AddEditCounter, History, HistoryBlock } from "src/view/pages/History";
import { writeHistoryBlock } from "../site/History";

export class Test_History extends Process
{
    processName() { return 'Сборка тестовой хронологии'; }

    process()
    {
        let historyList = new History;

        for (let i = 0; i < 10; i++)
        {
            historyList.historyBlocks.push(
                this.prepareHistoryBlock('10.06.2021', new AddEditCounter(9, 10), new AddEditCounter(0, 5)),
                this.prepareHistoryBlock('01.03.2019', new AddEditCounter(0, 0), new AddEditCounter(48, 20)),
                this.prepareHistoryBlock('22.04.1998', new AddEditCounter(10, 3), new AddEditCounter(0, 0))
            );
        }

        historyList.historyBlocks.forEach(block => writeHistoryBlock(block));

        historyList.compile();
    }

    prepareHistoryBlock(date: string, taskData: AddEditCounter, bookData: AddEditCounter)
    {
        let historyBlock = new HistoryBlock;
        historyBlock.date = date;
        historyBlock.content = 'Это <strong>исторический</strong> <span style="color: red;">контент</span> ' + date;
        historyBlock.taskData = taskData;
        historyBlock.bookData = bookData;

        return historyBlock;
    }
}