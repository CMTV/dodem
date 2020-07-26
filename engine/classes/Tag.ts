import { type } from "os";

export interface ITag
{
    name: string;
    icon: string;
    text: string;
}

export class Tag
{
    icon: string;
    text: string;

    constructor(icon: string, text: string)
    {
        this.icon = icon;
        this.text = text;
    }

    static getTags(rawTags: any[]): ITag[]
    {
        let tags: ITag[] = [];

        rawTags.forEach((rawTag) =>
        {
            if (typeof rawTag === 'string')
                tags.push(<ITag> { name: rawTag, icon: TAGS[rawTag].icon, text: TAGS[rawTag].text });
            else
                tags.push(<ITag> { name: rawTag.name, icon: TAGS[rawTag.name].icon, text: rawTag.text });
        });

        return tags;
    }
}

export const TAGS: any =
{
    past:       new Tag('fas fa-backward',                  'В разборе используется результаты предыдущих задач'),
    future:     new Tag('fas fa-forward',                   'В разборе используется материал из дальнейших задач'),
    partial:    new Tag('fas fa-adjust',                    'Разобрана только часть задачи'),
    unChecked:  new Tag('fas fa-exclamation-triangle',      'Разбор не проверен администраторами!'),
    unDone:     new Tag('fas fa-cog',                       'Разбор еще не закончен!')
}