$(document).ready(() =>
{
    let rndTaskNumber = () =>
    {
        let keys = Object.keys(HASH);

        return keys[ keys.length * Math.random() << 0 ];
    };

    let $link = $('.info-bar').find('.info-item.luck');

    $link.prop('href', `${SITE_ROOT}tasks/` + rndTaskNumber());
});