import { Process } from "@cmtv/processes";
import { DB } from "src/db/Db";
import { HistoryItem } from "src/db/Entity";
import { IO } from "src/util/IO";
import { Md } from "src/util/Md";

export class FillHistory extends Process
{
    processName() { return 'Добавление хронологии'; }

    process()
    {
        let historyItems = [];

        IO.readDir('data/history').forEach(historyFile =>
        {
            let data = Md.parse(IO.readFile('data/history/' + historyFile));
            let historyItem = new HistoryItem;

            historyItem.date =      historyFile.replace('.md', '');
            historyItem.content =   data.content; // TODO: TRANSLATOR

            historyItem.taskAdd =   data.config?.tasks?.add;
            historyItem.taskEdit =  data.config?.tasks?.edit;

            historyItem.bookAdd =   data.config?.book?.add;
            historyItem.bookEdit =  data.config?.book?.edit;

            historyItems.push(historyItem);
        });

        DB.transaction(() => { historyItems.forEach(historyItem => DB.insert.historyItem(historyItem)); });
    }
}