---
{
    "tags": ["past"]
}
---

## Новое обозначение

В прото-задаче <p:[power-diff]> мы доказали следующее равенство:

$$ x^p-1 = (x-1)(x^{p-1} + x^{p-2} + \ldots + x + 1) $$

Обозначим сумму справа за $S_p(x)$:

$$ S_p(x) = \sum\limits^{p}_{i=1} x^{i-1} = x^{p-1} + x^{p-2} + \ldots + 1 $$

Тогда

$$ x^p-1 = (x-1)S_p(x) $$

Найдем значение следующего предела, пользуясь пределом многочлена из <p:[f/limits/elementary]>:

$$ \limf{x}{1} \frac{x^p-1}{x-1} = \limf{x}{1} S_p(x) = S_p(1) = p $$

Наконец, с помощью найденного значения выше, а также с помощью формулы суммы первых $n$ натуральных чисел из задачи <t:[1]> найдем значение вот такого предела:

$$ \limf{x}{1} \frac{S_p(x) - p}{x-1} = \limf{x}{1} \frac{x^{p-1}+x^{p-2}+\ldots+1 - p}{x-1} = \\[10px] = \limf{x}{1} \frac{(x^{p-1}-1) + (x^{p-2}-1) + \ldots + (x-1)}{x-1} = \\[10px] = \limf{x}{1} \frac{x^{p-1}-1}{x-1} + \limf{x}{1}\frac{x^{p-2} - 1}{x-1} + \ldots + \limf{x}{1}\frac{x-1}{x-1} = \\[10px] = \limf{x}{1} S_{p-1}(x) + \limf{x}{1}S_{p-2}(x) + \ldots + \limf{x}{1}S_1(x) = \\[5px] = 1 + 2 + \ldots + (p-2) + (p-1) = \\[5px] = \frac{p(p-1)}{2} $$

## Поиск значения предела

Поработаем сначала с выражением из условия:

$$ \frac{m}{1-x^m} - \frac{n}{1-x^n} = \\[10px] = \frac{n}{(x-1)S_n(x)} - \frac{m}{(x-1)S_m(x)} = \frac{nS_m(x) - mS_n(x)}{(x-1)S_n(x)S_m(x)} = \\[10px] = \frac{1}{S_n(x)S_m(x)}\left[ \frac{nS_m(x) - mn + mn - mS_n(x)}{x-1} \right] = \\[10px] = \frac{1}{S_nS_m(x)}\left[ n\frac{S_m(x) - m}{x-1} - m\frac{S_n(x) - n}{x-1} \right] $$

Найдем теперь значение предела, пользуясь результатами из начала решения:

$$ \limf{x}{1} \frac{1}{S_nS_m(x)}\left[ n\frac{S_m(x) - m}{x-1} - m\frac{S_n(x) - n}{x-1} \right] = \\[10px] = \frac{1}{mn}\left[ n\limf{x}{1}\frac{S_m(x) - m}{x-1} - m\limf{x}{1}\frac{S_n(x) - n}{x-1} \right] = \\[10px] = \frac{1}{mn}\left[ n \frac{m(m-1)}{2} - m\frac{n(n-1)}{2} \right] = \\[10px] = \frac{m-1}{2} - \frac{n-1}{2} = \frac{m-n}{2} $$