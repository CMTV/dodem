const TRANSLATORS =
{
    paragraph: (text) =>
    {
        let out = '';
        let paragraphs = text.split(/\n\s*\n/);

        paragraphs.forEach((paragraph) =>
        {
            out += `<p>${paragraph}</p>\n`
        });

        return out;
    },

    isolateMath: (text) =>
    {
        let out = '';

        out = text.replace(/(\$\$|\\begin{.*?})[\s\S]*?(\$\$|\\end{.*?})/g, (match) =>
        {
            return `<p class="display-math">${match}</p>`;
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