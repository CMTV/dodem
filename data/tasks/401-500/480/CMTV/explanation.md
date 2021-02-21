$$ \limf{x}{1} (1-x)\tg\frac{\pi x}{2}  = \ldots $$

Заменим переменную с помощью теоремы о пределе сложной функции (<p:[f/limits/composition]>), воспользуемся формулой приведения, а также используем следствие из первого замечательного предела (<p:[f/limits/composition]>)

$$ \ldots = \scope{ y = x - 1 \\[5px] y \to 0 \\[5px] x = y + 1 } = \limf{y}{0} -y\tg\left( \frac{\pi y}{2} + \frac{\pi}{2} \right) = \limf{y}{0} y\ctg\frac{\pi y}{2} = \\[10px] = \limf{y}{0} \frac{1}{\dfrac{\tg\left(\frac{\pi y}{2}\right)\frac{\pi}{2}}{\frac{\pi y}{2}} } = \scope{ u = \frac{\pi y}{2} \\[5px] u \to 0} = \frac{1}{\frac{2}{\pi} \limf{u}{0} \frac{\tg u}{u}} = \frac{2}{\pi} $$