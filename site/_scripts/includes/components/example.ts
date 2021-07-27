import { ExpandBlock } from "./ExpandBlock";

class Example extends ExpandBlock
{
    closedTitle = 'Показать решение';
    openedTitle = 'Скрыть решение'
}

window.addEventListener('DOMContentLoaded', () =>
{
    document.querySelectorAll('.example:not(.noSolution)').forEach(exampleElem => new Example(exampleElem));
});