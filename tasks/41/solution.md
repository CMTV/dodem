Нужный ход действий указан прямо в условии. Нам нужно для произвольного $ \varepsilon > 0 $ подобрать такое натуральное $ N $, чтобы для любого $ n > N $ выполнялось следующее неравенство:
$$ |x_n - 1| < \varepsilon $$

Заменим $x_n$ на соответствующую формулу для $n$-го члена последовательности:
$$ \left| \frac{n}{n+1} - 1 \right| < \varepsilon $$

Разберемся с модулем. Для этого докажем, выражение внутри модуля всегда меньше $0$:
$$ \frac{n}{n+1} - 1 \overset{\text{?}}{<} 0 \qquad n \overset{\text{?}}{<} n + 1 \qquad 0 < 1  $$

Раз внутри модуля всегда отрицательное число, раскрываем модуль со знаком минус:
\begin{equation}\label{to-prove}
    -\left(\frac{n}{n+1} - 1\right) < \varepsilon
\end{equation}

Домножаем обе части на $-1$:
$$ \frac{n}{n+1} - 1 > -\varepsilon $$

Прибавляем по единицы с обеих сторон и умножаем обе части на $n+1$:
$$ n > (1 - \varepsilon)(n+1) $$

Умножаем скобки друг на друга в правой части:
$$ n > n - n\varepsilon + 1 - \varepsilon $$

Вычитаем из обеих частей $n$:
$$ 0 > -n\varepsilon + 1 - \varepsilon $$

Изолируем $n$:
$$ n > \frac{1-\varepsilon}{\varepsilon} $$

Все проводимые нами преобразования были эквивалентными. Это означает, что какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\frac{1-\varepsilon}{\varepsilon}$ и тогда требуемое неравенство \eqref{to-prove} будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:
$$ N(\varepsilon) = \ceil{\frac{|1-\varepsilon|}{\varepsilon}} $$

Покажем, что любое натуральное $ n > N(\varepsilon) $ будет больше $\frac{1-\varepsilon}{\varepsilon}$.

Если $\varepsilon > 1$, то дробь $\frac{1-\varepsilon}{\varepsilon}$ будет отрицательной, а значит нам подойдет любое натуральное число, в том числе и то, которое мы получим по формуле $N(\varepsilon)$.

Если $\varepsilon = 1$, то $N(\varepsilon) = 0$, а значит любое натуральное $n > N(\varepsilon)$ нам подойдет.

Если $\varepsilon < 1$, то мы получим округление сверху ("потолок") числа $\frac{1-\varepsilon}{\varepsilon}$. По определению "потолка" числа:
$$ \frac{|1-\varepsilon|}{\varepsilon} \leq \ceil{\frac{|1-\varepsilon|}{\varepsilon}} $$

Так как в условии у нас $n > N(\varepsilon)$, то следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$:
$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\frac{|1-\varepsilon|}{\varepsilon}} \geq \frac{|1-\varepsilon|}{\varepsilon} \geq \frac{1-\varepsilon}{\varepsilon} $$
$$ n > \frac{1-\varepsilon}{\varepsilon} $$

Итак, мы показали, что при любых $\varepsilon > 0$ мы всегда найдем такое $N(\varepsilon)$, что для любого $n>N(\varepsilon)$ будет выполняться неравенство \eqref{to-prove}.

---

Начнем заполнять таблицу:

$$ N(0.1) = \ceil{\frac{|1-0.1|}{0.1}} = \ceil{\frac{0.9}{0.1}} = 9 $$
$$ N(0.01) = \ceil{\frac{|1-0.01|}{0.01}} = \ceil{\frac{0.99}{0.01}} = 99 $$
$$ N(0.001) = \ceil{\frac{|1-0.001|}{0.001}} = \ceil{\frac{0.999}{0.001}} = 999 $$
$$ N(0.0001) = \ceil{\frac{|1-0.0001|}{0.0001}} = \ceil{\frac{0.9999}{0.0001}} = 9999 $$

Итоговая таблица:

$$ \begin{array} {|c|c|}\hline \varepsilon & 0.1 & 0.01 & 0.001 & 0.0001 & \ldots \\ \hline N & 9 & 99 & 999 & 9999 &  \\ \hline  \end{array} $$