import { Process } from "@cmtv/processes";
import { glob } from "glob";

import { DB } from "src/db/Db";
import { Donater } from "src/db/Entity";
import { IO } from "src/util/IO";

export class FillDonaters extends Process
{
    processName() { return 'Добавление донатеров'; }

    process()
    {
        let donaters: Donater[] = [];

        glob.sync('data/donaters/*/').forEach(donaterDir =>
        {
            let donaterId = donaterDir.split('/').reverse()[1];
            let donater = new Donater;

            donater.donaterId = donaterId;
            donater = {...donater, ...JSON.parse(IO.readFile(donaterDir + 'info.json'))}

            if (IO.exists(donaterDir + 'about.md'))
                donater.about = IO.readFile(donaterDir + 'about.md');
                
            donaters.push(donater);
        });

        DB.transaction(() =>
        {
            donaters.forEach(donater => DB.insert.donater(donater));
        });
    }
}