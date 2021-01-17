---
{
    "tags": ["past"]
}
---

## Числитель

Из каждой скобки вынесем $x$ в соответствующей степени:

$$ (x+1)(x^2 + 1)\ldots(x^n + 1) = \\[5px] = xx^2\ldots x^n\left(1+\frac{1}{x}\right)\left(1 + \frac{1}{x^2}\right)\ldots\left(1+\frac{1}{x^n}\right) = \\[5px] = x^{1+2+\ldots+n} \left(1+\frac{1}{x}\right)\ldots\left(1+\frac{1}{x^n}\right) = \\[5px] = x^{\frac{n(n+1)}{2}} \left(1+\frac{1}{x}\right)\ldots\left(1+\frac{1}{x^n}\right) $$

Выше мы воспользовались формулой суммы $n$ первых натуральных чисел. Она выводилась в задаче <t:[1]>.

## Знаменатель

Вытащим $x^n$ из под квадратных скобок:

$$ \left[ (nx)^n + 1 \right]^{\frac{n+1}{2}} = \left[ x^n\left( n^n + \frac{1}{x^n} \right) \right]^{\frac{n+1}{2}} = x^{\frac{n(n+1)}{2}}\left( n^n + \frac{1}{x^n} \right)^{\frac{n+1}{2}} $$

## Значение предела

Воспользуемся полученными выражениями для числителя и знаменателя и, с помощью арифметический свойств пределов и прото-задачи <p:[f/limits/elementary]> найдем предел:

$$ \limf{x}{\infty} \frac{x^{\frac{n(n+1)}{2}} \left(1+\frac{1}{x}\right)\ldots\left(1+\frac{1}{x^n}\right)}{x^{\frac{n(n+1)}{2}}\left( n^n + \frac{1}{x^n} \right)^{\frac{n+1}{2}}} = \\[10px] = \frac{\limf{x}{\infty}\left(1 + \frac{1}{x}\right)\ldots\limf{x}{\infty}\left(1 + \frac{1}{x^n}\right)}{\limf{x}{\infty} \left( n^n + \frac{1}{x^n} \right)^{\frac{n+1}{2}}} = \\[10px] = \frac{(1+0)\ldots(1+0)}{\limf{x}{\infty} \left( n^n + \frac{1}{x^n} \right)^{\frac{n+1}{2}}} = \frac{1}{\limf{x}{\infty} \left( n^n + \frac{1}{x^n} \right)^{\frac{n+1}{2}}} $$

В знаменателе воспользуемся теоремой о пределах сложной (<p:[f/limits/composition]>) и степенной (<p:[f/limits/f-power]>) функций.

$$ \limf{x}{\infty} \left( n^n + \frac{1}{x^n} \right)^{\frac{n+1}{2}} = \scope{ y(x) = n^n + \frac{1}{x^n} \\[10px] \limf{x}{\infty} y(x) = n^n \\[10px] y \to n^n } = \limf{y}{n^n} y^{\frac{n+1}{2}} = n^{\frac{n(n+1)}{2}} $$

Это мы работали со знаменателем. Итак:

$$ \limf{x}{\infty} \frac{(x+1)(x^2 + 1)\ldots(x^n + 1)}{\left[ (nx)^n + 1 \right]^{\frac{n+1}{2}}} = n^{-\frac{n(n+1)}{2}} $$