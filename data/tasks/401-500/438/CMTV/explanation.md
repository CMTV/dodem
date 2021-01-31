Избавимся от иррациональности в числителе:

$$ \frac{\sqrt{1-x}-3}{2+\sqrt[3]{x}}\cdot\frac{\sqrt{1-x}+3}{\sqrt{1-x}+3} = -\frac{\sqrt[3]{x}^3 + 2^3}{2+\sqrt[3]{x}}\cdot\frac{1}{\sqrt{1-x}+3} = \ldots $$

Воспользуемся формулой суммы кубов:

$$ \ldots = -\frac{(2+\sqrt[3]{x})(\sqrt[3]{x}^2 - 2\sqrt[3]{x} + 4)}{2+\sqrt[3]{x}}\cdot\frac{1}{\sqrt{1-x}+3} = \\[10px] = -\frac{\sqrt[3]{x}^2 - 2\sqrt[3]{x} + 4}{\sqrt{1-x}+3} $$

Найдем теперь значения предела, используя арифметические свойства пределов, предел степенной функции (<p:[f/limits/f-power]>), а также предел сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{-8} -\frac{\sqrt[3]{x}^2 - 2\sqrt[3]{x} + 4}{\sqrt{1-x}+3} = \scope{y=1-x \\[5px] \limf{x}{-8}y(x) = 9 \\[5px] y \to 9} = \\[10px] = -\frac{\limf{x}{-8} \sqrt[3]{x}^2 - 2\sqrt[3]{x} + 4}{\limf{y}{9} \sqrt{y} + 3} = \frac{4 - 2\cdot(-2) + 4}{3 + 3} = -2 $$