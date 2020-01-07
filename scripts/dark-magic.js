let messageHtml = '';

if 
(
    typeof adsbygoogle === 'undefined'
    ||
    adsbygoogle.loaded === false
)
{
    messageHtml = `
        <div class="no-dark-magic">
            <i class="far fa-grin-tongue-wink"></i>
            <div class="message">
                <strong>Да, да... Реклама всех бесит!</strong><br>
                Все решения пишутся на добровольной основе. Нет рекламы, нет дохода — нет мотивации поддерживать сайт.
                Если решение вам помогло, помогите и нам — добавьте сайт в исключения блокировщика!
            </div>
        </div>
    `;
}

$(document).ready(() => 
{
    if (messageHtml !== '')
    {
        $('.dark-magic-container').after(messageHtml).remove();
    }
});