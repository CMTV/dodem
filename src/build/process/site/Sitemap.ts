import { Process } from "@cmtv/processes";
import { G } from "src/g";
import { IO } from "src/util/IO";

class Sitemap extends G
{
    urls: string[] = [];
    init() { this.urls = []; }
}

export let SITEMAP = new Sitemap;

export class WriteSitemap extends Process
{
    processName() { return 'Запись карты сайта'; }

    process()
    {
        let urls = '';

        SITEMAP.urls.forEach((url, i) =>
        {
            if (i !== 0) urls += '\n    ';
            urls += `<url><loc>${url}</loc></url>`;
        });

        let sitemap = IO.readFile('site/_sitemap.xml').replace('{{ links }}', urls);
        
        IO.writeFile('dist/sitemap.xml', sitemap);
    }
}