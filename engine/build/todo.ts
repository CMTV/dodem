import { Renderer } from "../classes/Renderer"
import { TodoItem } from "../classes/TodoItem";

export let todoList: TodoItem[] = [];

export function buildTodo()
{
    let SEO =
    {
        title: 'Проблемы',
        desc: 'Список задач с отсутствующим/неполным решением',
        ogImg: 'site/graphics/og/todo.png',
        canonical: 'todo'
    }

    Renderer.renderPage(
        'todo',
        SEO,
        'site/_layout/todo.pug',
        'out/todo/index.html',
        { todoList: todoList }
    );

    todoList = [];
}