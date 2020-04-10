$(document).ready(() =>
{
    $('.action--hint').click(function ()
    {
        $(this).toggleClass('_active');
        $(this).closest('.task').find('.hint').toggleClass('_hidden');
    });
});