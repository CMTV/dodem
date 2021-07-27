## Доказательство сходимости

Докажем, что последовательность $x_n$ фундаментальная, то есть

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N, p > 0 \ : \ |x_{n+p} - x_{n}| < \varepsilon $$

Рассмотрим неравенство в конце:

$$ |x_{n+p} - x_{n}| < \varepsilon $$

$$ \left| 1 + \ldots + \frac{1}{n + p} - \ln (n+p) - \left( 1 + \ldots + \frac{1}{n} - \ln n \right) \right| < \varepsilon $$

$$ \left| \frac{1}{n+p} -\left( \ln (n+p) - \ln n \right) \right| < \varepsilon $$

Воспользуемся свойством модулей и усилим неравенство (см. прото-задачу <b:[П-ссылка](advanced/proto/common/abs)>):

$$ \left| \frac{1}{n+p} -\left( \ln (n+p) - \ln n \right) \right| \leq \left| \frac{1}{n+p} \right| + \left| \ln(n+p) - \ln n \right| < \varepsilon $$

$$ \frac{1}{n+p} + \left| \ln(n+p) - \ln n \right| < \varepsilon $$

В прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/harmonic-series)> мы доказали, что

$$ \ln (n+1) - \ln n < \frac{1}{n} $$

Поэтому запишем так:

$$
    \ln (n+p) - \ln n =
    \\[5px]
    \small \underbrace{\ln(n+1) - \ln n}_{\large < \frac{1}{n}} + \underbrace{\ln(n+2) - \ln(n+1)} _{\large < \frac{1}{n+1}} + \ldots + \underbrace{\ln(n+p) - \ln(n+p-1)} _{\large < \frac{1}{n+p -1}}
$$

Итак:

$$ \ln (n+p) - \ln < \underbrace{\frac{1}{n} + \frac{1}{n+1} + \ldots + \frac{1}{n+p-1}}_{p \text{ слагаемых}} $$

Мы можем увеличить кажду дробь справа, уменьшив ее знаменатель до $n$:

$$ \ln (n+p) - \ln < \frac{1}{n} + \ldots \frac{1}{n+p-1} \leq \frac{1}{n} + \frac{1}{n} + \ldots $$

$$ \ln (n+p) - \ln < \underbrace{\frac{1}{n} + \frac{1}{n} + \ldots}_{p \text{ слагаемых}} $$

$$ \ln (n+p) - \ln < \frac{p}{n} $$

Возвращаемся к нашему неравенству с $\varepsilon$:

$$ \frac{1}{n+p} + \underbrace{\left| \ln(n+p) - \ln n \right|}_{\large < \frac{p}{n}} < \varepsilon $$

$$ \frac{1}{n+p} + \left| \ln(n+p) - \ln n \right| \leq \frac{1}{n+p} + \frac{p}{n} < \varepsilon $$

$$ \frac{1}{n+p} + \frac{p}{n} = \frac{n+p}{(n+p)n} = \frac{1}{n} < \varepsilon $$

$$ \frac{1}{n} < \varepsilon $$

Откуда

$$ n > \frac{1}{\varepsilon} $$

Итак по определению фундаментальной последовательности, для любого $\varepsilon > 0$ нам достаточно взять $N$ по следующей формуле:

$$ N(\varepsilon) = \ceil{\frac{1}{\varepsilon}} $$

Тогда, для любого $n > N$ и $p>0$ будет выполняться

$$ n\geq N+1 > N = \ceil{\frac{1}{\varepsilon}} \geq \frac{1}{\varepsilon} $$

$$ n > \frac{1}{\varepsilon} $$

А значит и

$$ |x_{n+p} - x_n| < \varepsilon $$

Итак, мы доказали, что $x_n$ — фундаментальная последовательность. Согласно критерию Коши любая фундаментальная последовательность сходится. Значит и $x_n$ тоже сходится:

$$ \limn x_n = C $$

## Вывод формулы

Рассмотрим последовательность $\varepsilon_n = x_n - C$. Найдем ее предел:

$$ \limn \varepsilon_n = \limn (x_n - C) = \limn x_n - \limn C = C - C = 0 $$

$$ \limn \varepsilon_n = 0 $$

Рассмотрим теперь произвольный член $n$ последовательности $\varepsilon_n$:

$$ \varepsilon_n = x_n - C $$

$$ x_n = C + \varepsilon_n $$

Распишем $x_n$:

$$ 1 + \frac{1}{2} + \ldots + \frac{1}{n} - \ln n = C + \varepsilon_n $$

$$ 1 + \frac{1}{2} + \ldots + \frac{1}{n} = C + \ln n + \varepsilon_n $$

Итак, мы получили формулу из условия. Причем $\varepsilon_n \to 0$ при $n\to\infty$, как мы показали выше.