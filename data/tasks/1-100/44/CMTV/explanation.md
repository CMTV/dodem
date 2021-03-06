Докажем два важных свойства данной нам в условии последовательности.

1. Любой элемент с четным номером равен этому номеру
2. Любой элемент с нечетным номером не больше $1$


**1)** Раз $n$ — четное число, то $(-1)^n = 1$.

$$ x_n = n^{(-1)^{n}} = n $$

**2)** Раз $n$ — нечетное число, то $(-1)^n = (-1)$

$$ x_n = n^{(-1)^{n}} = n^{-1} = \frac{1}{n} \leq 1 $$

## Доказательство неограниченности

По определению последовательность $x_n$ не ограничена, если

$$ \forall E > 0 \ \exists t \in \mathbb{N} \ : \ |x_t| > E $$

То есть какую бы большую границу $E$ мы не выбрали, всегда найдется какой-нибудь элемент последовательности с номером $t$, который будет больше $E$.
Важно заметить, что нужно найти хотя бы один такой элемент последовательности.

Рассмотрим округление сверху ("потолок") числа $E$: $\ceil{E}$. Тогда $t$ надо находить следующим образом:

$$ t = \begin{cases} \ceil{E} + 2, \ \text{если } \ceil{E} \text{ четное} \\[5px] \ceil{E} + 1, \ \text{если } \ceil{E} \text{ нечетное} \end{cases} $$

Если $\ceil{E}$ — четное, то $t = \ceil{E} + 2$ тоже четное. В начале мы показали, что $x_t = t$, если $t$ четное. Значит:

$$ x_t = t = \ceil{E} + 2 > \ceil{E} \geq E \\ |x_t| > E $$

Если $\ceil{E}$ — нечетное, то $t=\ceil{E} + 1$ четное. В начале мы показали, что $x_t = t$, если $t$ четное. Значит:

$$ x_t = t = \ceil{E} + 1 > \ceil{E} \geq E \\ |x_t| > E $$

Итак, мы всегда найдем такое $x_t$, которое будет больше любого $E>0$, а значит последовательность $x_n$ не ограничена.

$\blacksquare$

## Доказательство, что не бесконечно большая

По определению последовательность $x_n$ бесконечно большая, если

$$ \forall E > 0 \ \exists N = N(E) \ \forall t > N \ : \ |x_t| > E $$

Возьмем отрицание. То есть, последовательность $x_n$ **не** бесконечно большая, если

$$ \exists E > 0 \ \forall N \ \exists t > N \ : \ |x_t| \leq E $$

То есть существует такая граница $E$, что какое бы $N$ мы не взяли, всегда найдется хотя бы один элемент, который будет меньше $E$.
Другими словами, есть такая граница $E$, что в любом месте последовательности (даже бесконечно далеко) найдется элемент, который меньше $E$.

Пусть $E = 1$. Теперь нам дается произвольное $N$. $t$ выбираем следующим образом:

$$ t = \begin{cases} N + 1, \ \text{если } N \text{ четное} \\[5px] N + 2, \ \text{если } N \text{ нечетное} \end{cases} $$

В обоих случаях $t$ оказывается нечетным, а любой элемент с нечетным номером не больше $1$, как мы показали в начале.

Итак, после любого $N$ всегда найдется элемент $x_t$, который по модулю не больше $E=1$.

$\blacksquare$