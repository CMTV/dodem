Итак, нам нужно показать, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N, p > 0 \ : \ |x_{n+p} - x_n| < \varepsilon $$

Будем работать с последним неравенством:

$$ \left| 1 + \ldots + \frac{1}{(n+p)^2} - \left(1 + \ldots + \frac{1}{n^2}\right) \right| < \varepsilon $$

$$ \left| \frac{1}{(n+1)^2} + \ldots + \frac{1}{(n+p)^2} \right| < \varepsilon $$

От модуля можно избавиться, так как выражение под ним всегда больше $0$:

$$ \frac{1}{(n+1)^2} + \ldots + \frac{1}{(n+p)^2} < \varepsilon $$

Для каждого слагаемого воспользуемся неравенством из указания:

\begin{gather*}
    \frac{1}{(n+1)^2} + \ldots + \frac{1}{(n+p)^2} < 
    \\[5px]
    < \frac{1}{n} - \frac{1}{n+1} + \ldots -\frac{1}{n+p-1} + \frac{1}{n+p-1} - \frac{1}{n+p} < \varepsilon
\end{gather*}

$$ \frac{1}{(n+1)^2} + \ldots + \frac{1}{(n+p)^2} < \frac{1}{n} - \frac{1}{n+p} < \varepsilon $$

Далее будем работать с усиленным неравенством. Найденное для него $N$ будет по цепному неравенству работать и с исходным нервенством.

$$ \frac{1}{n} - \frac{1}{n+p} < \varepsilon $$

Еще усилим неравенство, избавившись от разности:

$$ \frac{1}{n} - \frac{1}{n+p} < \frac{1}{n} < \varepsilon $$

$$ \frac{1}{n} < \varepsilon $$

Изолируем $n$:

$$ n > \frac{1}{\varepsilon} $$

Итак, для любого $\varepsilon > 0$ нам достаточно взять $N$ по следующей формуле:

$$ N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} $$

Тогда, какое-бы $n>N$ мы не взяли,

$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon}  $$

А раз такое произвольное $n$

$$ n > \frac{1}{\varepsilon} $$

то, "возвращаясь" по длинной цепочке цепного неравенства мы приходим к тому, что для произвольного $p$:

$$ |x_{n+p} - x_n| < \varepsilon $$

Мы доказали, что последовательность $x_n$ является фундаментальной, а значит она сходится.

$\blacksquare$