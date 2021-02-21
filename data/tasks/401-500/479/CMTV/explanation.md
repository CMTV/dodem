$$ \limf{x}{\frac{\pi}{4}} \tg 2x \tg\left( \frac{\pi}{4} - x \right) = \ldots $$

Заменим переменную с помощью теоремы о пределе сложной функции (<p:[f/limits/composition]>), воспользуемся формулами приведения, а также используем следствие из первого замечательного предела (<p:[f/limits/composition]>)

$$ \ldots = \scope{ y = x - \frac{\pi}{4} \\[5px] y \to 0 \\[5px] x = y + \frac{\pi}{4} } = \limf{y}{0} \tg\left(2y + \frac{\pi}{2}\right)\tg\left(- y\right) = \\[10px] = \limf{y}{0} \ctg(2y)\tg(y) = \limf{y}{0} \frac{1}{\dfrac{\tg(2y)}{2y}2y}\cdot\frac{\tg(y)y}{y} = \frac{1}{2} $$