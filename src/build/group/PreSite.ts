import { ProcessGroup } from "@cmtv/processes";

import { MoveRootFiles, MoveKatexFiles, MoveSiteFiles, Reset } from "../process/site/base";
import { PreScripts, PreStyles } from "../process/site/preprocess";

export class PreSite extends ProcessGroup
{
    groupName() { return 'Основа сайта'; }

    processes()
    {
        return [
            new Reset,
            new MoveSiteFiles,
            new MoveKatexFiles,
            new MoveRootFiles,
            new PreStyles,
            new PreScripts
        ];
    }
}