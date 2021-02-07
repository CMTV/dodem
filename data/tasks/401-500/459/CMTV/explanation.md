Вынесем $x$ из скобок и избавимся от иррациональности с помощью формулы разности квадратов:

$$ x^2 \left( \sqrt{1+\frac{2}{x}} + 1 - 2\sqrt{1+\frac{1}{x}} \right)\cdot\frac{\sqrt{1+\frac{2}{x}} + 1 + 2\sqrt{1+\frac{1}{x}}}{\sqrt{1+\frac{2}{x}} + 1 + 2\sqrt{1+\frac{1}{x}}} = \\[10px] = \frac{x^2\left[ \left( \sqrt{1+\dfrac{2}{x}} + 1 \right)^2 - 4\left(1+\dfrac{1}{x}\right) \right]}{\sqrt{1+\dfrac{2}{x}} + 1 + 2\sqrt{1+\dfrac{1}{x}}} $$

Сразу найдем предел знаменателя, чтобы не тянуть его дальше. Пользоваться будем арифметическими свойствами пределов, элементарными пределами (<p:[f/limits/elementary]>), пределом степенной функции (<p:[f/limits/f-power]>), а также теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{+\infty} \sqrt{1+\dfrac{2}{x}} + 1 + 2\sqrt{1+\dfrac{1}{x}} = \\[10px] = \sqrt{1+0} + 1 + 2\sqrt{1+0} = 4 $$

Запомним этот результат и вновь займемся числителем:

$$ x^2\left[ \left( \sqrt{1+\dfrac{2}{x}} + 1 \right)^2 - 4\left(1+\dfrac{1}{x}\right) \right] = \\[10px] = x^2\left[ 1+\frac{2}{x} + 2\sqrt{1+\frac{2}{x}} + 1 - 4 - \frac{4}{x} \right] = \\[10px] = 2x^2 \left[ 2\sqrt{1+\frac{2}{x}} - \left(1+\frac{1}{x}\right) \right] $$

Избавимся от иррациональности во второй раз:

$$ 2x^2 \left[ \sqrt{1+\frac{2}{x}} - \left(1+\frac{1}{x}\right) \right] \cdot \frac{\sqrt{1+\frac{2}{x}} + \left(1+\frac{1}{x}\right)}{\sqrt{1+\frac{2}{x}} + \left(1+\frac{1}{x}\right)} = \\[10px] = \frac{2x^2\left[ 1+\dfrac{2}{x} - 1 - \dfrac{2}{x} - \dfrac{1}{x^2} \right]}{\sqrt{1+\dfrac{2}{x}} + \left(1+\dfrac{1}{x}\right)} = \\[10px] = - \frac{2}{\sqrt{1+\dfrac{2}{x}} + \left( 1 + \dfrac{1}{x} \right)} $$

Предел этого выражения:

$$ \limf{x}{+\infty} - \frac{2}{\sqrt{1+\dfrac{2}{x}} + \left( 1 + \dfrac{1}{x} \right)} = \\[10px] = -\frac{2}{\sqrt{1+0} + 1 + 0} = -1 $$

Объединяем все вместе и получаем, что

$$ \limf{x}{+\infty} x(\sqrt{x^2+2x} - 2\sqrt{x^2+x} + x) = -\frac{1}{4} $$