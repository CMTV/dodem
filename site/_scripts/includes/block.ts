export class BlockAction
{
    active: boolean;

    buttonElem: Element;
    paneElem: Element;

    constructor(blockElem: Element, actionName: string)
    {
        this.buttonElem = blockElem.querySelector(`.action.${actionName}`);
        this.paneElem = blockElem.querySelector(`[data-pane="${actionName}"]`);

        this.buttonElem.addEventListener('click', () => { this.toggleActive(); });
    }

    toggleActive()
    {
        let targetActive = !this.active;
        [this.buttonElem, this.paneElem].forEach(elem =>
        {
            if (elem)
                elem.classList.toggle('_active', targetActive);
        });
        this.active = targetActive;
    }
}

export class Block
{
    rootElem: Element;
    headerElem: Element;

    actions: BlockAction[] = [];

    constructor(rootElem: Element)
    {
        this.rootElem =     rootElem;
        this.headerElem =   rootElem.querySelector('header');
    
        this.headerElem.querySelectorAll(':not([href]).action').forEach((actionElem) =>
        {
            let actionName = actionElem.className.replace('action', '').replace('_active', '').trim();
            this.actions.push(new BlockAction(rootElem, actionName));
        });
    }
}