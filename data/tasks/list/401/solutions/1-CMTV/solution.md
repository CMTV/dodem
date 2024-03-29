## Доказательство значения предела

Нам нужно доказать, что

$$ \lim_{x \to 2} x^2 = 4 $$

По определению это означает, что нам нужно доказать верность следующего утверждения:

$$ \forall \varepsilon > 0 \ \exists \delta = \delta(\varepsilon) > 0 \ : \ \left( 0 < |x - 2| < \delta \Rightarrow |x^2 - 4| < \varepsilon \right) $$

Если говорить простым языком, нам нужно из данного нам произвольного $\varepsilon$ найти такое $\delta$, чтобы выполнялась импликация в скобках выражения выше.

Делать мы это будем хитрым образом. Мы попробуем эквивалентными преобразованиями неравенство $|x^2-4| < \varepsilon$ как-то привести к виду $|x-2| < \text{?}(\varepsilon)$. Тогда какое-то выражение $\text{?}(\varepsilon)$ и можно будет обозначить за $\delta$. 

Итак, пусть нам дано произвольное $\varepsilon$. Поработаем с левой частью неравенства $|x^2-4| < \varepsilon$, пользуясь свойствами модулей (см. прото-задачу <b:[П-ссылка](advanced/proto/common/abs)>):

$$ |x^2 - 4| = |(x-2)(x+2)| = |x-2||x+2| = \\ = |x-2||(x-2)+4| \leq |x-2|\left( |x-2| + |4| \right) = \\ = |x-2|^2 + 4|x-2| $$

Подведем итог преобразований:

$$ |x^2 - 4| \leq |x-2|^2 + 4|x-2| $$

Попробуем уже правую часть неравенства сделать меньше $\varepsilon$. Тогда и $|x^2-4|$ будет автоматом меньше $\varepsilon$:

$$ |x-2|^2 + 4|x-2| < \varepsilon \\ |x-2|^2 + 4|x-2| + 4 < \varepsilon + 4 \\ (|x-2|+2)^2 < \varepsilon + 4 \\ |x-2| + 2 < \sqrt{\varepsilon + 4} $$

$$ |x-2| < \sqrt{\varepsilon + 4} - 2 $$

Итак, что мы получили? Теперь, если нам дадут какое-то произвольное число $\varepsilon$, мы берем $\delta$ по следующей формуле:

$$ \delta = \sqrt{\varepsilon + 4} - 2 $$

Тогда, для всех $x$ в окрестности точки $2$ с именно таким $\delta$ соответствующие значения функции будут меньше данного $\varepsilon$ ("пробегаясь" обратно по цепочке преобразований).

По определению это означает, что предел функции $x^2$ в точке $2$ равен $4$:

$$ \lim_{x\to 2} x^2 = 4 $$

$\blacksquare$

## Заполнение таблицы

Теперь у нас есть формула для нахождения $\delta$ по данному $\varepsilon$:

$$ \delta(\varepsilon) = \sqrt{\varepsilon + 4} - 2 $$

Последовательно берем значения для $\varepsilon$ из таблицы, и добавляем в нее высчитанные значения $\delta$:

$$ \def\arraystretch{1.5}\begin{array} {|c|c|c|c|c|c|}\hline \varepsilon & 0.1 & 0.01 & 0.001 & 0.0001 & \ldots \\ \hline \delta & 2.4\cdot 10^{-2} & 2.4\cdot 10^{-3} & 2.4\cdot 10^{-4} & 2.4\cdot 10^{-5} & \ldots \\ \hline  \end{array} $$