$$ \limf{x}{0} \frac{\sin 5x - \sin 3x}{\sin x} = \ldots $$

Используем в числителе формулу разности синусов:

$$ \sin\alpha - \sin \beta = 2\sin\left(\frac{\alpha - \beta}{2}\right)\cos\left(\frac{\alpha + \beta}{2}\right) $$

$$ \ldots = \limf{x}{0} \frac{ 2\sin x \cos 4x }{\sin x} = \limf{x}{0} 2\cos 4x = \ldots $$

Заменим переменную по теореме о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), а затем воспользуемся непрерывностью косинуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \ldots = \scope{ y = 4x \\ y \to 0 } = \limf{y}{0} 2\cos y = 2\cdot 1 = 2 $$