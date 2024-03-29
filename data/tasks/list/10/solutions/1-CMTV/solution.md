## Пункт а)

$$ 1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \ldots + \frac{1}{\sqrt{n}} > \sqrt{n} \quad (n \geqslant 2) $$

Докажем по методу математической индукции.

**База индукции**: в качестве базы возьмем $n=2$, так как по условию $n\geq 2$:

$$ 1 + \frac{1}{\sqrt{2}} > \sqrt{2}$$

$$ (\sqrt{2} + 1) \approx 2.4 > 2  $$

**Индукционный переход**:

Пусть неравенство выполняется для некоторого натурального $k$:

$$ 1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \ldots + \frac{1}{\sqrt{k}} > \sqrt{k} $$

Прибавим к обеим частям $\frac{1}{\sqrt{k+1}}$:

$$ 1 + \frac{1}{\sqrt{2}} + \ldots + \frac{1}{\sqrt{k}} + \frac{1}{\sqrt{k+1}} > \sqrt{k} + \frac{1}{\sqrt{k+1}} $$

Теперь надо лишь доказать, что

$$ \sqrt{k} + \frac{1}{\sqrt{k+1}} \overset{\text{?}}{>} \sqrt{k+1} $$

Избавимся от корня в знаменателе дроби слева:

$$ \sqrt{k} + \frac{\sqrt{k+1}}{k+1} \overset{\text{?}}{>} \sqrt{k+1} $$

Возводим в квадрат обе части:

$$ k + \frac{2\sqrt{k(k+1)}}{k+1} + \frac{1}{k+1} \overset{\text{?}}{>} k+1 $$

Вычитаем из обеих частей $k$ и домножаем их на $k+1$:

$$ 2\sqrt{k(k+1)} + 1 \overset{\text{?}}{>} k + 1 $$

Вычитаем из обеих частей $1$ и снова возводим в квадрат:

$$
\begin{aligned}
    4k(k+1) &\overset{\text{?}}{>} k \\ 4(k+1) &\overset{\text{?}}{>} 1 \\ k &> \frac{1}{4} - 1
\end{aligned}
$$

Последнее выполняется, так как по условию $k \geq 2$. Итак, мы доказали неравенство:

$$ \sqrt{k} + \frac{1}{\sqrt{k+1}} > \sqrt{k+1} $$

Теперь применим полученный результат для усиления неравенства для $k+1$:    

$$ 1 + \frac{1}{\sqrt{2}} + \ldots + \frac{1}{\sqrt{k}} + \frac{1}{\sqrt{k+1}} > \sqrt{k} + \frac{1}{\sqrt{k+1}} > \sqrt{k+1} $$

$$ 1 + \frac{1}{\sqrt{2}} + \ldots + \frac{1}{\sqrt{k}} + \frac{1}{\sqrt{k+1}} > \sqrt{k+1} $$

Мы доказали индукционный переход. Это означает, что доказываемое выполняется для всех натуральных $n\geq 2$.

$\blacksquare$

## Пункт б)

$$ n^{n+1} > (n+1)^n \quad (n\geqslant 3) $$

Докажем по методу математической индукции.

**База индукции**: в качестве базы возьмем $n=3$, так как по условию $n\geq 3$:

$$ 3^4 = 81 > 4^3 = 64 $$

**Индукционный переход**:

Предположим, неравенство выполняется для некоторого натурального $k$:

$$ k^{k+1} > (k+1)^k $$

Докажем, что оно выполняется и для $k+1$:

$$ (k+1)^{k+2} > (k+2)^{k+1} $$

Правую часть домножим на дробь $\frac{(k+1)^{k}}{(k+1)^k}$:

$$ (k+2)^{k+1} = \frac{(k+2)^{k+1}(k+1)^k}{(k+1)^k} $$

Воспользуемся предположением индукции, которое мы сделали выше:

$$ (k+2)^{k+1} = \frac{(k+2)^{k+1}(k+1)^k}{(k+1)^k} < \frac{(k+2)^{k+1}k^{k+1}}{(k+1)^k} $$

Получили цепное неравенство:

$$ (k+1)^{k+2} \overset{\text{?}}{>} \frac{(k+2)^{k+1}k^{k+1}}{(k+1)^k} > (k+2)^{k+1} $$

Другими словами, для доказательства индукционного перехода надо показать, что полученная нами дробь действительно меньше $(k+1)^{k+2}$.

