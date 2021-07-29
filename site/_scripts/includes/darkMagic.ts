declare var adsbygoogle;

window.addEventListener('load', () =>
{
    if (typeof adsbygoogle === 'undefined' || adsbygoogle.loaded !== true)
    {
        document.querySelectorAll('.noDarkMagic').forEach(elem => elem.classList.add('_showing'));
        document.querySelectorAll('.yesDarkMagic').forEach(elem => elem.remove());
    }

    document.querySelectorAll('.darkMagicContainer').forEach(adContainer =>
    {
        let adElem = adContainer.querySelector('ins.adsbygoogle');

        let callback = () => { if (adElem.getAttribute('data-ad-status') === 'unfilled') adContainer.remove(); }
        callback();

        let adsObserver = new MutationObserver(callback);
        adsObserver.observe(adElem, { attributeFilter: ['data-ad-status'] });
    });
});