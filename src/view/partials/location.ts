export class Location
{
    accentLast: boolean;
    parts: LocationPart[] = [];

    hasLocation()
    {
        // TODO: Добавить возможность выключать локацию на определенных страницах?
        return this.parts.length > 1;
    }

    getLast()
    {
        return this.parts[this.parts.length - 1];
    }
}

export class LocationPart
{
    static HOME =       new LocationPart('/',           'Главная',      null, 'fas fa-home', true);
    static TASKS =      new LocationPart('/tasks',      'Задачи',       null, 'fas fa-hashtag', true);
    static BOOK =       new LocationPart('/book',       'Справка',      null, 'fas fa-book', true);
    static HISTORY =    new LocationPart('/history',    'Хронология',   null, 'fas fa-history', true);
    static SOLVERS =    new LocationPart('/solvers',    'Решатели',     null, 'fas fa-users', true);
    static DONATERS =   new LocationPart('/donaters',   'Спонсоры',     null, 'fas fa-hand-holding-usd', true);
    static PROBLEMS =   new LocationPart('/todo',       'Проблемы',     null, 'fas fa-bug', true);

    //

    link: string;

    title: string;
    shortcut: string;

    icon: string;
    iconOnly: boolean;

    constructor(link: string, title: string, shortcut: string, icon: string, iconOnly: boolean)
    {
        this.link = link;

        this.title = title;
        if (shortcut)
            this.shortcut = shortcut;
        
        if (icon)
        {
            this.icon = icon;
            if (iconOnly)
                this.iconOnly = iconOnly;
        }
    }

    getShortcut()
    {
        return this.shortcut ? this.shortcut : this.title;
    }
}