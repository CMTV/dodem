## Пункт а)

$$ x_n = 1-\frac{1}{n} $$

*Нахождение $\inf x_n$*

Так как $n$ — натуральное число, то

$$ n \geq 1 $$

Поделим обе части на $n$

$$ \frac{1}{n} \leq 1 $$

Умножим обе части на $-1$ и добавим к обеим сторонам $1$:

$$ x_n = 1 - \frac{1}{n} \geq 0 $$

$$ x_n \geq 0 $$

Но $x_1 = 0$, поэтому $x_1$ — наименьший элемент последовательности $x_n$, а значит

$$ \inf x_n = x_1 = 0 $$

*Нахождение $\sup x_n$*

Докажем, что

$$ \sup x_n = 1 $$

Для этого надо доказать два пункта:

1. $1$ — верхняя граница $x_n$
2. $1$ — точная верхняя грань $x_n$

Первый пункт доказывается элементарно. Так как в каждом член последовательности $x_n$ мы вычитаем положительную дробь $\frac{1}{n}$ из $1$, поэтому любой член
последовательности строго меьше $1$. То есть, $1$ — верхняя грань $x_n$.

Для доказательства второго пункта нужно доказать

$$ \forall \varepsilon > 0 \ \exists x_n' \ : \ x_n' > 1 - \varepsilon $$

То есть, нужно показать, что всегда найдется такой член последовательности $x_n'$, который будет больше $1-\varepsilon$.

Рассмотрим неравенство в конце:

$$ x_n' > 1 - \varepsilon $$

$$ 1 - \frac{1}{n'} > 1 - \varepsilon $$

Вычитаем из обеих частей $1$ и умножаем неравенство на $-1$:

$$ \frac{1}{n'} < \varepsilon $$

Откуда

$$ n' > \frac{1}{\varepsilon} $$

Итак, нам достаточно взять $n'$ по следующей формуле

$$ n' = \ceil{\frac{1}{\varepsilon}} + 1 $$

Тогда

$$ n' = \ceil{\frac{1}{\varepsilon}} + 1 > \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon}  $$

$$ n' > \frac{1}{\varepsilon} $$

То есть $x_n'$ будет больше $1-\varepsilon$.

Итак, мы показали, что $1$ — точная верхняя грань $x_n$.

*Наибольший и наименьший частичные пределы*

Найдем предел последовательности $x_n$:

$$ \limn 1-\frac{1}{n} = 1 - \limn \frac{1}{n} = 1 - 0 = 1 $$

Выше использовался факт того, что $\frac{1}{n}\to 0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>).

Если последовательность $x_n$ сходится к какому-то числу $a$, то это $a$ — единственная предельная точка этой последовательности (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/limit-point)>).

Это означает, что наибольший и наименьший частичные пределы равны пределу исходной последовательности:

$$ \limn x_n = \overline{\limn} x_n = \underline{\limn} x_n = 1 $$

## Пункт б)

$$ x_n = (-1)^{n-1}\left( 2 + \frac{3}{n} \right) $$

*Нахождение $\sup x_n$*

При четных $n$ любой член $x_n$ будет отрицательным, поэтому искать $\sup$ надо только среди нечетных $n$:

$$ x_n = 2 + \frac{3}{n}, \ n \text{ — нечетное} $$

Так как $n$ — натуральное число, то

$$ n \geq 1 $$

Разделим обе части на $n$ и умножим на $3$:

$$ \frac{3}{n} \leq 3 $$

Прибавим к обеим частям $2$:

$$ x_n = 2 + \frac{3}{n} \leq 5 $$

Но $x_1 = 5$, поэтому $x_1$ — наибольший член последовательности $x_n$, а значит

$$ \sup x_n = x_1 = 5 $$

*Нахождение $\inf x_n$*

При нечетных $n$ любой член последовательности $x_n$ будет положительным, поэтому искать $\inf$ надо только среди четных $n$:

$$ x_n = -2-\frac{3}{n}, \ n \text{ — четное} $$

Так как $n$ — натуральное четное число, то

$$ n \geq 2 $$

Разделим обе части на $2n$:

$$ \frac{1}{n} \leq \frac{1}{2} $$

Умножим обе части на $-3$:

$$ -\frac{3}{n} \geq -\frac{3}{2} $$

Прибавим к обеим частям $-2$:

$$ x_n = -2 - \frac{3}{n} \geq -2-\frac{3}{2} = -3.5 $$

Но $x_2 = -3.5$, поэтому $x_2$ — наименьший член последовательности $x_n$, а значит

$$ \inf x_n = x_2 = -3.5 $$

*Нахождение наибольшего и наименьшего частичных пределов*

Рассмотрим подпоследовательность, которая состоит только из нечетных $n$:

$$ x_{2n-1} = (-1)^{2n-2}\left( 2 + \frac{3}{2n-1} \right) = \left((-1)^2\right)^{n-1}\left( 2 + \frac{3}{2n-1} \right) $$

$$ x_{2n-1} = 2 + \frac{3}{2n-1} $$

Найдем предел этой подпоследовательности

$$ \limn x_{2n-1} = \limn \left(2 + \frac{3}{2n-1}\right) = 2 + 3\limn \frac{1}{2n-1} $$

Последовательность $\frac{1}{2n-1}$ можно "зажать" между $0$ и $\frac{1}{n}$.

$$ 0 \leq \frac{1}{2n-1} \leq \frac{1}{n} $$

"Последовательность" из $0$ стремится к $0$. Последовательность $\frac{1}{n}$ тоже стремится к $0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>). А значит,
по теореме о двух милиционерах, "зажатая" между ними последовательность $\frac{1}{2n-1}$ тоже стремится к $0$.

$$ \limn x_{2n-1} = 2 + 3\limn \frac{1}{2n-1} = 2 + 3 \cdot 0 = 2 $$

Итак, мы нашли один из частичных пределов:

$$ \limn x_{2n-1} = 2 $$

Рассмотрим подпоследовательность, которая состоит только из четных $n$:

$$ x_{2n} = (-1)^{2n - 1}\left(2 + \frac{3}{2n}\right) = \frac{\left((-1)^2\right)^n}{(-1)}\left(2 + \frac{3}{2n}\right) $$

$$ x_{2n} = -\left(2 + \frac{3}{2n}\right) $$

Найдем предел этой подпоследовательности

$$ \limn x_{2n} = \limn -\left(2 + \frac{3}{2n}\right) = -2 -\frac{3}{2}\limn\frac{1}{n} = -2-\frac{3}{2}\cdot 0 $$

$$ \limn x_{2n} = -2 $$

Выше мы вновь воспользовались тем, что $\frac{1}{n}\to 0$ (см. прото-задачу "Элементарные пределы последовательностей").

Итак, у нас есть две предельные точки:

$$ \limn x_{2n-1} = 2 $$

$$ \limn x_{2n} = -2 $$

Так как любой элемент исходной последовательности $x_n$ находится в одной из двух подпоследовательностях выше, то, по прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/max-limit-points)> у последовательности $x_n$ больше нет других предельных точек, кроме $2$ и $-2$.

Значит

$$ \overline{\limn} x_n = 2 $$

$$ \underline{\limn} x_n = -2 $$