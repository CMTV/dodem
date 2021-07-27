export class Md
{
    static configRegexp = /^---$([\s\S]+?)^---$/m;

    static getConfig(md: string)
    {
        let matchArr = md.match(this.configRegexp);

        if (matchArr)
            if (matchArr.index === 0)
            {
                return JSON.parse(matchArr[1].replace(/\\/gm, '\\\\'));
            }

        return {};
    }

    static getContent(md: string): string
    {
        md = md.replace(this.configRegexp, (match, group, index) =>
        {
            if (index !== 0)
                return match;
            
            return '';
        });

        md = md.trim();

        return md;
    }

    static parse(md: string): { config, content: string }
    {
        let config =    this.getConfig(md);
        let content =   this.getContent(md);

        return { config: config, content: content };
    }
}