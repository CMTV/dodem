---
{ "tags": [{"name": "partial", "text": "Решены только пункты а) и в)"}, "past"] }
---

## Пункт а)

$$ \limn\frac{1^p + 2^p + \ldots + n^p}{n^{p+1}} = \frac{1}{p+1} $$

||| spoiler Строгое возрастание $n^{p+1}$
Докажем, что

$$ n^{p+2} > n^{p+1} $$

$$ n > 1 $$

Последнее очевидно выполняется, так как $n$ — натуральное число.

Итак, мы доказали, что

$$ n^{p+2} > n^{p+1} $$

$\blacksquare$
|||

||| spoiler $n^{p+1}\to +\infty$
Докажем, что

$$ \forall M > 0 \ \exists N = N(M) \ \forall n > N \ : \ n^{p+1} > M $$

Рассмотрим последнее неравенство:

$$ n^{p+1} > M $$

Возьмем из обеих частей неравенства корень степени $p+1$:

$$ \sqrt[p+1]{n^{p+1}} > \sqrt[p+1]{M} $$

$$ n > \sqrt[p+1]{M} $$

Итак, для любого $M>0$ достаточно взять за $N$ число $\ceil{\sqrt[p+1]{M}}$. Тогда, для любого натурального числа $n>N$ будет выполняться неравенство:

$$ n > N = \ceil{\sqrt[p+1]{M}} \geq \sqrt[p+1]{M} $$

$$ n > \sqrt[p+1]{M} $$

А значит и

$$ n^{p+1} > M $$

Мы по определению доказали, что  $n^{p+1}\to +\infty$.

$\blacksquare$
|||

Для нахождения предела по теореме Штольца нам осталось только найти следующий предел отношения разности:

$$
    \lim_{n\to\infty} = \frac{1^p + 2^p + \ldots + n^p + (n+1)^p - (1^p + 2^p + \ldots + n^p)}{(n+1)^{p+1} - n^{p+1}} = \\[5px] = \lim_{n\to\infty} \frac{(n+1)^p}{(n+1)^{p+1} - n^{p+1}}
$$

В знаменателе вынесем за скобки число $n^{p+1}$:

$$ \frac{(n+1)^p}{(n+1)^{p+1} - n^{p+1}} = \frac{(n+1)^p}{n^{p+1} \left( \left(\frac{n+1}{n}\right)^{p+1} - 1 \right)} $$

Скобку в знаменателе правой части можно разложить на сумму членой геометрической прогрессии:

||| spoiler Пояснение про геометрическую прогрессию
Рассмотрим сумму $p+1$ членов геометрической прогрессии:

$$ 1 + \left(\frac{n+1}{n}\right) + \left(\frac{n+1}{n}\right)^2 + \ldots = \frac{1\cdot\left( \left(\frac{n+1}{n}\right)^{p+1} - 1 \right)}{\left(\frac{n+1}{n}\right) - 1} $$

Доможим обе части равенства на $\left(\frac{n+1}{n}\right) -1$:

$$\left( \frac{n+1}{n} - 1 \right)\left( 1 + \left(\frac{n+1}{n}\right) + \left(\frac{n+1}{n}\right)^2 + \ldots \right) = \left(\frac{n+1}{n}\right)^{p+1} - 1 $$
|||

$$
    \frac{(n+1)^p}{(n+1)^{p+1} - n^{p+1}} = \frac{(n+1)^p}{n^{p+1} \left( \left(\frac{n+1}{n}\right)^{p+1} - 1 \right)} =
    \\[5px]
    = \frac{(n+1)^p}{n^{p+1} \left( \frac{n+1}{n} - 1 \right) \left( 1 + \left(\frac{n+1}{n}\right) + \left( \frac{n+1}{n} \right)^2 + \ldots \right)} =
    \\[5px]
    = \left(\frac{n+1}{n}\right)^p\frac{1}{(n+1-n)\left( 1 + \left(\frac{n+1}{n}\right) + \left( \frac{n+1}{n} \right)^2 + \ldots \right)} =
    \\[5px]
    = \left(\frac{n+1}{n}\right)^p\frac{1}{1 + \left(\frac{n+1}{n}\right) + \left( \frac{n+1}{n} \right)^2 + \ldots}
$$

Найдем предел:

$$
    \limn \left(\frac{n+1}{n}\right)^p\frac{1}{1 + \left(\frac{n+1}{n}\right) + \left( \frac{n+1}{n} \right)^2 + \ldots} = 
    \\[5px]
    = \limn \left(\frac{n+1}{n}\right)^p \limn \frac{1}{1 + \left(\frac{n+1}{n}\right) + \left( \frac{n+1}{n} \right)^2 + \ldots} =
    \\[5px]
    = 1\cdot \limn \frac{1}{1 + \left(\frac{n+1}{n}\right) + \left( \frac{n+1}{n} \right)^2 + \ldots} =
    \\[5px]
    = \frac{1}{1 + \lim\limits_{n\to\infty}\left(\frac{n+1}{n}\right) + \lim\limits_{n\to\infty}\left(\frac{n+1}{n}\right)^2 + \ldots} =
    \\[5px]
    = \frac{1}{\underbrace{1 + 1 + 1^2 + \ldots}_{p+1 \text{ слагаемых}}} = \frac{1}{p+1}
$$

Мы воспользовались тем, что $\frac{n+1}{n}\to 1$ (см. прото-задачу <p:[sequences/limits/elementary]>).

Итак, мы доказали, что

$$ \limn \frac{(n+1)^p}{(n+1)^{p+1} - n^{p+1}} = \frac{1}{p+1} $$

По теореме Штольца:

$$ \limn \frac{1^p+2^p+\ldots+n^p}{n^{p+1}} = \limn \frac{(n+1)^p}{(n+1)^{p+1} - n^{p+1}} = \frac{1}{p+1} $$

$$ \limn \frac{1^p+2^p+\ldots+n^p}{n^{p+1}} = \frac{1}{p+1} $$

$\blacksquare$

## Пункт в)

Дозательство *полностью такое же*, что и доказательство для пункта а), в особенности рассуждения про знаменатель.

Мы придем к следующему пределу:

$$
    \limn \frac{1^p+3^p+\ldots+(2n-1)^p}{n^{p+1}} = \limn\frac{(2n+1)^p}{(n+1)^{p+1} - n^{p+1}} = 
    \\[5px]
    = \limn \frac{\left(2 + \frac{1}{n}\right)^p}{p+1} = \frac{ \left(2 + \lim\limits_{n\to\infty}\frac{1}{n} \right)\left(2 + \lim\limits_{n\to\infty}\frac{1}{n} \right)\ldots }{p+1} =
    \\[5px]
    = \frac{(2+0)(2+0)\ldots}{p+1} = \frac{2^p}{p+1}
$$

Мы воспользовались тем, что $\frac{1}{n}\to 0$ (см. прото-задачу <p:[sequences/limits/elementary]>).

Итак,

$$ \limn \frac{1^p+3^p+\ldots+(2n-1)^p}{n^{p+1}} = \frac{2^p}{p+1} $$

$\blacksquare$