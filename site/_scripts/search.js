const SearchState =
{
    NORMAL:     'normal',
    NOTSOLVED:  'notSolved',
    WTF:        'wtf',
    SUCCESS:    'success'
}

class Search
{
    searchElem = null;

    state = SearchState.NORMAL;
    searchInput = '';

    taskNum = null;

    timers =
    {
        placeholder: null,
        input: null
    }

    constructor(searchElem)
    {
        this.searchElem = searchElem;
        this.setupSearchInput();

        window.addEventListener("resize", () =>
        {
            clearTimeout(this.timers.placeholder);
            this.timers.placeholder = setTimeout(() => { this.adjustPlaceholder(); }, 100);
        });

        this.adjustPlaceholder();
    }

    adjustPlaceholder()
    {
        this.searchElem.querySelector("input").placeholder = (window.innerWidth <= 450) ? 'Номер задачи (1 - 4462)' : 'Введите номер задачи (от 1 до 4462)';
    }

    setupSearchInput()
    {
        let that = this;
        let inputElem = this.searchElem.querySelector("input");

        inputElem.addEventListener("input", function ()
        {
            let newValue = this.value.trim();

            if (newValue !== that.searchInput)
            {
                that.searchInput = newValue;
                that.inputChange();
            }
        });
    }

    inputChange()
    {
        clearTimeout(this.timers.input);
        this.timers.input = setTimeout(() => { this.updateState(); }, 200);
    }

    updateState()
    {
        this.clearState();

        if (this.searchInput === '')
        {
            this.setState(SearchState.NORMAL);
            return;
        }

        if (!/^\d+$/.test(this.searchInput))
        {
            this.setState(SearchState.WTF);
            return;
        }

        let taskNum = +this.searchInput;
        this.taskNum = taskNum;

        if (!(taskNum >= 1 && taskNum <= 4462))
        {
            this.setState(SearchState.WTF);
            return;
        }

        if (HASH[taskNum] === undefined)
        {
            this.setState(SearchState.NOTSOLVED);
            return;
        }

        this.setState(SearchState.SUCCESS);
        this.loadTask(taskNum);
    }

    setState(state)
    {
        this.state = state;

        let cssClasses = [];

        if (this.state !== SearchState.NORMAL)
        {
            cssClasses.push("_paneShowing");
            cssClasses.push(`_state--${this.state}`);
        }
            
        this.searchElem.classList.add(...cssClasses);
    }

    clearState()
    {
        this.searchElem.classList = "searchBar";
        this.searchElem.querySelector(".result > .success").classList.remove("_loaded");
        this.searchElem.querySelector(".stateButton").removeAttribute("href");

        this.taskNum = null;
    }

    loadTask(taskNum)
    {
        fetch(`/tasks/${taskNum}/preview.json`)
            .then(data => data.json())
            .then(json =>
            {
                this.searchElem.querySelector(".result > .success > .task.content").innerHTML = json.task;
                this.searchElem.querySelector(".result > .success").classList.add("_loaded");

                this.setupLink();
            });
    }

    setupLink()
    {
        this.searchElem.querySelector(".stateButton").href = `/tasks/${this.taskNum}`;
        this.searchElem.querySelector(".result > .success > .goto").href = `/tasks/${this.taskNum}`;
    }
}

document.addEventListener("DOMContentLoaded", () =>
{
    new Search(document.querySelector(".searchBar"));

    document.querySelector(".searchBar > input").addEventListener("keydown", function (e)
    {
        if (e.key !== "Enter")
            return;

        if (HASH[this.value.trim()] === undefined)
            return;            

        window.location.href = `/tasks/${this.value.trim()}`;
    });
});