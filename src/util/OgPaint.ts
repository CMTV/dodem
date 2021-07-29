import { createCanvas, Image, Canvas, NodeCanvasRenderingContext2D } from 'canvas';

import { IO } from './IO';

export class OgPaint
{
    multiLineFontSize = 80;
    maxLineLength = 27;
    lineGap = 55;

    size = { w: 1200, h: 627 };

    canvas: Canvas;
    context: NodeCanvasRenderingContext2D;

    constructor(text: string, dest: string)
    {
        this.canvas = createCanvas(this.size.w, this.size.h);
        this.context = this.canvas.getContext('2d');

        let templateImg = new Image;
            templateImg.src = 'site/graphics/og-images/_template.png';

        this.context.drawImage(templateImg, 0, 0);

        this.context.shadowColor = '#00354E';
        this.context.shadowBlur = 7;
        this.drawText(text);

        IO.writeFile(dest, this.canvas.toBuffer('image/jpeg'))
    }

    private drawText(text: string)
    {
        if (text.length > 95)
            text = text.substring(0, 93) + '...';

        let lines = this.splitOnLines(text);

        if (lines.length === 1) this.drawSingleLine(lines[0]);
        else this.drawMultiLines(lines);
    }

    private splitOnLines(text: string): string[]
    {
        let lines: string[] = [];
        let line = '';

        text.split(' ').forEach((word, i, arr) =>
        {
            let toAdd = (i === 0 ? '' : ' ') + word;

            if (line.length + toAdd.length >= this.maxLineLength)
            {
                lines.push(line);
                line = '';

                toAdd = toAdd.substring(1);
            }

            line += toAdd;
        });

        lines.push(line);

        return lines;
    }

    private drawSingleLine(line: string)
    {
        this.setFitFontSize(line, 0, 120, this.size.w - 100);
        this.context.fillStyle = '#fff';

        let measure = this.context.measureText(line);
        let measureHeight = measure.actualBoundingBoxAscent - measure.actualBoundingBoxDescent;

        this.context.fillText(line, this.size.w / 2 - measure.width / 2, this.size.h / 2 + measureHeight / 2);
    }

    private drawMultiLines(lines: string[])
    {
        this.context.font = `bold ${this.multiLineFontSize}px Consolas`;
        this.context.fillStyle = '#fff';

        let dataArr: LineData[] = [];
        let H = 0;

        lines.forEach((line, i, arr) =>
        {
            let measure = this.context.measureText(line);

            let data = new LineData;
                data.text =     line;
                data.width =    measure.width;
                data.height =   measure.actualBoundingBoxAscent - measure.actualBoundingBoxDescent;

            H += data.height + (i !== arr.length - 1 ? this.lineGap : 0);

            dataArr.push(data);
        });

        let shift = this.size.h / 2 - H / 2;
        let itemShift = 0;

        dataArr.forEach(dataItem =>
        {
            itemShift += dataItem.height;
            this.context.fillText(dataItem.text, this.size.w / 2 - dataItem.width / 2, shift + itemShift);
            itemShift += this.lineGap;
        });
    }

    private setFitFontSize(text: string, min, max, desiredWidth)
    {
        if (max-min < 1) return min;
        let test = min + ((max-min) / 2);
        
        this.context.font= 'bold ' + test + "px Consolas";

        let measureTest = this.context.measureText(text).width;

        let found;
        if ( measureTest > desiredWidth) {
            found = this.setFitFontSize(text, min, test, desiredWidth)
        } else {
            found = this.setFitFontSize(text, test, max, desiredWidth)
        }
        return found;
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