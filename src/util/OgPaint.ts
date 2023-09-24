import { IO } from './IO';

export class OgPaint
{
    multiLineFontSize = 80;
    maxLineLength = 27;
    lineGap = 55;

    size = { w: 1200, h: 627 };

    // canvas: Canvas;
    // context: NodeCanvasRenderingContext2D;

    constructor(text: string, dest: string)
    {
       
    }

    private drawText(text: string)
    {
        
    }

    private splitOnLines(text: string): string[]
    {
       return [];
    }

    private drawSingleLine(line: string)
    {
       
    }

    private drawMultiLines(lines: string[])
    {

    }

    private setFitFontSize(text: string, min, max, desiredWidth)
    {
return null;
    }
}

class LineData
{
    text: string;

    width: number;
    height: number;

    x: number;
    y: number;
}