import chalk from 'chalk';

import { BuildConfig, SET_CONFIG } from 'src/build/BuildConfig';
import { PreSite } from 'src/build/group/PreSite';
import { TestSite } from 'src/build/group/TestSite';
import { Page_Test } from 'src/build/process/test/Page_Test';
import { DB } from 'src/db/Db';
import { IO } from 'src/util/IO';

IO.watch(['data', 'site'], () =>
{
    let config = new BuildConfig;
        config.devMode = true;

    SET_CONFIG(config);

    DB.init();

    console.log('\n' + chalk.bold.magenta('Запуск `watch` сборки!'));

    (new PreSite).run();
    
    //(new TestSite).run();
    (new Page_Test).run();

    console.log('\n' + chalk.magenta('Сборка завершена!'));
});