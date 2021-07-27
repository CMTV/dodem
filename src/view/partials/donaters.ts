import { IO } from "src/util/IO";
import { BlockActionPane } from "./blockAction";

export class Helper
{
    id: string;
    link: string;
    name: string;

    constructor(id: string, link: string, name: string)
    {
        this.id = id;
        this.link = link;
        this.name = name;
    }
}

export class Teammate extends Helper
{
    hasAvatar: boolean;

    constructor(id: string, link: string, name: string)
    {
        super(id, link, name);
        this.hasAvatar = IO.exists(`site/graphics/donaters/${this.id}.png`);
    }

    avatar()
    {
        return `/site/graphics/donaters/${this.id}.png`;
    }
}

export class Patron extends Teammate
{
    slogan: string;
    about: BlockActionPane;

    constructor(id: string, link: string, name: string)
    {
        super(id, link, name);
        this.about = new BlockActionPane('about', 'fas fa-info', 'О спонсоре');
    }
}