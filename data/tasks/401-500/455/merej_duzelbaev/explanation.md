---
{
    "tags": [{ "name": "partial", "text": "Решен только пункт а)" }, "future"]
}
---

Ставим единицу вместо $x$:

$$ \limf{x}{1} \frac{\sqrt[m]{x} - 1}{\sqrt[n]{x}-1} = \frac{\sqrt[m]{1} - 1}{\sqrt[n]{1} - 1} = \frac{0}{0} $$

Получили неопределенность вида $\frac{0}{0}$. Воспользуемся правилом Лопиталя<todo-proto />.

Найдем производную числителя и знаменателя:

$$ (\sqrt[m]{x} - 1)' = \frac{1}{m}\cdot x^{\small \frac{1}{m} - 1}  $$

$$ (\sqrt[n]{x} - 1)' = \frac{1}{n}\cdot x^{\small \frac{1}{n} - 1} $$

Найдем предел отношения найденных производных, пользуясь пределом степенной функции (<p:[f/limits/f-power]>).

$$ \limf{x}{1} \frac{\dfrac{1}{m}x^{\small \frac{1}{m} - 1}}{\dfrac{1}{n}x^{\small \frac{1}{n} - 1}} = \frac{n}{m}\limf{x}{1} \frac{ 1^{\small \frac{1}{m} - 1} }{ 1^{\small \frac{1}{n} - 1} } = \frac{n}{m} $$