Докажем это постепенным упрощением обеих частей. Сначала домножим обе части на $(k+1)^k$:

$$ (k+1)^{2k+2} \overset{\text{?}}{>} \left( (k+2)k \right)^{k+1} $$

В левой части вынесем двойку из показателя:

$$ \left( (k+1)^2 \right)^{k+1} \overset{\text{?}}{>} \left( (k+2)k \right)^{k+1} $$

Из обеих частей возьмем корень $k+1$ степени. Корень можно взять, так как оба выражения положительные:

$$
\begin{aligned}
    (k+1)^2 &\overset{\text{?}}{>} (k+2)k \\
    k^2 + 2k + 1 &\overset{\text{?}}{>} k^2 + 2k \\
    1 &> 0
\end{aligned}
$$

Итак, мы доказали цепное неравенство:

$$ (k+1)^{k+2} > \frac{(k+2)^{k+1}k^{k+1}}{(k+1)^k} > (k+2)^{k+1} $$

$$ (k+1)^{k+2} > (k+2)^{k+1} $$

Индукционный переход доказан. Это означает, что доказываемое неравенство выполняется для всех натуральных $n\geq 3$.

$\blacksquare$

## Пункт в)

$$ \left| \sin{\left(\sum\limits_{k=1}^n x_k\right)} \right| \leqslant \sum\limits_{k=1}^n \sin{x_k} \quad (0\leqslant x_k \leqslant \pi; \ k = 1, 2, \ldots n) $$

Докажем по методу математической индукции. В этом пункте мы будем пользоваться несколькими свойствами модуля (см. прото-задачу <b:[П-ссылка](advanced/proto/common/abs)>).

**База индукции**: при $n=1$ получаем

$$ \sin{x_1} = \sin{x_1} $$

Знак модуля мы сняли, так как по условию $0\leq x_k \leq \pi$, то есть отрицательным синус получиться не может.

**Индукционный переход**:

Предположим, неравенство выполняется для некоторого натурального $m$:

$$ \left| \sin{\left(\sum\limits_{k=1}^m x_k\right)} \right| \leq \sum\limits_{k=1}^m \sin{x_k}  $$

Докажем, что оно выполняется и для $m+1$:

$$ \left| \sin{\left(\sum\limits_{k=1}^{m+1} x_k\right)} \right| \leq \sum\limits_{k=1}^{m+1} \sin{x_k}  $$

Будем работать с левой частью:

$$ \left| \sin{\left(\sum\limits_{k=1}^{m+1} x_k\right)} \right| = \left| \sin{\left(x_{m+1} + \sum\limits_{k=1}^{m} x_k\right)} \right| $$

Воспольуемся формулой синуса суммы двух углов:

$$
\begin{gathered}
    \left| \sin{\left(x_{m+1} + \sum\limits_{k=1}^{m} x_k\right)} \right| = \\ = \left| \sin{(x_{m+1})}\cos{\left( \sum\limits_{k=1}^m x_k \right)} + \sin{\left( \sum\limits_{k=1}^m x_k \right)}\cos{(x_{m+1})} \right|
\end{gathered}
$$

Воспользуемся свойством модуля $|x+y|\leq |x| + |y|$:

$$
\begin{gathered}
\left| \sin{(x_{m+1})}\cos{\left( \sum\limits_{k=1}^m x_k \right)} + \sin{\left( \sum\limits_{k=1}^m x_k \right)}\cos{(x_{m+1})} \right| \leq \\ \leq \left| \sin{(x_{m+1})}\cos{\left( \sum\limits_{k=1}^m x_k \right)}\right| + \left| \sin{\left( \sum\limits_{k=1}^m x_k \right)}\cos{(x_{m+1})} \right|
\end{gathered}
$$

Применим еще одно свойство модуля $|x\cdot y|=|x|\cdot|y|$:

$$
\begin{gathered}
\left| \sin{(x_{m+1})}\right| \cdot \left|\cos{\left( \sum\limits_{k=1}^m x_k \right)}\right| + \left| \sin{\left( \sum\limits_{k=1}^m x_k \right)}\right| \cdot \left|\cos{(x_{m+1})} \right|
\end{gathered}
$$

Теперь надо избавиться от двух множителей с косинусами:

$$ \left|\cos{\left( \sum\limits_{k=1}^m x_k \right)}\right| \qquad \left|\cos{(x_{m+1})} \right| $$

Так как мы берем их модуль, то их значение всегда между $0$ и $1$:

