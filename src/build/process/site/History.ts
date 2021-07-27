import { IO } from "src/util/IO";
import { HistoryBlock } from "src/view/pages/History";

export function writeHistoryBlock(historyBlock: HistoryBlock)
{
    IO.writeFile('dist/history/' + historyBlock.date + '.html', historyBlock.content);
}