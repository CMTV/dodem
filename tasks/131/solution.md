**Замечание**

По определению частичного предела он может быть как конечным, так и бесконечным.
В этой задаче все частичные пределы в неравенствах в условии предполагаются *конечными*.

В противном случае можно рассмотреть последовательности $x_n = y_n = n$. Эти последовательности, а значит и любые их подпоследовательности стремятся к $+\infty$.
Это приводит к вот такому бессмысленному неравенству, так как бесконечности не являются в полной мере числами и их "нельзя" складывать и сравнивать в обычном смысле:

$$ +\infty +\infty \leq +\infty \leq +\infty +\infty $$

Поэтому далее мы считаем, что речь в задании идет о конечных наибольших/наименьших частичных пределах.

---

**Доказательство а)**

*Доказательство первой части неравенства*

$$ \underline{\limn} x_n + \underline{\limn} y_n \leq \underline{\limn} (x_n + y_n) $$

По условию

$$ \underline{\limn} (x_n + y_n) = A $$

Это означает, что существует некоторая подпоследовательность $x_{p_n} + y_{p_n}$ такая, что

$$ \limn (x_{p_n} + y_{p_n}) = A $$

В неравенстве из условия фигурируют наибольший и наименьший частичные пределы $y_n$. Это означает, что $y_n$ ограничена, потому что если она не ограничена, то, согласно [задаче 126](/tasks/126), в ней можно выделить
подпоследовательность $y_{t_n}\to\infty$, а это значит, что $\overline{\lim\limits_{n\to\infty}} y_n = \underline{\lim\limits_{n\to\infty}} y_n = \infty$. Тут получаем противоречие с замечанием выше, согласно которому мы считаем, что приведенные в условии
частичные пределы конечные. Раз $y_n$ ограничена, то и $y_{p_n}$ ограничена.

Раз $x_{p_n} + y_{p_n}$ сходится, то, согласно [задаче 93](/tasks/93), она ограничена. Итак, $y_{p_n}$ ограничена и $x_{p_n} + y_{p_n}$ ограничена, а значит и $(x_{p_n} + y_{p_n}) - (y_{p_n}) = x_{p_n}$ ограничена (см. прото-задачу <p:[sequences/bounds-operations]>).

Итак, последовательности $x_{p_n}$ и $y_{p_n}$ ограничены.

Раз $y_{p_n}$ ограничена, то, по [задаче 125](/tasks/125) в ней можно выделить сходящуюся подпоследовательность $y_{q_n}$, в которой номера $q_n$ берутся из номеров $p_n$.

$$ \limn y_{q_n} = B $$

Из этих же номеров $q_n$ рассмотрим последовательность $x_{q_n}$. Это подпоследовательность $x_{p_n}$, а значит и $x_{q_n}$ ограничена. Раз $x_{q_n}$ ограничена, то по задаче 125 в ней можно выделить сходящуюся
подпоследовательность $x_{r_n}$, в которой номера $r_n$ берутся из номеров $q_n$.

$$ \limn x_{r_n} = C $$

Из этих же номеров $r_n$ рассмотрим последовательность $y_{r_n}$. Это подпоследовательность $y_{q_n}$, а значит, по прото-задаче <p:[sequences/limits/limit-point]> $y_{r_n}$ имеет такой же предел, что и $y_{q_n}$:

$$ \limn y_{r_n} = \limn y_{q_n} = B $$

Итак, получили две сходящиеся последовательности $x_{r_n}$ и $y_{r_n}$, состоящие из одинаковых номеров. Раз номера одинаковые, то последовательность $x_{r_n} + y_{r_n}$ является подпоследовательностью сходящейся
последовательности $x_{p_n} + y_{p_n}$, а значит

$$ \limn (x_{r_n} + y_{r_n}) = \limn (x_{p_n} + y_{p_n}) = \underline{\limn} (x_n + y_n) = A $$

$x_{r_n}$ — сходящаяся подпоследовательность $x_n$, а значит, по определению наименьшего частичного предела:

$$ \underline{\limn} x_n \leq \limn x_{r_n} $$

Аналогично для $y_{r_n}$:

$$ \underline{\limn} y_n \leq \limn y_{r_n} $$

Сложим эти неравенства:

$$ \underline{\limn} x_n + \underline{\limn} y_n \leq \limn x_{r_n} + \limn y_{r_n} = \underbrace{\limn (x_{r_n} + y_{r_n})}_{\large = \underline{\limn} (x_n + y_n)} $$

$$ \underline{\limn} x_n + \underline{\limn} y_n \leq \underline{\limn} (x_n + y_n) $$

Мы доказали первую половину неравенства.

*Доказательство второй части неравенства*

$$ \underline{\limn} (x_n + y_n) \leq \underline{\limn}x_n + \overline{\limn} y_n $$

По прото-задаче <p:[sequences/limits/max-min-limit-points]>:

$$ \overline{\limn} y_n = -\underline{\limn} (-y_n) $$

Тогда, согласно уже доказанной первой части неравенства выполняется

$$ \underline{\limn} (x_n+y_n) + \underline{\limn} (-y_n) \leq \underline{\limn} (x_n + y_n - y_n) $$

$$ \underline{\limn} (x_n+y_n) + \underline{\limn} (-y_n) \leq \underline{\limn} x_n $$

Вычтем из обеих частей $\underline{\limn} (-y_n)$:

$$ \underline{\limn} (x_n+y_n) \leq \underline{\limn} x_n \underbrace{- \underline{\limn} (-y_n)}_{\large = \overline{\limn} y_n} $$

$$ \underline{\limn} (x_n+y_n) \leq \underline{\limn} x_n + \overline{\limn} y_n $$

Мы доказали вторую половину неравенства.

Итак, доказали, что

$$ \underline{\limn} x_n + \underline{\limn} y_n \leq \underline{\limn} (x_n + y_n) \leq \underline{\limn}x_n + \overline{\limn} y_n $$

$\blacksquare$

---

**Доказательство б)**

Снова воспользуемся прото-задачей прото-задаче <p:[sequences/limits/max-min-limit-points]>:

$$ \overline{\limn} (x_n + y_n) = -\underline{\limn} (-x_n - y_n) = -\underline{\limn} (-y_n -x_n) $$

Воспользуемся уже доказанным неравенством в пункте а):

$$\small \underline{\limn} (-x_n) + \underline{\limn} (-y_n) \leq \underline{\limn} (-y_n -x_n) \leq \underline{\limn} (-y_n) + \overline{\limn} (-x_n) $$

Умножим все части неравенства на $-1$:

$$\small -\underline{\limn} (-x_n) - \underline{\limn} (-y_n) \geq -\underline{\limn} (-y_n -x_n) \geq -\underline{\limn} (-y_n) - \overline{\limn} (-x_n) $$

Применяем прото-задачу <p:[sequences/limits/max-min-limit-points]> для каждого слагаемого:

$$ \overline{\limn} (x_n) + \overline{\limn} (y_n) \geq \overline{\limn} (y_n + x_n) \geq \overline{\limn} (y_n) + \underline{\limn} (x_n) $$

$$ \underline{\limn} x_n + \overline{\limn} y_n \leq \overline{\limn} (x_n + y_n) \leq \overline{\limn} x_n + \overline{\limn} y_n $$

$\blacksquare$