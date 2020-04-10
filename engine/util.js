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

//

module.exports = {
    fExists: fExists,
    fWrite: fWrite,
    fRead: fRead
}