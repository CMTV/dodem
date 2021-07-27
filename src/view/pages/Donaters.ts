import { Helper, Patron, Teammate } from "../partials/donaters";
import { LocationPart } from "../partials/location";
import { Page } from "./Page";

export class Donaters extends Page
{
    pageName = 'donaters';
    hasScript = true;

    helpers:    Helper[];
    teammates:  Teammate[];
    patrons:    Patron[];
    
    constructor()
    {
        super();

        this.seo.title =    'Спонсоры';
        this.seo.desc =     'Прекрасные люди, финансово поддерживающие проект.';

        this.location.parts.push(LocationPart.DONATERS);
        this.location.accentLast = true;
    }

    dest() { return 'donaters/index.html'; }
}

