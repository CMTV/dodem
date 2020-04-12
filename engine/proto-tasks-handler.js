const tools =   require('./tools');

const glob =    require('glob');
const fs =      require('fs');
const p =       require('path');

const mdIt =    require('./markdown');

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
    let taskSrc = fs.readFileSync(p.normalize(`proto-tasks/${protoPath}/task.md`), { encoding: 'utf-8' });
    let task = getRenderedMd('task', protoPath);
    let solution = getRenderedMd('solution', protoPath);

    // View
    let view =
    {
        site_root: '../'.repeat(protoPath.split('/').length + 1),

        title: `${meta.title} | Прото-задача | Демидович. Решения`,
        description: meta.description || taskSrc,
        canonical_url: 'proto/' + protoPath,

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
    return mdIt.render(translator.translate(mdContent, ['isolateMath', 'protoScaner']));
}

function getProtoCategory(protoPath)
{
    let arr = protoPath.split('/');
    arr.pop();

    let category = arr.join('/');
    let categoriesData = JSON.parse(fs.readFileSync('proto-cats.json', { encoding: "utf-8" }));

    return (category in categoriesData) ? categoriesData[category] : categoriesData[""];
}

function genProtosPage()
{
    let protoPaths = getProtoPaths();
    let protos = {};

    protoPaths.forEach((protoPath) =>
    {
        let protoCategory = getProtoCategory(protoPath);
        
        if (!(protoCategory in protos)) protos[protoCategory] = [];

        let protoMeta = JSON.parse(fs.readFileSync(p.normalize('proto-tasks/' + protoPath + '/meta.json'), { encoding: 'utf-8' }));

        protos[protoCategory].push(
            {
                link:           '/proto/' + protoPath,
                title:          protoMeta.title,
                description:    protoMeta.description
            }
        );
    });

    //

    let formattedProtos = [];

    let categoriesData = JSON.parse(fs.readFileSync('proto-cats.json', { encoding: "utf-8" }));

    Object.values(categoriesData).forEach((key) =>
    {
        formattedProtos.push(
            {
                categoryTitle: key,
                protoTasks: protos[key]
            }
        )
    });

    let view =
    {
        site_root: '../',

        protos: formattedProtos
    };

    fs.writeFileSync(
        p.normalize(`out/proto/index.html`),
        tools.genHtml('protos-page', view)
    );
}

// ===============================

function genAll()
{
    let protoPaths = getProtoPaths();
    protoPaths.forEach(protoPath => genProtoTask(protoPath));

    genProtosPage();
}

module.exports =
{
    genAll: genAll,
    getProtoPaths: getProtoPaths
}