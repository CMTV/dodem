import { SearchResults, WorkerResponse } from "../workers/search";

export class WorkerRequest
{
    id: number;
    searchQuery: string;

    constructor(id: number, searchQuery: string)
    {
        this.id = id;
        this.searchQuery = searchQuery;
    }
}

class SearchWorker
{
    private RID = 0;
    private worker: Worker;

    constructor(callback: (data: string|SearchResults) => void)
    {
        this.worker = new Worker('/site/scripts/workers/search.js');

        this.worker.addEventListener('message', (e) =>
        {
            let response: WorkerResponse = e.data;

            if (response.id !== this.RID)
                return;
            
            callback(response.data);
        });
    }

    request(searchQuery: string)
    {
        this.worker.postMessage(new WorkerRequest(++this.RID, searchQuery));
    }
}

//
// Работа с разметкой
//

class SearchToggle
{
    showing = false;

    navElem: Element;
    searchElem: Element;
    searchInput: HTMLInputElement;

    constructor()
    {
        this.navElem =      document.querySelector('.site > header nav .nav-item.search');
        this.searchElem =   document.querySelector('.site > header .searchContainer');
        this.searchInput =  this.searchElem.querySelector('.inputContainer input');

        this.setupToggleBehaviour();
    }

    setupToggleBehaviour()
    {
        let that = this;

        function globalClick(e)
        {            
            let shouldClose = true;

            if (that.searchElem.contains(e.target))
                shouldClose = false;

            if (shouldClose)
            {
                that.toggle(false);
                window.removeEventListener('click', globalClick);
            }
        }

        //

        this.navElem.addEventListener('click', (e) =>
        {
            if (this.showing)
                return;

            e.stopPropagation();

            this.toggle(true);
            window.addEventListener('click', globalClick);
        });
    }

    toggle(show: boolean)
    {
        this.showing = show;
        this.navElem.classList.toggle('_active', show);
        this.searchElem.classList.toggle('_showing', show);

        if (show)
            this.searchInput.focus();
    }
}

class SearchInput
{
    input: HTMLInputElement;
    previousVal: string = '';
    timeout = null;
    callback: (searchQuery: string) => void;

    constructor(rootElem: Element)
    {
        this.input = rootElem.querySelector('.inputContainer input');
        this.input.addEventListener('input', () =>
        {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() =>
            {
                let value = this.input.value.trim();

                if (value !== this.previousVal)
                    this.callback(value);
                
                this.previousVal = value;
            }, 200);
        });
    }
}

class SearchPaneTask
{
    location: Element;
    content: Element;
    goto: Element;

    constructor(rootElem: Element)
    {
        this.location = rootElem.querySelector('.location span');
        this.content = rootElem.querySelector('.taskContent');
        this.goto = rootElem.querySelector('a.goto');
    }

    setupPreview(taskNum: string, preview: { location: string, content: string })
    {
        this.location.innerHTML = preview.location;
        this.content.innerHTML = preview.content;
        this.goto.setAttribute('href', '/tasks/' + taskNum);
    }
}

class SearchPaneResults
{
    switcher: Element;
    paneElem: Element;
    tasksElem: Element;
    booksElem: Element;

    prefer = '_task';

    constructor(rootElem: Element)
    {
        this.switcher = rootElem.querySelector('.inputContainer .resultSwitcher');
        this.switcher.addEventListener('click', () =>
        {
            let hasTask = this.switcher.classList.contains('_task');

            this.prefer = hasTask ? '_book' : '_task';

            ['_task', '_book'].forEach(className =>
            {
                this.switcher.classList.remove(className);
                this.paneElem.classList.remove(className);
            });

            [this.switcher, this.paneElem].forEach(elem => elem.classList.add(hasTask ? '_book' : '_task'));
        });

        this.paneElem = rootElem.querySelector('.pane.pane--results');
        this.tasksElem = this.paneElem.querySelector('.taskResults > .scrollContainer');
        this.booksElem = this.paneElem.querySelector('.bookResults');
    }

    setupResults(results: SearchResults)
    {
        ['_single', '_task', '_book'].forEach(className =>
        {
            this.switcher.classList.remove(className);
            this.paneElem.classList.remove(className);
        });

        let hasTask = results.taskNum > 0;
        let hasBook = results.bookNum > 0;

        if (!hasTask || !hasBook)
            [this.switcher, this.paneElem].forEach(elem => elem.classList.add('_single'));

        [this.switcher, this.paneElem].forEach(elem =>
        {
            if (this.prefer === '_task') elem.classList.add(hasTask ? '_task' : '_book');
            else elem.classList.add(hasBook ? '_book' : '_task');
        });

        this.tasksElem.innerHTML = results.taskHTML;
        this.booksElem.innerHTML = results.bookHTML;
    }
}

export class Search
{
    worker: SearchWorker;

    rootElem: Element;

    toggle: SearchToggle;
    input:  SearchInput;

    pendingTask: boolean;

    // Panes
    taskPane: SearchPaneTask;
    resultsPane: SearchPaneResults;

    constructor()
    {
        this.worker = new SearchWorker(data => this.searchResponse(data));

        let header = document.querySelector('.site > header');
        this.rootElem = header.querySelector('.searchContainer');

        this.toggle = new SearchToggle;

        this.input = new SearchInput(this.rootElem);
        this.input.callback = searchQuery => this.requestSearch(searchQuery);
        
        this.taskPane = new SearchPaneTask(this.rootElem);
        this.resultsPane = new SearchPaneResults(this.rootElem);
    }

    requestSearch(searchQuery: string)
    {
        this.pendingTask = false;

        if (searchQuery === '')
        {
            this.setState(null);
            return;
        }

        this.setState('loading');
        this.worker.request(searchQuery);
    }

    searchResponse(data: string|SearchResults)
    {
        if (typeof data === 'string')
        {
            this.pendingTask = true;

            fetch('/site/search/previews/' + data + '.json')
            .then(response => response.json())
            .then(preview =>
            {
                if (this.pendingTask)
                {
                    this.taskPane.setupPreview(data, preview);
                    this.setState('task');
                }
            });
            
            return;
        }

        if (data.bookNum === 0 && data.taskNum === 0)
        {
            this.setState('error');
            return;
        }

        this.resultsPane.setupResults(data);
        this.setState('results');
    }

    setState(state: string)
    {
        ['loading', 'error', 'task', 'results'].forEach(state => this.rootElem.classList.remove('state--' + state));

        if (state)
            this.rootElem.classList.add('state--' + state);
    }
}