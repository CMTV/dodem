import { ProcessGroup } from "@cmtv/processes";
import { Test_BookPage } from "../process/test/BookPage";
import { Test_BookToc } from "../process/test/BookToc";
import { Test_BookTocSingle } from "../process/test/BookTocSingle";
import { Test_Donaters } from "../process/test/Donaters";
import { Test_History } from "../process/test/History";
import { Test_Index } from "../process/test/Index";
import { Test_Search } from "../process/test/search";
import { Test_Solvers } from "../process/test/Solvers";
import { Test_TaskPage } from "../process/test/task";
import { Test_TaskToc } from "../process/test/taskToc";
import { Test_TaskTocSingle } from "../process/test/taskTocSingle";

export class TestSite extends ProcessGroup
{
    groupName() { return 'Тестовый сайт'; }

    processes()
    {
        return [
            new Test_Search,

            new Test_Index,
            new Test_History,
            new Test_Solvers,
            new Test_Donaters,

            new Test_TaskPage,
            new Test_TaskToc,
            new Test_TaskTocSingle,

            new Test_BookPage,
            new Test_BookToc,
            new Test_BookTocSingle,
        ];
    }
}