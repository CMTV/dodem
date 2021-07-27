import { Process } from "@cmtv/processes";
import { IO } from "src/util/IO";

export class CreateFromScheme extends Process
{
    processName() { return 'Создание базы данных по шаблону'; }

    process()
    {
        IO.copyFile('data/schema.db', 'data/dodem.db');   
    }
}