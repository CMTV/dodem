//
// UtilIO
//

import fs   from 'fs';
import p    from 'path';

const fsE = require('fs-extra');

export class UtilIO
{
    static fRemove(path: string): void
    {
        fs.unlinkSync(p.normalize(path));
    }

    static fExists(path: string): boolean
    {
        return fs.existsSync(p.normalize(path));
    }

    static fWrite(path: string, data: string): void
    {
        path = p.normalize(path);

        fs.mkdirSync(p.dirname(path), { recursive: true });
        fs.writeFileSync(path, data);
    }

    static fRead(path: string): string
    {
        path = p.normalize(path);

        return fs.readFileSync(path, { encoding: 'utf-8' });
    }

    static dirArr(path: string): string[]
    {
        path = p.normalize(path);

        return fs.readdirSync(path, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    }

    static dirScan(path: string): any
    {
        path = p.normalize(path);
        return fs.readdirSync(path);
    }

    static copy(from: string, to: string, exclude: string[] = []): void
    {
        from = p.normalize(from);
        to = p.normalize(to);

        if (from[from.length - 1] !== '/')
            from += '/';

        exclude = exclude.map((eItem) => from + p.normalize(eItem));

        fsE.copySync(from, to, { filter: (src: any, dest: any) => { return !exclude.includes(src); }});
    }
}

//
// UtilMd
//

export class UtilMd
{
    static metaRegexp = /^---$([\s\S]*?)^---$/gm;

    static getMeta(md: string): any
    {
        this.metaRegexp.lastIndex = 0;
        let match = this.metaRegexp.exec(md);

        return (match && match.index === 0) ? JSON.parse(match[1].replace(/\\/gm, "\\\\")) : {};
    }

    static getContent(md: string): string
    {
        return md.replace(this.metaRegexp, (match, meta, offset) => 
        {
            return (offset === 0) ? '' : match;
        });
    }
}

//
// Utility classes
//

export class Range
{
    start:  number;
    end:    number;

    constructor(range: any)
    {
        if (typeof range === 'string')
        {
            let arr = range.split('-').map((item) => +item.trim());

            this.start = arr[0];
            this.end = arr[1];
        }

        if (Array.isArray(range))
        {
            this.start = range[0];
            this.end = range[1];
        }
    }

    get(i: number) 
    {
        if (i >= this.length())
            throw new Error('Index out of range!');

        return this.start + i;
    }

    length(): number { return 1 + this.end - this.start; }

    includes(num: number): boolean { return (this.start <= num) && (num <= this.end); }

    iterate(callback: (current: number, i: number) => any)
    {
        for(let i = 0; i < this.length(); i++)
        {
            callback(this.get(i), i);
        }
    }

    equals(range: Range): boolean { return (this.start === range.start) && (this.end === range.end); }

    //

    toString(): string { return `${this.start} - ${this.end}`; }
    toArray(): number[] { return [this.start, this.end]; }
}