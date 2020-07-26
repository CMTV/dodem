import { UtilIO } from "./Util";
import { Chalk } from "./Chalk";

export interface ILink
{
    href:   string;
    title:  string;
    desc?:  string;
}

export class Link
{
    //
    // STATIC
    //

    static getLinks(dirPath: string, context: string = null): ILink[]
    {
        if (!UtilIO.fExists(dirPath + '/links.json'))
            return []

        let links: ILink[] = [];
        let json = JSON.parse(UtilIO.fRead(dirPath + '/links.json'));

        if (!Array.isArray(json))
            Chalk.error(`"links.json" must be an array of links!`, context);
        
        json.forEach((link: any) =>
        {
            if (!('href' in link) || !('title' in link))
                Chalk.error(`Every link must have both "href" and "title" properties!`, context);

            links.push(link);
        });

        return links;
    }
}