window.addEventListener('load', () =>
{
    if (typeof adsbygoogle === 'undefined' || adsbygoogle.loaded !== true)
    {
        let darkMagicElements = document.getElementsByClassName('darkMagicContainer');

        for (let i = 0; i < darkMagicElements.length; i++)
        {
            let dmElem = darkMagicElements.item(i);

            dmElem.getElementsByClassName('noDarkMagic')[0].classList.add('_showing');
            dmElem.getElementsByClassName('yesDarkMagic')[0].remove();
        }
    }
});