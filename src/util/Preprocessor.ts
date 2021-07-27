import pug from 'pug';
import * as esbuild from 'esbuild';
import sass from 'sass';

import { IO } from "./IO";
import { CONFIG } from 'src/build/BuildConfig';

export class Preprocessor
{
    static renderPug(src: string, view: any)
    {
        let baseDir = IO.normalize('site/_layout');
        let srcPath = IO.normalize(baseDir + '/' + src);

        let pugOptions: pug.Options =
        {
            filename: srcPath,
            basedir: baseDir,
            cache: !CONFIG.devMode
        };

        return pug.renderFile(srcPath, {...pugOptions, ...view});
    }

    static compilePug(src: string, view: any, dest: string)
    {
        let html = this.renderPug(src, view);
        let destPath = IO.normalize('dist/' + dest);

        IO.writeFile(destPath, html);

        if (CONFIG.devMode)
            IO.writeFile(destPath + '.json', JSON.stringify(view, null, 4));
    }

    static buildScript(src: string, dest: string)
    {
        let srcPath =   IO.normalize('site/_scripts/' + src);
        let destPath =  IO.normalize('dist/site/scripts/' + dest);

        esbuild.buildSync({
            entryPoints: [srcPath],
            outfile: destPath,
            sourcemap: CONFIG.devMode,
            minify: !CONFIG.devMode,
            charset: 'utf8',
            bundle: true
        });
    }

    static buildStyle(src: string, dest: string)
    {
        let srcPath =   IO.normalize('site/_styles/' + src);
        let destPath =  IO.normalize('dist/site/styles/' + dest);

        let cssObj = sass.renderSync({
            file: srcPath,
            outFile: destPath,
            outputStyle: CONFIG.devMode ? 'expanded' : 'compressed',
            sourceMap: CONFIG.devMode,
            includePaths: ['site/_styles']
        });

        IO.writeFile(destPath, cssObj.css);

        if (CONFIG.devMode)
            IO.writeFile(destPath + '.map', cssObj.map);
    }
}