$$ 0\leq\left|\cos{\left( \sum\limits_{k=1}^m x_k \right)}\right|\leq 1 \qquad 0\leq \left|\cos{(x_{m+1})} \right|\leq 1 $$

Поэтому, для получения наибольшего значения можно просто вместо них взять $1$:

$$
\begin{gathered}
\left| \sin{(x_{m+1})}\right| \cdot \left|\cos{\left( \sum\limits_{k=1}^m x_k \right)}\right| + \left| \sin{\left( \sum\limits_{k=1}^m x_k \right)}\right| \cdot \left|\cos{(x_{m+1})} \right| \leq \\ \leq \left| \sin{(x_{m+1})}\right| \cdot 1 + \left| \sin{\left( \sum\limits_{k=1}^m x_k \right)}\right| \cdot 1
\end{gathered}
$$

Модуль у слагаемого $|\sin{(x_{m+1})}|$ можно убрать, так как по условию $0\leq x_{m+1} \leq \pi$. Ко второму слагаемому можно применить неравенство по предположению индукции:

$$
\begin{gathered}
|\sin{(x_{m+1})}| + \left| \sin{\left( \sum\limits_{k=1}^m x_k \right)}\right| \leq \sin{(x_{m+1})} + \sum\limits_{k=1}^m\sin{( x_k)}
\end{gathered}
$$

Но

$$ \sin{(x_{m+1})} + \sum\limits_{k=1}^m\sin{( x_k)} = \sum\limits_{k=1}^{m+1}\sin{(x_k)} $$

Поэтому

$$ |\sin{(x_{m+1})}| + \left| \sin{\left( \sum\limits_{k=1}^m x_k \right)}\right| \leq \sum\limits_{k=1}^{m+1}\sin{(x_k)} $$

Итак, все это время мы преобразовывали левую часть неравенства, поэтому

$$ \left| \sin{\left(\sum\limits_{k=1}^{m+1} x_k\right)} \right| \leq \ldots \leq \sum\limits_{k=1}^{m+1} \sin{x_k}  $$

$$ \left| \sin{\left(\sum\limits_{k=1}^{m+1} x_k\right)} \right| \leq \sum\limits_{k=1}^{m+1} \sin{x_k}  $$

Индукционный переход доказан. Это означает, что доказываемое неравенство выполняется для всех натуральных $n$.

$\blacksquare$

## Пункт г)

$$ (2n)! < 2^{2n}(n!)^2 $$

Докажем по методу математической индукции.

**База индукции**: при $n=1$ получаем

$$ 2! = 2 < 4 $$

**Индукционный переход**:

Предположим, неравенство выполняется для некоторого натурального $k$:

$$ (2k)! < 2^{2k}(k!)^2 $$

Докажем, что оно выполняется и для $k+1$. Домножим обе части на положительное $ (2k+2)^2 $:

$$ (2k)!(2k+2)^2 < 2^{2k}(k!)^2(2k+2)^2 $$

Правую часть неравенства, с учетом новой скобки, можно записать так:

$$ 2^{2k}(k!)^2(2k+2)^2 = 2^{2k+2}\left( (k+1)! \right)^2 $$

Подставим результат обратно в неравенство:

$$ (2k)!(2k+2)^2 < 2^{2k+2}\left( (k+1)! \right)^2 $$

Докажем, что

$$
\begin{aligned}
    (2k+2)^2 &\overset{\text{?}}{>} (2k+1)(2k+2) \\
    4k^2 + 8k + 4 &\overset{\text{?}}{>} 4k^2 + 6k + 2 \\
    2k+2 &> 0
\end{aligned}
$$

Мы доказали, что

$$ (2k+2)^2 > (2k+1)(2k+2) $$

Теперь применим полученный результат для усиления неравенства для $k+1$:    

$$ (2k)!(2k+1)(2k+2) < (2k)!(2k+2)^2 < 2^{2k+2}\left( (k+1)! \right)^2 $$

Но

$$ (2k)!(2k+1)(2k+2) = (2k+2)! $$

Поэтому в итоге получаем

$$ (2k+2)! < (2k)!(2k+2)^2 < 2^{2k+2}\left( (k+1)! \right)^2 $$

$$ (2k+2)! < 2^{2k+2}\left( (k+1)! \right)^2 $$

Индукционный переход доказан. Это означает, что доказываемое неравенство выполняется для всех натуральных $n$.

$\blacksquare$