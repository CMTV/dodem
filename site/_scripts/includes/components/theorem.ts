import { ExpandBlock } from "./ExpandBlock";

class Theorem extends ExpandBlock
{
    closedTitle = 'Показать доказательство';
    openedTitle = 'Скрыть доказательство'
}

window.addEventListener('DOMContentLoaded', () =>
{
    document.querySelectorAll('.theorem:not(.noProof)').forEach(theoremElem => new Theorem(theoremElem));
});