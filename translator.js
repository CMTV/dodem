const TRANSLATORS =
{
    paragraph: (text) =>
    {
        let out = '';
        let paragraphs = text.split(/^\r\n/gm);

        paragraphs.forEach((paragraph) =>
        {
            out += `<p>${paragraph}</p>\n`
        });

        return out;
    }
}

/**
 * @param {string} text 
 * @param {string[]} translators
 */
function translate(text, translators)
{
    translators.forEach((name) =>
    {
        text = TRANSLATORS[name](text);
    });

    return text;
}

module.exports.translate = translate;