import { Const } from "./Const";
import { UtilIO } from "./Util";
import { Chalk } from "./Chalk";
import { Translator } from "./Translator";

interface ILocationData
{
    id: string;
    title: string;
}

export interface ITOCLocation
{
    chapter: ILocationData,
    paragraph: ILocationData,
    section: ILocationData       // Info from toc-custom.json!
}

export class TOC
{
    // TOCs

    private toc:    any;
    private ctoc:   any;

    //

    constructor()
    {
        this.toc = JSON.parse(UtilIO.fRead('data/toc/toc.json'));
        this.ctoc = JSON.parse(UtilIO.fRead('data/toc/toc-custom.json'));
    }

    getLocationData(id: string, title: string): ILocationData
    {
        return {
            id: id,
            title: Translator.renderMath(title)
        }
    }

    getLocation(task: number): ITOCLocation
    {
        if (task < 1 || task > Const.TASKS_NUM) { Chalk.error(`Incorrect '${task}' task number! Must be within 1-4462 interval!`); }

        let location = <ITOCLocation> {};

        // Finding chapter

        for (let i = 0; i < Object.keys(this.toc).length; i++)
        {
            let chId = Object.keys(this.toc)[i];
            let chTitle = this.toc[chId].title;

            if (task <= this.toc[chId].paragraphs[this.toc[chId].paragraphs.length - 1][1][1])
            {
                location.chapter = this.getLocationData(chId, chTitle);
                break;
            }
        }

        // Finding paragraph

        for (let i = 0; i < this.toc[location.chapter.id].paragraphs.length; i++)
        {
            let paragraph = this.toc[location.chapter.id].paragraphs[i];

            if (task <= paragraph[1][1])
            {
                location.paragraph = this.getLocationData((i+1).toString(), paragraph[0]);
                break;
            }
        }

        // Finding section (custom toc)

        let secParentId = location.chapter.id + '.' + location.paragraph.id;

        if (secParentId in this.ctoc)
        {
            for (let i = 0; i < Object.keys(this.ctoc[secParentId]).length; i++)
            {
                let secId = Object.keys(this.ctoc[secParentId])[i];
                let section = this.ctoc[secParentId][secId];

                if (task <= section[1][1])
                {
                    location.section = this.getLocationData(secId, section[0]);
                    break;
                }
            }
        }
        else
        {
            location.section = null;
        }

        return location;
    }

    //
    // Iterate Methods
    //

    getOutToc()
    {
        let out: any = [];

        // Chapters
        Object.keys(this.toc).forEach((chapterId) =>
        {
            let paragraphs: any = [];

            this.toc[chapterId].paragraphs.forEach((paragraph: any, pI: number) =>
            {
                let sections: any = [];
                let secId = `${chapterId}.${pI + 1}`;

                if (secId in this.ctoc)
                {
                    Object.values(this.ctoc[secId]).forEach((section: any, sI: number) =>
                    {
                        sections.push(
                            {
                                title: Translator.renderMath(section[0]),
                                range: `${section[1][0]} - ${section[1][1]}`,
                                link: `/toc/${secId}/${Object.keys(this.ctoc[secId])[sI]}`
                            }
                        )
                    });
                }

                paragraphs.push(
                    {
                        id: pI + 1,
                        title: Translator.renderMath(paragraph[0]),
                        range: `${paragraph[1][0]} - ${paragraph[1][1]}`,
                        link: `/toc/${secId}`,
                        sections: sections
                    }
                )
            });

            out.push(
                {
                    id: chapterId,
                    title: this.toc[chapterId].title,
                    paragraphs: paragraphs
                }
            );
        });

        return out;
    }

    // TODO: Methods to get numeric ranges for chapters, paragraphs and sections (for toc site page)

    //
    // STATIC
    //

    static toStringLocation(location: ITOCLocation): string
    {
        let strLoc = `${location.chapter.id}.${location.paragraph.id}`;

        if (location.section)
            strLoc += `/${location.section.id}`;

        return strLoc;
    }
}

export let toc = new TOC();