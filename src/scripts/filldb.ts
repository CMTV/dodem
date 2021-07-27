import chalk from 'chalk';

import { CreateFromScheme } from 'src/build/process/db/CreateFromScheme';
import { FillBookPages } from 'src/build/process/db/fill/FillBookPages';
import { FillBookToc } from 'src/build/process/db/fill/FillBookToc';
import { FillDonaters } from 'src/build/process/db/fill/FillDonaters';
import { FillGroupTasks } from 'src/build/process/db/fill/FillGroupTasks';
import { FillHistory } from 'src/build/process/db/fill/FillHistory';
import { FillSolutions } from 'src/build/process/db/fill/FillSolutions';
import { FillSolvers } from 'src/build/process/db/fill/FillSolvers';
import { FillTasks } from 'src/build/process/db/fill/FillTasks';
import { FillTaskToc } from 'src/build/process/db/fill/FillTaskToc';
import { DB } from 'src/db/Db';

console.log('\n' + chalk.bold.magenta('Начат процесс заполнения базы данных!'));

(new CreateFromScheme).run();

DB.init();

(new FillTaskToc).run();
(new FillBookToc).run();

(new FillSolvers).run();

(new FillGroupTasks).run();
(new FillTasks).run();
(new FillSolutions).run();

(new FillBookPages).run();

(new FillHistory).run();

(new FillDonaters).run();

console.log('\n' + chalk.magenta('База данных заполнена!'));