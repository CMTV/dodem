import { Const } from "./Const";
import { UtilIO } from "./Util";
import { Chalk } from "./Chalk";
import { Translator } from "./Translator";

export interface ITOCLocation
{
    chapter:
    {
        /** I, II, III and so on... */
        id: string,
        title: string
    },

    paragraph:
    {
        num: number,
        title: string
    },

    /** Info from toc-custom.json! */
    section:
    {
        id: string,
        title: string
    }
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
                location.chapter = { id: chId, title: chTitle };
                break;
            }
        }

        // Finding paragraph

        for (let i = 0; i < this.toc[location.chapter.id].paragraphs.length; i++)
        {
            let paragraph = this.toc[location.chapter.id].paragraphs[i];

            if (task <= paragraph[1][1])
            {
                location.paragraph = { num: i+1, title: paragraph[0] };
                break;
            }
        }

        // Finding section (custom toc)

        let secParentId = location.chapter.id + '.' + location.paragraph.num;

        if (secParentId in this.ctoc)
        {
            for (let i = 0; i < Object.keys(this.ctoc[secParentId]).length; i++)
            {
                let secId = Object.keys(this.ctoc[secParentId])[i];
                let section = this.ctoc[secParentId][secId];

                if (task <= section[1][1])
                {
                    location.section = { id: secId, title: section[0] };
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
}

export let toc = new TOC();