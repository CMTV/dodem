## Пункт а)

$$ \lim_{x \to a} f(x) = \infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ \left( 0 < |x-a| < \delta \Rightarrow |f(x)| > E \right) $$

Пример:

$$ \lim_{x\to 0} \frac{1}{x} = \infty $$

||| spoiler Доказательство

Итак, нам дана произвольная граница $E > 0$. Нужно найти такое $\delta$, чтобы выполнялась импликация:

$$ 0 < |x| < \delta \Rightarrow \left|\frac{1}{x}\right| > E $$

Рассмотрим последнее неравенство:

$$ \left|\frac{1}{x}\right| > E \\ \frac{1}{|x|} > E \\ |x| > \frac{1}{E} $$

Значим, мы можем просто принять за $\delta$ число $\frac{1}{E}$. Тогда, для таких $x$, возвращаясь по цепочке преобразований обратно, получим, что $\left|\frac{1}{x}\right| > E$. Это по определению означает, что

$$ \lim_{x\to 0} \frac{1}{x} = \infty $$

$\blacksquare$

|||

## Пункт б)

$$ \lim_{x \to a} f(x) = -\infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ \left( 0 < |x-a| < \delta \Rightarrow f(x) < -E \right) $$

Пример:

$$ \lim_{x \to 0} -\frac{1}{x^2} = -\infty $$

||| spoiler Доказательство

$$ -\frac{1}{x^2} < -E \\ \frac{1}{x^2} > E \\ x^2 < E \\ |x| < \sqrt{E} $$

Тогда

$$ \delta = \sqrt{E} $$

$\blacksquare$

|||

## Пункт в)

$$ \lim_{x \to a} f(x) = +\infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ \left( 0 < |x-a| < \delta \Rightarrow f(x) > E \right) $$

Пример:

$$ \lim_{x \to 0} \frac{1}{x^2} = +\infty $$

Доказывается аналогично пункту б).

## Пункт г)

$$ \lim\limits_{x \to a-0} f(x) = \infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ ( a-\delta < x < a \Rightarrow |f(x)| > E ) $$

Пример:

$$ \lim_{x \to 0-0} \frac{1}{x} = -\infty = \infty $$

То, что предел равен $-\infty$ доказывается по приведенному выше определению левого предела функции в точке. То, что $-\infty = \infty$ следует из прото-задачи <b:[П-ссылка](advanced/proto/f-lim/infty-relations)>.

## Пункт д)

$$ \lim\limits_{x \to a-0} f(x) = -\infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ ( a-\delta < x < a \Rightarrow f(x) < -E ) $$

Подойдет пример для пункта г).

## Пункт е)

$$ \lim\limits_{x \to a-0} f(x) = +\infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ ( a-\delta < x < a \Rightarrow f(x) > E ) $$

Пример:

$$ \lim_{x \to 0-0} \frac{1}{x^2} = +\infty $$

То, что предел равен $+\infty$ доказывается по приведенному выше определению левого предела функции в точке. 

## Пункт ж)

$$ \lim\limits_{x \to a+0} f(x) = \infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ ( a < x < a+\delta \Rightarrow |f(x)| > E ) $$

Пример:

$$ \lim_{x \to 0+0} \frac{1}{x} = +\infty = \infty $$

То, что предел равен $+\infty$ доказывается по приведенному выше определению правого предела функции в точке. То, что $+\infty = \infty$ следует из прото-задачи <b:[П-ссылка](advanced/proto/f-lim/infty-relations)>.

## Пункт з)

$$ \lim\limits_{x \to a+0} f(x) = -\infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ ( a < x < a+\delta \Rightarrow f(x) < -E ) $$

Пример:

$$ \lim_{x \to 0+0} -\frac{1}{x^2} = -\infty $$

Доказывается по приведенному выше определению правого предела функции в точке.

## Пункт и)

$$ \lim\limits_{x \to a+0} f(x) = +\infty \Leftrightarrow \\ \Leftrightarrow \forall E > 0 \ \exists \delta = \delta(E) > 0 \ : \ ( a < x < a+\delta \Rightarrow f(x) > E ) $$

Подойдет пример для пункта ж).