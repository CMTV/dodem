import pug from 'pug';

import { UtilIO } from "../classes/Util";

export function buildEditor()
{
    UtilIO.fWrite('out/editor/index.html', pug.renderFile('site/_layout/editor.pug', { pretty: true, basedir: 'site/_layout' }));
    UtilIO.fWrite('out/editor/iframe.html', pug.renderFile('site/_layout/editorIFrame.pug', { pretty: true, basedir: 'site/_layout' }));
}