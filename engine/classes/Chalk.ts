import chalk from 'chalk';
const log = console.log;

export class Chalk
{
    static error(content: string, context: string = null)
    {
        let contextFancy = '    ' + chalk.white.bgHex('#FF730F')(' CONTEXT! ') + ' ' + chalk.hex('#FF730F')(context);

        throw new Error(chalk.white.bgRed(' ERROR! ') + ' ' + chalk.red(content) + (context ? contextFancy : ''));
    }
}