class Quote
{
    content: string;
    author: { name: string, link: string }

    constructor(content, author)
    {
        this.content = content;
        this.author = {
            name: author,
            link: authors[author]
        }
    }
}

const authors =
{
    'Нильс Абель':      'ru.wikipedia.org/wiki/Абель,_Нильс_Хенрик',
    'Нильс Бор':        'ru.wikipedia.org/wiki/Бор,_Нильс',
    'Карл Вейерштрасс': 'ru.wikipedia.org/wiki/Вейерштрасс,_Карл',
    'Давид Гильберт':   'ru.wikipedia.org/wiki/Гильберт,_Давид',
    'Рене Декарт':      'ru.wikipedia.org/wiki/Декарт,_Рене',
    'В.П. Ермаков':     'ru.wikipedia.org/wiki/Ермаков,_Василий_Петрович',
    'Иоганн Кеплер':    'ru.wikipedia.org/wiki/Кеплер,_Иоганн',
    'Леопольд Кронекер':'ru.wikipedia.org/wiki/Кронекер,_Леопольд',
    'Льюис Кэррол':     'ru.wikipedia.org/wiki/Льюис_Кэрролл',
    'М.В. Ломоносов':   'ru.wikipedia.org/wiki/Ломоносов,_Михаил_Васильевич',
    'Анри Пуанкаре':    'ru.wikipedia.org/wiki/Пуанкаре,_Анри',
    'Альберт Эйнштейн': 'ru.wikipedia.org/wiki/Эйнштейн,_Альберт'
};

const quotes: Quote[] =
[
    new Quote('Математика для ученого — то же самое, что скальпель для анатома.', 'Нильс Абель'),
    new Quote('Математика — это больше чем наука, это язык науки.', 'Нильс Бор'),
    new Quote('Нельзя быть настоящим математиком, не будучи немного поэтом.', 'Карл Вейерштрасс'),
    new Quote('Бесконечность! Ничто не двигало так глубоко человеческий разум.', 'Давид Гильберт'),
    new Quote('Математика есть единая симфония бесконечного.', 'Давид Гильберт'),
    new Quote('Мало иметь хороший ум, главное – хорошо его применять.', 'Рене Декарт'),
    new Quote('В математике следует помнить не формулы, а процессы мышления.', 'В.П. Ермаков'),
    new Quote('Математика есть прообраз красоты мира.', 'Иоганн Кеплер'),
    new Quote('Господь сотворил целые числа; остальное – дело рук человека.', 'Леопольд Кронекер'),
    new Quote('Математика – это большая выдумка без обмана!', 'Льюис Кэррол'),
    new Quote('Математику уже затем знать надо, что она ум в порядок приводит.', 'М.В. Ломоносов'),
    new Quote('В математике нет символов для неясных мыслей.', 'Анри Пуанкаре'),
    new Quote('Математика – это искусство называть разные вещи одним и тем же именем.', 'Анри Пуанкаре'),
    new Quote('Математика – это поэзия логики идей.', 'Альберт Эйнштейн'),
    new Quote('Математика – единственный совершенный метод, позволяющий провести самого себя за нос.', 'Альберт Эйнштейн'),
];

export class Footer
{
    constructor()
    {
        window.addEventListener('DOMContentLoaded', () =>
        {
            let footer = document.querySelector('.site > footer');
            let quote = footer.querySelector('blockquote');
            let author = footer.querySelector('.by');

            let rndQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quote.innerHTML = rndQuote.content;

            author.innerHTML = rndQuote.author.name;
            author.setAttribute('href', 'https://' + rndQuote.author.link);
        });
    }
}