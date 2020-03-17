Формула суммы первых $n$ членов арифметической прогрессии:
$$ S_n = \frac{n(a_n+a_1)}{2} $$

В числителе у нас сумма первых $n-1$ членов арифметической прогрессии с разностью, равной $1$:
$$ 1+2+\ldots+(n-1) = \frac{n(n-1)}{2} $$ 

Преобразуем теперь последовательность из условия:
\begin{gather*}
    \frac{1}{n^2} + \frac{2}{n^2} + \ldots + \frac{n-1}{n^2} = \frac{1+2+\ldots+(n-1)}{n^2} = \\[5px] = \frac{n(n-1)}{2n^2} = \frac{1}{2} \cdot \frac{n-1}{n}
\end{gather*}

Теперь вычислим предел:
\begin{gather*}
    \lim_{n\to\infty} \left( \frac{1}{n^2} + \frac{2}{n^2} + \ldots + \frac{n-1}{n^2} \right) = \lim_{n\to\infty} \frac{1}{2} \cdot \frac{n-1}{n} = \\[5px]
    = \frac{1}{2} \cdot \lim_{n\to\infty} \frac{n-1}{n} = \frac{1}{2} \cdot 1 = \frac{1}{2}
\end{gather*}

Здесь использован факт того, что $\frac{n-1}{n}\to 1$. Это элементарный предел (см. прото-задачу "[Элементарные пределы последовательностей](/proto/sequences/limits/elementary)").