import SQLite from 'better-sqlite3';
import { Misc } from 'src/util/Misc';
import { BookPageInfo } from 'src/view/partials/book';
import { DB } from './Db';
import { BookPage, BookTocItem, Donater, GroupTask, HistoryItem, Solution, Solver, Task, TaskTocItem, TocItemType } from './Entity';

export class Select
{
    db: SQLite.Database;
    constructor(db: SQLite.Database) { this.db = db; }

    //

    taskTocItems(type: TocItemType, id: string = ''): TaskTocItem[]
    {
        let select = this.db.prepare(
            `SELECT toc_task_id as tocTaskId, title, task_start as taskStart, task_end as taskEnd FROM toc_task WHERE type = '${type}' AND toc_task_id LIKE '${id}%' ORDER BY display_order`
        );

        return select.all();
    }

    taskTocTitle(id: string): string
    {
        let select = this.db.prepare(
            `SELECT title FROM toc_task WHERE toc_task_id = '${id}'`
        );

        return select.get().title;
    }

    taskTocItemsByNum(taskNum: number)
    {
        let select = this.db.prepare(
            `SELECT * FROM toc_task WHERE task_start <= ${taskNum} AND task_end >= ${taskNum} ORDER BY display_order`
        );

        let results = select.all();

        let tocs =
        {
            chapter:    Misc.camelCaseKeys(results[0]),
            paragraph:  Misc.camelCaseKeys(results[1]),
            topic:      null
        };

        if (results.length === 3)
            tocs['topic'] = Misc.camelCaseKeys(results[2]);

        return tocs;
    }

    //
    // TASK
    //

    groupTask(taskNum: number): GroupTask
    {
        let select = this.db.prepare(
            `SELECT * FROM group_task WHERE task_start <= ${taskNum} AND task_end >= ${taskNum}`
        );

        return Misc.camelCaseKeys(select.get());
    }

    groupTasks(taskStart: number, taskEnd: number): GroupTask[]
    {
        let select = this.db.prepare(
            `SELECT * FROM group_task WHERE task_start >= ${taskStart} AND task_end <= ${taskEnd}`
        );

        return select.all().map(groupTask => Misc.camelCaseKeys(groupTask));
    }

    taskNums(): number[]
    {
        let select = this.db.prepare(
            `SELECT task_id FROM task`
        );

        return select.pluck().all();
    }

    task(taskNum: number): Task
    {
        let select = this.db.prepare(
            `SELECT * FROM task WHERE task_id = ${taskNum}`
        );

        let taskRaw = select.get();

        if (!taskRaw)
            return taskRaw;

        return Misc.camelCaseKeys({...taskRaw, ...{ attrs: JSON.parse(taskRaw.attrs) }});
    }

    tasks(): Task[]
    {
        let select = this.db.prepare(
            `SELECT * FROM task`
        );

        let tasks = [];
        select.all().forEach(dbTask => tasks.push(Misc.camelCaseKeys(dbTask)));

        return tasks;
    }

    //
    // SOLUTION
    //

    solutions(taskNum: number): Solution[]
    {
        let select = this.db.prepare(
            `SELECT * FROM solution WHERE task_id = ${taskNum} ORDER BY solution_id`
        );

        let solutions = [];

        select.all().forEach(dbSolution =>
        {
            let solution = Misc.camelCaseKeys(dbSolution);
            solution = {...solution, ...{ attrs: JSON.parse(solution.attrs) }}

            solutions.push(solution);
        });

        return solutions;
    }

    solutionTaskDeps(solutionId: number): number[]
    {
        let select = this.db.prepare(
            `SELECT dependency_id FROM solution_dependency WHERE solution_id = ${solutionId} AND type = 'task' ORDER BY dependency_id`
        );

        return select.pluck().all();
    }

    solutionHelpDeps(solutionId: number): string[]
    {
        let select = this.db.prepare(
            `SELECT dependency_id FROM solution_dependency WHERE solution_id = ${solutionId} AND type = 'help'`
        );

        return select.pluck().all();
    }

    //
    // SOLVER
    //

