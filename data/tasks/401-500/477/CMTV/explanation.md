$$ \limf{x}{0} \frac{\cos x - \cos 3x}{x^2} = \ldots $$

В числителе используем формулу разности косинусов, а также нечетность синуса:

$$ \cos \alpha - \cos \beta = -2\sin\left(\frac{\alpha + \beta}{2}\right)\sin\left( \frac{\alpha - \beta}{2} \right) $$

$$ \ldots = \limf{x}{0} \frac{-2\sin (2x) \sin(-x)}{x^2} = \limf{x}{0} \frac{2\sin(2x)\sin(x)}{x^2} = \ldots $$

Разделим это предел на два. В первом сначала заменим переменную по теореме о пределе сложной функции (<p:[f/limits/composition]>). Затем в обеих частях воспользуемся первым замечательным пределом (<p:[f/limits/continuity/trigonom]>):

$$ \ldots = \limf{x}{0} 2\cdot\frac{\sin(2x)}{2x\cdot\frac{1}{2}}\limf{x}{0}\frac{\sin x}{x} = \scope{ y = 2x \\ y\to 0 } = \\[10px] = 4\limf{y}{0} \frac{\sin y}{y}\limf{x}{0}\frac{\sin x}{x} = 4 $$