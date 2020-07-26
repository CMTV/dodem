## Лемма о медианных дробях

Пусть даны две дроби

$$ \frac{a}{b} \leq \frac{c}{d}, \quad (b,d > 0) $$

Тогда

$$ \frac{a}{b} \leq \frac{a+c}{b+d} \leq \frac{c}{d} $$

||| spoiler Доказательство

Нам дано, что

$$ \frac{a}{b} \leq \frac{c}{d} $$

Умножим обе части неравенства на $bd$:

$$ ad \leq cb $$

Теперь докажем требуемое неравенство:

$$ \frac{a}{b} \leq \frac{a+c}{b+d} \leq \frac{c}{d} $$

**Доказательство левой части**

$$ \frac{a}{b} \leq \frac{a+c}{b+d} $$

Умножим обе части неравенства на $b(b+d)$:

$$ ab + ad \leq ab + bc $$

Вычтем из обеих частей $ab$:

$$ ad \leq cb $$

Как мы показали выше, это неравенство выполняется.

$\blacksquare$

**Доказательство правой части**

$$ \frac{a+c}{b+d} \leq \frac{c}{d} $$

Умножим обе части неравенства на $(b+d)d$:

$$ ad + cd \leq cb + cd $$

Вычтем из обеих частей $cd$:

$$ ad \leq cb $$

Как мы показали выше, это неравенство выполняется.

$\blacksquare$
|||

Имеется также важное следствие. Если

$$ \frac{a_1}{b_1} \leq \frac{a_2}{b_2} \leq \ldots \leq \frac{a_n}{b_n} $$

при $b_i > 0$, то

$$ \frac{a_1}{b_1} \leq \frac{a_1 + a_2 + \ldots + a_n}{b_1 + b_2 + \ldots + b_n} \leq \frac{a_n}{b_n} $$

Доказывается оно элементарно поочередным применением самой леммы.

## Вспомогательное неравенство

Из условия известно, что

$$ \limn \frac{x_{n+1} - x_n}{y_{n+1} - y_n} = A $$

Распишем это по определению:

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{x_{n+1} - x_n}{y_{n+1} - y_n} - A \right| < \varepsilon $$

Возьмем какое-нибудь произвольное $\varepsilon' > 0$. Раз определение выше выполняется для любого положительного числа, то и для положительного $\frac{\varepsilon'}{2}$ существует такое $N$, что для любого $n > N$ выполняется
неравенство

