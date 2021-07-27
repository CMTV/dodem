Преобразуем $R(x)$:

$$ R(x) = \frac{a_0x^n + a_1x^{n-1} + \ldots + a_n}{b_0x^m + b_1x^{m-1} + \ldots + b_m} = \\[10px] = \frac{x^n}{x^m} \cdot \frac{a_0 + \frac{a_1}{x} + \ldots + \frac{a_n}{x^n}}{b_0 + \frac{b_1}{x} + \ldots + \frac{b_m}{x^m}} = $$

Правый множитель обозначим за $f(x)$.

$$ = \frac{x^n}{x^m} f(x) = x^{n-m} f(x)$$

Итак:

$$ R(x) = x^{n-m} f(x) $$

Найдем предел $f(x)$:

$$ \lim_{x \to \infty} f(x) = \frac{a_0}{b_0} $$

||| spoiler Доказательство

$$ \lim_{x \to \infty} f(x) = \frac{ a_0 + \lim\limits_{x\to\infty} \frac{a_1}{x} + \ldots + \lim\limits_{x\to\infty} \frac{a_n}{x^n} }{ b_0 + \lim\limits_{x\to\infty} \frac{b_1}{x} + \ldots + \lim\limits_{x\to\infty} \frac{b_m}{x^m} } = \\[10px] = \frac{a_0 + 0 + 0 + \ldots}{b_0 + 0 + 0 + \ldots} = \frac{a_0}{b_0} $$

Мы воспользовались тем, что $\frac{C}{x^a} \to 0$ при $x\to\infty$, так как это элементарный предел функции (см. прото-задачу <b:[П-ссылка](advanced/proto/f-lim/elementary)>).

|||

Итак, $f(x)$ имеет конечный предел. По прото-задаче <b:[П-ссылка](advanced/proto/f-lim/finite-props)> это означает, что $f(x)$ ограничена в окрестности $\infty$.

## Если $n > m$

Если $n > m$, то $p = n-m > 0$. Тогда $x^p \to \infty$ при $x\to\infty$ (см. прото-задачу <b:[П-ссылка](advanced/proto/f-lim/elementary)>).

Так как $f(x)$ стремится к ненулевому числу, то существует окрестность $\infty$, в которой $f(x)$ не равна $0$.

Тогда по прото-задаче <b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>

$$ \lim_{x\to\infty} x^pf(x) = \infty \cdot f(x) = \infty $$

Итак:

$$ \lim_{x\to\infty} R(x) = \infty $$

$\blacksquare$

## Если $n = m$

Если $n = m$, то $n-m = 0$. Тогда

$$ R(x) = x^0 f(x) = f(x) $$

Значит:

$$ \lim_{x\to\infty} R(x) = \lim_{x\to\infty} f(x) = \frac{a_0}{b_0} $$

$\blacksquare$

## Если $n<m$

Если $n<m$, то $p = n-m < 0$. Тогда $x^p \to 0$ при $x\to\infty$ (см. прото-задачу <b:[П-ссылка](advanced/proto/f-lim/elementary)>).

Тогда по прото-задаче <b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>

$$ \lim_{x\to\infty} x^pf(x) = 0\cdot f(x) = 0 $$

$\blacksquare$