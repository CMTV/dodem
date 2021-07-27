---
{
    "title": "Элементарные пределы",
    "desc": "Пределы функций, к которым сводятся множество задач.",
    "type": "other"
}
---

||| theorem Предел константы

$$ \limf{x}{a\in\RR} C = C $$

||| proof

Пусть нам дали какое-то $\varepsilon > 0$. Для этого $\varepsilon$ мы берем совершенно любую окрестность точки $a$. Тогда для каждого $x$ из этой окрестности расстояние между $C$ и $C$ должно быть меньше $\varepsilon$. Но расстояние между $C$ и $C$ равно $0$, вне зависимости от $x$, поэтому оно точно меньше любого положительного $\varepsilon$. По определению это означает, что

$$ \limf{x}{a\in\RR} C = C $$

$\blacksquare$

|||

||| theorem Предел линейной функции

$$ \limf{x}{a\in\RR} x = a $$

Следствие:

$$ \limf{x}{a\in\R} kx + b = ka + b \qquad \qquad \limf{x}{\infty} kx + b = \infty $$

||| proof

Если $a$ — конечное число, то для любого наперед заданного $\varepsilon > 0$ мы можем взять $\delta = \varepsilon$. Тогда будет выполняться импликация:

$$ 0 < |x - a| < \delta = \varepsilon \Rightarrow |x - a| < \varepsilon = \delta $$

А это по определению означает, что

$$ \limf{x}{a\in\R} x = a $$

Доказательство для случая бесконечного $a$ аналогичное, только нужно брать $D = E$.

$\blacksquare$

Докажем теперь следствие, пользуясь уже доказанными элементарными пределами и арифметическими свойствами предела функции:

$$ \limf{x}{a\in\R} kx + b = \limf{x}{a}k \limf{x}{a}x + \limf{x}{a}b = ka + b $$

Второе равенство следствия докажем с помощью операций с б.м. и б.б. (см. прото-задачу <b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>), представляя константу $k$ в виде ненулевой функции, а константу $b$ в виде ограниченной функции:

$$ \limf{x}{\infty} kx+b = \scope{k\cdot\infty + b \\ \infty + b \\ \infty} = \infty $$

$\blacksquare$

|||

||| theorem Предел многочлена

Если $m$ — целое число, то выполняются равенства: 

$$ \limf{x}{a\in\R} x^m = a^m \qquad \qquad \limf{x}{\infty} x^m = \andcases{\infty &\text{если } m > 0 \\ \phantom{.}1 &\text{если } m = 0 \\ \phantom{.}0 &\text{если } m < 0 } $$

Следствие:

$$ \limf{x}{a\in\R} P(x) = P(a) \qquad \qquad \limf{x}{\infty} P(x) = \infty $$

||| proof

Начем с конечного $a$:

$$ \limf{x}{a\in\R} x^m = a^m $$

Если $m = 0$, то $x^0=a^0=1$, поэтому

$$ \lim_{x \to a} x^0 = \lim_{x \to a} 1 = a^0 = 1 $$

Пусть теперь $m$ — натуральное число, тогда по арифметическим свойствам предела и уже доказанному выше пределу линейной функции имеем

$$ \lim_{x \to a} x^m = \lim_{x \to a} x \cdot x \cdot \ldots = \lim_{x \to a} x \cdot \lim_{x \to a} x \cdot \ldots = \left(\lim_{x \to a} x\right)^m = a^m $$

Пусть теперь $m$ — отрицательное целое число. Но тогда $-m$ — натуральное. Держа это в уме, получаем, что

$$ \lim_{x \to a} x^m = \lim_{x \to a} \frac{1}{x^{-m}} = \frac{1}{\lim\limits_{x \to a} x^{-m}} = \frac{1}{a^{-m}} = a^m $$

$\blacksquare$

Доказательство для бесконечного $a$ приведем с использованием операций с б.м. и б.б. (<b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>).

Если $m > 0$, то

$$ \limf{x}{\infty} x^m = \scope{ \infty\cdot\infty\cdot\ldots \\ \infty } = \infty $$

Если $m = 0$, то $x^0 = 1$, поэтому предел будет равен $1$.

Если $m < 0$, то $-m > 0$, поэтому, используя связь б.м. и б.б. (<b:[П-ссылка](advanced/proto/f-lim/bm-bb)>):

$$ \limf{x}{\infty} x^m = \limf{x}{\infty} \frac{1}{x^{-m}} = 0 $$

$\blacksquare$

Докажем теперь следствие для конечного $a$. Пусть имеем многочлен

$$ P(x) = c_0 x^n + c_1 x^{n-1} + \ldots + c_n $$

Найдем его предел при $x \to a$, воспользовавшись доказанными выше равенствами и арифметическими свойствами пределов:

$$ \lim_{x \to a} P(x) = c_0\lim_{x \to a}x^n + c_1\lim_{x \to a}x^{n-1} + \ldots + c_n = \\[5px] = c_0a^n + c_1a^{n-1} + \ldots + c_n = P(a) $$

$\blacksquare$

Если $a$ бесконечное, то вынесем за скобки $x^n$:

$$ P(x) = x^n\left(c_0 + \frac{c_1}{x} + \ldots + \frac{c_n}{x^n}\right) $$

Функция в скобках справа имеет предел, равный $c_0 \neq 0$. Обозначим ее за $f(x)$.
Значит, существует проколотая окрестность $\infty$, в которой $f(x)$ не равна $0$ (<b:[П-ссылка](advanced/proto/f-lim/finite-props)>). Это позволяет нам использовать операции с б.м. и б.б. (<b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>):

$$ \limf{x}{\infty} P(x) = \limf{x}{\infty} x^nf(x) = \scope{ \infty \cdot f(x) \\ \infty } = \infty  $$

$\blacksquare$

|||