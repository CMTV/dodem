import { Block } from "../includes/block";

new Block(document.querySelector('main > .task'));
document.querySelectorAll('main > .solution').forEach((solution) => new Block(solution));