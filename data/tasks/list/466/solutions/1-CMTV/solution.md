Вынесем $x^n$ из обеих скобок в числителе:

$$ \frac{\left(x-\sqrt{x^2-1}\right)^n + \left(x + \sqrt{x^2 - 1}\right)^n}{x^n} = \\[10px] = \frac{x^n\left(1-\sqrt{1-\dfrac{1}{x^2}}\right)^n + x^n\left(1+\sqrt{1-\dfrac{1}{x^2}}\right)^n}{x^n} = \\[10px] = \left(1-\sqrt{1-\frac{1}{x^2}}\right)^n + \left(1+\sqrt{1-\frac{1}{x^2}}\right)^n $$

Найдем теперь значение предела, пользуясь его арифметическими свойствами, элементарными пределами (<b:[П-ссылка](advanced/proto/f-lim/elementary)>), пределом степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>), а также теоремой о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>):

$$ \limf{x}{+\infty} \left(1-\sqrt{1-\frac{1}{x^2}}\right)^n + \left(1+\sqrt{1-\frac{1}{x^2}}\right)^n = \\[10px] = \left(1-\sqrt{1-0}\right)^n + (1+\sqrt{1-0})^n = \\[5px] = 0^n + 2^n = 2^n $$