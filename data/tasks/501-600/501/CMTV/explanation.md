Воспользуемся основным тригонометрическим тождеством в знаменателе:

$$ \frac{\sqrt{\cos x} - \sqrt[3]{\cos x}}{\sin^2 x} = \frac{\sqrt{\cos x} - \sqrt[3]{\cos x}}{1 - \cos^2 x} $$

Заменой переменной избавимся от косинуса с помощью теоремы о пределе сложной функции (<p:[f/limits/composition]>), непрерывности косинуса (<p:[f/limits/continuity/trigonom]>) и непрерывности степенной функции (<p:[f/limits/f-power]>):

$$ \limf{x}{0} \frac{\sqrt{\cos x} - \sqrt[3]{\cos x}}{1 - \cos^2 x} = \scope{ y = \cos x \\[5px] y \to 1 } = \limf{y}{1} \frac{\sqrt{y}-\sqrt[3]{y}}{1-y^2} $$

Избавимся от иррациональности в числителе, используя формулу разности степеней через произведение (<p:[power-diff]>):

$$ \frac{\sqrt{y}-\sqrt[3]{y}}{1-y^2} \cdot \\[10px] \cdot \frac{(\sqrt{y}^5 + \sqrt{y}^4\sqrt[3]{y} + \sqrt{y}^3\sqrt[3]{y}^2 + \sqrt{y}^2\sqrt[3]{y}^3 + \sqrt{y}\sqrt[3]{y}^4 + \sqrt[3]{y}^5)}{(\sqrt{y}^5 + \sqrt{y}^4\sqrt[3]{y} + \sqrt{y}^3\sqrt[3]{y}^2 + \sqrt{y}^2\sqrt[3]{y}^3 + \sqrt{y}\sqrt[3]{y}^4 + \sqrt[3]{y}^5)} = \\[10px] = \frac{\sqrt{y}^6 - \sqrt[3]{y}^6}{(1-y^2)\cdot(\sqrt{y}^5 + \ldots )} = \frac{y^3 - y^2}{(1-y^2)(\sqrt{y}^5 + \ldots )} = \\[10px] = \frac{y^2(y - 1)}{-(y-1)(y+1)(\sqrt{y}^5 + \ldots)} = \\[10px] = \frac{y^2}{-(y+1)(\sqrt{y}^5 + \ldots)} $$

Найдем теперь значение предела:

$$ \limf{y}{1} \frac{y^2}{-(y+1)(\sqrt{y}^5 + \ldots)} = \frac{1^2}{-(1+1)(1 + 1\cdot 1 + \ldots)} = \\[10px] = \frac{1}{-2\cdot 6} = -\frac{1}{12} $$