    solverCount(): number
    {
        let select = this.db.prepare(
            `SELECT COUNT(*) as count FROM solver`
        );

        return select.get().count;
    }

    solver(solverId: string): Solver
    {
        let select = this.db.prepare(
            `SELECT * FROM solver WHERE solver_id = '${solverId}'`
        );

        return Misc.camelCaseKeys(select.get());
    }

    solvers(): Solver[]
    {
        let select = this.db.prepare(
            `SELECT * FROM solver`
        );

        let solvers = [];
        select.all().forEach(solver => solvers.push(Misc.camelCaseKeys(solver)));

        return solvers;
    }

    solverTaskIds(solverId: string): number[]
    {
        let select = this.db.prepare(
            `SELECT task_id FROM solution WHERE solver_id = '${solverId}' ORDER BY task_id`
        );

        return select.pluck().all();
    }
    
    //
    // HISTORY
    //

    lastUpdateDate(): string
    {
        let select = this.db.prepare(
            `SELECT date FROM history ORDER BY date DESC LIMIT 1`
        );

        return select.get().date;
    }

    historyItems(): HistoryItem[]
    {
        let select = this.db.prepare(
            `SELECT * FROM history ORDER BY date DESC`
        );

        let historyItems = [];
        select.all().forEach(dbItem => historyItems.push(Misc.camelCaseKeys(dbItem)));

        return historyItems;
    }

    //
    // BOOK
    //

    bookPageCount(): number
    {
        let select = this.db.prepare(
            `SELECT COUNT(*) as count FROM book_page`
        );

        return select.get().count;
    }

    bookTocItems(type: TocItemType, id: string = ''): BookTocItem[]
    {
        let select = this.db.prepare(
            `SELECT toc_book_id, title, term_count FROM toc_book WHERE type = '${type}' AND toc_book_id LIKE '${id}%' ORDER BY display_order`
        );

        let items = [];
        select.all().forEach(dbItem => items.push(Misc.camelCaseKeys(dbItem)));

        return items;
    }

    bookTocTitle(id: string): string
    {
        let select = this.db.prepare(
            `SELECT title FROM toc_book WHERE toc_book_id = '${id}'`
        );

        return select.get().title;
    }

    bookPages(id: string = ''): BookPage[]
    {
        let select = this.db.prepare(
            `SELECT * FROM book_page WHERE book_page_id LIKE '${id}%' ORDER BY display_order`
        );

        let pages = [];
        select.all().forEach(dbItem => pages.push(Misc.camelCaseKeys(dbItem)));

        return pages;
    }

    bookPageIds(): string[]
    {
        let select = this.db.prepare(
            `SELECT book_page_id FROM book_page`
        );

        return select.pluck().all();
    }

    bookPage(id: string): BookPage
    {
        let select = this.db.prepare(
            `SELECT * FROM book_page WHERE book_page_id = '${id}'`
        );

        let rawPage = select.get();
        
        if (!rawPage)
            return rawPage;
        
        return Misc.camelCaseKeys(rawPage);
    }

    bookPageDependencies(id: string): string[]
    {
        let select = this.db.prepare(
            `SELECT page_id FROM book_page_dependency WHERE dependent_id = '${id}'`
        );

        return select.pluck().all();
    }

    bookPageDependents(id: string): string[]
    {
        let select = this.db.prepare(
            `SELECT dependent_id FROM book_page_dependency WHERE page_id = '${id}'`
        );

        return select.pluck().all();
    }

    bookPageTasks(bookPageId: string): number[]
    {
        let select = this.db.prepare(
            `SELECT task_id FROM solution INNER JOIN solution_dependency ON solution_dependency.solution_id = solution.solution_id WHERE solution_dependency.dependency_id = '${bookPageId}' GROUP BY task_id`
        );

        return select.pluck().all();
    }

    //
    // DONATER
    //

    donaters(): Donater[]
    {
        let select = this.db.prepare(
            `SELECT * FROM donater`
        );

        let donaters = [];
        select.all().forEach(dbDonater => donaters.push(Misc.camelCaseKeys(dbDonater)));
        
        return donaters;
    }
}