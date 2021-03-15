Приведем выражение к виду, удобному для применения первого замечательного предела.

## Числитель

Начнем с числителя:

$$ \sqrt{1-\cos x^2} = \sqrt{\frac{1-\cos x^2}{\dfrac{(x^2)^2}{2}}\cdot\frac{(x^2)^2}{2}} = \sqrt{\frac{1-\cos x^2}{\dfrac{(x^2)^2}{2}}}\cdot\frac{|x^2|}{\sqrt{2}} = \ldots $$

От знака модуля можно избавиться, так как под ним стоит квадрат числа, который всегда дает положительный результат:

$$ \ldots = \sqrt{\frac{1-\cos x^2}{\dfrac{(x^2)^2}{2}}}\frac{x^2}{\sqrt{2}} $$

## Знаменатель

Теперь поработаем с знаменателем:

$$ 1 - \cos x = \frac{1-\cos x}{\dfrac{x^2}{2}}\cdot\frac{x^2}{2} $$

## Значение предела

Найдем теперь значение предела, используя теорему о пределе сложной функции (<p:[f/limits/composition]>), первый замечательный предел (<p:[f/limits/first-wonderful]>), а также непрерывность степенной функции (<p:[f/limits/f-power]>):

$$ \limf{x}{0} \frac{ \sqrt{\dfrac{1-\cos x^2}{\dfrac{(x^2)^2}{2}}}\dfrac{x^2}{\sqrt{2}} }{ \dfrac{1-\cos x}{\dfrac{x^2}{2}}\cdot\dfrac{x^2}{2} } = \scope{y = x^2 \\[5px] y \to 0} = \frac{2}{\sqrt{2}} \frac{ \sqrt{\limf{y}{0} \dfrac{1-\cos y}{\dfrac{y^2}{2}}} }{ \limf{x}{0} \dfrac{1-\cos x}{\dfrac{x^2}{2}} } = \\[10px] = \sqrt{2}\cdot\frac{1}{1} = \sqrt{2} $$