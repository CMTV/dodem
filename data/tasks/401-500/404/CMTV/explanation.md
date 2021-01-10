## Пункт а)

$$ \lim_{x \to \infty} f(x) = b \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( |x| > D \Rightarrow |f(x) - b| < \varepsilon \right) $$

## Пункт б)

$$ \lim_{x\to -\infty} f(x) = b \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ \left( x < -D \Rightarrow |f(x) - b| < \varepsilon \right) $$

## Пункт в)

$$ \lim_{x \to +\infty} f(x) = b \Leftrightarrow \\ \Leftrightarrow \forall \varepsilon > 0 \ \exists D = D(\varepsilon) > 0 \ : \ (x > D \Rightarrow |f(x) - b| < \varepsilon) $$

## Пример

Для всех трех пунктов подойдет обратная пропорциональность:

$$ \lim_{x \to \infty} \frac{1}{x} = 0 $$

||| spoiler Доказательство

Итак, нам дано произвольное $\varepsilon > 0$. Нужно найти такое $D$, чтобы выполнялась импликация:

$$ |x| > D \Rightarrow \left| \frac{1}{x} \right| < \varepsilon $$

Разберемся с неравенством справа:

$$ \left| \frac{1}{x} \right| < \varepsilon \\[5px] \frac{1}{|x|} < \varepsilon \\[5px] |x| > \frac{1}{\varepsilon} $$

Значим, мы можем просто принять за $D$ число $\frac{1}{\varepsilon}$. Тогда, для таких $x$, возвращаясь по цепочке преобразований обратно, получим, что $\left|\frac{1}{x}\right| < \varepsilon$. Это по определению означает, что

$$ \lim_{x \to \infty} \frac{1}{x} = 0 $$

$\blacksquare$

Равенство $0$ предела этой же функции при стремлении $x$ к $-\infty$ и к $+\infty$ следует по прото-задаче <p:[f/limits/infty-relations]>.

|||