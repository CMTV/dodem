import SQLite from 'better-sqlite3';

import { G } from "../g";
import { Insert } from './Insert';
import { Select } from './Select';

class Db extends G
{
    db: SQLite.Database;
    
    insert: Insert;
    select: Select;

    init()
    {
        this.db = SQLite('data/dodem.db');
        
        this.insert = new Insert(this.db);
        this.select = new Select(this.db);
    }

    transaction(func: () => void)
    {
        this.db.transaction(func)();
    }
}

export const DB = new Db;