Итак, нам нужно показать, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N, p > 0 \ : \ |x_{n+p} - x_n| < \varepsilon $$

Будем работать с последним неравенством:

$$ \left| \frac{\sin 1}{2} + \ldots + \frac{\sin n+p}{2^{n+p}} - \left( \frac{\sin 1}{2} + \ldots \frac{\sin n}{2^n} \right) \right| < \varepsilon $$

$$ \left|\frac{\sin n+1}{2^{n+1}} + \ldots \frac{\sin n+p}{2^{n+p}}\right| < \varepsilon $$

По определению, $\sin a \leq 1$, поэтому все синусы можно заменить на $1$, усилив неравенство:

$$ \left|\frac{\sin n+1}{2^{n+1}} + \ldots + \frac{\sin n+p}{2^{n+p}}\right| \leq \left|\frac{1}{2^{n+1}} + \ldots + \frac{1}{2^{n+p}}\right| < \varepsilon $$

Далее будем работать с усиленным неравенством. Найденное для него $N$ будет по цепному неравенству работать и с исходным нервенством.

$$ \left|\frac{1}{2^{n+1}} + \ldots + \frac{1}{2^{n+p}}\right| < \varepsilon $$

От модуля можно избавиться, так как выражение под ним всегда больше $0$:

$$ \frac{1}{2^{n+1}} + \ldots + \frac{1}{2^{n+p}} < \varepsilon $$

Вынесем за скобки $\frac{1}{2^n}$:

$$ \frac{1}{2^n}\left( \frac{1}{2} + \ldots + \frac{1}{2^p} \right) < \varepsilon $$

В скобках воспользуемся формулой суммы $p$ членов геометрической прогрессии с первым членом, равным $\frac{1}{2}$ и таким же знаменателем:

$$ \left( \frac{1}{2} + \ldots + \frac{1}{2^p} \right) = \frac{\frac{1}{2}\left( \left(\frac{1}{2}\right)^p - 1 \right)}{\frac{1}{2} - 1} = 1 - \left(\frac{1}{2}\right)^p $$

Заменяем скобку в неравенстве на полученное выражение:

$$ \frac{1}{2^n}\left( 1 - \left(\frac{1}{2}\right)^p \right) < \varepsilon $$

Замечаем, что скобка всегда меньше $1$, поэтому заменяем ее на $1$:

$$ \frac{1}{2^n}\left( 1 - \left(\frac{1}{2}\right)^p \right) < \frac{1}{2^n} < \varepsilon $$

$$ \left(\frac{1}{2}\right)^n < \varepsilon $$

Прологарифмируем неравенство по основанию $\frac{1}{2}$. Так как по условию $\frac{1}{2} < 1$, то знак неравенства сменится на противоположный:

$$ n > \log_{\frac{1}{2}} \varepsilon $$

Итак, для любого $\varepsilon > 0$ нам достаточно взять $N$ по следующей формуле:

$$ N(\varepsilon) = \ceil{\left| \log_{\frac{1}{2}} \varepsilon \right|} $$

Тогда, какое-бы $n>N$ мы не взяли,

$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\left| \log_{\frac{1}{2}} \varepsilon \right|} \geq \log_{\frac{1}{2}} \varepsilon $$

А раз такое произвольное $n$

$$ n > \log_{\frac{1}{2}} \varepsilon, $$

то, "возвращаясь" по длинной цепочке цепного неравенства мы приходим к тому, что для произвольного $p$:

$$ |x_{n+p} - x_n| < \varepsilon $$

Мы доказали, что последовательность $x_n$ является фундаментальной, а значит она сходится.

$\blacksquare$