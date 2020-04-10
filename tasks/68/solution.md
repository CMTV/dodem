Справедливо следующее неравенство:
$$ \frac{1}{2} \cdot \frac{3}{4} \ldots \frac{2n-1}{2n} < \frac{1}{\sqrt{2n+1}} $$

Его доказательство по методу математической индукции и приводится в пункте б) [задачи 9](/tasks/9).

---

"Зажмем" нашу последовательность:
$$ 0 < \frac{1}{2} \cdot \frac{3}{4} \ldots \frac{2n-1}{2n} < \frac{1}{\sqrt{2n+1}} $$

Докажем следующее неравенство:
$$ \frac{1}{\sqrt{2n+1}} \overset{\text{?}}{<} \frac{1}{\sqrt{2n}} $$

"Переворачиваем" дроби и возводим в квадрат обе части (перевернуть можно, так как тут все больше 0):
\begin{align*}
    2n+1 &> 2n
    \\
    1 &> 0
\end{align*}

Итак, мы показали, что
$$ \frac{1}{\sqrt{2n+1}} < \frac{1}{\sqrt{2n}} $$

Используем это для усиления цепного неравенства выше:
$$ 0 < \frac{1}{2} \cdot \frac{3}{4} \ldots \frac{2n-1}{2n} < \frac{1}{\sqrt{2n+1}} < \frac{1}{\sqrt{2n}} $$

$$ 0 < \frac{1}{2} \cdot \frac{3}{4} \ldots \frac{2n-1}{2n} < \frac{1}{\sqrt{2n}} $$

Найдем предел дроби в правой части цепного неравенства:
$$ \limn \frac{1}{\sqrt{2n}} = \frac{1}{\sqrt{2}}\cdot\limn \frac{1}{\sqrt{n}} = \frac{1}{\sqrt{2}}\cdot 0 = 0 $$

Мы использовали то, что $\frac{1}{\sqrt{n}}\to 0$, так как это частный случай последовательности $\frac{1}{n^a}, \ a > 0$, которая стремится к $0$ (см. прото-задачу "[Элементарные пределы последовательностей](/proto/sequences/limits/elementary)").

Итак, вернемся с нашей "зажатой" последовательности:
$$ 0 < \frac{1}{2} \cdot \frac{3}{4} \ldots \frac{2n-1}{2n} < \frac{1}{\sqrt{2n}} $$

Слева "последовательность" $0$ стремится к $0$. Последовательность справа, как мы только что показали, тоже стремится к 0. Значит, по теореме о двух милиционерах, "зажатая" между ними последовательность тоже стремится к $0$:
$$ \limn \left( \frac{1}{2} \cdot \frac{3}{4} \ldots \frac{2n-1}{2n} \right) = 0 $$

$\blacksquare$