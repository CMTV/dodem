## Пункт а)

$$ \lim_{x \to a} f(x) = b \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( 0 < |x-a| < \delta \Rightarrow |f(x) - b| < \varepsilon \right) $$

Если словами, то какое $\varepsilon > 0$ ни возьми, всегда найдется такое $\delta > 0$, что для всех $x$ из проколотой $\delta$-окрестности точки $a$ соответствующие значения функции $f(x)$ попадают в $\varepsilon$-окрестность точки $b$.

Задача <t:[401]> как раз является примером такого предела:

$$ \lim_{x \to 2} x^2 = 4 $$

## Пункт б)

$$ \lim_{x \to a - 0} f(x) = b \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( a - \delta < x < a \Rightarrow |f(x) - b| < \varepsilon \right) $$

Функция сигнума $\sgn(x)$, которая определяется в задаче <t:[175]>, имеет разные пределы при подходе к $0$ слева или справа:

$$ \lim_{x\to 0-0} \sgn(x) = -1 $$

||| spoiler Доказательство

Достаточно за $\delta$ взять любое положительное число, например $10$:

$$ \delta = 10 $$

Нам нужно доказать, что выполняется импликация:

$$ -10 < x < 0 \Rightarrow |\sgn(x) + 1| < \varepsilon $$

По определению функции сигнума, она равна $-1$ при любом отрицательном аргменте. Поэтому для любого $x$ из интервала $(-10, 0)$ выполняется равенство: $\sgn(x) = -1$. Но тогда:

$$ |-1 + 1| = |0| = 0 < \varepsilon $$

Это неравенство выполняется для любого $\varepsilon$, так как $\varepsilon > 0$ по определению предела функции. Это по определению означает, что левый предел сигнума в точке $0$ равен $-1$.

$\blacksquare$

|||

## Пункт в)

$$ \lim_{x \to a + 0} f(x) = b \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( a < x < a + \delta \Rightarrow |f(x) - b| < \varepsilon \right) $$

В качестве примера отлично годится все та же функция сигнума:

$$ \lim_{x\to 0+0} \sgn(x) = 1 $$