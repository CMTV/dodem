$(document).ready(() =>
{
    let percent = (SOLVED / 4462) * 100;

    let $bar = $('.progress-bar-container');

    $bar.prop('title', `Решено ${SOLVED} из 4462 задач (${percent.toFixed(3)}%)`);
    $bar.find('.progress-bar div').css('width', `${Math.ceil(percent)}%`);
});