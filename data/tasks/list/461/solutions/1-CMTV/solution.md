С помощью формулы разности кубов избавимся от иррациональности:

$$ \sqrt[3]{x^3 + x^2 + 1} - \sqrt[3]{x^3-x^2+1} = \\[5px] = {\small \frac{2x^2}{\sqrt[3]{(x^3+x^2+1)^2} + \sqrt[3]{(x^3+x^2+1)(x^3-x^2+1)} + \sqrt[3]{(x^3-x^2+1)^2}} } = \ldots $$

Вынесем из знаменателя $x^2$:

$$ {\small \frac{2}{\sqrt[3]{\left(1 + \dfrac{1}{x} + \dfrac{1}{x^3}\right)^2} + \sqrt[3]{\left(1+\dfrac{1}{x} + \dfrac{1}{x^3}\right)\left(1-\dfrac{1}{x} + \dfrac{1}{x^3}\right)} + \sqrt[3]{\left( 1 - \dfrac{1}{x} + \dfrac{1}{x^3} \right)^2}} } $$

При $x\to\infty$ все дроби с $x$ обращаются в ноль (<b:[П-ссылка](advanced/proto/f-lim/elementary)>), поэтому предел всего выражения равен:

$$ \frac{2}{\sqrt[3]{(1+0+0)^2} + \sqrt[3]{(1+0+0)(1-0+0)} + \sqrt{(1-0+0)^2}} $$

Выше мы воспользовались арифметическими свойствами пределов, а также пределом степенной (<b:[П-ссылка](advanced/proto/f-lim/f-power)>) и сложной (<b:[П-ссылка](advanced/proto/f-lim/composition)>) функций.

Итак:

$$ \limf{x}{\infty} \left( \sqrt[3]{x^3 + x^2 + 1} - \sqrt[3]{x^3-x^2+1} \right) = \frac{2}{3} $$