$$ \left| \frac{x_{n+1} - x_n}{y_{n+1} - y_n} - A \right| < \frac{\varepsilon'}{2} $$

Раскроем это неравенство в цепоное по пункту 1 прото-задачи <p:[simple-abs]>:

$$ -\frac{\varepsilon'}{2} < \frac{x_{n+1} - x_n}{y_{n+1} - y_n} - A < \frac{\varepsilon'}{2} $$

Прибавим ко всем частям неравенства $A$:

$$ A - \frac{\varepsilon'}{2} < \frac{x_{n+1} - x_n}{y_{n+1} - y_n} < A + \frac{\varepsilon'}{2} $$

Примем теперь за $N = N + 1$, чтобы мы неравенство выше выполнялось для любых $n\geq N$. Итак, неравенство выше выполняется для следующих дробей:

$$
    \frac{x_{N+1} - x_N}{y_{N+1} - y_N}
    \\[5px]
    \frac{x_{N+2} - x_{N+1}}{y_{N+2} - y_{N+1}}
    \\[5px]
    \ldots
    \\[5px]
    \frac{x_n - x_{n-1}}{y_n - y_{n-1}}
$$

Расположим все эти дроби в порядке возрастания и применим к ним следствие из доказанной выше леммы о медианных дробях:

$$ A-\frac{\varepsilon'}{2} < \frac{x_{N+1} - x_N + x_{N+2} - x_{N+1} + \ldots + x_n - x_{n-1}}{y_{N+1} - y_N + y_{N+2} - y_{N+1} + \ldots + y_n - y_{n-1}} < A + \frac{\varepsilon'}{2} $$

$$ A-\frac{\varepsilon'}{2} < \frac{x_n - x_{N}}{y_n - y_N} < A + \frac{\varepsilon'}{2} $$

Вычтем из всех частей неравенства $A$:

$$ -\frac{\varepsilon'}{2} < \frac{x_n - x_{N}}{y_n - y_N} - A < \frac{\varepsilon'}{2} $$

Воспользуемся пунктом 1 прото-задачи <p:[simple-abs]> в обратную сторону и получаем важное вспомогательное неравенство, которое потребуется далее:

$$ \left| \frac{x_n - x_N}{y_n - y_N} - A \right| < \frac{\varepsilon'}{2} $$

## Сходимость $\frac{x_n}{y_n}$

Теперь попробуем представить само выражение внутри модуля неравенства выше в другом виде:

$$
    \frac{x_n - x_N}{y_n - y_N} - A = \left( \frac{x_n - x_N}{y_n - y_N} - A \right)\left( \frac{y_n - y_N}{y_n - y_N} \right) =
    \\[5px]
    = \frac{ x_n - x_N - Ay_n + Ay_N }{ y_n - y_N } = \frac{y_n}{y_n - y_N}\left( \frac{x_n}{y_n} - A + \frac{Ay_N - x_N}{y_n} \right)
$$

Итак,

$$ \frac{x_n - x_N}{y_n - y_N} - A = \frac{y_n}{y_n - y_N}\left( \frac{x_n}{y_n} - A + \frac{Ay_N - x_N}{y_n} \right) $$

Начем изолировать выражение $\frac{x_n}{y_n} - A$ справа:

$$ \left( \frac{x_n - x_N}{y_n - y_N} - A \right)\left(\frac{y_n - y_N}{y_n}\right) = \frac{x_n}{y_n} - A + \frac{Ay_N - x_N}{y_n} $$

$$ \left( \frac{x_n - x_N}{y_n - y_N} - A \right)\left(1 - \frac{y_N}{y_n}\right) = \frac{x_n}{y_n} - A + \frac{Ay_N - x_N}{y_n} $$

$$ \left( \frac{x_n - x_N}{y_n - y_N} - A \right)\left(1 - \frac{y_N}{y_n}\right) - \frac{Ay_N - x_N}{y_n} = \frac{x_n}{y_n} - A $$

Рассмотрим теперь следующее выражение:

$$ \left| \frac{x_n}{y_n} - A \right| = \left| \left( \frac{x_n - x_N}{y_n - y_N} - A \right)\left(1 - \frac{y_N}{y_n}\right) - \frac{Ay_N - x_N}{y_n} \right| $$

Воспользуемся свойством модуля (см. прото-задачу <p:[abs]>):

$$
    \left| \frac{x_n}{y_n} - A \right| = \left| \left( \frac{x_n - x_N}{y_n - y_N} - A \right)\left(1 - \frac{y_N}{y_n}\right) - \frac{Ay_N - x_N}{y_n} \right| \leq
    \\[5px]
    \leq \left| \frac{x_n - x_N}{y_n - y_N} - A \right|\underbrace{\left| 1 - \frac{y_N}{y_n} \right|}_{\leq \ 1} + \left| \frac{Ay_N - x_N}{y_n} \right| \leq
    \\[5px]
    \leq \left| \frac{x_n - x_N}{y_n - y_N} - A \right| + \left| \frac{Ay_N - x_N}{y_n} \right|
$$

Итак,

$$ \left| \frac{x_n}{y_n} - A \right| \leq \underbrace{\left| \frac{x_n - x_N}{y_n - y_N} - A \right|}_{\large \leq \frac{\varepsilon'}{2}} + \left| \frac{Ay_N - x_N}{y_n} \right| $$

Поэтому

$$ \left| \frac{x_n}{y_n} - A \right| \leq \frac{\varepsilon'}{2} + \left| \frac{Ay_N - x_N}{y_n} \right| $$

Осталось только разобраться с

$$ \left| \frac{Ay_N - x_N}{y_n} \right| $$

Внутри модуля находится последовательность

$$ \frac{Ay_N - x_N}{y_n}, $$

которая стремится к $0$ с учетом того, что в числителе находится константа:

$$ \limn \frac{Ay_N - x_N}{y_n} = (Ay_N - x_N)\limn \frac{1}{y_n} = 0 $$

Мы воспользовались тем фактом, что если $y_n\to +\infty$, то $\frac{1}{y_n}\to 0$ (см. прото-задачу <p:[sequences/limits/bm-bb]>).

Распишем по определению, что значит стремление к $0$ у последовательности выше:

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{Ay_N - x_N}{y_n} \right| < \varepsilon $$

Раз выполняется для любого положительного $\varepsilon$, то и для положительного $\frac{\varepsilon'}{2}$ найдется такое $N'$, что для любого $n>N'$ будет выполняться неравенство

$$ \left| \frac{Ay_N - x_N}{y_n} \right| < \frac{\varepsilon'}{2} $$

Возвращаемся к $\left|\frac{x_n}{y_n} - A\right|$:

$$ \left| \frac{x_n}{y_n} - A \right| \leq \frac{\varepsilon'}{2} + \underbrace{\left| \frac{Ay_N - x_N}{y_n} \right|}_{\large < \frac{\varepsilon'}{2}} $$

$$ \left| \frac{x_n}{y_n} - A \right| \leq \frac{\varepsilon'}{2} + \frac{\varepsilon'}{2} $$

$$ \left| \frac{x_n}{y_n} - A \right| \leq \varepsilon' $$

Стоит отметить, что здесь речь идет уже о $n>\max(N, N')$, чтобы одновременно выполнялись выведенное выше вспомогательное неравенство и неравенство из $\frac{Ay_N - x_N}{y_n}\to 0$.

Мы показали, что какое $\varepsilon>0$ ни возьми, всегда найдется такие $N$ и $N'$, что для любого $n> \max(N, N')$ будет выполняться неравенство

$$ \left| \frac{x_n}{y_n} - A \right| \leq \varepsilon' $$

Это по определению означает, что

$$ \limn \frac{x_n}{y_n} = A = \limn \frac{x_{n+1}-x_n}{y_{n+1}-y_n} $$

$$ \limn \frac{x_n}{y_n} = \limn \frac{x_{n+1}-x_n}{y_{n+1}-y_n} $$

$\blacksquare$