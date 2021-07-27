export class PageLocation
{
    isExpanded = false;

    rootElem: Element;
    switchers: NodeList;

    constructor()
    {
        window.addEventListener('DOMContentLoaded', () =>
        {
            this.rootElem =     document.querySelector('.site > main > .location');
            this.switchers =    document.querySelectorAll('.location .btnSwitcher');

            this.switchers.forEach((switcher) => switcher.addEventListener('click', () => { this.toggle() } ));
        });
    }

    toggle()
    {
        let targetExpanded = !this.isExpanded;
        this.rootElem.classList.toggle('_expanded', targetExpanded);
        this.isExpanded = targetExpanded;
    }
}