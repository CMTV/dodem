//
// Vendor resizer
//

class Resizable
{
    // Public methods
    
    setFracs(fracArray)
    {
        this.fracs = fracArray;
        this.initPos();
        this.applyFracs();
    }
    
    ////////////////////////////////////
    
    root = null;
    
    //
    rootStyle = null;
    
    getTop()
    {
        return this.root.getBoundingClientRect().top + (+this.rootStyle.borderTopWidth.replace('px', ''));
    }
    
    getHeight()
    {
        return this.root.clientHeight;
    }
    
    getResizerHeight()
    {
        return this.resizers[0].offsetHeight;
    }
    //
    
    panes = [];
    resizers = [];
    
    //
    fracs = [];
    pos = [];
    //
    
    
    constructor(rootElem, initialFracs)
    {
        this.root = rootElem;
        this.rootStyle = window.getComputedStyle(rootElem);
        
        // Looking for panes (direct children of root element)
        this.panes = rootElem.querySelectorAll("[data-resizable] > *");
        
        // Looking for resizers
        this.resizers = rootElem.querySelectorAll("[data-resizable] [data-resizer]");
        
        // Calculating initial fracs and pos
        
        if (initialFracs)
            this.fracs = initialFracs;
        else
        {
            let initFrac = 1/this.panes.length;
            this.panes.forEach((pane) => this.fracs.push(initFrac));
        }
                
        this.initPos();
        this.applyFracs();
        
        // Adding drag logic to resizers
        this.resizers.forEach((resizer, i) => this.addDragLogic(i, resizer));
    }
    
    addDragLogic(i, resizer)
    {
        if (i === 0) return; // The first pane size can not be changed!
               
        resizer.addEventListener("mousedown", (eDown) =>
        {
            eDown.preventDefault();
            
            let shiftY = eDown.clientY - resizer.getBoundingClientRect().top;
            
            let onMouseMove = (eMove) =>
            {
                let numerator = (eMove.pageY - shiftY) - this.getTop() - (this.getResizerHeight() * i);
                let nominator = this.getHeight() - (this.getResizerHeight() * this.panes.length);
                
                let newPos = numerator / nominator;
                
                if (newPos < 0) newPos = 0;
                if (newPos > 1) newPos = 1;
                
                this.updatePos(i, newPos);
                this.updateFracs();
                this.applyFracs();
            }
            
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", () => window.removeEventListener("mousemove", onMouseMove));
        });
    }
    
    initPos()
    {
        this.pos = [];
        let cumulative = 0;
        
        for (let i = 0; i < this.fracs.length; i++)
        {
            this.pos.push(cumulative);
            cumulative += this.fracs[i];
        }
    } 
    
    updatePos(resizerI, newPos)
    {
        // Todo: Binary search?
        if (newPos < this.pos[resizerI])
        {
            for (let i = resizerI - 1; i >= 0; i--)
            {
                let iPos = this.pos[i];
                
                if (iPos < newPos) break;
                else this.pos[i] = newPos;
            }
        }
        else
        {
            for (let i = resizerI + 1; i < this.pos.length; i++)
            {
                let iPos = this.pos[i];
                
                if (iPos > newPos) break;
                else this.pos[i] = newPos;
            }
        }
        
        this.pos[resizerI] = newPos;
    }
    
    updateFracs()
    {
        this.fracs = [];
        
        for (let i = 0, j = 1; i < this.pos.length; i++, j++)
        {
            let iPos = this.pos[i];
            let jPos = (j === this.pos.length) ? 1 : this.pos[j];
            
            this.fracs.push(jPos - iPos);
        }
    }
    
    applyFracs()
    {
        let getStyleStr = (frac) =>
        {               
            return `
height: calc((100% - ${this.panes.length * this.getResizerHeight()}px) * ${frac} + ${this.getResizerHeight()}px);
            `;
        };
        
        this.panes.forEach((pane, i) =>
        {
            let iFrac = this.fracs[i];
            
            if (iFrac === 0)
                pane.classList.add("_collapsed");
            else
                pane.classList.remove("_collapsed");
            
            pane.setAttribute("style", getStyleStr(iFrac)); 
        });
    }
}

//
// Main resizer
//

document.addEventListener("DOMContentLoaded", () =>
{
    let editorElem = document.querySelector("body > .editor");
    let resizerElem = document.querySelector("#resizerMain");
    let viewOverlay = document.querySelector("body > .view > .resizerOverlay");

    function setEditorWidth(width)
    {
        editorElem.setAttribute("style", `flex: 0; flex-basis: ${width}px;`);
    }

    resizerElem.addEventListener("mousedown", (e) =>
    {
        e.preventDefault();

        viewOverlay.setAttribute("style", "display: block;");

        let shiftX = e.clientX - resizerElem.getBoundingClientRect().left;
        
        function onMouseMove(eMove)
        {
            setEditorWidth(eMove.pageX - shiftX);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", () =>
        {
            window.removeEventListener("mousemove", onMouseMove);
            viewOverlay.removeAttribute("style");
        });
    });
});

