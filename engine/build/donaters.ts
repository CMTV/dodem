import { Renderer } from "../classes/Renderer"
import { UtilIO } from "../classes/Util";

class Tier
{
    static MAP: {[key: number]: string} = {
        1: "Меценаты",
        2: "Соратники",
        3: "Помощники"
    };

    static getNameByCode(tierCode: number): string
    {
        return this.MAP[tierCode];
    }
}

interface IDonaterT3
{
    id: string;
    name: string;
    link: string;
}

interface IDonaterT2 extends IDonaterT3
{
    hasAvatar: boolean;    
}

interface IDonaterT1 extends IDonaterT2
{
    message: string;
}

interface IDonaterArchive extends IDonaterT3
{
    tier: number;
}

export function buildDonaters()
{
    let donatersList = require('../../data/donaters');

    let tier3: any[] = [];
    donatersList.tier3.forEach((donater: IDonaterT3) =>
    {
        tier3.push(donater);
    });

    let tier2: any[] = [];
    donatersList.tier2.forEach((donater: IDonaterT2) =>
    {
        tier2.push({
            hasAvatar: UtilIO.fExists('site/graphics/donaters/' + donater.id + '.png'),
            ...donater
        });
    });

    let tier1: any[] = [];
    donatersList.tier1.forEach((donater: IDonaterT1) =>
    {
        tier1.push({
            hasAvatar: UtilIO.fExists('site/graphics/donaters/' + donater.id + '.png'),
            ...donater
        });
    });

    let archive: any[] = [];
    donatersList.archive.forEach((donater: IDonaterArchive) =>
    {
        archive.push({
            ...donater,
            tier: Tier.getNameByCode(donater.tier)
        });
    });

    renderDonaters({ tier1: tier1, tier2: tier2, tier3: tier3, archive: archive });
}

function renderDonaters(donaters: any)
{
    let SEO =
    {
        title: 'Спонсоры',
        desc: 'Прекрасные люди, финансово поддерживающие проект.',
        canonical: 'donate',
        ogImg: 'site/graphics/og/donate.png'
    }

    Renderer.renderPage('donaters', SEO, 'site/_layout/donaters.pug', 'out/donate/index.html', { donaters: donaters });
}