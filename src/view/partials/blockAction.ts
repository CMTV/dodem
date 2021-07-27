class BlockAction
{
    name: string;
    icon: string;
    hint: string;

    constructor(name, icon, hint)
    {
        this.name = name;
        this.icon = icon;
        this.hint = hint;
    }
}

export class BlockActionLink extends BlockAction
{
    link: string;
}

export class BlockActionPane extends BlockAction
{
    content: string;
}