Докажем в одну сторону: если $\alpha_n \to 0$, то $\frac{1}{\alpha_n} \to \infty$. Запишем развернуто:

$$ \lim_{n\to\infty} \alpha_n = 0 \Rightarrow \lim_{n\to\infty} \frac{1}{\alpha_n} = \infty $$

Сначала выразим словами, как это будет доказываться. Мы из известного определения левого предела строим определение для правого.

Распишем по определению левый предел:

$$
    \lim_{n\to\infty} \alpha_n = 0 \Leftrightarrow \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |\alpha_n| < \varepsilon
$$

Раз выражение выше работает для любого $\varepsilon > 0$, то оно будет работать и для положительного числа $\frac{1}{E}$, то есть:

$$ \forall E > 0 \quad \text{ берем } \quad \varepsilon' = \frac{1}{E} $$

Теперь, это $\varepsilon'$ мы подставляем в определение выше, так как оно справедливо для всех положительных чисел.

Из него мы и получаем следующее:

$$ \exists N = N(\varepsilon') \ \forall n > N \ : \ |\alpha_n| < \varepsilon' $$

Разберемся с последним неравенством:

$$ |\alpha_n| < \varepsilon' = \frac{1}{E} \quad \Leftrightarrow \quad \left|\frac{1}{\alpha_n}\right| > E $$

Объединим все вместе "на словах". Из любого $E>0$ мы берем $\frac{1}{E}>0$ и подставляем его в определение выше. Оттуда получаем $N$, такое, что для любого $n > N$ будет выполнятся неравенство:

$$ \left|\frac{1}{\alpha_n}\right| > E $$

Теперь запишем это же формально:

$$ \forall E > 0 \ \exists N = N\left(\frac{1}{E}\right) \ \forall n > N \ : \ \left|\frac{1}{\alpha_n}\right| > E $$

А это и есть определение бесконечно большой последовательности $\frac{1}{\alpha_n}$:

$$ \lim_{n\to\infty} \frac{1}{\alpha_n} = \infty $$

$\blacksquare$

Наоборот, из $A_n\to\infty$ следует, что $\frac{1}{A_n}\to 0$ доказывается точно так же.