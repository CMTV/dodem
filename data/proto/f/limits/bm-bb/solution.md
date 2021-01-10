## Доказательство б.м. $\Rightarrow$ б.б.

По условию у нас есть какая-то окрестность точки $a$, в которой $f(x)$ не равна $0$. Исключим саму эту точку $a$ из этой окрестности и обозначим полученную окрестность за $\mathring{O}(a)$.

Также по условию имеем, что

$$ \lim_{x \to a} f(x) = 0 $$

Распишем по определению:

$$ \forall \varepsilon > 0 \ \exists \mathring{U}(a) \ : \ \left( \forall x \in \mathring{U}(a) \Rightarrow |f(x)| < \varepsilon \right) $$

Пусть нам дано какое-то число $E > 0$. Тогда, для числа $\frac{1}{E}$, по выполняющемуся определению выше, найдется окрестность $\mathring{U}(a)$, такая, что

$$ \forall x \in \mathring{U}(a) \Rightarrow |f(x)| < \frac{1}{E} $$

Введем в рассмотрение новую окрестность:

$$ \mathring{Y}(a) = \mathring{U}(a) \cap \mathring{O}(a) $$

Для любого $x$ в $\mathring{Y}(a)$ выполняется два свойства:

$$ \forall x \in \mathring{Y}(a) \Rightarrow \andcases{ |f(x)| < \dfrac{1}{E} \\[10px] f(x) \neq 0 } $$

Раз в $\mathring{Y}(a)$ функция не равна $0$, мы можем преобразовать первое неравенство из фигурной скобки выше:

$$ |f(x)| < \frac{1}{E} \\ \frac{1}{|f(x)|} > E \\ \left|\frac{1}{f(x)}\right| > E $$

Объединяя все шаги вместе получаем, что какую границу $E > 0$ нам не дадут, мы, через данный по условию предел и ненулевую окрестность, всегда найдем окрестность $\mathring{Y}(a)$, такую, что для любого $x$ из этой окрестности значения функции $\frac{1}{f(x)}$ по модулю будут превышать $E$:

$$ \forall E > 0 \ \exists \mathring{Y}(a) = \mathring{U}(a) \cap \mathring{O}(a) \ : \ \left( \forall x \in \mathring{Y} \Rightarrow \left|\frac{1}{f(x)}\right| > E \right) $$

Это по определению означает, что

$$ \lim_{x \to a} \frac{1}{f(x)} = \infty $$

$\blacksquare$

Если же существует проколотая окрестность $\mathring{+}(a)$ точки $a$, в которой $f(x)$ всегда положительная, то в доказательстве выше можно брать $\mathring{Y}(a)$ следующим образом:

$$ \mathring{Y}(a) = \mathring{U}(a)\cap\mathring{O}(a)\cap\mathring{+}(a) $$

Тогда от знака модуля в импликации определения предела можно будет избавиться, что по определению будет означать стремление к $+\infty$ (или к $-\infty$).

## Доказательство б.б. $\Rightarrow$ б.м.

По условию выполняется

$$ \lim_{x \to a} f(x) = \infty $$

По определению это означает, что

$$ \forall E > 0 \ \exists \mathring{U}(a) \ : \ \left( \forall x \in \mathring{U}(a) \Rightarrow \left|f(x)\right| > E \right) $$

Пусть нам дано какое-то число $\varepsilon > 0$. Тогда, для числа $\frac{1}{\varepsilon}$, по выполняющемуся определению выше, найдется окрестность $\mathring{U}(a)$, такая, что

$$ \forall x \in \mathring{U}(a) \Rightarrow \left|f(x)\right| > \frac{1}{\varepsilon}$$

Неравенство в конце можно преобразовать:

$$ |f(x)| > \frac{1}{\varepsilon} \\[5px] \frac{1}{|f(x)|} = \left|\frac{1}{f(x)}\right| < \varepsilon $$

$$ \left| \frac{1}{f(x)} \right| < \varepsilon $$

Деления на ноль у нас не возникет, ведь изначально $|f(x)| > \frac{1}{\varepsilon} > 0$.

Объединяя все шаги вместе получаем, что какое число $\varepsilon > 0$ нам не дадут, мы, через данный по условию предел, всегда получим окрестность $\mathring{U}(a)$, такую, что для любого $x$ из этой окрестности значения функции $\frac{1}{f(x)}$ по модулю будут меньше $\varepsilon$:

$$ \forall \varepsilon > 0 \ \exist \mathring{U}(a) \ : \ \left( \forall x \in \mathring{U}(a) \Rightarrow \left|\frac{1}{f(x)}\right| < \varepsilon \right) $$

Это по определению означает, что

$$ \lim_{x \to a} \frac{1}{f(x)} = 0 $$

$\blacksquare$