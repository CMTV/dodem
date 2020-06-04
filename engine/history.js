const tools =   require('./tools');
const util =    require('./util');

const glob =    require('glob');
const fs =      require('fs');
const p =       require('path');

const mdIt =    require('./markdown');
const translator = require('./translator');

function getDiff(content)
{
    //if ()
}

function genHistory()
{
    let hItems = glob.sync('history/**/*.md');

    hItems.sort((a, b) =>
    {
        a = a.split('-').join();
        b = b.split('-').join();

        return b.localeCompare(a);
    });

    let history = [];

    hItems.forEach((hItem) =>
    {
        let date = new Date((hItem.split('/').pop()).slice(0, -3));

        {
            let year =  new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
            let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
            let day =   new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

            date = `${day}.${month}.${year}`;
        }

        let md = util.fRead(hItem);

        let content = mdIt.render(translator.translate(util.getMdContent(md), ['isolateMath', 'protoScaner']));

        // Working with meta
        let meta = util.getMdMeta(md);

        if ('diff' in meta)
        {
            meta.diff.hasAdd = 'add' in meta.diff;
            meta.diff.hasEdit = 'edit' in meta.diff;
        }
        
        history.push(
            {
                date: date,
                content: content,
                meta: meta
            }
        );
    });

    let view =
    {
        hItems: history
    }

    util.fWrite(
        p.normalize(`out/history/index.html`),
        tools.genHtml('history', view)
    );
}

module.exports =
{
    genHistory: genHistory
}