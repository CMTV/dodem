import fs from 'fs';
import p from 'path';

import chokidar from 'chokidar';
import { glob } from 'glob';

export class IO
{
    static normalize(path: string)
    {
        return p.normalize(path);
    }

    static exists(path: string)
    {
        path = this.normalize(path);
        
        try { fs.statSync(path); return true; }
        catch (e) {}

        return false;
    }

    static writeFile(path: string, data: string|Buffer)
    {
        path = this.normalize(path);
        fs.mkdirSync(p.dirname(path), { recursive: true });
        fs.writeFileSync(path, data);
    }

    static readFile(path: string)
    {
        path = this.normalize(path);
        return fs.readFileSync(path, 'utf-8');
    }

    static removeFile(path: string)
    {
        path = this.normalize(path);
        return fs.unlinkSync(path);
    }

    static copyFile(srcPath: string, destPath: string)
    {
        srcPath = this.normalize(srcPath);
        destPath = this.normalize(destPath);

        fs.mkdirSync(p.dirname(destPath), { recursive: true });
        fs.copyFileSync(srcPath, destPath);
    }

    static globDir(pathToDir: string, ignore: string[] = [])
    {
        ignore = ignore.map(filename => pathToDir + filename);

        return glob
                .sync(this.normalize(pathToDir) + '**/*', { ignore: ignore, nodir: true })
                .map(filePath => filePath.replace(pathToDir, ''));
    }

    static readDir(path: string)
    {
        path = this.normalize(path);
        return fs.readdirSync(path);
    }

    static removeDir(path: string)
    {
        path = this.normalize(path);
        fs.rmSync(path, { recursive: true, force: true });
    }

    static clearDir(path: string)
    {
        path = this.normalize(path);
        this.removeDir(path);
        fs.mkdirSync(path);
    }

    static watch(paths: string[], callback: (filename: string) => void)
    {
        chokidar.watch(paths.map(path => IO.normalize(path))).on('change', (path) => { try { callback(path); } catch(e) { console.log(e); } });
    }
}