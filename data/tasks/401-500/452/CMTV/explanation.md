---
{
    "tags": ["future"]
}
---

## Натуральные $m$ и $n$

Пусть $m,n \in \N$. Приведем корни в числителе к одному показателю:

$$ \frac{\sqrt[m]{1+\alpha x} - \sqrt[n]{1+\beta x}}{x} = \frac{\sqrt[mn]{(1+\alpha x)^n} - \sqrt[mn]{(1+\beta x)^m}}{x} $$

Введем теперь следующие обозначения:

$$ a = \sqrt[mn]{(1+\alpha x)^n} \qquad \qquad b = \sqrt[mn]{(1+\beta x)^m} $$

Вместе с введенными обозначениями избавимся от иррациональности в числителе, используя равенство прото-задачи <p:[power-diff]>:

$$ \frac{a-b}{x} = \\[10px] = \frac{a-b}{x}\cdot\frac{a^{mn-1} + a^{mn-2}b + \ldots + ab^{mn-2} + b^{mn-1}}{a^{mn-1} + a^{mn-2}b + \ldots + ab^{mn-2} + b^{mn-1}} = \\[10px] = \frac{a^{mn} - b^{mn}}{x}\cdot\frac{1}{a^{mn-1} + a^{mn-2}b + \ldots + ab^{mn-2} + b^{mn-1}} $$

Сразу найдем предел правой дроби, чтобы не тянуть ее за нами в дальнейших рассуждениях. При нахождении предела будем пользоваться ее арифметическими свойствами, пределом многочлена (<p:[f/limits/elementary]>), пределом степенной функции (<p:[f/limits/f-power]>), а также теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \scope{ \limf{x}{0} a(x) = \limf{x}{0} \sqrt[mn]{(1+\alpha x)^n} = 1 \\[10px] \limf{x}{0} b(x) = \limf{x}{0} \sqrt[mn]{(1+\beta x)^m} = 1 } \\[10px] \limf{x}{0} \frac{1}{a^{mn-1} + a^{mn-2}b + \ldots + ab^{mn-2} + b^{mn-1}} = \\[5px] = \frac{1}{1 + 1 + \ldots + 1 + 1} = \frac{1}{mn} $$

Запомним это значение, а пока продолжим рассуждения:

$$ \frac{a^{mn} - b^{mn}}{x} = \frac{(\alpha x + 1)^n - (\beta x + 1)^m}{x} = \ldots $$

Пользуемся формулой бинома Ньютона (<t:[5]>):

$$ \ldots = \frac{\alpha^nx^n + \ldots + n\alpha x + 1 - \beta^mx^m - \ldots - m\beta x - 1}{x} = \\[10px] = \alpha^nx^{n-1} + \ldots + n\alpha -\beta^mx^{m-1} - \ldots - m\beta $$

Находим теперь предел:

$$ \limf{x}{0} \alpha^nx^{n-1} + \ldots + n\alpha -\beta^mx^{m-1} - \ldots - m\beta = \\[5px] = 0 + 0 + \ldots + n\alpha - 0 - 0 \ldots - m\beta = \\[5px] = n\alpha - m\beta $$

Не забываем, что полученный результат надо умножить на $\frac{1}{mn}$:

$$ \frac{n\alpha - m\beta}{mn} = \frac{\alpha}{m} - \frac{\beta}{n} $$

Итак, если $n,m\in\N$, то:

$$ \limf{x}{0} \frac{\sqrt[m]{1+\alpha x} - \sqrt[n]{1+\beta x}}{x} = \frac{\alpha}{m} - \frac{\beta}{n} $$

## Отрицательные $m$ и $n$

Пусть $m$ и $n$ — отрицательные числа. Тогда введем новые обозначения:

$$ m' = -m \qquad \qquad n' = -n $$

При этом, $m',n' \in \N$. Найдем теперь значение предела:

$$ \limf{x}{0} \frac{(1+\alpha x)^{-\frac{1}{m'}} - (1+\beta x)^{-\frac{1}{n'}}}{x} = \\[10px] = \limf{x}{0} \frac{\frac{1}{(1+\alpha x)^{\frac{1}{m'}}} - \frac{1}{(1+\beta x)^{\frac{1}{n'}}}}{x} = \\[10px] = \limf{x}{0} \frac{\sqrt[n']{1+\beta x} - \sqrt[m']{1+\alpha x}}{x} \cdot \frac{1}{\underbrace{(1+\alpha x)^{\frac{1}{m'}}(1+\beta x)^{\frac{1}{n'}}}_{\normalsize \to 1}} = \\[10px] = \frac{\beta}{n'} - \frac{\alpha}{m'} = \frac{\alpha}{m} - \frac{\beta}{n} $$

Итак, в случае отрицательных $m$ и $n$ выполняется равенство:

$$ \limf{x}{0} \frac{\sqrt[m]{1+\alpha x} - \sqrt[n]{1+\beta x}}{x} = \frac{\alpha}{m} - \frac{\beta}{n} $$

## Разные знаки у $m$ и $n$

Пусть $m$ — отрицательное число, а $n$ — натуральное. Введем обозначение: $m' = -m$, откуда $m = -m'$.

Найдем теперь значение предела:

$$ \limf{x}{0} \frac{(1+\alpha x)^{-\frac{1}{m'}} - \sqrt[n]{1+\beta x}}{x} = \\[10px] = \limf{x}{0} \frac{\frac{1}{\sqrt[m']{1+\alpha x}} - \sqrt[n]{1+\beta x}}{x} = \\[10px] = \limf{x}{0} - \frac{\sqrt[m']{1+\alpha x}\sqrt[n]{1+\beta x} - 1}{x}\cdot\frac{1}{\underbrace{\sqrt[m']{1+\alpha x}}_{\normalsize \to 1}} = \ldots $$

Воспользуемся полученным в следующей задаче <t:[453]> результатом:

$$ \ldots = -\left(\frac{\alpha}{m'} + \frac{\beta}{n}\right) = \frac{\alpha}{m} - \frac{\beta}{n} $$

Итак, даже тогда, когда $m$ и $n$ имеют разные знаки, выполняется равенство:

$$ \limf{x}{0} \frac{\sqrt[m]{1+\alpha x} - \sqrt[n]{1+\beta x}}{x} = \frac{\alpha}{m} - \frac{\beta}{n} $$