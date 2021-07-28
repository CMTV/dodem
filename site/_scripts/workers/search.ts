import { WorkerRequest } from "../includes/search";

importScripts(
    '/site/vendor/lzutf8/lzutf8.min.js',
    '/site/vendor/lunr/lunr.min.js',
    '/site/vendor/lunr/lunr-stemmer.min.js',
    '/site/vendor/lunr/lunr-ru.min.js'
);

declare var LZUTF8, lunr;

class Search
{
    private ready = false;

    private fetchHash:      Promise<any> = null;
    private fetchIndex:     Promise<any> = null;
    private fetchBookRefs:  Promise<any> = null;

    hash;
    bookRefs;
    index;

    constructor()
    {
        this.fetchHash =        this.fetchCompressed('/site/search/hash.json.lz');
        this.fetchIndex =       this.fetchCompressed('/site/search/index.json.lz');
        this.fetchBookRefs =    this.fetchCompressed('/site/search/bookRefs.json.lz');
    }

    private fetchCompressed(url: string)
    {
        return fetch(url).then(response => response.text());
    }

    private decompressJSON(compressed: string)
    {
        return JSON.parse(LZUTF8.decompress(compressed, { inputEncoding: 'BinaryString' }));
    }

    whenReady(callback)
    {
        if (this.ready)
        {
            callback();
            return;
        }

        Promise.all([this.fetchHash, this.fetchIndex, this.fetchBookRefs]).then(values =>
        {   
            this.hash =     this.decompressJSON(values[0]);
            this.index =    lunr.Index.load(this.decompressJSON(values[1]));
            this.bookRefs = this.decompressJSON(values[2]);;

            this.ready = true;
            this.whenReady(callback);
        });
    }     
}

export class SearchResults
{
    bookNum: number = 0;
    taskNum: number = 0;

    bookHTML = '';
    taskHTML = '';

    constructor(lunrResults)
    {
        lunrResults.forEach(lResult =>
        {
            let ref = +lResult.ref;

            if (ref < 5000)
            {
                this.taskNum++;
                this.taskHTML += (new TaskSearchResult(ref)).toHTML();
            }
            else
            {
                this.bookNum++;

                let bookRef = new BookRef(search.bookRefs[ref - 5000]);
                this.bookHTML += (new BookSearchResult(bookRef)).toHTML();
            }
        });
    }
}

abstract class SearchResult
{
    link: string;
    abstract toHTML(): string;
}

class TaskSearchResult extends SearchResult
{
    taskNum: number;

    constructor(taskNum: number)
    {
        super();
        this.taskNum = taskNum;
        this.link = '/tasks/' + taskNum;
    }

    toHTML()
    {
        return `<a class="taskResult" href="${this.link}" title="К задаче ${this.taskNum}">${this.taskNum}</a>`;
    }
}

class BookSearchResult extends SearchResult
{
    type: BookRefType;
    title: string;

    constructor(bookRef: BookRef)
    {
        super();
        this.link = '/book/' + bookRef.id;
        this.type = BookRefType.MAP[bookRef.type];
        this.title = bookRef.title;
    }

    toHTML()
    {
        return `
            <a href="${this.link}" class="bookResult">
                <div class="type type--${this.type.name}">${this.type.content}</div>
                <span>${this.title}</span>
            </a>
        `;
    }
}

class BookRefType
{
    static MAP = {
        0: new BookRefType('definition', 'О'),
        1: new BookRefType('theorem', 'Т'),
        2: new BookRefType('method', 'М'),
        3: new BookRefType('other', 'Д')
    }

    name: string;
    content: string;

    constructor(typeName: string, content: string) { this.name = typeName; this.content = content; }
}

class BookRef
{
    id: string;
    type: string;
    title: string;

    constructor(arrBookRef)
    {
        this.id =       arrBookRef[0];
        this.type =     arrBookRef[1];
        this.title =    arrBookRef[2];
    }
}

export class WorkerResponse
{
    id: number;
    data: string|SearchResults;
}

//
//
//

let worker = (self as any as Worker);
let search = new Search;

onmessage = (e) =>
{
    let request: WorkerRequest = e.data;

    search.whenReady(() =>
    {
        let response = new WorkerResponse;
        response.id = request.id;

        if (request.searchQuery in search.hash)
            response.data = request.searchQuery;
        else
        {
            let terms = [];

            request.searchQuery.split(' ').forEach(term =>
            {
                terms.push(term + '^10');
                terms.push(term + '*');
            });

            let lunrResults = search.index.search(terms.join(' '));
            //console.log(lunrResults);

            //var waitTill = new Date(new Date().getTime() + 2 * 1000);
            //while(waitTill > new Date()){}

            response.data = new SearchResults(lunrResults);
        }

        worker.postMessage(response);
    });
};