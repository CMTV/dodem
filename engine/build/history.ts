import glob from 'glob';

import { Renderer } from '../classes/Renderer';
import { getHistoryItem, IHistoryItem } from '../classes/HistoryItem';

export function buildHistory()
{
    let hItems = glob.sync('data/history/**/*.md');

    hItems.sort((a, b) =>
    {
        a = a.split('-').join();
        b = b.split('-').join();

        return b.localeCompare(a);
    });

    let history: IHistoryItem[] = [];

    hItems.forEach((hItemPath) =>
    {
        history.push(getHistoryItem(hItemPath));
    });

    let SEO =
    {
        title: 'Хронология',
        desc: 'Новости о решенных задачах и других важных событиях.',
        ogImg: 'site/graphics/og/history.png',
        canonical: 'history'
    }

    Renderer.renderPage('history', SEO, 'site/_layout/history.pug', 'out/history/index.html', { history: history });
}