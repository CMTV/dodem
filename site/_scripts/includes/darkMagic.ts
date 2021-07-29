declare var adsbygoogle;

window.addEventListener('load', () =>
{
    console.log(adsbygoogle);

    if (typeof adsbygoogle === 'undefined' || adsbygoogle.loaded !== true)
    {
        document.querySelectorAll('.noDarkMagic').forEach(elem => elem.classList.add('_showing'));
        document.querySelectorAll('.yesDarkMagic').forEach(elem => elem.remove());
    }
});