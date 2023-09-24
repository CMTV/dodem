import { CONFIG } from "src/build/BuildConfig";
import { SITEMAP } from "src/build/process/site/Sitemap";
import { Preprocessor } from "src/util/Preprocessor";
import { Location, LocationPart } from "../partials/location";

export class PageSEO
{
    fullTitle:  boolean;
    title:      string;
    desc:       string;
    keywords:   string[];
    img:        string;

    getFullTitle()
    {
        let title = this.title;
        
        if (!this.fullTitle)
            title += ' — Демидович';

        return title;
    }

    getKeywords()
    {
        let defaultKeywords = [
            'демидович',
            'решебник',
            'матан',
            'математический анализ',
            'математика'
        ];

        if (!this.keywords)
            this.keywords = [];

        return defaultKeywords.concat(this.keywords);
    }
}

export abstract class Page
{
    //
    // Поля для Pug
    //

    config = CONFIG;
    location: Location;
    seo: PageSEO;

    canonical = () => (CONFIG.getUrl() + '/' + this.dest()).replace('/index.html', '');
    bodyClass = () => this.pageName;

    hasStyle = true;
    hasScript = false;

    //
    // Поля движка
    //

    abstract pageName: string;
    abstract dest(): string;

    constructor()
    {
        this.location = new Location;
        this.location.parts.push(LocationPart.HOME);
        this.seo = new PageSEO;
    }

    compile()
    {
        SITEMAP.urls.push(this.canonical());

        //this.paintOgImg();

        Preprocessor.compilePug(`pages/${this.pageName}.pug`, this, this.dest());
        
        if (this.hasScript)
            Preprocessor.buildScript(`pages/${this.pageName}.ts`, `${this.pageName}.js`);
        
        if (this.hasStyle)
            Preprocessor.buildStyle(`pages/${this.pageName}.scss`, `${this.pageName}.css`);
    }
}