$(document).ready(() =>
{
    let showButton = $('.button-show');
    let hideButton = $('.block-section-actions .action--hide');

    showButton.click(function()
    {
        $(this).closest('.block-section.solution').removeClass('_hidden');
    });

    hideButton.click(function ()
    {
        $(this).closest('.block-section.solution').addClass('_hidden');
    });
});