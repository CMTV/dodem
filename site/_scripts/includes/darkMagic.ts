declare var adsbygoogle;

window.addEventListener('load', () =>
{
    let adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8094912170389944';
        adScript.async = true;
        adScript.crossOrigin = 'anonymous';

    document.head.append(adScript);

    document.querySelectorAll('.darkMagic').forEach(adContainer =>
    {
        let adElem = adContainer.querySelector('ins.adsbygoogle');

        let callback = () =>
        {
            let isFilled = adElem.getAttribute('data-ad-status') === 'filled';
            adContainer.classList.toggle('_hasAds', isFilled);
        }
        callback();

        let adsObserver = new MutationObserver(callback);
        adsObserver.observe(adElem, { attributeFilter: ['data-ad-status'] });
    });

    // Prevent Google ads 'min-height' injection
    let siteElem = document.querySelector('body > .site');
    new MutationObserver(() => { siteElem.removeAttribute('style'); }).observe(siteElem, { attributeFilter: ['style'] } );
});