## Пункт а)

$$ \lim_{x \to a} f(x) = b-0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( 0 < |x-a| < \delta \Rightarrow b-\varepsilon < f(x) < b \right) $$

Пример:

$$ \lim_{x \to 0} -|x| = 0-0 $$

||| spoiler Доказательство

Опуская длинное определение, перейдем прямо к сути. Должна выполняться импликация:

$$ 0 < |x| < \delta \Rightarrow -\varepsilon < -|x| < 0 $$

Рассмотрим неравенство в конце:

$$ -\varepsilon < -|x| < 0 $$

Умножим все части неравенства на $-1$:

$$ 0 < |x| < \varepsilon $$

Видим, что за $\delta$ можно просто взять $\varepsilon$!

$$ \delta = \varepsilon $$

Тогда, возвращаясь по цепочке преобразований обратно, получим, что для любого $x$, который удовлетворяет неравенству $0 < |x| < \delta = \varepsilon$, следует, что выполняется неравенство $-\varepsilon < -|x| < 0$. Это по определению означает, что

$$ \lim_{x \to 0} -|x| = 0 - 0 $$

$\blacksquare$

|||

Все остальные примеры ниже доказываются точно таким же элементарным образом.

## Пункт б)

$$ \lim_{x \to a-0} f(x) = b-0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( a-\delta < x < a \Rightarrow b-\varepsilon < f(x) < b \right) $$

Пример:

$$ \lim_{x \to 0-0} -|x| = 0-0 $$

## Пункт в)

$$ \lim_{x \to a+0} f(x) = b-0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( a < x < a+\varepsilon \Rightarrow b-\varepsilon < f(x) < b \right) $$

Пример:

$$ \lim_{x \to 0+0} -|x| = 0-0 $$

## Пункт г)

$$ \lim_{x \to a} f(x) = b+0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta=\delta(\varepsilon) \ : \ \left( 0 < |x-a| < \delta \Rightarrow b < f(x) < b+\varepsilon \right) $$

Пример:

$$ \lim_{x \to 0} |x| = 0+0 $$

## Пункт д)

$$ \lim_{x \to a-0} f(x) = b+0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta=\delta(\varepsilon) > 0 \ : \ \left( a-\delta < x < a \Rightarrow b < f(x) < b + \varepsilon \right) $$

Пример:

$$ \lim_{x \to 0-0} |x| = 0+0 $$

## Пункт е)

$$ \lim_{x \to a+0} f(x) = b+0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( a < x < a + \delta \Rightarrow b < f(x) < b + \varepsilon \right) $$

Пример:

$$ \lim_{x \to 0+0} |x| = 0+0 $$

## Пункт ж)

$$ \lim_{x \to \infty} f(x) = b-0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( |x| > D \Rightarrow b-\varepsilon < f(x) < b \right) $$

Пример:

$$ \lim_{x\to\infty} -\frac{1}{x^2} = 0-0 $$

## Пункт з)

$$ \lim_{x \to -\infty} f(x) = b-0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( x < -D \Rightarrow b-\varepsilon < f(x) < b \right) $$

Пример:

$$ \lim_{x\to-\infty} -\frac{1}{x^2} = 0-0 $$

## Пункт и)

$$ \lim_{x \to +\infty} f(x) = b-0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( x > D \Rightarrow b-\varepsilon < f(x) < b \right) $$

Пример:

$$ \lim_{x\to+\infty} -\frac{1}{x^2} = 0-0 $$

## Пункт к)

$$ \lim_{x \to \infty} f(x) = b+0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( |x| > D \Rightarrow b < f(x) < b+\varepsilon \right) $$

Пример:

$$ \lim_{x\to\infty} \frac{1}{x^2} = 0+0 $$

## Пункт л)

$$ \lim_{x \to -\infty} f(x) = b+0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( x < -D \Rightarrow b < f(x) < b+\varepsilon \right) $$

Пример:

$$ \lim_{x\to-\infty} \frac{1}{x^2} = 0+0 $$

## Пункт м)

$$ \lim_{x \to +\infty} f(x) = b+0 \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( x > D \Rightarrow b < f(x) < b+\varepsilon \right) $$

Пример:

$$ \lim_{x\to+\infty} \frac{1}{x^2} = 0+0 $$