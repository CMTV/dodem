## Пункт а)

$$ \limf{x}{0} \frac{1-\cos x}{x^2} = \ldots $$

В числителе воспользуемся следующей формулой:

$$ \cos(2\alpha) = 2\cos^2(\alpha) - 1 = 1 - 2\sin^2(\alpha) $$

$$ \ldots = \limf{x}{0} \frac{ 1-1+2\sin^2\left( \frac{x}{2} \right) }{x^2} = \limf{x}{0} \frac{2\sin^2\left(\frac{x}{2}\right)}{x^2} = \\[5px] = \limf{x}{0} \frac{\sin\left(\frac{x}{2}\right)}{\frac{x}{2}}\cdot\frac{\sin\left(\frac{x}{2}\right)}{\frac{x}{2}\cdot 2} = \ldots $$

Заменим переменную с помощью теоремы о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), а также воспользуемся первым замечательным пределом (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>):

$$ \ldots = \scope{ y = \frac{x}{2} \\[10px] \limf{x}{0} y(x) = \limf{x}{0} \frac{x}{2} = \frac{0}{2} = 0 \\[10px] y \to 0} = \\[10px] = \limf{y}{0} \frac{\sin y}{y} \cdot \frac{\sin y}{y\cdot 2} = \frac{1}{2} $$

## Пункт б)

Воспользуемся определением тангенса, первым замечательным пределом, а также непрерывностью косинуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{0} \frac{\tg x}{x} = \limf{x}{0} \frac{\sin x}{x\cdot\cos x} = \limf{x}{0}\frac{\sin x}{x}\cdot\frac{1}{\limf{x}{0} \cos x} = 1\cdot\frac{1}{1} = 1 $$

## Пункт в)

Воспользуемся определением котангенса, заменой переменной, первым замечательным пределом, а также непрерывностью косинуса:

$$ \limf{x}{0} x\ctg3x = \limf{x}{0} \frac{x\cos 3x}{\sin 3x} = \limf{x}{0} \frac{\cos 3x}{3\cdot\dfrac{\sin 3x}{3x}} = \\[5px] = \scope{ y = 3x \\ y \to 0 } = \limf{y}{0} \frac{\cos y}{3\cdot\dfrac{\sin y}{y}} = \frac{1}{3}\limf{y}{0}\cos y = \frac{1}{3} $$