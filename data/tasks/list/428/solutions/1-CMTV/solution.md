Если $m=n$, все выражение в круглых скобках становится равным $0$, а значит и предел его тоже равен $0$.

---

Пока будем исходить из того, что $m>n$. Приведем знаменатели в более удобный вид, вынеся $-1$ за скобки:

$$ \frac{m}{1-x^m} - \frac{n}{1-x^n} = \frac{n}{x^n-1} - \frac{m}{x^m-1} = \ldots $$

В знаменателе пользуемся равенством из прото-задачи <b:[П-ссылка](advanced/proto/common/power-diff)>:

$$ \ldots = \frac{n}{(x-1)(x^{n-1}+\ldots+1)} - \frac{m}{(x-1)(x^{m-1}+\ldots+1)} = \ldots $$

Приведем дроби к общему знаменателю:

$$ \ldots = \frac{n(x^{m-1}+\ldots+1) - m(x^{n-1}+\ldots+1)}{(x-1)(x^{n-1}+\ldots+1)(x^{m-1}+\ldots+1)} $$

Итак, нам нужно избавиться от $(x-1)$ в знаменателе. Значит, нужно "вытащить" такую же скобку из числителя.

---

Дальше мы работаем только с числителем!

$$ n(x^{m-1}+\ldots+1) - m(x^{n-1}+\ldots+1) = \ldots $$

Введем новое обозначение: $m = n+p$. Тогда $p=m-n$.

$$ \ldots = n(x^{m-1} + \ldots + 1) - (n+p)(x^{n-1}+\ldots+1) = \\[5px] = n(x^{m-1}+\ldots+x^n) + n(x^{n-1}+\ldots+1) - \\[5px] - n(x^{n-1}+\ldots+1) - p(x^{n-1}+\ldots+1) = \\[5px] = n(x^{m-1}+\ldots+x^n) - p(x^{n-1}+\ldots+1) = \ldots $$

Обратите внимание, что слева имеем сумму $n$ выражений вида

$$ x^{m-1}+x^{m-2}+\ldots+x+1 $$

причем, в каждом выражении имеется $p$ слагаемых.

С другой стороны, справа имеем сумму $p$ выражений вида

$$ x^{n-1}+x^{n-2}+\ldots+x+1 $$

причем, в каждом выражении $n$ слагаемых.

Тогда разность

$$ n(x^{m-1}+\ldots+x^n) - p(x^{n-1}+\ldots+1) $$

можно представить в виде таблицы из $n$ строк с $p$ столбцами, в которой все ячейки складываются друг с другом:

$$
\def\arraystretch{1.5}
\begin{array}{|c:c:c:c:c|}
	\hline
	x^{m-1}-x^{n-1} & x^{m-2} - x^{n-1} & \cdots & x^{n+1}-x^{n-1} & x^n - x^{n-1}
    \\ \hdashline
    x^{m-1}-x^{n-2} & x^{m-2} - x^{n-2} & \cdots & x^{n+1}-x^{n-2} & x^n - x^{n-2}
    \\ \hdashline
    \cdots & \cdots & \cdots & \cdots & \cdots
    \\ \hdashline
    x^{m-1}-x^{\phantom{m-2}} & x^{m-2}-x^{\phantom{m-2}} & \cdots & x^{n+1} - x^{\phantom{m-2}} & x^n - x^{\phantom{m-2}}
    \\ \hdashline
    x^{m-1}-1^{\phantom{m-2}} & x^{m-2}-1^{\phantom{m-2}} & \cdots & x^{n+1} - 1^{\phantom{m-2}} & x^n - 1^{\phantom{m-2}}
    \\ \hline
\end{array}
$$

Из всех ячеек, кроме ячеек последней строки, вынесем $x$ в такой степени, чтобы справа оставалась единица. Так как по условию $x\to 1$, то все эти вынесенные $x$-ы обратятся в $1$ и не повлияют на значение предела.

$$
\def\arraystretch{1.5}
\begin{array}{|c:c:c:c:c|}
	\hline
	x^{p}-1 & x^{p-1} - 1 & \cdots & x^{2}-1 & x - 1
    \\ \hdashline
    x^{p+1}-1 & x^{p} - 1 & \cdots & x^{3}-1 & x^{2} - 1
    \\ \hdashline
    \cdots & \cdots & \cdots & \cdots & \cdots
    \\ \hdashline
    x^{m-2}-1 & x^{m-3} - 1 & \cdots & x^{n} - 1 & x^{n-1} - 1
    \\ \hdashline
    x^{m-1}-1 & x^{m-2}-1 & \cdots & x^{n+1} - 1 & x^n - 1
    \\ \hline
