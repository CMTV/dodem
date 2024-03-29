---
{
    "title": "Отношение степенной и показательной последовательностей",
    "desc": "Предел отношения степенной и показательной последовательностей равен 0.",
    "type": "theorem"
}
---

||| theorem Показательная последовательность растет быстрее степенной

$$ \lim_{n\to\infty} \frac{n^k}{a^n} = 0, \quad (a > 1) $$

||| proof

## Идея доказательства

Исходная последовательность всегда больше $0$, то есть с одной стороны она уже зажата:

$$ 0 < \frac{n^k}{a^n} $$

Осталось найти такую хитрую убывающую геометрическую прогрессию, которая прижмет нашу последовательность справа:

$$ 0 < \frac{n^k}{a^n} < C\cdot q^n $$

Левая последовательность состоит из одних $0$, а значит стремится к $0$. Справа имеем убывающую геометрическую прогрессию, которая тоже сходится к $0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/geometric-progression)>) а значит, по теореме о двух милиционерах, и зажатая между ними последовательность тоже стремится к $0$.

Дальше мы будем заниматься выводом убывающей геометрической прогрессии.

## Последовательность отношений

Последовательность из условия:
$$ x_n = \frac{n^k}{a^n} $$

Рассмотрим отношение двух соседних членов этой последовательности:

$$ \frac{x_{n+1}}{x_n} = \frac{\frac{(n+1)^k}{a^{n+1}}}{\frac{n^k}{a^n}} = \frac{(n+1)^k}{a^{n+1}} \cdot \frac{a^n}{n^k} = \frac{1}{a}\cdot\left(\frac{n+1}{n}\right)^k $$

$$ \frac{x_{n+1}}{x_n} = \frac{1}{a}\cdot\left(\frac{n+1}{n}\right)^k $$

Получается, отношение двух соседних членов последовательности тоже представляет собой какую-то последовательностью. Назовем ее **последовательностью отношений** и обозначим за $q_n$:

$$ q_n = \frac{x_{n+1}}{x_n} = \frac{1}{a}\cdot\left(\frac{n+1}{n}\right)^k $$

$$ q_n = \frac{1}{a}\left(\frac{n+1}{n}\right)^k $$

Зачем она нужна? Так как она является отношением соседних элементов $x_n$, она показывает, что происходит с этой последовательностью по мере увеличения $n$.

## Убывание последовательности отношений

Докажем, что последовательность отношений убывает, то есть:

$$
\begin{aligned}
    q_{n+1} &< q_n \\[5px]
    \frac{1}{a}\left(\frac{n+2}{n+1}\right)^k &< \frac{1}{a}\left(\frac{n+1}{n}\right)^k \\[5px]
    \left(\frac{n+2}{n+1}\right)^k &< \left(\frac{n+1}{n}\right)^k \\[5px]
    \frac{n+2}{n+1} &< \frac{n+1}{n} \\[5px]
    n^2 + 2n &< n^2 + 2n + 1 \\[5px]
    0 &< 1
\end{aligned}
$$

Итак, мы доказали, что она действительно убывает.

$\blacksquare$

## Последовательность отношений меньше $1$

Докажем, что, начиная с какого-то номера $t$, последовательность отношений будет строго меньше $1$:

$$ \exists t \ : \ q_{t} < 1 $$

Рассмотрим неравенство в правой части:

$$ q_{t} < 1 $$

$$ \frac{1}{a}\left(\frac{t+1}{t}\right)^k < 1 $$

Домножаем обе части на $a$:

$$ \left(\frac{t+1}{t}\right)^k < a $$

Берем корень $k$-ой степени из обеих частей неравенства:

$$ \frac{t+1}{t} = 1 + \frac{1}{t} < \sqrt[k]{a} $$

Вычитаем $1$ из обеих частей:

$$ \frac{1}{t} < \sqrt[k]{a} - 1 $$

Делим обе части на $\sqrt[k]{a} - 1$ (знаки не меняются, так как $\sqrt[k]{a} - 1 > 0$) и умножаем на $t$:

$$ t > \frac{1}{\sqrt[k]{a} - 1} $$

Так как $t$ натуральное (ведь это номер элемента последовательности), возьмем за $t$ округление сверху ("потолок") полученного выше выражения, увеличенного на $1$:

