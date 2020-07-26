import { UtilIO } from "./classes/Util";

const { createCanvas } = require('canvas');

function getPaint(taskNum: number): string
{
    const size = { w: 600, h: 600 }

    const canvas = createCanvas(size.w, size.h);
    const context = canvas.getContext('2d');

    // Background
    context.fillStyle = 'white';
    context.fillRect(0, 0, size.w, size.h);

    // Text style
    context.font = 'bold 180px Consolas';
    context.textAlign = 'center';
    context.textBaseline = 'top';

    // Task number
    context.fillStyle = '#282828';
    context.fillText(taskNum, 300 + context.measureText('#').width / 2 + 10, 190);

    // Task icon
    context.fillStyle = '#009FF4';
    context.fillText('#', 300 - context.measureText(taskNum).width/2 - 10, 190);

    return canvas.toBuffer('image/png');
}

export function paint(taskNum: number)
{
    UtilIO.fWrite(`out/site/graphics/tasks/${taskNum}.png`, getPaint(taskNum));
}