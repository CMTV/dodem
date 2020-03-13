Сначала докажем, что:
$$ \lim_{n\to\infty} \frac{1}{\sqrt{n}} = 0 $$

Это легко сделать по определению предела:
$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{1}{\sqrt{n}} \right| = \frac{1}{\sqrt{n}} < \varepsilon, $$

Разберемся с неравенством в конце.
$$ \frac{1}{\sqrt{n}} < \varepsilon \Leftrightarrow \frac{1}{n} < \varepsilon^2 \Leftrightarrow n > \frac{1}{\varepsilon^2} $$

Какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\frac{1}{\varepsilon^2}$ и тогда требуемое по определению предела неравенства будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:
$$ N(\varepsilon) = \ceil{\frac{1}{\varepsilon^2}} $$

По этой формуле мы получаем округление сверху ("потолок") числа $\frac{1}{\varepsilon^2}$. Из определения "потолка" числа:
$$ \ceil{\frac{1}{\varepsilon^2}} \geq \frac{1}{\varepsilon^2} $$

Так как в условии у нас $n > N(\varepsilon)$, то следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$:
$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\frac{1}{\varepsilon^2}} \geq \frac{1}{\varepsilon^2}  $$
$$ n > \frac{1}{\varepsilon^2} $$

Итак, для любого $\varepsilon > 0$ мы теперь можем найти $N$, такое, что для любого $n > N$ будет выполняться неравенство:
$$ \left| \frac{1}{\sqrt{n}} \right| < \varepsilon $$

Значит, мы по определению доказали, что:
$$ \lim_{n\to\infty} \frac{1}{\sqrt{n}} = 0 $$

$\blacksquare$

---

Поработаем над данной в условии последовательностью:
$$ \sqrt{n+1} - \sqrt{n} $$

Домножим ее на такую дробь, чтобы получить разность квадратов:
$$ (\sqrt{n+1} - \sqrt{n})\cdot\frac{\sqrt{n+1} + \sqrt{n}}{\sqrt{n+1} + \sqrt{n}} $$

При этом сама последовательность не меняется, так как в сущности мы домножили ее на $1$.

$$ (\sqrt{n+1} - \sqrt{n})\cdot\frac{\sqrt{n+1} + \sqrt{n}}{\sqrt{n+1} + \sqrt{n}} = \frac{1}{\sqrt{n+1} + \sqrt{n}} $$

Итак:
$$ \sqrt{n+1} - \sqrt{n} = \frac{1}{\sqrt{n+1} + \sqrt{n}} $$

Теперь докажем следующее неравенство:
$$ \frac{1}{\sqrt{n+1} + \sqrt{n}} \overset{\text{?}}{<} \frac{1}{\sqrt{n}} $$

Умножаем обе части на $\sqrt{n+1} + \sqrt{n}$:
$$ 1 \overset{\text{?}}{<} \frac{\sqrt{n+1}}{\sqrt{n}} + 1 $$

Вычитаем из обеих частей $1$ и получаем очевидное неравенство (так как правая часть всегда положительна):

$$ 0 < \frac{\sqrt{n+1}}{\sqrt{n}} $$

Итак, мы доказали, что:
$$ \frac{1}{\sqrt{n+1} + \sqrt{n}} < \frac{1}{\sqrt{n}} $$

Значит, нашу последовательность из условия можно "зажать":
$$ 0 < \sqrt{n+1}-\sqrt{n} = \frac{1}{\sqrt{n+1} + \sqrt{n}} < \frac{1}{\sqrt{n}} $$

Предел $0$ при $n\to\infty$ равен $0$. Предел $\frac{1}{\sqrt{n}}$ при $n\to\infty$, как мы доказали в начале, тоже равен $0$.

По теореме о двух милиционерах это означает, что и наша "зажатая" последовательность тоже стремится к $0$:
$$ \lim_{n\to\infty} \sqrt{n+1} - \sqrt{n} = 0 $$