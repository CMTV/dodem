Итак, в условии нам дана последовательность

$$ \frac{n}{\sqrt[n]{n!}} $$

Запишем включим в корень $n$-ой степени числитель:

$$ \frac{n}{\sqrt[n]{n!}} = \sqrt[n]{\frac{n^n}{n!}} $$

Обозначим последовательность под корнем за $y_n$:

$$ y_n = \frac{n^n}{n!} $$

Покажем, что $\frac{y_{n+1}}{y_n}$ сходится к числу $e$:

\begin{gather*}
    \limn \frac{y_{n+1}}{y_n} = \limn \frac{\frac{(n+1)^{n+1}}{(n+1)!}}{\frac{n^n}{n!}} = \limn \frac{(n+1)^n(n+1)}{n!(n+1)}\frac{n!}{n^n} =
    \\[5px]
    = \limn \left(\frac{n+1}{n}\right)^n = \limn \left(1+\frac{1}{n}\right)^n = e
\end{gather*}

Итак, мы показали, что последовательность $\frac{y_{n+1}}{y_n}$ сходится к $e$. По [задаче 141](/tasks/141) к тому же числу сходится и последовательность $\sqrt[n]{y_n}$:

$$ \limn \frac{y_{n+1}}{y_n} = \limn \sqrt[n]{y_n} = \limn \frac{n}{\sqrt[n]{n!}} = e $$

$$ \limn \frac{n}{\sqrt[n]{n!}} = e $$

$\blacksquare$