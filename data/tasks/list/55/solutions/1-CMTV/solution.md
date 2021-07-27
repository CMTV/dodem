Сначала поработаем с самой суммой:

$$ \frac{1}{2} + \frac{3}{2^2} + \frac{5}{2^3} + \ldots + \frac{2n-1}{2^n} $$

Разложим ее так, чтобы у каждого члена в числителе была $1$ и представим в виде таблицы:

$$\large
	\def\arraystretch{1.3}\begin{array}{ccccc}
    \frac{1}{2} & + \frac{1}{2^2} & + \frac{1}{2^3} & + \ldots & + \frac{1}{2^n}
    \\
                & + \frac{1}{2^2} & + \frac{1}{2^3} & + \ldots & + \frac{1}{2^n}
    \\
                & + \frac{1}{2^2} & + \frac{1}{2^3} & + \ldots & + \frac{1}{2^n}
    \\
                &                 & + \frac{1}{2^3} & + \ldots & + \frac{1}{2^n}
    \\
                &                 & + \frac{1}{2^3} & + \ldots & + \frac{1}{2^n}
    \\
                &                 &                 &          &   \vdots
    \\
                &                 &                 &          & + \frac{1}{2^n}
    \\
    \hline
    \frac{1}{2} & + \frac{3}{2^2} & + \frac{5}{2^3} & + \ldots & + \frac{2n-1}{2^n}
\end{array}
$$

В первой строчке таблицы воспользуемся формулой суммы первых $n$ членов геометрической прогрессии со знаменателем $\frac{1}{2}$ и первым членом, равным $\frac{1}{2}$:

$$ \frac{1}{2} + \left(\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^3 + \ldots + \left(\frac{1}{2}\right)^n = \frac{\frac{1}{2}\left(\left(\frac{1}{2}\right)^n - 1\right)}{\frac{1}{2} - 1} = 1 - \frac{1}{2^n} $$

Во второй строчке таблицы выносим за скобки $\frac{1}{2}$ и вновь используем формулу суммы первых $n-1$ членой геометрической прогрессии:

$$
    \frac{1}{2}\left( \frac{1}{2} + \left(\frac{1}{2}\right)^2 + \ldots + \left( \frac{1}{2} \right)^{n-1} \right) = \frac{1}{2}\cdot\frac{\frac{1}{2}\left( \left(\frac{1}{2}\right)^{n-1} - 1 \right)}{\frac{1}{2} - 1} = \\
    = \frac{1}{2}\left(1-\frac{1}{2^{n-1}}\right)
$$

Проделаем эти операции с каждой строчкой таблицы и сложим результаты:

$$
    \left( 1 - \frac{1}{2^n} \right) + \\[5px] + \frac{1}{2}\left( 1 - \frac{1}{2^{n-1}} \right) + \frac{1}{2}\left( 1 - \frac{1}{2^{n-1}} \right) + \\[5px]
    + \frac{1}{4}\left( 1 - \frac{1}{2^{n-2}} \right) + \frac{1}{4}\left( 1 - \frac{1}{2^{n-2}} \right) + \ldots + \frac{1}{2^{n}} = \\[5px]
    = 1 - \frac{1}{2^n} + \frac{1}{2} - \frac{1}{2^n} + \frac{1}{2} - \frac{1}{2^n} + \frac{1}{4} - \frac{1}{2^n} + \frac{1}{4} - \frac{1}{2^n} + \ldots = \\[5px]
    = 1 + \frac{1}{2} + \frac{1}{2} + \frac{1}{4} + \frac{1}{4} + \ldots + \frac{1}{2^{n-1}} + \frac{1}{2^{n-1}} - \frac{2n-1}{2^n}
$$

Из полученного результата можно выделить две суммы первых $n-1$ членов геометрической прогрессии:

$$ \frac{1}{2} + \frac{1}{4} + \ldots + \frac{1}{2^{n-1}} + \frac{1}{2} + \frac{1}{4} + \ldots + \frac{1}{2^{n-1}} $$

Воспользуемся формулой суммы первых $n-1$ членов геометрической прогрессии:

$$ \frac{\frac{1}{2}\left(\left(\frac{1}{2}\right)^{n-1} - 1\right)}{\frac{1}{2}-1} = 1 - \left(\frac{1}{2}\right)^{n-1} $$

Так как таких сумм две, удваиваем результат и подставляем его обратно вместо сумм:

$$ 1 + 2 - 2\cdot\left(\frac{1}{2}\right)^{n-1} - \frac{2n-1}{2^n} $$

Немного упростим:

$$ 3 - 4\left(\frac{1}{2}\right)^n - \frac{2n-1}{2^n} $$

Найдем значение предела:

$$
    \lim_{n\to\infty} \left( \frac{1}{2} + \frac{3}{2^2} + \ldots + \frac{2n-1}{2^n} \right) = \lim_{n\to\infty} 3 - 4\left(\frac{1}{2}\right)^n - \frac{2n-1}{2^n} = \\[5px]
    = 3 - \lim_{n\to\infty} 4\left(\frac{1}{2}\right)^n - \lim_{n\to\infty} \frac{2n-1}{2^n} = \\[5px] = 3 - 0 - \lim_{n\to\infty}\frac{2n}{2^n} + \lim_{n\to\infty} \left(\frac{1}{2}\right)^n = 3 - \lim_{n\to\infty} \frac{2n}{2^n} = \\[5px]
    = 3 - 2\cdot\lim_{n\to\infty} \frac{n}{2^n} = 3 - 0 = 3
$$

Выше мы использовали тот факт, что $\left(\frac{1}{2}\right)^n\to 0$, так как это убывающая геометрическая прогрессия (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/geometric-progression)>) и $\frac{n}{2^n}\to 0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/exp-ratio)>).