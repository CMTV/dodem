import { UtilIO, UtilMd } from "./Util";
import { Translator } from "./Translator";

export interface IHistoryItem
{
    date: string;
    content: string;
    meta: {
        diff:
        {
            add: number[],
            edit: number[]
        }
    }
}

export function getHistoryItem(historyItemPath: string): IHistoryItem
{
    let historyItem = <IHistoryItem> {};

    // Date
    {
        let date = new Date((historyItemPath.split('/').pop()).slice(0, -3));

        let year =  new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
        let day =   new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    
        historyItem.date = `${day}.${month}.${year}`;
    }

    // Meta + content
    {
        let rawContent = UtilIO.fRead(historyItemPath);

        let meta = UtilMd.getMeta(rawContent);
        let content = Translator.renderAll(UtilMd.getContent(rawContent));

        console.log(content);

        historyItem.content = content;
        historyItem.meta = meta;
    }

    return historyItem;
}