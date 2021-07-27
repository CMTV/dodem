import SQLite from 'better-sqlite3';

import { BookPage, BookPageDependency, BookTocItem, Donater, GroupTask, HistoryItem, Solution, SolutionDependency, Solver, Task, TaskTocItem } from './Entity';

export class Insert
{
    db: SQLite.Database;
    constructor(db: SQLite.Database) { this.db = db; }

    //
    // TOC
    //

    taskTocItem(tocItem: TaskTocItem)
    {
        const insert = this.db.prepare(
            'INSERT INTO toc_task (toc_task_id, display_order, type, title, task_start, task_end) VALUES (@tocTaskId, @order, @type, @title, @taskStart, @taskEnd)'
        );

        insert.run({...tocItem});
    }

    bookTocItem(tocItem: BookTocItem)
    {
        const insert = this.db.prepare(
            'INSERT INTO toc_book (toc_book_id, display_order, title, type) VALUES (@tocBookId, @order, @title, @type)'    
        );

        insert.run({...tocItem});
    }

    //
    // TASK
    //

    groupTask(groupTask: GroupTask)
    {
        const insert = this.db.prepare(
            'INSERT INTO group_task (task_start, task_end, task) VALUES (@taskStart, @taskEnd, @task)'
        );

        insert.run({...groupTask});
    }

    task(task: Task)
    {
        const insert = this.db.prepare(
            'INSERT INTO task (task_id, task, task_seo, hint, answer, note, attrs, difficulty) VALUES (@taskId, @task, @taskSeo, @hint, @answer, @note, @attrs, @difficulty)'
        );

        let toInsert = {...task, ...{ attrs: JSON.stringify(task.attrs) }}

        insert.run(toInsert);
    }

    //
    // SOLUTION
    //

    solution(solution: Solution)
    {
        const insert = this.db.prepare(
            'INSERT INTO solution (solution_id, task_id, solver_id, hint, solution, attrs) VALUES (@solutionId, @taskId, @solverId, @hint, @solution, @attrs)'
        );

        let toInsert = {...solution, ...{ attrs: JSON.stringify(solution.attrs) }}
    
        insert.run(toInsert);
    }

    solutionDependency(solutionDependency: SolutionDependency)
    {
        /* IGNORE!!! Is it Okay? */
        const insert = this.db.prepare(
            'INSERT OR IGNORE INTO solution_dependency (solution_id, dependency_id, type) VALUES (@solutionId, @dependencyId, @type)'
        );

        insert.run({...solutionDependency});
    }

    //
    //
    //

    solver(solver: Solver)
    {
        const insert = this.db.prepare(
            'INSERT INTO solver (solver_id, name, slogan, link, bio) VALUES (@solverId, @name, @slogan, @link, @bio)'
        );

        insert.run({...solver});
    }

    //
    // HISTORY
    //

    historyItem(historyItem: HistoryItem)
    {
        const insert = this.db.prepare(
            'INSERT INTO history (date, content, task_add, task_edit, book_add, book_edit) VALUES (@date, @content, @taskAdd, @taskEdit, @bookAdd, @bookEdit)'
        );

        insert.run({...historyItem});
    }

    //
    // BOOK
    //

    bookPage(bookPage: BookPage)
    {
        const insert = this.db.prepare(
            'INSERT INTO book_page (book_page_id, type, title, desc, content, display_order, seo_desc) VALUES (@bookPageId, @type, @title, @desc, @content, @order, @seoDesc)'
        );

        insert.run({...bookPage});
    
        let updateId = '';

        bookPage.bookPageId.split('/').forEach((idPart, i, arr) =>
        {
            if (i === arr.length - 1) return; // Пропускаем ID страницы

            if (i === 0)
            {
                updateId += idPart + '/';
                return;
            }

            updateId += (i > 1 ? '/' : '') + idPart;

            this.db.prepare(
                `UPDATE toc_book SET term_count = term_count + 1 WHERE toc_book_id = '${updateId}'`
            ).run();
        });
    }

    bookPageDependency(bookPageDependency: BookPageDependency)
    {
        /* IGNORE!!! Is it Okay? */
        const insert = this.db.prepare(
            `INSERT OR IGNORE INTO book_page_dependency (page_id, dependent_id) VALUES (@pageId, @dependentId)`
        );

        insert.run({...bookPageDependency});
    }

    //
    // DONATER
    //

    donater(donater: Donater)
    {
        const insert = this.db.prepare(
            `INSERT INTO donater (donater_id, name, tier, link, slogan, about) VALUES (@donaterId, @name, @tier, @link, @slogan, @about)`
        );

        insert.run({...donater});
    }
}