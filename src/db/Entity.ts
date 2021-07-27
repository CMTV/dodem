export enum TocItemType
{
    Chapter =   'chapter',
    Paragraph = 'paragraph',
    Topic =     'topic'
}

export class TaskTocItem
{
    tocTaskId:      string;
    order:          number;
    type:           TocItemType;
    title:          string;
    taskStart:      number;
    taskEnd:        number;
}

//
//
//

export class GroupTask
{
    taskStart:  number;
    taskEnd:    number;
    task:       string;
}

export class Task
{
    taskId:         number;
    task:           string;
    taskSeo:        string = null;
    hint:           string = null;
    answer:         string = null;
    note:           string = null;
    attrs:          string[] = [];
    difficulty:     string;
}

//
//
//

export class Solution
{
    solutionId: number;
    taskId:     number;
    solverId:   string;
    hint:       string = null;
    solution:   string;
    attrs:      string[] = [];
}

export class SolutionDependency
{
    solutionId:     number;
    dependencyId:   string;
    type:           string;

    constructor(solutinId: number, dependencyId: string, type: string)
    {
        this.solutionId = solutinId;
        this.dependencyId = dependencyId;
        this.type = type;
    }
}

//
//
//

export class Solver
{
    solverId:   string;
    name:       string = null;
    slogan:     string = null; 
    link:       string = null;
    bio:        string = null;

    constructor(solverId: string)
    {
        this.solverId = solverId;
    }
}

//
// HISTORY
//

export class HistoryItem
{
    date:       string;
    content:    string;
    taskAdd:    number = null;
    taskEdit:   number = null;
    bookAdd:    number = null;
    bookEdit:   number = null;
}

//
// BOOK
//

export class BookTocItem
{
    tocBookId:      string;
    order:          number;
    title:          string;
    type:           TocItemType;
    termCount:      number;
}

export enum BookPageType
{
    Definition =    'definition',
    Theorem =       'theorem',
    Method =        'method',
    Other =         'other'
}

export class BookPage
{
    bookPageId: string;
    type:       BookPageType;
    title:      string;
    desc:       string = null;
    content:    string;
    order:      number;
    seoDesc:    string = null;
}

export class BookPageDependency
{
    pageId:         string;
    dependentId:    string;
}

//
// DONATE
//

export class Donater
{
    donaterId:  string;
    name:       string;
    tier:       string;
    link:       string = null;
    slogan:     string = null;
    about:      string = null;
}