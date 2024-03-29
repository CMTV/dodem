Рассмотрим следующее неравенство:

$$ \frac{2n}{n!} < \frac{2}{n} $$

Домножим обе части на $n$ и разделим на $2$:

$$ \frac{n^2}{n!} < 1 $$

"Поднимем" $n!$ из знаменателя:

$$ n^2 < n! $$

Распишем это неравенство для нескольких $n$:

$$	\def\arraystretch{1.25}
\begin{array}{c|c}
    n & n^2 < n! \\
    \hline
    1 & 1 < 1 \\
    2 & 4 < 2 \\
    3 & 9 < 6 \\
    \hline
    4 & 16 < 24 \\
    5 & 25 < 120 \\
    \cdots & \cdots
\end{array}
$$

Замечаем, что после $n=3$ неравенство $n^2 < n!$ всегда выполняется.

Докажем по индукции, что

$$ n^2 < n!, \ n > 3 $$

**База индукции:** пусть $n=4$. Получаем:

$$ 16 < 24 $$

**Индукционный переход:**

Предположим, что неравенство выполняется для некоторого $k>3$:

$$ k^2 < k! $$

Домножим обе части на $(k+1)$:

$$ k^2 \cdot (k+1) < (k+1)! $$

Покажем, что

$$
\begin{aligned}
    (k+1)^2 &< k^2 \cdot (k+1)
    \\
    k^2 + 2k + 1 &< k^3 + k^2
    \\
    2k + 1 &< k^3
    \\
    1 &< k^3 - 2k
\end{aligned}
$$

Так как $k>3$, то последнее неравенство можно усилить, вставив значение для $k=3$:

$$ 1 < 3^3 - 2\cdot 3 = 20 < k^3 - 2k $$

Итак, мы показали, что

$$ (k+1)^2 < k^2 \cdot (k+1) $$

Но

$$ k^2 \cdot (k+1) < (k+1)! $$

Поэтому, объединяя эти неравенства в одно, получаем:

$$ (k+1)^2 < k^2 \cdot (k+1) < (k+1)! \\ (k+1)^2 < (k+1)! $$

Итак, неравенство выполняется и для $k+1$. Индукционный переход доказан, а значит мы доказали, что:

$$ n^2 < n!, \ n > 3 $$

А значит выполняется и

$$ \frac{2n}{n!} < \frac{2}{n}, \ n > 3 $$

Теперь зажмем нашу последовательность из условия:

$$ 0 < \frac{2n}{n!} < \frac{2}{n} $$

На первые $3$ члена последовательности, для которых неравенство в правой части не выполняется можно не обращать
внимание.
На предел они не окажут никакого влияния (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/independency)>).

Так как $0\to 0$ и $\frac{2}{n}\to 0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>), то, по теореме о двух милиционерах, "зажатая" между ними последовательность из условия тоже стремится к $0$.

$\blacksquare$