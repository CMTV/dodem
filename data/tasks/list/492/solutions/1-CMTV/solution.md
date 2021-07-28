С помощью формул из указания упростим числитель:

$$ \sin(a+x)\sin(a+2x) - \sin^2 a = \\[5px] = \frac{\cos(-x) - \cos(2a + 3x)}{2} - \frac{1-\cos(2a)}{2} = \\[5px] = \frac{\cos(x) - \cos(2a + 3x) - 1 + \cos(2a)}{2} = \\[5px] = \frac{-(1-\cos(x)) + \cos(2a) - \cos(2a+3x)}{2} = \\[5px] = \frac{-(1-\cos(x)) -2\sin\left( \dfrac{4a+3x}{2} \right)\sin\left(\dfrac{-3x}{2}\right)}{2} = \\[5px] = -\sin^2\left(\frac{x}{2}\right) + \sin\left(\frac{4a+3x}{2}\right)\sin\left(\dfrac{3x}{2}\right) $$

Пользуясь упрощенным числителем, найдем теперь значение предела, используя теорему о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), первый замечательный предел (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>), а также непрерывностью синуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{0} \frac{\sin(a+x)\sin(a+2x) - \sin^2 a}{x} = \\[10px] = \limf{x}{0} -\frac{\sin^2\left(\dfrac{x}{2}\right)}{x} + \frac{\sin\left(\dfrac{4a+3x}{2}\right)\sin\left(\dfrac{3x}{2}\right)}{x} = \\[10px] = \limf{x}{0} - \frac{\sin^2\left(\dfrac{x}{2}\right)}{2\dfrac{x}{2}} + \sin\left(\frac{4a+3x}{2}\right)\frac{\dfrac{3}{2}\sin\left(\dfrac{3x}{2}\right)}{\dfrac{3x}{2}} = \\[10px] = \scope{u = \frac{x}{2}, \quad v = \frac{4a+3x}{2}, \quad z = \frac{3x}{2} \\[10px] u \to 0, \quad v\to 2a, \quad z \to 0} = \\[10px] = -\frac{1}{2}\limf{u}{0} \frac{\sin u}{u}\limf{u}{0}\sin u + \limf{v}{2a}\sin v \cdot \frac{3}{2} \limf{z}{0}\frac{\sin z}{z} = \\[10px] = \frac{3}{2}\sin(2a) $$