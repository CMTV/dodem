export class BuildConfig
{
    url = 'https://dodem.ru';

    buildTime: number;
    devMode: boolean;

    constructor()
    {
        this.buildTime = Date.now();
    }

    getUrl()
    {
        return this.devMode ? 'http://localhost:3000' : this.url;
    }
}

export let CONFIG = new BuildConfig();

export function SET_CONFIG(config: BuildConfig)
{
    CONFIG = config;
}