Сначала докажем, что:
$$ \lim_{n\to\infty} \frac{1}{n} = 0 $$

Это легко сделать по определению предела:
$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{1}{n} \right| = \frac{1}{n} < \varepsilon, $$

Разберемся с неравенством в конце
$$ \frac{1}{n} < \varepsilon \Leftrightarrow n > \frac{1}{\varepsilon} $$

Какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\frac{1}{\varepsilon}$ и тогда требуемое по определению предела неравенства будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:
$$ N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} $$

По этой формуле мы получаем округление сверху ("потолок") числа $\frac{1}{\varepsilon}$. Из определения "потолка" числа:
$$ \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon} $$

Так как в условии у нас $n > N(\varepsilon)$, то следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$:
$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon}  $$
$$ n > \frac{1}{\varepsilon} $$

Итак, для любого $\varepsilon > 0$ мы теперь можем найти $N$, такое, что для любого $n > N$ будет выполняться неравенство:
$$ \left| \frac{1}{n} \right| < \varepsilon $$

Значит, мы по определению доказали, что:
$$ \lim_{n\to\infty} \frac{1}{n} = 0 $$

$\blacksquare$

---

Теперь решаем задачу. Вынесем константу $10000$ из предела:
$$ \lim_{n\to\infty} \frac{10000n}{n^2 + 1} = 10000\cdot \lim_{n\to\infty}\frac{n}{n^2+1} $$

Докажем, что
$$ \frac{n}{n^2+1} \overset{\text{?}}{<} \frac{n}{n^2} = \frac{1}{n} $$

Умножаем обе части на $n\cdot(n^2+1)$:
$$ n^2 \overset{\text{?}}{<} n^2 + 1 $$

Вычитаем из обеих частей $n^2$:
$$ 0 < 1 $$

Итак, мы доказали, что:
$$ \frac{n}{n^2+1} < \frac{1}{n} $$

Значит, нашу последовательность из условия можно "зажать":
$$ 0 < \frac{n}{n^2+1} < \frac{1}{n} $$

Предел $0$ при $n\to\infty$ равен $0$. Предел $\frac{1}{n}$ при $n\to\infty$, как мы доказали в начале, тоже равен $0$.

По теореме о двух милиционерах это означает, что и наша "зажатая" последовательность тоже стремится к $0$:
$$ \lim_{n\to\infty} \frac{n}{n^2+1} = 0 $$

Значит:
$$ \lim_{n\to\infty} \frac{10000n}{n^2 + 1} = 10000\cdot \lim_{n\to\infty}\frac{n}{n^2+1} = 10000\cdot 0 = 0 $$
