---
{
    "tags": ["past"]
}
---

Обратите внимание, что в этой задаче мы ищем предел последовательности при $n\to\infty$, а не предел функции!

Разберемся с суммой в квадратных скобках. В ней $n-1$ слагаемых. Представим ее в следующем виде:

$$ \left(x+\frac{a}{n}\right) + \left(x+\frac{2a}{n}\right) + \ldots + \left(x+\frac{(n-1)a}{n}\right) = \\[5px] = (x+x+\ldots) + \frac{a}{n}\left[1 + 2 + \ldots + (n-1)\right] = \ldots $$

Воспользуемся доказанной в <t:[1]> формулой суммы первых $n-1$ натуральных чисел:

$$ \ldots = (n-1)x + \frac{n(n-1)a}{2n} = (n-1)\left( x + \frac{a}{2} \right) $$

Теперь найдем значение предела, пользуясь элементарными пределами последовательностей из <p:[sequences/limits/elementary]>:

$$ \limn \frac{1}{n}\left[ \left(x+\frac{a}{n}\right) + \left(x+\frac{2a}{n}\right) + \ldots + \left(x+\frac{(n-1)a}{n}\right) \right] = \\[5px] = \limn \frac{n-1}{n}\left(x + \frac{a}{2}\right) = x + \frac{a}{2} $$