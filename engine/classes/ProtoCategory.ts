const CATEGORIES = require('../../data/proto/category-names');

export class ProtoCategory
{
    id: string;
    title: string;

    getOutID()
    {
        return this.id.replace('/', '-');
    }

    //
    // STATIC
    //

    static getCategory(protoTaskId: string)
    {
        let category = new ProtoCategory();

        // ID

        {
            let taskCatId = protoTaskId.split('/').filter((val, i, self) => i !== self.length - 1).join('/');

            if (taskCatId === '' || !(taskCatId in CATEGORIES))
                category.id = 'uncategorised';
            else
                category.id = taskCatId;
        }

        // Title

        category.title = CATEGORIES[category.id];

        return category;
    }
}