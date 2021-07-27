import { glob } from "glob";

import { IO } from "src/util/IO";
import { Md } from "src/util/Md";

glob.sync('data/history/*.md').forEach(historyFile =>
{
    let content = IO.readFile(historyFile);
    let newName = historyFile.replace(/-/gm, '.');

    IO.writeFile(newName, content);
    IO.removeFile(historyFile);
});

function convertProtoId(oldId: string)
{
    if (oldId.split('/').length === 1)
        return 'common/' + oldId;

    let replaceMap = {
        'f/limits/continuity': 'f-continuity',
        'f/limits': 'f-lim',

        'sequences/limits': 'sequence-lim',
        'sequences': 'sequence'
    }

    Object.keys(replaceMap).forEach(replaceKey => oldId = oldId.replace(replaceKey, replaceMap[replaceKey]));

    return oldId;
}