## Ограниченность

Итак, по методу математической индукции, что

$$ x_n \leq n x_1 $$

*База индукции:* пусть $n=1$. Получаем:

$$ x_1 \leq 1\cdot x_1 $$

*Индукционный переход:*

Предположим, что равенство выполняется для какого-то натурального $k$:

$$ x_k \leq k x_1 $$

Рассмотрим теперь $x_{k+1}$. По условию задачи

$$ x_{k+1} \leq x_k + x_1 $$

Но по предположению индукции $x_k\leq k x_1$, поэтому 

$$ x_{k+1} \leq x_k + x_1 \leq k x_1 + x_1 = (k+1) x_1 $$

$$ x_{k+1} \leq (k+1) x_1 $$

Итак, мы доказали индукционный переход, а значит

$$ x_n \leq n x_1 $$

Делим обе части на положительное $n$ и получаем, что

$$ \frac{x_n}{n} \leq x_1 $$

Значит, последовательность $\frac{x_n}{n}$ ограничена сверху числом $x_1$.

Покажем теперь, что

$$ 0\leq x_n $$

Для всех номеров начиная со второго это выполняется, так как по условию

$$ 0\leq x_n = x_{n-1 + 1} \leq x_{n-1} + x_1 \ (n\geq 2) $$

Осталось проверить $x_1$. Предположим, что $x_1$ — отрицательное число. Тогда рассмотрим элемент $x_2$ по условию:

$$ 0 \leq x_2 = x_{1 + 1} \leq x_1 + x_1 $$

Получаем противоречие:

$$ 0 \leq 2x_1, $$

так как отрицательное число справа не может быть больше $0$. Значит и $x_1$ тоже неотрицательное число.

Мы доказали, что

$$ 0\leq x_n $$

Делим обе части на положительное $n$:

$$ 0 \leq \frac{x_n}{n} $$

Итак, получаем финальное неравенство

$$ 0 \leq \frac{x_n}{n} \leq x_1 $$

Это означает, что $\frac{x_n}{n}$ ограничена.

## Сходимость

Раз $\frac{x_n}{n}$ ограничена, то у нее есть конечные наибольший и наименьший частичные пределы (потому что в противном случае она была бы неограниченной).

Распишем наименьший частичный предел:

$$ \underline{\limn} \frac{x_n}{n} = \limn \frac{x_{p_n}}{p_n} = a $$

По определению предела это означает, что

$$ \forall \varepsilon > 0 \ \exists N = (\varepsilon) \ \forall n > N \ : \ \left|\frac{x_{p_n}}{p_n} - a\right| < \varepsilon $$

Рассмотрим неравенство в конце:

$$ \left| \frac{x_{p_n}}{p_n} - a \right| < \varepsilon $$

Раскроем это неравенство по пункту 1 прото-задачи <p:[simple-abs]>:

$$ \left| \frac{x_{p_n}}{p_n} - a \right| < \varepsilon \Leftrightarrow \begin{cases} \frac{x_{p_n}}{p_n} - a < \varepsilon \\ \frac{x_{p_n}}{p_n} - a > - \varepsilon \end{cases} $$

Рассмотрим первое неравенство справа:

$$ \frac{x_{p_n}}{p_n} - a < \varepsilon $$

Прибавим к обеим частям $a$:

$$ \frac{x_{p_n}}{p_n} < a + \varepsilon $$

Итак, получаем

$$ \forall \varepsilon > 0 \ \exists N = (\varepsilon) \ \forall n > N \ : \ \frac{x_{p_n}}{p_n} < a + \varepsilon $$

Пусть теперь

$$ T = p_{N + 1} $$

Рассмотрим произвольный член последовательности $x_n$ у которого номер $n > T$. Раз $n>T$, то $n$ можно поделить с остатком на $T$:

$$ n = T\cdot q + r, \quad q \geq 0 \ \text{ и } \ r \leq T $$

Тогда, воспользовавшись неравенством из условия:

$$ x_n = x_{qT + r} \leq x_{qT} + x_r = x_{qT} + x_r \leq \underbrace{(x_T + x_T + \ldots)}_{ q \text{ раз}} + x_r $$

$$ x_n \leq qx_T + x_r $$

Для слагаемого $x_r$ воспользуемся неравенством $x_r \leq rx_1$, которое мы доказали в самом начале решения:

