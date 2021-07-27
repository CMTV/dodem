export abstract class ExpandBlock
{
    abstract closedTitle: string;
    abstract openedTitle: string;

    rootElem:       Element;
    headerElem:    Element;

    opened: boolean = false;

    constructor(rootElem: Element)
    {
        this.rootElem =     rootElem;
        this.headerElem =   rootElem.querySelector('header');
        this.headerElem.addEventListener('click', () => { if (this.opened) { this.close() } else { this.show() } });
    }

    show()
    {
        this.opened = true;
        this.rootElem.classList.toggle('_opened', this.opened);
        this.headerElem.setAttribute('title', this.openedTitle);
    }

    close()
    {
        this.opened = false;
        this.rootElem.classList.toggle('_opened', this.opened);
        this.headerElem.setAttribute('title', this.closedTitle);
    }
}