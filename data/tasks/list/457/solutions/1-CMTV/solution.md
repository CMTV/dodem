С помощью формулы разности квадратов избавимся от иррациональности:

$$ \sqrt{(x+a)(x+b)} - x = \frac{(x+a)(x+b)-x^2}{\sqrt{(x+a)(x+b)}+x} = \\[5px] = \frac{x(a+b) + ab}{\sqrt{(x+a)(x+b)} + x} = \frac{x\left(a+b+\dfrac{ab}{x}\right)}{x\left( \sqrt{\left(1+\dfrac{a}{x}\right)\left(1+\dfrac{b}{x}\right)} + 1 \right)} = \\[10px] = \frac{a+b+\dfrac{ab}{x}}{\sqrt{\left(1+\dfrac{a}{x}\right)\left(1+\dfrac{b}{x}\right) + 1}} $$

Найдем теперь значение предела, пользуясь элементарными пределами (<b:[П-ссылка](advanced/proto/f-lim/elementary)>):

$$ \limf{x}{+\infty} \frac{a+b+\dfrac{ab}{x}}{\sqrt{\left(1+\dfrac{a}{x}\right)\left(1+\dfrac{b}{x}\right) + 1}} = \\[10px] = \frac{a + b + 0}{\sqrt{(1+0)(1+0)} + 1} = \frac{a+b}{2} $$