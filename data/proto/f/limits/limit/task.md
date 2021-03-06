---
{
    "title": "Предел функции в точке",
    "description": "Определения предела функции в точке по Коши и по Гейне. Доказательство эквивалентности этих определений."
}
---

Пусть $b$ — предел функции $f(x)$ в точке $a$ (конечной или бесконечной). Следующие определения эквиваленты:

## По Коши

$$ \lim\limits_{x\to a}f(x) = b \ \Leftrightarrow \ \forall V(b) \ \exists \mathring{U}(a) \ : \ f\left(\mathring{U}(a)\right) \subset V(b) $$

Другими словами, какую-бы окрестность $V$ точки $b$ мы не взяли, найдется проколотая окрестность $\mathring{U}$ точки $a$, такая, что для любого $x$ из этой проколотой окрестности значение функции $f(x)$ принадлежит окрестности $V(b)$.

## По Гейне

Пусть $\mathring{D}(a)$ — проколотая окрестность точки $a$, в каждой точке которой функция $f(x)$ определена.

$$ \lim\limits_{x\to a}f(x) = b \ \Leftrightarrow \\[5px] \Leftrightarrow \ \forall \set{x_n} \ : \ \begin{rcases} \set{x_n} \subset \mathring{D}(a) \\[5px] \set{x_n} \to a \end{rcases} \ \exists \limn \set{f(x_n)} = b $$

Другими словами, для любой сходящейся к $a$ последовательности $x$-ов, все члены которой находятся в $\mathring{D}(a)$, соответствующая ей последовательность значений функции должна иметь предел, равный $b$.

*Замечание:* обратите внимание, что из $\set{x_n} \subset \mathring{D}(a)$ следует, что ни один член произвольной последовательности $\set{x_n}$ не должен равняться $a$!