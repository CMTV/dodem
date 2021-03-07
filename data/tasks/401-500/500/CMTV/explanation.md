С помощью формулы разности квадратов избавимся от иррациональности в знаменателе:

$$ \frac{x^2}{\sqrt{1+x\sin x} - \sqrt{\cos x}} = \frac{x^2 (\sqrt{1+x\sin x} + \sqrt{\cos x})}{1 + x\sin x - \cos x} = \\[10px] = \frac{x^2 (\sqrt{1+x\sin x} + \sqrt{\cos x})}{x^2\dfrac{\sin x}{x} + \dfrac{x^2}{2}\cdot\dfrac{1-\cos x}{\frac{x^2}{2}}} = \\[10px] = \frac{\sqrt{1+x\sin x} + \sqrt{\cos x}}{\dfrac{\sin x}{x} + \dfrac{1}{2}\cdot\dfrac{1-\cos x}{\frac{x^2}{2}}} $$

Найдем теперь значение предела, пользуясь первым замечательным пределом (<p:[f/limits/first-wonderful]>), а также непрерывностью синуса и косинуса (<p:[f/limits/continuity/trigonom]>):

$$ \limf{x}{0} \frac{\sqrt{1+x\sin x} + \sqrt{\cos x}}{\dfrac{\sin x}{x} + \dfrac{1}{2}\cdot\dfrac{1-\cos x}{\frac{x^2}{2}}} = \\[10px] = \frac{\sqrt{1 + 0\cdot\sin 0} + \sqrt{\cos 0}}{1 + \dfrac{1}{2}\cdot 1} = \frac{2}{\frac{3}{2}} = \frac{4}{3} $$