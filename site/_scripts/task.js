class Task
{
    constructor(task)
    {
        // Location switcher
        this.setupLocation(task.querySelector(".body > .location"));

        // Actions logic
        this.addShowHideLogic(task, "hint");
        this.addShowHideLogic(task, "answer");        
    }

    setupLocation(location)
    {
        location.querySelector("i.expand").addEventListener("click", function ()
        {
            location.classList.toggle("_expanded");
            this.title = (location.classList.contains("_expanded")) ? "Скрыть" : "Раскрыть";
        });
    }

    addShowHideLogic(task, actionName)
    {
        if (!task.querySelector(`.head .action.${actionName}`))
            return;

        task.querySelector(`.head .action.${actionName}`).addEventListener("click", function () 
        {
            this.classList.toggle("_active");
            task.querySelector(`.body > .${actionName}`).classList.toggle("_showing");
        });
    }
}

class Solution
{
    static HINT = 'hint';
    static EXPLANATION = 'explanation';

    solution = null;

    isHint = false;
    isExplanation = false;

    constructor(solution)
    {
        this.solution = solution;

        this.addSolutionLogic(Solution.HINT);
        this.addSolutionLogic(Solution.EXPLANATION);
    }

    addSolutionLogic(actionName)
    {
        if (!this.solution.querySelector(`.action.${actionName}`))
            return;

        let that = this;

        this.solution.querySelector(`.action.${actionName}`).addEventListener("click", function ()
        {
            this.classList.toggle("_active");
            that.solution.querySelector(`.block.${actionName}`).classList.toggle("_showing");

            switch (actionName)
            {
                case Solution.HINT:
                    that.isHint = !that.isHint;
                    break;
                case Solution.EXPLANATION:
                    that.isExplanation = !that.isExplanation;
                    break;
            }

            that.updateGlobalClasses();
        });
    }

    updateGlobalClasses()
    {
        this.clearGlobalClasses();

        if (this.isHint || this.isExplanation)
            this.solution.classList.add("_expanded");

        if (this.isHint)
            this.solution.classList.add("_hintShowing");
        
        if (this.isExplanation)
            this.solution.classList.add("_expShowing");
    }

    clearGlobalClasses()
    {
        this.solution.classList.remove("_expanded", "_hintShowing", "_expShowing");
    }
}

class FAQItem
{
    constructor(faqItem)
    {
        faqItem.querySelector(".header > i").addEventListener("click", function ()
        {
            faqItem.classList.toggle("_opened");
            this.title = (faqItem.classList.contains("_opened")) ? "Скрыть" : "Раскрыть";
        });
    }
}

document.addEventListener("DOMContentLoaded", () =>
{
    // Task
    new Task(document.querySelector(".task"));

    // Solutions
    document.querySelectorAll(".solutions > .solution").forEach((solution) => new Solution(solution));

    // Faq items
    document.querySelectorAll(".faqContainer > .faqItem").forEach((faqItem) => new FAQItem(faqItem));
});