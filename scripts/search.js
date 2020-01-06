$(document).ready(() =>
{
    const STATE =
    {
        NORMAL: 'normal',
        SUCCESS: 'success',
        WTF: 'wtf',
        ERROR: 'error'
    }

    let StateController =
    {
        $searchContainer: null,
        $successPane: null,

        state: STATE.NORMAL,
        pState: STATE.NORMAL,

        init: function()
        {
            this.$searchContainer = $('.search-container');
            this.$successPane = $('.search-results-pane--success');
        },

        setState: function(state, isLoading = true)
        {
            this.pState = this.state;
            this.state = state;

            this.$searchContainer.removeClass
            (
                this.getStateClass(STATE.NORMAL)    + " " +
                this.getStateClass(STATE.SUCCESS)   + " " +
                this.getStateClass(STATE.WTF)       + " " +
                this.getStateClass(STATE.ERROR)
            );

            this.$searchContainer.addClass(this.getStateClass(state));
            this.$successPane.toggleClass('_loading', isLoading);

            this.stateChange();
        },

        stateChange: function()
        {
            if (this.state != STATE.SUCCESS)
            {
                PreviewController._enterPressed = false;
                PreviewController.setupButtons('');
            }
        },

        getStateClass: function(state)
        {
            return 'state--' + state;
        }
    }

    let PreviewController =
    {
        $navSection: null,
        $navParagraph: null,
        $taskPreview: null,

        $goButtons: null,

        ajax: null,

        _enterPressed: false,

        init: function()
        {
            this.$navSection = $('.search-results .task-nav .section');
            this.$navParagraph = $('.search-results .task-nav .paragraph');
            this.$taskPreview = $('.task-preview');

            this.$goButtons = $('.goto-solution-button');
        },

        loadTask: function(taskNumber)
        {
            if (!this.solutionExists(taskNumber))
            {
                StateController.setState(STATE.ERROR);
                return;
            }

            StateController.setState(STATE.SUCCESS);
            
            this.setupButtons(`${SITE_ROOT}tasks/${taskNumber}/`);

            if (this._enterPressed) { this.enterPress(); }

            this.ajax = $.getJSON(`${SITE_ROOT}tasks/${taskNumber}/preview.json`, (json) =>
            {
                this.$taskPreview.empty();

                let location = get_location(json.location);

                this.setLocationItem(this.$navSection, location.section);
                this.setLocationItem(this.$navParagraph, location.paragraph, true);

                this.$taskPreview.append(json.taskHtml);

                MathJax.typesetPromise().then(() => 
                {
                    StateController.setState(STATE.SUCCESS, false);
                });
            });
        },

        abort: function()
        {
            if (this.ajax)
            {
                this.ajax.abort();
            }
        },

        solutionExists: function(taskNumber)
        {
            return typeof HASH[taskNumber] !== 'undefined';
        },

        setLocationItem: function(item, locationItem, isParagraph = false)
        {
            if (isParagraph)
            {
                locationItem.id = "§" + locationItem.id;
            }

            item.prop('title', `${locationItem.id}. ${locationItem.title}`);
            item.find('.accent').html(locationItem.id);
            item.find('.title').html(locationItem.title);
        },

        setupButtons: function(href)
        {
            if (!href)
            {
                this.$goButtons.removeAttr('href');
                return;
            }

            this.$goButtons.prop('href', href);
        },

        enterPress: function()
        {
            if (StateController.state == STATE.SUCCESS)
            {
                this.$goButtons[0].click();
            }
            else
            {
                this._enterPressed = true;
            }
        }
    }

    let InputController =
    {
        $input: null,
        
        timer: null,
        typeTimeout: 150,

        init: function()
        {
            this.$input = $('#search-input');

            this.$input.on('input', () =>
            {
                this.input();
            });

            this.$input.on('keydown', (e) =>
            {
                if (e.keyCode == 13)
                {
                    PreviewController.enterPress();
                }
            });
        },

        getValue: function()
        {
            return this.$input.val().trim();
        },

        input: function()
        {
            PreviewController._enterPressed = false;
            PreviewController.abort();

            clearTimeout(this.timer);

            let value = this.getValue();

            if (value.length == 0)
            {
                StateController.setState(STATE.NORMAL);
                return;
            }
            
            this.timer = setTimeout(() => { this.handleInput(); }, this.typeTimeout);
        },

        handleInput: function()
        {
            let value = this.getValue();

            if (!(/^\d+$/i.test(value)))
            {
                StateController.setState(STATE.WTF);
                return;
            }

            value = parseInt(value);

            if (!(value >= 1 && value <= 4462))
            {
                StateController.setState(STATE.WTF);
                return;
            }

            PreviewController.loadTask(value);
        }
    }

    StateController.init();
    PreviewController.init();
    InputController.init();
});