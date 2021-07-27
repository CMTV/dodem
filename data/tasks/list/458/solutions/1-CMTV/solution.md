Избавимся от иррациональности:

$$
\sqrt{ x + \sqrt{ x + \sqrt{x} } } - \sqrt{x} = \\[10px] =
\sqrt{ x + \sqrt{ x + \sqrt{x} } } - \sqrt{x} \cdot \frac{\sqrt{ x + \sqrt{ x + \sqrt{x} } } + \sqrt{x}}{\sqrt{ x + \sqrt{ x + \sqrt{x} } } + \sqrt{x}} = \\[10px] =
\frac{\sqrt{x+\sqrt{x}}}{\sqrt{ x + \sqrt{ x + \sqrt{x} } } + \sqrt{x}}
$$

Вынесем $x$ в числителе и знаменателе:

$$
\frac{\sqrt{x+\sqrt{x}}}{\sqrt{ x + \sqrt{ x + \sqrt{x} } } + \sqrt{x}} = \\[10px] =
\frac{ \sqrt{x}\sqrt{1+\dfrac{1}{\sqrt{x}}} }{ \sqrt{x} \left( \sqrt{1 + \dfrac{1}{\sqrt{x}}\sqrt{ 1 + \dfrac{1}{\sqrt{x}} }} + 1 \right) }
$$

Найдем теперь значение предела, пользуясь его арифметическими свойствами, элементарными пределами (<b:[П-ссылка](advanced/proto/f-lim/elementary)>), пределом степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>), а также теоремой о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>):

$$
\limf{x}{+\infty} \frac{ \sqrt{1+\dfrac{1}{\sqrt{x}}} }{ \sqrt{1 + \dfrac{1}{\sqrt{x}}\sqrt{ 1 + \dfrac{1}{\sqrt{x}} }} + 1 } = \\[10px] =
\frac{\sqrt{1+0}}{\sqrt{1+0\cdot\sqrt{1+0}} + 1} = \frac{1}{2}
$$