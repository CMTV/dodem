export class Misc
{
    static camelCaseKeys(obj: any)
    {
        if (!obj) return obj;

        let keys = Object.keys(obj);

        keys.forEach(key =>
        {
            let ccKey = key.replace(/_([a-z])/g, (match) => match[1].toUpperCase());

            if (key === ccKey)
                return;
            
            obj[ccKey] = obj[key];
            delete obj[key];
        });

        return obj;
    }
}