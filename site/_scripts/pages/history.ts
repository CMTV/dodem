import { Block } from "../includes/block";

document.querySelectorAll('main > .historyBlock').forEach(historyBlock =>
{
    new Block(historyBlock);

    historyBlock.querySelector('.action.content').addEventListener('click', () =>
    {
        if (historyBlock.classList.contains('_itemLoaded'))
            return;

        let id = historyBlock.getAttribute('id');

        fetch(`/history/${id}.html`)
        .then(response => response.text())
        .then(historyContent => historyBlock.querySelector('[data-pane="content"]').innerHTML = historyContent);

        historyBlock.classList.add('_itemLoaded');
    });
});

let anchor = window.location.hash.substr(1);

console.log(anchor);

if (anchor.length != 0)
    (document.getElementById(anchor).querySelector('.action.content') as HTMLElement).click();