$$ t = \ceil{\frac{1}{\sqrt[k]{a} - 1}} + 1 > \ceil{\frac{1}{\sqrt[k]{a} - 1}} \geq \frac{1}{\sqrt[k]{a} - 1} $$

Итак, мы нашли такой номер $t$, что соответствующий ему член последовательности приращений $q_t$ будет строго меньше $1$.

$\blacksquare$

## Итог по последовательности отношений

Мы доказали, что существует такой номер $t$, что
$$ 1 > q_t $$

Также мы доказали, что последовательность $q_n$ убывает. Это значит, что следующие члены после $q_t$ будут строго меньше $1$:

$$ 1 > q_t > q_{t+1} > q_{t+2} > \ldots $$

В совокупности это означает, что со временем последовательность $x_n$ перестает возрастать, а затем и вовсе начинает убывать (в момент достижения $q_t$) с возрастающей скоростью (т.к. $q_n$ строго убывает).

## Доказательство значения предела

Рассмотрим члены исходной последовательности $x_n$, начиная с номера $t+1$:

$$
\begin{aligned}
    x_{t+1} &= x_t \cdot q_t 
    \\
    x_{t+2} = x_{t+1} \cdot q_{t+1} &= x_t \cdot q_t q_{t+1}
    \\
    x_{t+3} = x_{t+2} \cdot q_{t+2} &= x_t \cdot q_t q_{t+1} q_{t+2}
    \\
    &\ldots
\end{aligned}
$$

Пользуясь цепным неравенством в разделе итогов выше, замечаем, что

$$
\begin{aligned}
    q_t^2 &> q_t q_{t+1}
    \\
    q_t^3 &> q_t q_{t+1} q_{t+2}
    \\
    &\ldots
\end{aligned}
$$

Поэтому справедливы следующие неравенства:

$$
\begin{aligned}
    x_{t+1} &\leq x_t\cdot q_t
    \\
    x_{t+2} &< x_t\cdot q_t^2
    \\
    x_{t+3} &< x_t\cdot q_t^3
    \\
    &\ldots
    \\
    x_{t+k} &< x_t\cdot q_t^{k}
\end{aligned}
$$

Обозначим $n = t + k$, получаем следующее неравенство $n$-го члена последовательности, **начиная** с $t+1$-го элемента:

$$ x_n \leq x_t\cdot q_t^{n-t}, \ n > t $$

Преобразуем $q^{n-t}$:

$$ q_t^{n-t} = q_t^n\cdot q_t^{-t} = \frac{q_t^n}{q_t^t} $$

$$ x_n \leq \frac{x_t}{q_t^t}\cdot q_t^n, \ n > t $$

Заменим теперь $x_n$ и $x_t$ на соостветствующие выражения:

$$ \frac{n^k}{a^n} \leq \frac{t^k}{a^t\cdot q_t^t} \cdot q_t^n, \ n > t $$

Теперь "зажмем" эту последовательность между $0$ и правой частью выведенного неравенства:

$$ 0 < \frac{n^k}{a^n} \leq \frac{t^k}{a^t\cdot q_t^t} \cdot q_t^n $$

На первые $t$ членов последовательности, для которых неравенство в правой части может не выполняться не обращаем внимание.
На предел эти первые $t$ членов не окажут никакого влияния (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/independency)>).

"Последовательность" в левой части неравенства состоит из одних $0$ и, очевидно, стремится к $0$.

В правой части имеем убывающую геометрическую прогрессию с знаменателем $q_t$:

$$ \underbrace{\frac{t^k}{a^t\cdot q_t^t}}_{C} \cdot q_t^n $$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/geometric-progression)> мы знаем, что убывающая геометрическая прогрессия стремится к $0$.

Итак, наша последовательность из условия зажата с одной строны нулем (который $\to 0$) и, начиная с номера $t$, зажата с другой стороны убывающей геометрической прогрессией (которая тоже $\to 0$), а значит, по теореме о двух
милиционерах, "зажатая" последовательность тоже стремится к $0$.

$$ \lim_{n\to\infty} \frac{n^k}{a^n} = 0, \ (a>1) $$

$\blacksquare$

|||