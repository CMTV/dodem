import { UtilIO } from "./Util";

export class Sitemap
{
    static addUrl(url: string)
    {
        let sitemap = this.getNewSitemap();

        if (UtilIO.fExists(`out/sitemap.xml`))
            sitemap = UtilIO.fRead(`out/sitemap.xml`)
        
        let newRecord = `<url><loc>https://dodem.ru/${url}</loc></url>`;

        sitemap = sitemap.replace('</urlset>', newRecord + '\n</urlset>');

        UtilIO.fWrite(`out/sitemap.xml`, sitemap);
    }

    static getNewSitemap()
    {
        return `<?xml version="1.0" encoding="UTF-8"?>\n\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>`;
    }
}