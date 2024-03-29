Будем рассматривать 4 подпоследовательности:

$$ x_{4n} \qquad x_{4n-1} \qquad x_{4n-2} \qquad x_{4n-3} $$

Любой член последовательности $x_n$ с номером $n$ лежит в одной из этих четырех подпоследовательностей, так как
любое число при делении на $4$ дает один из четырех остатков: $0, 1, 2$ или $3$.

---

Рассмотрим подпоследовательности $x_{4n-1}$ и $x_{4n-3}$:

$$
    x_{4n - 1} = 1 + \frac{4n-1}{4n}\cos\frac{4\pi n - \pi}{2} = 1 + \frac{4n-1}{4n}\cos\left( 2\pi n - \frac{\pi}{2} \right) =
    \\[5px]
    = 1 + \frac{4n-1}{4n}\cos\left(-\frac{\pi}{2} \right) = 1 + \frac{4n-1}{4n}\cdot 0 = 1
$$

$$ x_{4n-1} = 1 $$

$$
    x_{4n - 3} = 1 + \frac{4n-3}{4n-2}\cos\frac{4\pi n - 3\pi}{2} = 1 + \frac{4n-3}{4n-2}\cos\left( 2\pi n - \frac{3\pi}{2} \right) =
    \\[5px]
    = 1 + \frac{4n-3}{4n-2}\cos\left(-\frac{3\pi}{2} \right) = 1 + \frac{4n-3}{4n-2}\cdot 0 = 1
$$

$$ x_{4n-3} = 1 $$

Итак, теперь мы можем найти первые две предельные точки последовательности $x_n$:

$$ \limn x_{4n-1} = \limn 1 = 1 $$

$$ \limn x_{4n-3} = \limn 1 = 1 $$

---

Рассмотрим подпоследовательность $x_{4n}$:

$$ x_{4n} = 1 + \frac{4n}{4n+1}\cos\frac{4\pi n}{2} = 1 + \frac{4n}{4n+1}\cos 2\pi n = 1 + \frac{4n}{4n+1} $$

$$ x_{4n} = 1 + \frac{4n}{4n+1} $$

Найдем предел этой подпоследовательности:

$$
    \limn x_{4n} = \limn\left( 1 + \frac{4n}{4n+1} \right) = 1+\limn\frac{4n}{4n+1} =
    \\[5px]
    = 1 + \limn\frac{1}{\frac{4n+1}{4n}} = 1 + \frac{1}{1 + \frac{1}{4}\lim\limits_{n\to\infty} \frac{1}{n}} = 1 + \frac{1}{1 + 0} = 2
$$

$$ \limn x_{4n} = 2 $$

Мы воспользовались тем, что $\frac{n}{n+1}\to 1$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>).

Рассмотрим подпоследовательность $x_{4n-2}$:

$$
    x_{4n - 2} = 1 + \frac{4n-2}{4n-1}\cos\frac{4\pi n - 2\pi}{2} = 1 + \frac{4n-2}{4n-1}\cos\left( 2\pi n - \pi\right) =
    \\[5px]
    = 1 + \frac{4n-2}{4n-1}\cos -\pi = 1 - \frac{4n-2}{4n-1}
$$

$$ x_{4n-2} = 1 - \frac{4n-2}{4n-1} $$

Найдем предел этой подпоследовательности:

$$
    \limn x_{4n-2} = \limn\left( 1 - \frac{4n-2}{4n-1} \right) = 1-\limn\frac{4n-2}{4n-1} =
    \\[5px]
    = 1-\limn\frac{4n-1-1}{4n-1} = 1-\limn \left( 1 - \frac{1}{4n-1} \right) = -\limn \frac{1}{4n-1}
$$

Последовательность $\frac{1}{4n-1}$ можно "зажать":

$$ 0 \leq \frac{1}{4n-1} \leq \frac{1}{n} $$

"Последовательность" из $0$ стремится к $0$, как и последовательность $\frac{1}{n}$ (см. прото-задачу "Элементарные пределы последовательностей"). Значит,
по теореме о двух милиционерах, "зажатая" последовательность $\frac{1}{4n-1}$ тоже стремится к $0$.

$$ \limn x_{4n-2} = -\limn \frac{1}{4n-1} = -0 = 0 $$

$$ \limn x_{4n-2} = 0 $$

---

Итак, все четыре подпоследовательности имеют предел:

$$
    \limn x_{4n} = 2
    \\
    \limn x_{4n-1} = 1
    \\
    \limn x_{4n-2} = 0
    \\
    \limn x_{4n-3} = 1
$$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/max-limit-points)> у последовательности $x_n$ больше нет предельных точек, кроме $2, 1, 0$.

А значит

$$ \overline{\limn} x_n = 2 $$

$$ \underline{\limn} x_n = 0 $$

---

Мы уже выяснили, что

$$ \limn x_{4n} = 2 $$

Докажем, что $2$ — верхняя граница последовательности $x_n$.
Это точно верхняя граница для подпоследовательностей $x_{4n-1}$ и $x_{4n-3}$, так как они целиком состоят из $1$.

Это также верхняя граница для подпоследовательности $x_{4n-2}$, так как

$$ x_{4n-2} = 1 - \frac{4n-2}{4n-1} $$

Видим, что каждый член этой подпоследовательности меньше $1$.

Наконец, это верхняя граница для подпоследовательности $x_{4n}$:

$$ 2 > 1 + \frac{4n}{4n+1} $$

$$ 1 > \frac{4n}{4n+1} $$

$$ 4n+1 > 4n  $$

Итак, $2$ — верхняя граница для любой подпоследовательности $x_n$. Так как по условию любой член $x_n$ лежит в одной из перечисленных подпоследовательностей,
то $2$ — верхняя граница для всей последовательности $x_n$.

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/limit-point-bounds)> это означает, что $2$ — точная верхняя грань:

$$ \sup x_n = 2 $$

Аналагично показывается, что $0$, как предел $x_{4n-2}$, является точной нижней гранью:

$$ \inf x_n = 0 $$