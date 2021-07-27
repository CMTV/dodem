import lz from 'lzutf8';

const lunr = require('lunr');
require('lunr-languages/lunr.stemmer.support')(lunr);
require('lunr-languages/lunr.ru')(lunr);

import { Process } from '@cmtv/processes';

import { CONFIG } from 'src/build/BuildConfig';
import { IO } from 'src/util/IO';
import { DB } from 'src/db/Db';
import { Translator } from 'src/translator/Translator';
import { Assets } from 'src/translator/Assets';

export class Search extends Process
{
    searchIndex: SearchIndex;

    processName() { return 'Сборка поискового индекса'; }

    process()
    {
        this.searchIndex = new SearchIndex;

        this.addBookRefs();
        this.addTaskRef();

        this.searchIndex.write();
    }

    addTaskRef()
    {
        let tasks = DB.select.tasks();

        tasks.forEach(task =>
        {
            this.searchIndex.addToHash(task.taskId);

            let tocParts = DB.select.taskTocItemsByNum(task.taskId);
            let location = tocParts.paragraph.title;
            if (tocParts.topic)
                location = tocParts.topic.title;

            let taskContent = '';

            let groupTask = DB.select.groupTask(task.taskId);
            
            if (groupTask)
                taskContent += groupTask.task + ' ';
            
            taskContent += task.task;

            this.searchIndex.addTaskItem(task.taskId, this.sanitizeStr(taskContent));

            /* */ Translator.MUSTACHE.assets = Assets.task(task.taskId);
            this.searchIndex.addTaskPreview(task.taskId, location, Translator.renderSimple(task.task));
        });
    }

    addBookRefs()
    {
        // TODO: Remove this piece of shit? Just use string ids?!
        let typeToIntMap = { 'definition': 0, 'theorem': 1, 'method': 2, 'other': 3 }

        let bookPages = DB.select.bookPages();

        bookPages.forEach(bookPage =>
        {
            let bookRef = new BookRef;

            bookRef.id =    bookPage.bookPageId;
            bookRef.title = bookPage.title;
            bookRef.type =  typeToIntMap[bookPage.type];
            bookRef.searchContent = this.sanitizeStr(bookPage.desc + ' ' + bookPage.content);

            this.searchIndex.addBookItem(bookRef);
        });
    }

    sanitizeStr(str: string)
    {
        return str.replace(/\$[\s\S]+?\$+/gm, '');
    }
}

//
//
//

export class BookRef
{
    type: number;
    id: string;
    title: string;
    searchContent: string;
}

export class SearchIndexItem
{
    ref: string;
    title: string;
    content: string;
}

export class SearchIndex
{
    hash = {};
    bookRefs = [];
    index: SearchIndexItem[] = [];

    addToHash(taskNum: number)
    {
        this.hash[taskNum] = {};
    }

    addTaskItem(taskNum: number, searchContent: string)
    {
        let item = new SearchIndexItem;
        item.ref = taskNum.toString();
        item.title = null;
        item.content = searchContent;

        this.index.push(item);
    }

    addBookItem(bookRef: BookRef)
    {
        this.bookRefs.push([bookRef.id, bookRef.type, bookRef.title]);

        let item = new SearchIndexItem;
        item.ref = (5000 + (this.bookRefs.length - 1)).toString();
        item.title = bookRef.title;
        item.content = bookRef.searchContent;

        this.index.push(item);
    }

    addTaskPreview(taskNum: number, location: string, content: string)
    {
        let preview = this.stringify({
            location: location,
            content: content
        });

        IO.writeFile(`dist/site/search/previews/${taskNum}.json`, preview);
    }

    genLunrIndex()
    {
        let that = this;

        return lunr(function ()
        {
            this.use(lunr.ru);

            this.ref('ref');
            this.field('title', { boost: 10 });
            this.field('content');

            that.index.forEach(item => this.add(item));
        });
    }

    stringify(json)
    {
        return !CONFIG.devMode ? JSON.stringify(json) : JSON.stringify(json, null, 4);
    }

    write()
    {
        let hash = this.stringify(this.hash);
        let searchIndex = this.stringify(this.genLunrIndex());
        let bookRefs = this.stringify(this.bookRefs);

        IO.writeFile('dist/site/search/hash.json.lz', lz.compress(hash, { outputEncoding: 'BinaryString' }));
        IO.writeFile('dist/site/search/index.json.lz', lz.compress(searchIndex, { outputEncoding: 'BinaryString' }));
        IO.writeFile('dist/site/search/bookRefs.json.lz', lz.compress(bookRefs, { outputEncoding: 'BinaryString' }));

        if (CONFIG.devMode)
        {
            IO.writeFile('dist/site/search/hash.json', hash);
            IO.writeFile('dist/site/search/index.json', searchIndex);
            IO.writeFile('dist/site/search/bookRefs.json', bookRefs);
        }
    }
}