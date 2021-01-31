Сначала избавимся от иррациональности в знаменателе:

$$  \frac{\sqrt[3]{1+\dfrac{x}{3}} - \sqrt[4]{1+\dfrac{x}{4}}}{1-\sqrt{1-\dfrac{x}{2}}} = \\[10px] = \frac{\sqrt[3]{1+\dfrac{x}{3}} - \sqrt[4]{1+\dfrac{x}{4}}}{1-\sqrt{1-\dfrac{x}{2}}}\cdot\frac{1+\sqrt{1-\dfrac{x}{2}}}{1+\sqrt{1-\dfrac{x}{2}}} = \\[10px] = \frac{\left(\sqrt[3]{1+\dfrac{x}{3}} - \sqrt[4]{1+\dfrac{x}{4}}\right)\cdot2\left(1+\sqrt{1-\dfrac{x}{2}}\right)}{x} $$

Найдем предел второго множителя в числителе:

$$ \limf{x}{0} 2\left(1+\sqrt{1-\dfrac{x}{2}}\right) = 4 $$

Запомним эту четверку. Наш итоговый результат надо будет на нее умножить.

Продолжим преобразования. Сейчас избавимся от иррациональности в числителе:

$$ \frac{\sqrt[3]{1+\dfrac{x}{3}} - \sqrt[4]{1+\dfrac{x}{4}}}{x} = \\[10px] = \frac{\sqrt[12]{\left(1+\frac{x}{3}\right)^4} - \sqrt[12]{\left(1+\frac{x}{4}\right)^3}}{x} \cdot \frac{\sqrt[12]{\left(1+\frac{x}{3}\right)^4} + \sqrt[12]{\left(1+\frac{x}{4}\right)^3}}{\sqrt[12]{\left(1+\frac{x}{3}\right)^4} + \sqrt[12]{\left(1+\frac{x}{4}\right)^3}} = \\[10px] = \frac{\sqrt[6]{\left(1+\frac{x}{3}\right)^4} - \sqrt[6]{\left(1+\frac{x}{4}\right)^3}}{x\left(\sqrt[12]{\left(1+\frac{x}{3}\right)^4} + \sqrt[12]{\left(1+\frac{x}{4}\right)^3}\right)} $$

Найдем предел большой скобки в знаменателе:

$$ \limf{x}{0} \sqrt[12]{\left(1+\frac{x}{3}\right)^4} + \sqrt[12]{\left(1+\frac{x}{4}\right)^3} = 2 $$

С учетом $4$, которую мы получили ранее, итоговый результат надо будет умножить на $\frac{4}{2} = 2$.

Продолжим преобразования. Воспользуемся формулой разности квадратов:

$$ \frac{\sqrt[6]{\left(1+\frac{x}{3}\right)^4} - \sqrt[6]{\left(1+\frac{x}{4}\right)^3}}{x} = \\[10px] = \frac{\sqrt[6]{\left(1+\frac{x}{3}\right)^4} - \sqrt[6]{\left(1+\frac{x}{4}\right)^3}}{x} \cdot \\[10px] \cdot \frac{\sqrt[6]{\left(1+\frac{x}{3}\right)^8} + \sqrt[6]{\left(1+\frac{x}{3}\right)^4\left(1+\frac{x}{4}\right)^3} + \sqrt[6]{\left(1+\frac{x}{4}\right)^6}}{\sqrt[6]{\left(1+\frac{x}{3}\right)^8} + \sqrt[6]{\left(1+\frac{x}{3}\right)^4\left(1+\frac{x}{4}\right)^3} + \sqrt[6]{\left(1+\frac{x}{4}\right)^6}} = \\[10px] = \frac{\sqrt{\left(1+\frac{x}{3}\right)^4} - \sqrt{\left(1+\frac{x}{4}\right)^3}}{x\left(\sqrt[6]{\left(1+\frac{x}{3}\right)^8} + \sqrt[6]{\left(1+\frac{x}{3}\right)^4\left(1+\frac{x}{4}\right)^3} + \sqrt[6]{\left(1+\frac{x}{4}\right)^6}\right)} $$

Найдем предел большой скобки в знаменателе:

$$ \limf{x}{0} \sqrt[6]{\left(1+\frac{x}{3}\right)^8} + \sqrt[6]{\left(1+\frac{x}{3}\right)^4\left(1+\frac{x}{4}\right)^3} + \sqrt[6]{\left(1+\frac{x}{4}\right)^6} = \\[5px] = 3 $$

С учетом $2$, которую мы получили выше, итоговый результат надо будет умножить на $\frac{2}{3}$.

Продолжим преобразования. Осталось в последний раз избавиться от корней в числителе:

$$ \frac{\sqrt{\left(1+\frac{x}{3}\right)^4} - \sqrt{\left(1+\frac{x}{4}\right)^3}}{x} = \\[10px] = \frac{\sqrt{\left(1+\frac{x}{3}\right)^4} - \sqrt{\left(1+\frac{x}{4}\right)^3}}{x} \cdot \frac{\sqrt{\left(1+\frac{x}{3}\right)^4} + \sqrt{\left(1+\frac{x}{4}\right)^3}}{\sqrt{\left(1+\frac{x}{3}\right)^4} + \sqrt{\left(1+\frac{x}{4}\right)^3}} = \\[10px] = \frac{\left(1+\frac{x}{3}\right)^4 - \left(1+\frac{x}{4}\right)^3}{x\left(\sqrt{\left(1+\frac{x}{3}\right)^4} + \sqrt{\left(1+\frac{x}{4}\right)^3}\right)} $$

Найдем предел большой скобки в знаменателе:

$$ \limf{x}{0} \sqrt{\left(1+\frac{x}{3}\right)^4} + \sqrt{\left(1+\frac{x}{4}\right)^3} = 2 $$

С учетом $\frac{2}{3}$, которое мы получили ранее, итоговый результат надо будет умножить на $\frac{2}{3}\cdot\frac{1}{2} = \frac{1}{3}$.

Имеем следующую дробь:

$$ \frac{\left(1+\frac{x}{3}\right)^4 - \left(1+\frac{x}{4}\right)^3}{x} $$

Число $0$ является корнем многочлена $4$-ой степени в числителе. Вынесем этот корень $x$ из числителя:

$$ \frac{\left(1+\frac{x}{3}\right)^4 - \left(1+\frac{x}{4}\right)^3}{x} = \\[10px] = \frac{x}{x}\cdot\frac{64x^3 + 687x^2 + 2484x + 3024}{5184} $$

Найдем предел, пользуясь его арифметическими свойствами и пределом многочлена (<p:[f/limits/elementary]>):

$$ \limf{x}{0} \frac{64x^3 + 687x^2 + 2484x + 3024}{5184} = \\[5px] = \frac{0 + 0 + 0 + 3024}{5184} = \frac{7}{12} $$

Не забываем еще умножить полученный результат на $\frac{1}{3}$:

$$ \frac{7}{12}\cdot\frac{1}{3} = \frac{7}{36} $$