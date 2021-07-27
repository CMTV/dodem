Заменим переменную с помощью теоремы о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>):

$$ \limf{x}{\pi} \frac{\sin mx}{\sin nx} = \\[10px] = \scope{ y = x - \pi \\[5px] \limf{x}{0} y(x) = \limf{x}{0} x - \pi = 0 \\[5px] y \to 0 \\[5px] x = y+\pi } = \\[10px] = \limf{y}{0} \frac{\sin\left( my + m\pi \right)}{\sin(ny + n\pi)} = \ldots $$

Пользуемся формулой приведения $\sin(x + \pi) = -\sin(x)$:

$$ \ldots = \limf{y}{0} \frac{(-1)^m\sin(my)}{(-1)^n\sin(ny)} = \limf{y}{0} (-1)^{m-n}\frac{\sin(my)}{\sin(ny)} = \ldots $$

Теперь отдельно находим предел числителя и знаменателя, заменяя переменную, а также пользуясь первым замечательным пределом (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>):

$$ \ldots = \scope{u = my, \quad v =ny \\[5px] u\to 0, \quad v \to 0} = (-1)^{m-n} \frac{ \limf{u}{0} \dfrac{\sin(u)}{u} \cdot u }{ \limf{v}{0} \dfrac{\sin(v)}{v}\cdot v } = \\[10px] = (-1)^{m-n}\frac{u}{v} = (-1)^{m-n}\frac{m}{n} $$