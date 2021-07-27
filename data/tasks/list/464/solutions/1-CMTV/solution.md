Вынесем $\sqrt{x}$ из трех слагаемых в скобках:

$$ x^{\frac{3}{2}}\left( \sqrt{x+2} - 2\sqrt{x+1} + \sqrt{x} \right) = \\[10px] = x^{\frac{3}{2}}\left[ x^{\frac{1}{2}} \left( \sqrt{1+\frac{2}{x}} - 2\sqrt{1 + \frac{1}{x}} + 1 \right) \right] = \\[10px] = x^2 \left[ \sqrt{1+\frac{2}{x}} + 1 - 2\sqrt{1+\frac{1}{x}} \right] = \ldots $$

С помощью формулы разности квадратов частично избавимся от иррациональности:

$$ \ldots = \frac{x^2\left[ \left(\sqrt{1+\dfrac{2}{x}} + 1\right)^2 - 4\left(1+\dfrac{1}{x}\right) \right]}{\sqrt{1+\dfrac{2}{x}} + 1 + 2\sqrt{1+\dfrac{1}{x}}} $$

Сразу найдем предел знаменателя, используя арифметические свойства пределов, элементарные пределы (<b:[П-ссылка](advanced/proto/f-lim/elementary)>), предел степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>) и теорему о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>):

$$ \limf{x}{+\infty} \sqrt{1+\dfrac{2}{x}} + 1 + 2\sqrt{1+\dfrac{1}{x}} =  \sqrt{1+0} + 1 + 2\sqrt{1+0} = 4 $$

Запомним этот результат и продолжим работать с числителем:

$$
x^2\left[ \left(\sqrt{1+\dfrac{2}{x}} + 1\right)^2 - 4\left(1+\dfrac{1}{x}\right) \right] = \\[10px] =
x^2\left[ 1 + \frac{2}{x} + 2\sqrt{1+\frac{2}{x}} + 1 - 4 - \frac{4}{x} \right] = \\[10px] =
x^2\left[ 2\sqrt{1+\frac{2}{x}} - \left(2 + \frac{2}{x} \right) \right] = 2x^2 \left[ \sqrt{1+\frac{2}{x}} - \left(1 + \frac{1}{x}\right) \right]
$$

Вновь избавимся от иррациональности с помощью разности квадратов:

$$
2x^2 \left[ \sqrt{1+\frac{2}{x}} - \left(1 + \frac{1}{x}\right) \right] = \\[10px] =
\frac{2x^2\left[ 1+\dfrac{2}{x} - \left(1+\dfrac{1}{x}\right)^2 \right]}{ \sqrt{1+\dfrac{2}{x}} + \left( 1 + \dfrac{1}{x} \right) } =
\frac{2x^2\left[ 1 + \dfrac{2}{x}  - 1 - \dfrac{2}{x} - \dfrac{1}{x^2} \right]}{\sqrt{1+\dfrac{2}{x}} + \left( 1 + \dfrac{1}{x} \right)} = \\[10px] =
\frac{-2}{\sqrt{1+\dfrac{2}{x}} + \left( 1 + \dfrac{1}{x} \right)}
$$

Найдем предел этого выражения:

$$ \limf{x}{+\infty} \frac{-2}{\sqrt{1+\dfrac{2}{x}} + \left( 1 + \dfrac{1}{x} \right)} = \frac{-2}{\sqrt{1+0} + 1 + 0} = -1 $$

Объединяем все полученные результаты и получаем, что

$$ \limf{x}{+\infty} x^{\frac{3}{2}}\left( \sqrt{x+2} - 2\sqrt{x+1} + \sqrt{x} \right) = -\frac{1}{4} $$