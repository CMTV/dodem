import { hash } from "./classes/Hash";
import { UtilIO } from "./classes/Util";
import { Renderer } from './classes/Renderer';

import { buildHistory } from './build/history';
import { buildTasks } from "./build/tasks";
import { buildProtoTasks } from "./build/protoTasks";
import { buildToc } from "./build/toc";
import { buildSolvers } from "./build/solvers";
import { buildEditor } from "./build/editor";

import { solverHash } from "./classes/Solver";
import { buildDonaters } from "./build/donaters";
import { paint } from "./taskPaint";
import { protoManager } from "./classes/Proto";

const CONFIG = require('../data/config');

export function build()
{
    restartFix();

    //
    // Tasks
    //

    buildTasks();

    if (!CONFIG.devMode)
    {
        hash.getSolved().forEach((taskNum) =>
        {
            paint(taskNum);
        });
    }

    //
    // Proto-tasks
    //

    buildProtoTasks();

    //
    // Index
    //

    buildIndex();

    //
    // TOC
    //

    buildToc(CONFIG.devMode);

    //
    // Solvers
    //

    buildSolvers();

    //
    // Donaters
    //

    buildDonaters();

    //
    // Saving hash
    //

    UtilIO.fWrite('out/site/scripts/hash.js', 'var HASH = ' + JSON.stringify(hash.getHash()) + ";");

    //
    // History
    //

    buildHistory();

    //
    // CNAME
    //

    UtilIO.fWrite('out/CNAME', 'dodem.ru');

    //
    // Ads.txt
    //

    UtilIO.fWrite('out/ads.txt', 'google.com, pub-8094912170389944, DIRECT, f08c47fec0942fa0');

    //
    // Editor
    //

    buildEditor();
}

export function buildEditorOnly()
{
    buildEditor();
}

//
// 
//

function buildIndex()
{
    Renderer.renderPage('index',
        {
            title: 'Демидович. Решения',
            desc: 'Подробные и понятные решения более 4000 задач из задачника Демидовича "Сборник задач и упражнений по математическому анализу"',
            isTitleFull: true,
            canonical: ''
        }, 'site/_layout/index.pug', 'out/index.html', {});
}

function restartFix()
{
    // Очистка накаплеваемых переменных при повторной пересборки проекта

    solverHash.hash = {};
    solverHash.hashUnique = {};

    // Очистка задач и прото-задач

    hash.buildHash();
    protoManager.buildProtoHash();
}