$$ x_n \leq qx_T + x_r \leq qx_t + rx_1 $$

Так как $r$ — остаток, то по определению $r\leq T$, а значит:

$$ x_n \leq qx_t + rx_1 \leq qx_T + Tx_1 $$

$$ x_n \leq qx_T + Tx_1 $$

Теперь делим обе части на положительное $n$:

$$ \frac{x_n}{n} \leq \frac{qx_T}{n} + \frac{Tx_1}{n} $$

$$ \frac{x_n}{n} \leq \frac{qx_T}{T\cdot q + r} + \frac{Tx_1}{n} $$

||| spoiler $$ \frac{qx_T}{T\cdot q + r} \leq \frac{qx_T}{T\cdot q} $$
Докажем, что

$$ \frac{qx_T}{T\cdot q + r} \leq \frac{qx_T}{T\cdot q} $$

Поделим обе части на положительное $qx_T$:

$$ \frac{1}{T\cdot q + r} \leq \frac{1}{T\cdot q} $$

"Перевернем" дроби:

$$ T\cdot q + r \geq T\cdot q $$

Вычитаем из обеих частей $T\cdot q$:

$$ r \geq 0 $$

$\blacksquare$
|||

$$ \frac{x_n}{n} \leq \frac{qx_T}{T\cdot q + r} + \frac{Tx_1}{n} \leq \frac{qx_T}{Tq} + \frac{Tx_1}{n} $$

$$ \frac{x_n}{n} \leq \frac{x_T}{T} + \frac{Tx_1}{n} $$

Но $T = p_{N+1}$, а значит по определению наименьшего предела выше

$$ \frac{x_T}{T} = \frac{x_{p_{N+1}}}{p_{N+1}} \leq a + \varepsilon $$

Поэтому

$$ \frac{x_n}{n} \leq \frac{x_T}{T} + \frac{Tx_1}{n} \leq a + \varepsilon + \frac{Tx_1}{n} $$

$$ \frac{x_n}{n} \leq a + \varepsilon + \frac{Tx_1}{n} $$

Среди исходной последовательности $\frac{x_n}{n}$ встречаются все члены подпоследовательности $\frac{x_{q_n}}{q_n} = \overline{\limn} \frac{x_n}{n}$, поэтому

$$ \frac{x_{q_n}}{q_n} \leq a + \varepsilon + \frac{Tx_1}{n} $$

Воспользуемся прото-задачей <p:[sequences/limits/limits-inequality]> и возьмем предел обеих частей неравенства:

$$ \limn \frac{x_{q_n}}{q_n} \leq \limn \left( a + \varepsilon + \frac{Tx_1}{n} \right) $$

$$ \overline{\limn} \frac{x_n}{n} \leq a + \varepsilon + Tx_1\underbrace{\limn\frac{1}{n}}_{= 0} $$

Выше мы воспользовались тем, что $\frac{1}{n}\to 0$ (см. прото-задачу <p:[sequences/limits/elementary]>).

$$ \overline{\limn} \frac{x_n}{n} \leq a + \varepsilon $$

Итак, получили, что

$$ \forall \varepsilon > 0 \ : \ \overline{\limn} \frac{x_n}{n} \leq a + \varepsilon $$

Докажем, что

$$ \overline{\limn} \frac{x_n}{n} \leq a $$

Докажем от противного. Пусть существует наибольший частичный предел $a+t$:

$$ \overline{\limn} \frac{x_n}{n} = a + t > a $$

Тогда возьмем $\varepsilon = \frac{t}{2}$. Тогда

$$ a + t \leq a + \frac{t}{2} $$

$$ t\leq \frac{t}{2} $$

$$ 1 \leq \frac{1}{2} $$

Получили противоречие. Значит

$$ \overline{\limn} \frac{x_n}{n} \leq a $$

Но

$$ a = \underline{\limn} \frac{x_n}{n} $$

Получаем, что

$$ \overline{\limn} \frac{x_n}{n} \leq \underline{\limn} \frac{x_n}{n} $$

А это возможно только если

$$ \overline{\limn} \frac{x_n}{n} = \underline{\limn} \frac{x_n}{n} $$

Это означает, что у последовательности $\frac{x_n}{n}$ есть только одна предельная точка. По прото-задаче <p:[sequences/limits/limit-point]> это означает, что $\frac{x_n}{n}$ сходится.