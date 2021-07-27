import { Process } from "@cmtv/processes";

import { DB } from "src/db/Db";
import { Translator } from "src/translator/Translator";
import { Donaters } from "src/view/pages/Donaters";
import { Helper, Patron, Teammate } from "src/view/partials/donaters";

export class Page_Donaters extends Process
{
    processName() { return 'Сборка страницы донатеров'; }

    process()
    {
        let page = new Donaters;

        let donaters = DB.select.donaters();

        donaters.forEach(dbDonater =>
        {
            let donaterType = Helper;

            if (dbDonater.tier === 'teammate')    donaterType = Teammate;
            if (dbDonater.tier === 'patron')      donaterType = Patron;

            let donater = new donaterType(dbDonater.donaterId, dbDonater.link, dbDonater.name);

            if (donater instanceof Patron)
            {
                donater.slogan = dbDonater.slogan;
                donater.about.content = Translator.renderSimple(dbDonater.about);
            }

            let propertyKey = dbDonater.tier + 's';

            if (!page[propertyKey])
                page[propertyKey] = [];
            
            page[propertyKey].push(donater);
        });

        page.compile();
    }
}