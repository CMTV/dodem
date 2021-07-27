import { ExpandBlock } from "./ExpandBlock";

class Spoiler extends ExpandBlock
{
    closedTitle = 'Раскрыть пояснение';
    openedTitle = 'Скрыть пояснение'
}

window.addEventListener('DOMContentLoaded', () =>
{
    document.querySelectorAll('.spoiler').forEach(spoilerElem => new Spoiler(spoilerElem));
});
