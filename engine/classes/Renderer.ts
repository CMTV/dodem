import pug from 'pug';
import p from 'path';

import { hash } from "./Hash";
import { Const } from "./Const";
import { UtilIO } from './Util';
import { Sitemap } from './Sitemap';

const CONFIG = require('../../data/config');

export interface ISEO
{
    title: string;
    isTitleFull?: boolean;
    desc?: string;
    ogImg?: string;
    canonical: string;
}

export class Renderer
{
    static renderPage(pageType: string, SEO: ISEO, path: string, outPath: string, ...views: any[])
    {
        let view: any = {};

        views.forEach((viewItem) =>
        {
            view = Object.assign(view, viewItem);
        });

        view = Object.assign(this.getGlobalView(), view);

        let rendered = pug.renderFile(p.normalize(path), Object.assign({
            type: pageType,
            seo: SEO,
            pretty: CONFIG.devMode,
            basedir: 'site/_layout'
        }, view));

        if (CONFIG.devMode)
        {
            UtilIO.fWrite(outPath.substr(0, outPath.lastIndexOf('.')) + '.json', JSON.stringify(view, null, 4));
        }

        Sitemap.addUrl(SEO.canonical);

        UtilIO.fWrite(outPath, rendered);
    }

    static renderComponent(cName: string, view: any): string
    {
        // FIX PROBLEMS WITH "PRETTY: FALSE"!!!
        return pug.renderFile(`site/_layout/components/${cName}.pug`, {...{ pretty: true }, ...view});
    }

    static getGlobalView()
    {
        let progress =
        {
            solved: hash.getSolved().length,
            percent: ((hash.getSolved().length / Const.TASKS_NUM) * 100).toFixed(3),
            fractions: hash.getSolvedFractions()
        }

        return {
            _: CONFIG,
            progress: progress
        }
    }
}