interface IdLabel
{
    id: string;
    label: string;
}

export abstract class BlockAttr
{
    static MAP = {};
    
    type: IdLabel;
    name: IdLabel;
    icon: string;
    desc: string;

    constructor(type: IdLabel, name: IdLabel, icon: string, desc: string)
    {
        this.type = type;
        this.name = name;
        this.icon = icon;
        this.desc = desc;

        BlockAttr.MAP[this.type.id + '|' + this.name.id] = this;
    }

    getCSSClass()
    {
        return [this.type.id, this.type.id + '--' + this.name.id];
    }

    static get(type: string, name: string)
    {
        let result = BlockAttr.MAP[type + '|' + name];

        if (!result)
            throw new Error(`Block Attrs '${type}|${name}' not found!`);

        return result; 
    }
}