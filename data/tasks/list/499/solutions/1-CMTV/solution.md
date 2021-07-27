С помощью формулы разности квадратов избавимся от иррациональности в числителе:

$$ \frac{\sqrt{1+\tg x} - \sqrt{1+\sin x}}{x^3} = \frac{1+\tg x - 1 - \sin x}{x^3(\sqrt{1+\tg x} + \sqrt{1+\sin x})} = \\[10px] = \frac{ \dfrac{\sin x}{\cos x} - \sin x }{ x^3 (\sqrt{1+\tg x} + \sqrt{1+\sin x}) } = \\[10px] = \frac{\sin x}{x} \cdot \frac{1-\cos x}{\frac{x^2}{2}}\cdot\frac{1}{2\cos x (\sqrt{1+\tg x} + \sqrt{1+\sin x})} $$

Найдем теперь значение предела, используя первый замечательный предел (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>), а также непрерывность косинуса, тангенса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>) и степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>):

$$ \limf{x}{0} \frac{\sin x}{x} \cdot \frac{1-\cos x}{\frac{x^2}{2}}\cdot\frac{1}{2\cos x (\sqrt{1+\tg x} + \sqrt{1+\sin x})} = \\[10px] = 1\cdot 1 \cdot \frac{1}{2\cos 0 (\sqrt{1+\tg 0} + \sqrt{1+\sin 0})} = \frac{1}{4} $$