//
// Editor resizers
//

document.addEventListener("DOMContentLoaded", () =>
{
    let editorsElem = document.querySelector(".editors[data-resizable]");
    let resizable = new Resizable(editorsElem, [0.05, 0.2, 0.15, 0.6]);
});

//
// IFrame controller
//

class IFrame
{
    static BLOCKS =
    {
        TASK: 'task',
        HINT: 'hint',
        EXPLANATION: 'explanation',
    }

    loaded = false;

    iframe = null;
    contentWindow = null;

    queueArr = [];

    constructor(callback)
    {
        let that = this;

        document.querySelector("iframe").addEventListener("load", function ()
        {
            that.loaded = true;

            that.contentWindow = this.contentWindow;
            that.iframe = this.contentWindow.document;

            if (callback) callback();

            that.queueArr.forEach((action) => action());
        });
    }

    queue(action)
    {
        if (this.loaded)
            action();
        else
            this.queueArr.push(action);
    }

    //
    //
    //

    setContent(blockName, content)
    {
        let block = this.getBlock(blockName);
        block.querySelector(".content").innerHTML = content;

        this.contentWindow.enableComponents();
    }

    getBlock(blockName)
    {
        return this.iframe.querySelector(`#${blockName}`);
    }

    toggleBlock(blockName)
    {
        this.iframe.querySelector(`#${blockName}`).classList.toggle("_hidden");
    }
}

let iframe;

document.addEventListener("DOMContentLoaded", () =>
{
    iframe = new IFrame(() =>
    {
        iframe.setContent(IFrame.BLOCKS.HINT, "<b>Я самый умный в мире!</b>");
    });
});

//
// Tranlsator
//

class Translator
{
    md = null;

    constructor()
    {
        this.md = window.markdownit({ html: true, subscript: false, superscript: false });
    }

    renderStripMeta(content)
    {
        let metaRegexp = /^---$([\s\S]*?)^---$/gm;

        return content.replace(metaRegexp, (match, meta, offset) => 
        {
            return (offset === 0) ? '' : match;
        });
    }

    renderMath(content)
    {
        let mathRegexp =
        {
            display: [
                /^\$\$([\s\S]*?)\$\$$/gm,
                /^\\\[([\s\S]*?)\\\]$/gm
            ],
    
            inline: [
                /(?<!\$)\$(?!\$)(.*?)\$/g,
                /\\\((.*?)\\\)/g
            ]
        }

        let mathMacro =
        {
            // Тригонометрические функции
            "\\tg":     "\\mathop{\\rm tg}\\nolimits",
            "\\ctg":    "\\mathop{\\rm ctg}\\nolimits",

            //
            // Специальные функции
            //

            // Сигнум
            "\\sgn":    "\\mathop{\\rm sgn}\\nolimits",

            // "Потолок" и "пол" числа
            "\\ceil":   "\\left\\lceil #1 \\right\\rceil",
            "\\floor":  "\\left\\lfloor #1 \\right\\rfloor",

            //
            // Сокращения
            //

            // Предел при n -> oo
            "\\limn":   "\\lim\\limits_{n\\to\\infty}",

            // Множество
            "\\set":    "\\left\\{#1\\right\\}"
        }

        let katexOptions = (isDisplay = true) =>
        {
            let out = {};

            out.output = 'html';
            out.displayMode = isDisplay;
            out.strict = 'ignore';
            out.macros = mathMacro;
            
            return out;
        };

        // Display

        mathRegexp.display.forEach((regexp) =>
        {
            content = content.replace(regexp, (match, math) => { return katex.renderToString(math, katexOptions()) });
        });

        // Inline

        mathRegexp.inline.forEach((regexp) =>
        {
            content = content.replace(regexp, (match, math) => { return katex.renderToString(math, katexOptions(false)) });
        });

        return content;
    }

    renderInline(content)
    {
        content = content.replace(/<p:\[(.*?)\]>/gm, (match, protoId) =>
        {
            return `<a class="niceUnderline protoLink" href="#" title="${protoId}"><i class="fas fa-sitemap"></i><span>П.00</span></a>`;
        });

        content = content.replace(/<t:\[(.*?)\]>/gm, (match, taskNum) =>
        {
            return `<a class="niceUnderline taskLink" href="#"><i class="fas fa-hashtag"></i><span>${taskNum}</span></a>`;
        });

        return content;
    }

    renderMultiline(content)
    {
        content = content.replace(/^\|\|\| spoiler (?<name>.+)$(?<content>[\s\S]+?)^\|\|\|/gm, (match, title, content) =>
        {
            return `
<div class="spoiler">
    <div class="head" title="Раскрыть">
        <div class="title">${title.trim()}</div>
        <div class="toggleButton"><i class="fas"></i></div>
    </div>
    <div class="contentHolder">
        <div class="content">${this.renderSimple(content)}</div>
    </div>
</div>
            `
        });

        return content;
    }

    renderMarkdown(content)
    {
        return this.md.render(content);
    }

    renderSimple(content)
    {
        content = this.renderMath(content);
        content = this.renderInline(content);

        return content;
    }

