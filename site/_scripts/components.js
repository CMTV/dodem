//
// Spoiler
//

class Spoiler
{
    constructor(spoilerElem)
    {
        spoilerElem.setAttribute("data-enabled", "");

        spoilerElem.querySelector(".head").addEventListener("click", function ()
        {
            spoilerElem.classList.toggle("_showing");
            this.title = (spoilerElem.classList.contains("_showing")) ? "Скрыть" : "Раскрыть";
        });
    }
}

document.addEventListener("DOMContentLoaded", () =>
{
    enableComponents();
});

//
//
//

function enableComponents()
{
    document.querySelectorAll(".content .spoiler:not([data-enabled])").forEach((spoiler) => new Spoiler(spoiler));
}