import { Process } from "@cmtv/processes";
import { glob } from "glob";

import path from "path";

import { IO } from "src/util/IO";

export class Reset extends Process 
{
    processName() { return 'Очистка папки `dist`'; }
    process() { IO.clearDir('dist'); }
}

export class MoveSiteFiles extends Process
{
    processName() { return 'Перемещение статических файлов сайта'; }
    
    process()
    {
        glob.sync('site/**/*', { ignore: 'site/_*/**', nodir: true }).forEach(
            filePath => IO.copyFile(filePath, 'dist/' + filePath)
        );
    }
}

export class MoveKatexFiles extends Process
{
    processName() { return 'Перемещение файлов KaTeX'; }

    process()
    {
        let katexDir = path.dirname(require.resolve('katex/package.json')) + '/dist/';
        
        IO.copyFile(katexDir + 'katex.min.css', 'dist/site/vendor/katex/katex.min.css');
        glob.sync(katexDir + 'fonts/**/*').forEach(
            fontFile => IO.copyFile(fontFile, 'dist/site/vendor/katex/fonts/' + path.basename(fontFile))
        );
    }
}

export class MoveCNAME extends Process
{
    processName() { return 'Перемещение файла CNAME'; }

    process() { IO.copyFile('site/_CNAME', 'dist/CNAME'); }
}