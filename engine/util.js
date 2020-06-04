const fs =      require('fs');
const path =    require('path');

function fExists(p)
{
    return fs.existsSync(path.normalize(p));
}

function fWrite(p, data)
{
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, data);
}

function fRead(p)
{
    return fs.readFileSync(p, { encoding: 'utf-8' });
}

// Some Markdown functions

function getMdMeta(content)
{
    let match = /^---$([\s\S]+?)^---$/gm.exec(content);

    if (match)
    {
        return JSON.parse(match[1]);
    }
    else return {};
}

function getMdContent(content)
{
    return content.replace(new RegExp(/^---$([\s\S]+?)^---$/gm, 'gm'), '');
}

//

module.exports = {
    fExists: fExists,
    fWrite: fWrite,
    fRead: fRead,
    getMdMeta: getMdMeta,
    getMdContent: getMdContent
}