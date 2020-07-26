var Dodem = Dodem || {};

Dodem.getLuckTaskNum = () =>
{
    let solved = Object.keys(HASH);
    return solved[Math.floor(Math.random() * solved.length)];
}

window.addEventListener('load', () =>
{
    let luckNavItem = document.querySelector('.luck');

    let assignLuckHref = () =>
    {
        luckNavItem.setAttribute('href', '/tasks/' + Dodem.getLuckTaskNum() + '/');
    }

    assignLuckHref();

    luckNavItem.addEventListener('click', assignLuckHref);
    luckNavItem.addEventListener('contextmenu', assignLuckHref);
});