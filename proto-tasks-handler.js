const tools =   require('./tools');

const glob =    require('glob');
const fs =      require('fs');
const p =       require('path');

const mdIt =    require('markdown-it')({
    html: true,
    subscript: false,
    superscript: false
});

const translator = require('./translator');

function getProtoPaths()
{
    let paths = glob.sync('proto-tasks/**/meta.json');

    for (let i = 0; i < paths.length; i++)
    {
        let arrPath = paths[i].split('/');

        arrPath.pop();
        arrPath.shift();

        paths[i] = arrPath.join('/');
    }

    return paths;
}

function genProtoTask(protoPath)
{
    // Creating directory
    fs.mkdirSync(p.normalize('out/proto/' + protoPath), { recursive: true });

    // Meta
    let meta = JSON.parse(fs.readFileSync(p.normalize('proto-tasks/' + protoPath + '/meta.json'), { encoding: 'utf-8' }));

    // Rendered Mds
    let task = getRenderedMd('task', protoPath);
    let solution = getRenderedMd('solution', protoPath);

    // View
    let view =
    {
        site_root: '../'.repeat(protoPath.split('/').length + 1),

        title: `${meta.title} | Прото-задача | Демидович. Решения`,
        description: meta.description,

        protoTitle: meta.title,

        task: task,
        solution: solution,

        // Refs
        hasRefs: !!meta.refs,
        refs: meta.refs
    }

    fs.writeFileSync(
        p.normalize(`out/proto/${protoPath}/index.html`),
        tools.genHtml('proto-task', view)
    );
}

function getRenderedMd(filename, protoPath)
{
    let mdContent = fs.readFileSync(p.normalize(`proto-tasks/${protoPath}/${filename}.md`), { encoding: 'utf-8' });
    return mdIt.render(translator.translate(mdContent, ['isolateMath']));
}

// ===============================

function genAll()
{
    let protoPaths = getProtoPaths();
    protoPaths.forEach(protoPath => genProtoTask(protoPath));
}

module.exports =
{
    genAll: genAll,
    getProtoPaths: getProtoPaths
}