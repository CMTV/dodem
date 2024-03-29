---
{
    "title": "Количество предельных точек",
    "desc": "Важная теорема о количестве предельных точек последовательности.",
    "type": "theorem"
}
---

||| theorem

Если $A_1, A_2, \ldots A_k$ — предельные точки последовательности $x_n$ и каждый член $x_n$ есть хотя бы в одной из
подпоследовательностей $y_{1n}, y_{2n}, \ldots y_{kn}$, таких, что

$$
    \limn y_{1n} = A_1
    \\
    \limn y_{2n} = A_2
    \\
    \cdots
    \\
    \limn y_{kn} = A_k
$$

то других предельных точек у последовательности $x_n$ нет.

||| proof

Будем доказывать от противного. Пусть у последовательности $x_n$ существует еще одна отличная от всех других предельная точка $A_t$. По определению это означает, что существует
некоторая подпоследовательность $y_{tn}$, такая что

$$ \limn y_{tn} = A_t $$

Рассмотрим число $E$, равное

$$ E = \frac{\min\left| A_i - A_j \right|}{3}, \ (i, j = 1, 2, \ldots k, t) $$

В числителе мы находим такие две предельные точки, расстояние между которыми минимально (включая в рассмотрение "якобы" предельную точку $A_t$). Затем
найденное минимальное расстояние делим на $3$, чтобы исключить пересечение $E$-окрестностей для разных предельных точек.

Распишем по определению, что означает предел подпоследовательностей $y_{1n}, y_{2n}, \ldots y_{kn}, y_{tn}$:

$$
    \limn y_{1n} = A_1 \Leftrightarrow \forall \varepsilon > 0 \ \exists N_1 \ \forall n > N_1 \ : \ |y_{1n} - A_1| < \varepsilon
    \\
    \limn y_{2n} = A_2 \Leftrightarrow \forall \varepsilon > 0 \ \exists N_2 \ \forall n > N_2 \ : \ |y_{2n} - A_2| < \varepsilon
    \\
    \cdots
    \\
    \limn y_{kn} = A_k \Leftrightarrow \forall \varepsilon > 0 \ \exists N_k \ \forall n > N_k \ : \ |y_{kn} - A_k| < \varepsilon
    \\
    \limn y_{tn} = A_t \Leftrightarrow \forall \varepsilon > 0 \ \exists N_t \ \forall n > N_t \ : \ |y_{tn} - A_t| < \varepsilon
$$

Раз все определения выполняются для любого положительного $\varepsilon$, то они выполняются и для ранее полученного числа $E$.

Пусть

$$ N = \max\left( N_1, N_2, \ldots, N_k, N_t \right) $$

Итак, для $E$ существует такое $N$, что для любого $n > N$ одновременно выполняются неравенства:

$$
    |y_{1n} - A_1| < E
    \\
    |y_{2n} - A_2| < E
    \\
    \cdots
    \\
    |y_{kn} - A_k| < E
    \\
    |y_{tn} - A_t| < E
$$

Каждое из этих неравенств означает, что член подпоследовательности $y_{in}$ лежит в $E$-окрестности точки $A_i$:

Рассмотрим последнее неравенство. Для $E$ существует такое $N$, что для любого $n>N$ выполняется

$$ |y_{tn} - A_t| < E $$

Эта запись означает, что член подпоследовательности $y_{tn}$ лежит в $E$-окрестности точки $A_t$. Этот член подпоследовательности является членом исходной последовательности с каким-то номером $m$:

$$ y_{tn} = x_m $$

В условии сказано, что каждый член исходной последовательности $x_n$ принадлежит одной из подпоследовательностей $y_{1n}, y_{2n}, \ldots, y_{kn}$. Значит и $y_{tn} = x_m$ принадлежит одной из этих подпоследовательностей.
Предположим, он принадлежит подпоследовательности $y_{4n}$. Это означает, что $y_{tn}$ лежит в $E$-окрестности точки $A_4$, а не точки $A_t$.

Подобные рассуждения можно провести для любого члена $y_{tn}$ при $n>N$. Это означает, что после $N$ никакой элемент $y_{tn}$ не находится в $E$-окрестности точки $A_t$.
Получили противоречие. Значит $A_t$ — не может быть предельной точкой последовательности $x_n$.

$\blacksquare$

|||