\end{array}
$$

Видим, что из каждой ячейки таблицы можно вынести скобку $(x-1)$, а так как эта таблица и является числителем, то из всего числителя можно вынести $(x-1)$, которая сократится c $(x-1)$ в знаменателе. Основная задача достигнута — мы избавились от деления на $0$ в нашем пределе.

После вынесения $(x-1)$ за скобки в каждой ячейке остается сумма вида

$$ x^{i} - 1 = \cancel{(x-1)} (x^{i-1} + x^{i-2} + \ldots + x + 1) $$

При стремлении $x$ к $1$ получаем сумму $i$ единиц:

$$ 1 + 1 + \ldots = i $$

Запишем полученные значения суммы в каждую ячейку таблицы:

$$
\def\arraystretch{1.5}
\begin{array}{|c:c:c:c:c|}
	\hline
	p & p-1 & \cdots & 2 & 1
    \\ \hdashline
    p+1 & p & \cdots & 3 & 2
    \\ \hdashline
    \cdots & \cdots & \cdots & \cdots & \cdots
    \\ \hdashline
    m-2 & m-3 & \cdots & n & n-1
    \\ \hdashline
    m-1 & m-2 & \cdots & n+1 & n
    \\ \hline
\end{array}
$$

Замечаем, что в крайнем правом столбце имеем сумму $n$ натуральных чисел, начинающихся с $1$:

$$ 1 + 2 + \ldots + n $$

В столбце левее имеем сумму $n$ натуральных чисел, начинающихся с $2$:

$$ 2 + 3 + \ldots + (n+1) $$

Короче, каждый столбец представляет собой сумму $n$ членов арифметической прогрессии с разностью в $1$. Отличаются только первые члены этих прогрессий. Общая формула для суммы $n$ членов имеет вид:

$$ \frac{a_1 + a_n}{2}n $$

Выпишем полученные суммы для каждого столбца, начиная с самого правого:

$$ \frac{n(n+1)}{2} + \frac{n(n+3)}{2} + \ldots + \frac{n(p+m-3)}{2} + \frac{n(p+m-1)}{2} $$

Вынесем за скобки $\frac{n}{2}$, а $m$ заменим на $n+p$:

$$ \frac{n}{2}\left[(n+1) + (n+3) + \ldots + (n+2p-3) + (n+2p-1)\right] $$

Всего в квадратных скобках имеем $p$ слагаемых (так как у нас $p$ столбцов в таблице). Поэтому эту сумму можно представить в другом виде:

$$ \frac{n}{2}\left[ pn + (1 + 3 + \ldots + 2p-3 + 2p-1) \right] $$

В круглых скобках замечаем сумму $p$ нечетных чисел, начиная с $1$. Это арифметическая прогрессия с разностью $2$. Воспользуемся приведенной выше формулой сумму членов арифметической прогрессии:

$$ 1 + 3 + \ldots + 2p-3 + 2p-1 = \frac{(1 + 2p-1)p}{2} = p^2 $$

Итак, наш многострадальный числитель имеет следующий вид:

$$ \frac{n}{2}(pn + p^2) = \frac{np(n+p)}{2} = \frac{mnp}{2} $$

---

Напомню, что до начала преобразований с числителем наша дробь имела следующий вид:

$$ \frac{n(x^{m-1}+\ldots+1) - m(x^{n-1}+\ldots+1)}{(x-1)(x^{n-1}+\ldots+1)(x^{m-1}+\ldots+1)} $$

Нам удалось вынести $(x-1)$ из числителя и сократить ее с $(x-1)$ в знаменателе. Деления на ноль уже не возникнет, поэтому можно сразу перейти к нахождению предела.

$$ \limn \frac{n(x^{m-1}+\ldots+1) - m(x^{n-1}+\ldots+1)}{(x-1)(x^{n-1}+\ldots+1)(x^{m-1}+\ldots+1)} = \\[10px] = \frac{\frac{mnp}{2}}{mn} = \frac{p}{2} = \frac{m-n}{2} $$

---

Все расчеты мы проводили исходя из того, что $m>n$. Если это не так, то мы можем вынести $-1$ из выражениях в скобках в условии и вновь получить вариант, когда из большего вычитается меньшее. В результате придем к формуле

$$ -\frac{n-m}{2} = \frac{m-n}{2} $$

Видим, что полученная итоговая формула не зависит от того, $m>n$ или $n>m$.