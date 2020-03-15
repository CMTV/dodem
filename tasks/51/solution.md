Формула суммы первых $n$ членов арифметической прогрессии:
$$ S_n = \frac{n(a_n+a_1)}{2} $$

В числителе у нас сумма первых $n-1$ членов арифметической прогрессии с разностью, равной $1$:
$$ 1+2+\ldots+(n-1) = \frac{n(n-1)}{2} $$ 

Преобразуем теперь последовательность из условия:
\begin{gather*}
    \frac{1}{n^2} + \frac{2}{n^2} + \ldots + \frac{n-1}{n^2} = \frac{1+2+\ldots+(n-1)}{n^2} = \\[5px] = \frac{n(n-1)}{2n^2} = \frac{1}{2} \cdot \frac{n-1}{n}
\end{gather*}

Докажем по определению, что $\frac{n-1}{n}\to 1$:
$$ \lim_{n\to\infty} \frac{n-1}{n} = 1 \Leftrightarrow \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left|\frac{n-1}{n} - 1\right| < \varepsilon $$

Рассмотрим неравенство в конце. Модуль раскрываем со знаком минуса, так как выражение под ним всегда отрицательное:
$$ 1 - \frac{n-1}{n} < \varepsilon $$

Постепенно изолируем $n$:
$$ 1 - \frac{n-1}{n} < \varepsilon \qquad 1 - 1 + \frac{1}{n} < \varepsilon $$

$$ n > \frac{1}{\varepsilon} $$

Какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\frac{1}{\varepsilon}$ и тогда требуемое по определению предела неравенство выше будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:
$$ N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} $$

По этой формуле мы получаем округление сверху ("потолок") числа $\frac{1}{\varepsilon}$. Из определения "потолка" числа:
$$ \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon} $$

Так как в условии у нас $n > N(\varepsilon)$, то следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$:
$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon}  $$
$$ n > \frac{1}{\varepsilon} $$

Мы показали, что любые натуральные $ n > N(\varepsilon) $ удовлетворяют требуемому по определению доказываемого предела неравенству.
Итак, доказали, что:
$$ \lim_{n\to\infty} \frac{n-1}{n} = 1 $$

Теперь возвращаемся к последовательности в условии:
\begin{gather*}
    \lim_{n\to\infty} \left( \frac{1}{n^2} + \frac{2}{n^2} + \ldots + \frac{n-1}{n^2} \right) = \lim_{n\to\infty} \frac{1}{2} \cdot \frac{n-1}{n} = \\[5px]
    = \frac{1}{2} \cdot \lim_{n\to\infty} \frac{n-1}{n} = \frac{1}{2} \cdot 1 = \frac{1}{2}
\end{gather*}