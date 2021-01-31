Избавимся от иррациональности:

$$ \sqrt{x+\sqrt{x+\sqrt{x}}} - \sqrt{x} = \frac{\sqrt{x+\sqrt{x}}}{\sqrt{x+\sqrt{x+\sqrt{x}}} + \sqrt{x}} = \\[10px] = \frac{\sqrt{x+\sqrt{x}}}{\sqrt{x+\sqrt{x+\sqrt{x}}} + \sqrt{x}}\cdot\frac{\sqrt{x+\sqrt{x}}}{\sqrt{x+\sqrt{x}}} = \\[10px] = \frac{x+\sqrt{x}}{\left( \sqrt{x+\sqrt{x+\sqrt{x}}} + \sqrt{x} \right)\left( \sqrt{x+\sqrt{x}} \right)} \cdot \frac{x-\sqrt{x}}{x-\sqrt{x}} = \\[10px] = \frac{x^2 - x}{\left( \sqrt{x+\sqrt{x+\sqrt{x}}} + \sqrt{x} \right)\left( \sqrt{x+\sqrt{x}} \right)\left(x-\sqrt{x}\right)} $$

Теперь вынесем из числителя и знаменателя $x^2$:

$$ \frac{x^2 - x}{\left( \sqrt{x+\sqrt{x+\sqrt{x}}} + \sqrt{x} \right)\left( \sqrt{x+\sqrt{x}} \right)\left(x-\sqrt{x}\right)} = \\[10px] = \frac{x^2\cdot\left(1-\dfrac{1}{x}\right)}{\sqrt{x}\left( \sqrt{1 + \frac{1}{\sqrt{x}}\sqrt{1+\frac{1}{\sqrt{x}}}} + 1 \right)\sqrt{x}\sqrt{1+\frac{1}{\sqrt{x}}} \ x\left(1-\frac{1}{\sqrt{x}}\right)} = \\[10px] = \frac{ 1-\dfrac{1}{x} }{ \left( \sqrt{1 + \frac{1}{\sqrt{x}}\sqrt{1+\frac{1}{\sqrt{x}}}} + 1 \right)\sqrt{1+\frac{1}{\sqrt{x}}}\left(1-\frac{1}{\sqrt{x}}\right) } $$

Найдем теперь значение предела, пользуясь его арифметическими свойствами, элементарными пределами (<p:[f/limits/elementary]>), пределом степенной функции (<p:[f/limits/f-power]>), а также теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{+\infty} \frac{ 1-\dfrac{1}{x} }{ \left( \sqrt{1 + \frac{1}{\sqrt{x}}\sqrt{1+\frac{1}{\sqrt{x}}}} + 1 \right)\sqrt{1+\frac{1}{\sqrt{x}}}\left(1-\frac{1}{\sqrt{x}}\right) } = \\[10px] = \frac{1-0}{\left(\sqrt{1+0\cdot\sqrt{1+0}} + 1\right)\sqrt{1+0}\left(1-0\right)} = \frac{1}{2} $$