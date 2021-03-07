Заменим переменную с помощью теоремы о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{\frac{\pi}{3}} \frac{\sin\left(x-\frac{\pi}{3}\right)}{1-2\cos x} = \scope{ y = x - \frac{\pi}{3} \\[10px] y \to 0 } = \limf{y}{0} \frac{\sin y}{1-2\cos\left( y + \frac{\pi}{3} \right)} = \ldots$$

В знаменателе воспользуемся формулой косинуса суммы, а затем формулой половинного угла (см. указание):

$$ 1 - 2\cos \left( y + \frac{\pi}{3} \right) = 1 - 2\left( \cos y \cos \frac{\pi}{3} - \sin y \sin \frac{\pi}{3} \right) = \\[10px] = 1 - \cos y + \sqrt{3}\sin y = 2\sin^2 \frac{y}{2} + \sqrt{3} \sin y $$

Теперь мы можем найти значение предела, воспользуясь первым замечательным пределом (<p:[f/limits/first-wonderful]>):

$$ \ldots = \limf{y}{0} \frac{\sin y}{2\sin^2\frac{y}{2} + \sqrt{3} \sin y} = \limf{y}{0} \frac{y\frac{\sin y}{y}}{\frac{y\sin^2\frac{y}{2}}{\frac{y}{2}} + \sqrt{3}y\frac{\sin y}{y}} = \\[10px] = \scope{ u = \frac{y}{2} \\[10px] u \to 0 } = \frac{ \limf{y}{0} \frac{\sin y}{y} }{ \limf{u}{0} \sin u \limf{u}{0} \frac{\sin u}{u} + \sqrt{3} \limf{y}{0} \frac{\sin y}{y} } = \\[10px] = \frac{1}{0\cdot 1 + \sqrt{3}\cdot 1} = \frac{1}{\sqrt{3}} $$