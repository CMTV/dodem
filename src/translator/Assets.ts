export class Assets
{
    static task(taskNum: number)
    {
        return `/assets/tasks/${taskNum}`;
    }

    static solution(taskNum: number, solutionOrder: number, solverId: string)
    {
        return `/assets/solutions/${taskNum}-${solutionOrder}-${solverId}`;
    }

    static book(bookPageId: string)
    {
        return `/assets/book/${bookPageId}`;
    }
}