Итак, нам нужно показать, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N, p > 0 \ : \ |x_{n+p} - x_n| < \varepsilon $$

Рассмотрим последнее неравенство:

$$\small \left| \frac{\cos 1!}{1\cdot 2} + \ldots + \frac{\cos (n+p)!}{(n+p)(n+p+1)} - \left( \frac{\cos 1!}{1\cdot 2} + \ldots + \frac{\cos n!}{n(n+1)} \right) \right| < \varepsilon $$

$$ \left|\frac{\cos (n+1)!}{(n+1)(n+2)} + \ldots + \frac{\cos (n+p)!}{(n+p)(n+p+1)}\right| < \varepsilon $$

По определению, $\cos a \leq 1$, поэтому все косинусы можно заменить на $1$, усилив неравенство:

\begin{align*}
    &\left|\frac{\cos (n+1)!}{(n+1)(n+2)} + \ldots + \frac{\cos (n+p)!}{(n+p)(n+p+1)}\right| \leq 
    \\[5px]
    \leq &\left| \frac{1}{(n+1)(n+2)} + \ldots + \frac{1}{(n+p)(n+p+1)} \right| < \varepsilon
\end{align*}

Далее будем работать с усиленным неравенством. Найденное для него $N$ будет по цепному неравенству работать и с исходным нервенством.

$$ \left| \frac{1}{(n+1)(n+2)} + \ldots + \frac{1}{(n+p)(n+p+1)} \right| < \varepsilon $$

От модуля можно избавиться, так как выражение под ним всегда больше $0$:

$$ \frac{1}{(n+1)(n+2)} + \ldots + \frac{1}{(n+p)(n+p+1)} < \varepsilon $$

Докажем следующее свойство:

$$ \frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1} $$

В правой части приведем разность к общему знаменателю:

$$ \frac{1}{n(n+1)} = \frac{n+1 - n}{n(n+1)} = \frac{1}{n(n+1)} $$

Теперь заложим на разность каждую дробь из неравенства выше:

$$ \frac{1}{n+1} - \frac{1}{n+2} + \ldots - \frac{1}{n+p} + \frac{1}{n+p} - \frac{1}{n+p+1} < \varepsilon $$

$$ \frac{1}{n+1} - \frac{1}{n+p+1} < \varepsilon $$

Усилим неравенство, избавившись от разности:

$$ \frac{1}{n+1} - \frac{1}{n+p+1} < \frac{1}{n+1} < \varepsilon $$

$$ \frac{1}{n+1} < \varepsilon $$

Еще больше усилим неравенство, уменьшив знамнатель до $n$:

$$ \frac{1}{n+1} < \frac{1}{n} < \varepsilon $$

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