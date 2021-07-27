import { Process } from "@cmtv/processes";
import { Donaters } from "src/view/pages/Donaters";
import { Helper, Patron, Teammate } from "src/view/partials/donaters";

export class Test_Donaters extends Process
{
    processName() { return 'Сборка тестовой страницы спонсоров'; }

    process()
    {
        let donaters = new Donaters;
        donaters.helpers =      this.prepareHelpers();
        donaters.teammates =    this.prepareTeammates();
        donaters.patrons =      this.preparePatrons();

        donaters.compile();
    }

    prepareHelpers(): Helper[]
    {
        let helpers = [];

        helpers.push(
            new Helper('CMTV', 'link1', 'Петр Радько'),
            new Helper('helper2', null, 'Николай Нагибин'),
            new Helper('helper3', 'link2', 'Руслан Оганов'),
            new Helper('iiilll_llliii', 'link3', 'Семен Вдовыкин')
        );

        helpers = helpers.concat(helpers).concat(helpers).concat(helpers);

        return helpers;
    }

    prepareTeammates(): Teammate[]
    {
        let helpers = this.prepareHelpers();
        let teammates = [];

        helpers.forEach(helper =>
            teammates.push(new Teammate(helper.id, helper.link, helper.name)));

        return teammates;
    }

    preparePatrons(): Patron[]
    {
        let patrons = [];

        let patron1 = new Patron('CMTV', 'link1', 'Петр Радько');
        patron1.slogan = 'Гениями не рождаются — ими становятся!';
        patron1.about.content = 'Немного информации обо мне!';

        let patron2 = new Patron('iiilll_llliii', 'link2', 'Семен Вдовыкин');
        patron2.about.content = 'Тут тоже инфомрация обо мне';

        let patron3 = new Patron('nnagibin', null, 'Николай Нагибин');
        patron3.slogan = 'Тебе уже двадцать? На старт.';

        patrons.push(
            patron1,
            patron2,
            patron3
        );

        return patrons;
    }
}