import { Chalk } from "./Chalk";

const dataBookRefs = require('../../data/book-refs');

export class BookRef
{
    id: string;
    title: string;
    url: string;

    static getById(id: string, context: string = null)
    {
        let bookRef = new BookRef();

        if (!(id in dataBookRefs.refs))
            Chalk.error(`There is no book reference with '${id}' ID!`, context);

        bookRef.id =    id;
        bookRef.title = dataBookRefs.refs[id].title;
        bookRef.url =   dataBookRefs.refs[id].url;

        return bookRef;
    }

    static getTocBookRefIds(tocId: string): string[]
    {
        let ids: string[] = [];

        ids = ids.concat(dataBookRefs.toc[tocId] || []);

        let tocIdArr = tocId.split('/');

        if (tocIdArr.length === 2)
            ids = ids.concat(dataBookRefs.toc[tocIdArr[0]] || []);

        return ids;
    }

    static getBookRefs(refIds: string[], context: string = null): BookRef[]
    {
        let refs: BookRef[] = [];
        refIds.forEach(refId => refs.push(BookRef.getById(refId, context)));

        return refs;
    }

    static getTocBookRefs(tocId: string, context: string = null): BookRef[]
    {
        let refs: BookRef[] = [];

        if (tocId in dataBookRefs.toc)
            dataBookRefs.toc[tocId].forEach((refId: string) => refs.push(BookRef.getById(refId, context)));

        return refs;
    }
}