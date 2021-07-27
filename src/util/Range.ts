export class Range
{
    start: number;
    end: number;

    constructor(r: number|string|Range, rEnd: number|string = null)
    {
        if (r instanceof Range)
        {
            return new Range(r.start, r.end);
        }

        if (rEnd === null)
        {
            let rArr = r.toString().split('-');
            this.start = +(rArr[0].trim());
            this.end = +(rArr[1].trim());
            return;
        }

        this.start = +r;
        this.end = +rEnd;
    }

    iterate(callback: (num: number) => void)
    {
        for (let i = this.start; i <= this.end; i++) callback(i);
    }

    length()
    {
        return this.end - this.start + 1;
    }

    contains(num: number)
    {
        return this.start <= num && num <= this.end;
    }

    toString()
    {
        return this.start + ' - ' + this.end;
    }
}