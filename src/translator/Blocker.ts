import { Component } from "./components/Component";
import { DefinitionView } from "./components/Definition";
import { ExampleView } from "./components/Example";
import { SpoilerView } from "./components/Spoiler";
import { TheoremView } from "./components/Theorem";

class BlockSpoiler
{
    static render(title: string, content: string)
    {
        return Component.getRender('spoiler', new SpoilerView(title, content));
    }
}

class BlockDefinition
{
    static render(title: string, content: string)
    {
        return Component.getRender('definition', new DefinitionView(content));
    }
}

class BlockTheorem
{
    static render(title: string, content: string)
    {
        return Component.getRender('theorem', new TheoremView(title, content));
    }
}

class BlockExample
{
    static render(title: string, content: string)
    {
        return Component.getRender('example', new ExampleView(content));
    }
}

//
//
//

export class Blocker
{
    static blockClassMap =
    {
        'spoiler':      BlockSpoiler,
        'definition':   BlockDefinition,
        'theorem':      BlockTheorem,
        'example':      BlockExample
    };

    static regexp = /^ *\|\|\|(.*)$/gm;

    static render(str: string)
    {
        let parseResult =   this.parseDelimiters(str);
        let blocks =        this.makeBlocks(parseResult);
        let renderedStr =   this.renderBlocks(parseResult.str, blocks);

        return renderedStr;
    }

    static parseDelimiters(str: string): ParseResult
    {
        let i = 0;

        let delimiters: DelimiterData[] = [];
        let oIndArr: number[] = [];
        let cIndArr: number[] = [];

        let regexp = new RegExp(this.regexp);
        let match: RegExpMatchArray;
        while(match = regexp.exec(str))
        {
            let delimiter = new DelimiterData;
                delimiter.pos = match.index;

            let isEndDelimiter = match[1].trim() === '';

            if (!isEndDelimiter)
            {
                let parts = match[1].trim().split(' ');

                let type =  parts.shift();
                let title = parts.join(' ').trim() || null;

                delimiter.type = type;
                delimiter.title = title;

                if (!Object.keys(this.blockClassMap).includes(type)) continue;
            }

            str = str.substring(0, match.index) + str.substring(match.index + match[0].length);
            regexp.lastIndex -= match[0].length;

            delimiters.push(delimiter);
            (isEndDelimiter ? cIndArr : oIndArr).push(i);
            i++;
        }

        let result = new ParseResult;
            result.str = str;
            result.delimiters = delimiters;
            result.oIndArr = oIndArr;
            result.cIndArr = cIndArr;
        
        return result;
    }

    static makeBlocks(parseResult: ParseResult): BlockData[]
    {
        let blocks: BlockData[] = [];
        let ocPairs = [];

        let delimiters =    parseResult.delimiters;
        let cArr =          parseResult.cIndArr;
        let oArr =          parseResult.oIndArr.reverse();

        while (oArr.length > 0)
        {
            let oInd = oArr.shift();
            let foundClosing = false;

            for (let i = 0; i < cArr.length; i++)
                if (cArr[i] > oInd)
                {
                    ocPairs.push([oInd, cArr[i]]);
                    
                    foundClosing = true;
                    cArr.splice(i, 1);
                    break;
                }

            if (!foundClosing)
                throw new Error(`Unclosed block '||| ${delimiters[oInd].type} ${delimiters[oInd].title || ''}...'`);
        }

        ocPairs.forEach(ocPair =>
        {
            let openDelimiter = delimiters[ocPair[0]];

            let block = new BlockData;
                block.type =    openDelimiter.type;
                block.title =   openDelimiter.title;
                block.start =   delimiters[ocPair[0]].pos;
                block.end =     delimiters[ocPair[1]].pos + 3;

            blocks.push(block);
        });

        return blocks;
    }

    static renderBlocks(str: string, blocks: BlockData[]): string
    {
        blocks.forEach(block =>
        {
            let BlockClass = this.blockClassMap[block.type];

            if (!BlockClass.hasOwnProperty('render'))
                throw new Error(`Block class '${BlockClass.name}' does not have static 'render' method!`);

            let toRenderStr = str.substring(block.start, block.end);
            
            let renderedStr = (BlockClass.render(block.title, toRenderStr.trim().replace(/^ +/gm, '')) || '') as string;
                renderedStr = `\r\n${renderedStr}\r\n`;

            let diff = renderedStr.length - toRenderStr.length;

            blocks.forEach(checkBlock =>
            {
                if (block.start === checkBlock.start) return;
                if (block.start > checkBlock.end) return;

                checkBlock.end += diff;

                if (block.start < checkBlock.start)
                    checkBlock.start += diff;
            });

            str = str.substring(0, block.start) + renderedStr + str.substring(block.end);
        });

        return str;
    }
}

class DelimiterData
{
    pos: number;
    type: string;
    title: string;
}

class BlockData
{
    type: string;
    title: string;
    start: number;
    end: number;
}

class ParseResult
{
    str: string;
    delimiters: DelimiterData[];
    oIndArr: number[];
    cIndArr: number[];
}