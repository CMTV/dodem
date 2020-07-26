Докажем, что

$$ n! > \left(\frac{n}{2}\right)^{\frac{n}{2}} $$

Если $n$ четное, то

$$ n! = 1\cdot 2\ldots \left(\frac{n}{2}\right)\left(\frac{n}{2} + 1\right)\ldots \cdot n $$

Уберем все множители до $\frac{n}{2}$:

$$ n! = 1\cdot 2\ldots \left(\frac{n}{2}\right)\left(\frac{n}{2} + 1\right)\ldots \cdot n > \left(\frac{n}{2}\right)\left(\frac{n}{2} + 1\right)\ldots \cdot n $$

$$ n! > \overbrace{\left(\frac{n}{2}\right)\left(\frac{n}{2} + 1\right)\ldots \cdot n}^{\frac{n}{2} \text{ множителей}} $$

Все множители после $\frac{n}{2}$ заменим на $\frac{n}{2}$:

$$ n! > \left(\frac{n}{2}\right)\left(\frac{n}{2} + 1\right)\ldots \cdot n > \left(\frac{n}{2}\right)\left(\frac{n}{2}\right)\ldots = \left(\frac{n}{2}\right)^{\frac{n}{2}} $$

$$ n! > \left(\frac{n}{2}\right)^{\frac{n}{2}} $$

Если $n$ нечетное, то

$$ n! = 1\cdot 2\ldots \left(\frac{n-1}{2}\right)\left(\frac{n+1}{2}\right)\ldots \cdot n $$

Вновь убираем все множители до $\frac{n+1}{2}$:

$$ n! > \overbrace{\left(\frac{n+1}{2}\right)\left(\frac{n+1}{2} + 1\right)\ldots \cdot n}^{\frac{n+1}{2} \text{ множителей}} $$

Все множители после $\frac{n+1}{2}$ заменим на $\frac{n}{2}$:

$$ n! > \left(\frac{n+1}{2}\right)\left(\frac{n+1}{2} + 1\right)\ldots \cdot n > \left(\frac{n}{2}\right)\left(\frac{n}{2}\right)\ldots > \left(\frac{n}{2}\right)^{\frac{n+1}{2}} $$

$$ n! > \left(\frac{n}{2}\right)^{\frac{n+1}{2}} > \left(\frac{n}{2}\right)^{\frac{n}{2}} $$

Итак, доказали что для любых $n$ выполняется неравенство:

$$ n! > \left(\frac{n}{2}\right)^{\frac{n}{2}} $$

Возьмем из обеих частей корень $n$-ой степени:

$$ \sqrt[n]{n!} > \left(\frac{n}{2}\right)^{\frac{1}{2}} $$

"Перевернем":

$$ \frac{1}{\sqrt[n]{n!}} < \left(\frac{2}{n}\right)^{\frac{1}{2}} $$

"Зажмем" слева $0$:

$$ 0 < \frac{1}{\sqrt[n]{n!}} < \left( \frac{2}{n} \right)^{\frac{1}{2}} $$

Найдем предел последовательности справа:

$$ \limn \left( \frac{2}{n} \right)^{\frac{1}{2}} = \sqrt{2} \cdot \limn \frac{1}{n^{\frac{1}{2}}} = \sqrt{2} \cdot 0 = 0 $$

Мы использовали то, что $\frac{1}{n^{\frac{1}{2}}}\to 0$ (см. прото-задачу <p:[sequences/limits/elementary]>).

Вернемся к зажатой последовательности:

$$ 0 < \frac{1}{\sqrt[n]{n!}} < \left( \frac{2}{n} \right)^{\frac{1}{2}} $$

"Последовательность" нулей слева стремится к $0$. Последовательность справа, как мы только что показали, тоже стремится к $0$. Значит, по теореме о двух милиционерах, "зажатая" между ними последовательность
$\frac{1}{\sqrt[n]{n}}$ тоже стремится к $0$.

$$ \limn \frac{1}{\sqrt[n]{n}} = 0 $$

$\blacksquare$