    renderAll(content)
    {
        content = this.renderStripMeta(content);
        content = this.renderMath(content);
        content = this.renderInline(content);
        content = this.renderMultiline(content);
        content = this.renderMarkdown(content);

        return content;
    }
}

let translator = new Translator();

//
// Code Mirror Settings
//

/*CodeMirror.defineMode("dodem", function (config, parserConfig)
{
    return CodeMirror.overlayMode(CodeMirror.getMode(config, "markdown"), custom);
});*/


class Editor
{
    config =
    {
        mode: "markdown",
        lineNumbers: true,
        lineWrapping: true,
        theme: 'base16-dark'
    }

    blockName = null;
    editor = null;
    changeTimer = null;

    constructor(blockName, createLocation)
    {
        this.blockName = blockName;
        
        this.editor = CodeMirror(createLocation, { value: this.getInitValue(), ...this.config });
        this.editor.on("change", (instance, changeObj) => { this.onChange(changeObj); });

        iframe.queue( () => { this.doChange(); } );

        this.setupClickFocus(createLocation);
    }

    getInitValue()
    {
        if (localStorage.getItem("content-" + this.blockName) !== null)
            return localStorage.getItem("content-" + this.blockName);

        if (this.blockName === 'task')
            return `Условие задачи **точно так**, как она представлена в задачнике.`;
        
        return '';
    }

    setupClickFocus(createLocation)
    {
        let that = this;

        createLocation.addEventListener("click", function (e)
        {
            if (e.target !== this)
                return;
            
            that.editor.focus();
            that.editor.setCursor(that.editor.lineCount(), 0);
        });
    }

    onChange(change)
    {
        clearTimeout(this.changeTimer);
        this.changeTimer = setTimeout(() => {
            this.save();
            this.doChange();
        }, 500);
    }

    doChange()
    {
        if (['taskHint', 'answer'].includes(this.blockName)) return;
        iframe.setContent(this.blockName, translator.renderAll(this.editor.getValue()));
    }

    save()
    {
        localStorage.setItem("content-" + this.blockName, this.editor.getValue());
    }
}

document.addEventListener("DOMContentLoaded", () =>
{
    let taskE = new Editor("task", document.querySelector("#task .content"));
    let hintE = new Editor("hint", document.querySelector("#hint .content"));
    let explE = new Editor("explanation", document.querySelector("#explanation .content"));

    let taskHintE = new Editor("taskHint", document.querySelector("#settings .miniEditor.hint .editorHolder"));
    let answerE = new Editor("answer", document.querySelector("#settings .miniEditor.answer .editorHolder"));

    //
    // UI
    //

    // Toggable buttons
    document.querySelectorAll(".actions .action.toggable").forEach((action) =>
    {
        action.addEventListener("click", function ()
        {
            this.classList.toggle("_active");
        });
    });

    ["task", "hint", "explanation"].forEach((blockName) =>
    {
        document.querySelector(`#${blockName} .actions .action.visibility`).addEventListener("click", () =>
        {
            iframe.toggleBlock(blockName);
        });
    });

    document.querySelector("body > .editor > header .action.download").addEventListener("click", () =>
    {
        let taskNum = document.querySelector(".taskNum input").value.trim();
        if (taskNum.length === 0) taskNum = "0000";

        let solverId = document.querySelector(".solver input").value.trim();
        if (solverId.length === 0) solverId = "unknown";

        let zip = new JSZip();

        // Task
        {
            let taskContent = '';
            let plainDesc = document.querySelector(".plain input").value.trim();

            console.log(plainDesc);

            if (plainDesc.length > 0)
                taskContent = `---\n{ "plain": "${plainDesc}" }\n---\n\n`;

            taskContent += taskE.editor.getValue().trim();

            if (taskContent.length > 0)
            {
                zip.file(`${taskNum}/task.md`, taskContent);
            }
        }

        if (taskHintE.editor.getValue().trim().length > 0)
            zip.file(`${taskNum}/hint.md`, taskHintE.editor.getValue().trim());

        if (answerE.editor.getValue().trim().length > 0)
            zip.file(`${taskNum}/answer.md`, answerE.editor.getValue().trim());

        if (hintE.editor.getValue().trim().length > 0)
            zip.file(`${taskNum}/${solverId}/hint.md`, hintE.editor.getValue().trim());

        // Explanation

        {
            let expContent = '';

            let tags = [];

            document.querySelectorAll(".tags .tag input:checked").forEach((checkbox) =>
            {
                tags.push(checkbox.parentElement.classList[1]);
            });

            if (tags.length > 0)
                expContent = `---\n{ "tags": [${tags.map((item) => { return `"${item}"`; })}] }\n---\n\n`;

            expContent += explE.editor.getValue().trim();

            if (expContent.length > 0)
            {
                zip.file(`${taskNum}/${solverId}/explanation.md`, expContent);
            }
        }

        zip.generateAsync({ type: "blob" }).then((content) => saveAs(content, `${taskNum}.zip`));
    });
});