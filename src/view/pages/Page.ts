import { CONFIG } from "src/build/BuildConfig";
import { SITEMAP } from "src/build/process/site/Sitemap";
import { OgPaint } from "src/util/OgPaint";
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

export class PageOgImg
{
    static id = 0;

    name: string;
    title: string;

    constructor(title: string)
    {
        this.title = title;
        PageOgImg.id++;
    }

    getId()
    {
        return `${PageOgImg.id}-${this.name}`;
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
    ogImg: PageOgImg;

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

        this.paintOgImg();

        Preprocessor.compilePug(`pages/${this.pageName}.pug`, this, this.dest());
        
        if (this.hasScript)
            Preprocessor.buildScript(`pages/${this.pageName}.ts`, `${this.pageName}.js`);
        
        if (this.hasStyle)
            Preprocessor.buildStyle(`pages/${this.pageName}.scss`, `${this.pageName}.css`);
    }

    private paintOgImg()
    {
        if (CONFIG.devMode) return;

        if (!this.ogImg)
            this.ogImg = new PageOgImg(this.seo.title);
        
        this.ogImg.name = this.pageName;

        // HARDCODED EXCEPTION FOR INDEX PAGE!

        let path = `/site/graphics/og-images/${(this.pageName === 'index' ? 'index.png' : this.ogImg.getId() + '.jpeg')}`;

        if (this.ogImg.name !== 'index')
            new OgPaint(this.ogImg.title, 'dist' + path);

        this.seo.img = CONFIG.getUrl() + path;
    }
}