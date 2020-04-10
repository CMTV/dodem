const fs = require('fs');
const p =  require('path');

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

        out = text.replace(/((\$\$[\s\S]*?\$\$)|(^\\begin{.*?}$[\s\S]*?^\\end{.*?}$)|(^\\begin{.*?}[\s\S]*?\\end{.*?}$))/gm, (match) =>
        {
            return `<p class="display-math">${match}</p>`;
        });

        return out;
    },

    protoScaner: (text) =>
    {
        let out = '';

        out = text.replace(/<p:\[(.+)\]>/gm, (match, g1) =>
        {
            let protoMeta = JSON.parse(fs.readFileSync(p.normalize('proto-tasks/' + g1 + '/meta.json'), { encoding: 'utf-8' }));
            return `"[${protoMeta.title}](/proto/${g1})"`;
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