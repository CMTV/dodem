import { Page } from "./Page";

export class TestPage extends Page
{
    pageName = 'test';
    content: string;

    dest()
    {
        return 'test/index.html';
    }
}