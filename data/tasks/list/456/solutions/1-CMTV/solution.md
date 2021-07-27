Вынесем $-1$ в соответствующей степени из числителя и знаменателя, и разобьем выражение на произведение дробей:

$$ \frac{(1-\sqrt[2]{x})(1-\sqrt[3]{x})\ldots(1-\sqrt[n]{x})}{(1-x)^{n-1}} = \\[5px] = \frac{(-1)^{n-1}(\sqrt[2]{x}-1)(\sqrt[3]{x}-1)\ldots(\sqrt[n]{x}-1)}{(-1)^{n-1}(x-1)^{n-1}} = \\[5px] = \frac{\sqrt[2]{x} - 1}{x-1}\cdot\frac{\sqrt[3]{x}-1}{x-1}\cdot\ldots\cdot\frac{\sqrt[n]{x}-1}{x-1} $$

Найдем теперь предел, пользуясь его арифметическими свойствами, теоремой о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), а также задачей <t:454>:

$$ \limf{x}{1} \frac{\sqrt[2]{x} - 1}{x-1}\cdot\frac{\sqrt[3]{x}-1}{x-1}\cdot\ldots\cdot\frac{\sqrt[n]{x}-1}{x-1} = \scope{ y = x-1 \\[5px] \limf{x}{1} y(x) = 0 \\[5px] y \to 0 } = \\[10px] = \limf{y}{0} \frac{\sqrt[2]{y+1}-1}{y}\cdot\limf{y}{0}\frac{\sqrt[3]{y+1}-1}{y}\cdot\ldots\cdot\limf{y}{0} \frac{\sqrt[n]{y+1} - 1}{y} = \\[10px] = \frac{1}{2}\cdot\frac{1}{3}\cdot\ldots\cdot\frac{1}{n} = \frac{1}{n!} $$