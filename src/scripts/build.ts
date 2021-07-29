import chalk from 'chalk';

import { BuildConfig, SET_CONFIG } from 'src/build/BuildConfig';
import { PreSite } from 'src/build/group/PreSite';
import { Page_Book } from 'src/build/process/site/Page_Book';
import { Page_BookToc } from 'src/build/process/site/Page_BookToc';
import { Page_BookTocSingle } from 'src/build/process/site/Page_BookTocSingle';
import { Page_History } from 'src/build/process/site/Page_History';
import { Page_Solvers } from 'src/build/process/site/Page_Solvers';
import { Page_Task } from 'src/build/process/site/Page_Task';
import { TaskToc } from 'src/build/process/site/TaskToc';
import { Page_TaskTocSingle } from 'src/build/process/site/Page_TaskTocSingle';
import { DB } from 'src/db/Db';
import { Page_Index } from 'src/build/process/site/Page_Index';
import { Search } from 'src/build/process/site/search';
import { Page_Donaters } from 'src/build/process/site/Page_Donate';
import { SITEMAP, WriteSitemap } from 'src/build/process/site/Sitemap';

let config = new BuildConfig;
    config.devMode = false;

SET_CONFIG(config);

console.log('\n' + chalk.bold.magenta('Запуск сборки сайта!'));

DB.init();
SITEMAP.init();

(new PreSite).run();

(new TaskToc).run();
(new Page_TaskTocSingle).run();
// (new Page_Task).run(); // Очень длинный процесс!

(new Page_Solvers).run();

(new Page_History).run();

(new Page_BookToc).run();
(new Page_BookTocSingle).run();
(new Page_Book).run();

(new Page_Index).run();

(new Page_Donaters).run();

//
//
//

(new Search).run();
(new WriteSitemap).run();

console.log('\n' + chalk.magenta('Сборка завершена!'));