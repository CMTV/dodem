import { Process } from "@cmtv/processes";
import { glob } from "glob";

import { Preprocessor } from "src/util/Preprocessor";

export class PreScripts extends Process
{
    processName() { return 'Компиляция скриптов'; }
    
    process()
    {
        // Глобальные скрипты (поиск, цитаты и т.д.)
        Preprocessor.buildScript('global.ts', 'global.js');

        // Страница задачи
        Preprocessor.buildScript('pages/task.ts', 'task.js');

        // Веб воркеры
        glob.sync('site/_scripts/workers/*.ts').forEach(worker =>
        {
            worker = worker.replace('site/_scripts/', '');
            Preprocessor.buildScript(worker, worker.replace('.ts', '.js'));
        });
    }
}

export class PreStyles extends Process
{
    processName() { return 'Компиляция стилей'; }

    process()
    {
        // Глобальная таблица стилей
        Preprocessor.buildStyle('global/global.scss', 'global.css');
    }
}