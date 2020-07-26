---
{ "tags": ["past"] }
---

В числителе последовательности имеем сумму:

$$ 1^2 + 2^2 + \ldots + (n-1)^2 $$

Формула этой суммы доказывается в задаче <t:[2]>:

$$ 1^2 + 2^2 + \ldots + n^2 = \frac{n(n+1)(2n+1)}{6} $$

В нашем случае:

$$ 1^2 + 2^2 + \ldots + (n-1)^2 = \frac{n(n-1)(2n-1)}{6} $$

Подставляем в условие:

$$
    \lim_{n\to\infty} \left[ \frac{1^2}{n^3} + \frac{2^2}{n^3} + \ldots + \frac{(n-1)^2}{n^3} \right] = \lim_{n\to\infty} \frac{n(n-1)(2n-1)}{6n^3} = \\[5px]
    = \lim_{n\to\infty} \frac{(n-1)(2n-1)}{6n^2} = \lim_{n\to\infty} \frac{2n^2 - 3n + 1}{6n^2} = \\[5px]
    = \lim_{n\to\infty} \frac{n^2(2 - \frac{3}{n} + \frac{1}{n^2})}{6n^2} = \lim_{n\to\infty} \frac{1}{3} - \frac{1}{2n} + \frac{1}{6n^2} = \\[5px]
    = \frac{1}{3} - \lim_{n\to\infty} \frac{1}{2n} + \lim_{n\to\infty} \frac{1}{6n^2} = \frac{1}{3} - 0 + 0 = \frac{1}{3}
$$

Мы использовали тот факт, что $\frac{1}{2n}\to 0$ и $\frac{1}{6n^2}\to 0$, так как это разновидности элементарной бесконечно малой последовательности $\frac{1}{n^a}$ без учета констант (см. прото-задачу <p:[sequences/limits/elementary]>).