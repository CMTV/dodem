Избавимся от иррациональностей в числителе и знаменателе. В числителе воспользуемся формулой разности квадратов, а в знаменателе — разностью кубов.

$$ \frac{\sqrt{9+2x} - 5}{\sqrt[3]{x} - 2} = \\[5px] = \frac{\sqrt{9+2x} - 5}{\sqrt[3]{x} - 2}\cdot\frac{\sqrt{9+2x} + 5}{\sqrt{9+2x}+5}\cdot\frac{\sqrt[3]{x}^2+2\sqrt[3]{x}+4}{\sqrt[3]{x}^2+2\sqrt[3]{x}+4} = \\[5px] = \frac{2(x-8)}{x-8}\cdot\frac{\sqrt[3]{x}^2 + 2\sqrt[3]{x} + 4}{\sqrt{9+2x} + 5} = 2\frac{\sqrt[3]{x}^2 + 2\sqrt[3]{x} + 4}{\sqrt{9+2x} + 5} $$

Найдем значение предела, используя предел степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>), также теорему о пределе сложной функции:

$$ \limf{x}{8} 2\frac{\sqrt[3]{x}^2 + 2\sqrt[3]{x} + 4}{\sqrt{9+2x} + 5} = 2\frac{\limf{x}{8}\sqrt[3]{x}^2 + 2\limf{x}{8}\sqrt[3]{x} + 4}{\sqrt{\limf{x}{8} (9 + 2x)} + 5} = \\[10px] = 2\frac{4 + 4 + 4}{5 + 5} = \frac{12}{5} $$