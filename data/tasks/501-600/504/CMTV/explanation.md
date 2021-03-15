Используем прием из указания в числителе:

$$ \frac{1 - \cos x \sqrt{\cos 2x}\sqrt[3]{\cos 3x}}{x^2} = \\[10px] = \frac{1 - \cos x + \cos x(1 - \sqrt{\cos 2x}\sqrt[3]{\cos 3x})}{x^2} = \\[10px] = \frac{1 - \cos x}{x^2} + \cos x\frac{1 - \sqrt{\cos 2x}\sqrt[3]{\cos 3x}}{x^2} $$

Чтобы не тянуть за собой хвосты, сразу найдем предел части выражения, используя первый замечательный предел (<p:[f/limits/first-wonderful]>), а также непрерывность косинуса (<p:[f/limits/f-power]>):

$$ \limf{x}{0} \frac{1 - \cos x}{\dfrac{x^2}{2}}\cdot \frac{1}{2}  + \limf{x}{0}\cos x \limf{x}{0} \frac{1 - \sqrt{\cos 2x}\sqrt[3]{\cos 3x}}{x^2} = \\[10px] = \frac{1}{2} + \limf{x}{0} \frac{1 - \sqrt{\cos 2x}\sqrt[3]{\cos 3x}}{x^2} $$

Для числителя дроби справа еще раз используем прием из указания:

$$ \frac{1-\sqrt{\cos 2x}\sqrt[3]{\cos 3x}}{x^2} = \\[10px] = \frac{1-\sqrt{\cos 2x}}{x^2} + \sqrt{\cos 2x}\frac{1 - \sqrt[3]{\cos 3x}}{x^2} = \ldots $$

С помощью формул разности квадратов и разности кубов избавляемся от иррациональностей в числителях двух дробей:

$$ \ldots = \frac{1-\cos 2x}{x^2 (1+\sqrt{\cos 2x})} + \sqrt{\cos 2x}\frac{1-\cos 3x}{x^2 \left(1 + \sqrt[3]{\cos 3x} + \sqrt[3]{\cos 3x}^2\right)} = \\[10px] = \frac{1-\cos 2x}{\dfrac{(2x)^2}{2}\cdot\dfrac{1}{2}(1 + \sqrt{\cos 2x})} + \sqrt{\cos 2x}\frac{1-\cos 3x}{\dfrac{(3x)^2}{2}\cdot\dfrac{2}{9}(1 + \ldots)} $$

Найдем теперь предел этого выражения, используя теорему о пределе сложной функции (<p:[f/limits/composition]>), первый замечательный предел, а также непрерывность степенной функции (<p:[f/limits/f-power]>):

$$ \limf{x}{0} \frac{1 - \sqrt{\cos 2x}\sqrt[3]{\cos 3x}}{x^2} = \\[10px] = \limf{x}{0} \left[ \frac{1-\cos 2x}{\dfrac{(2x)^2}{2}\cdot\dfrac{1}{2}(1 + \sqrt{\cos 2x})} + \sqrt{\cos 2x}\frac{1-\cos 3x}{\dfrac{(3x)^2}{2}\cdot\dfrac{2}{9}(1 + \ldots)} \right] = \\[10px] = \frac{1}{\dfrac{1}{2}\cdot (1 + 1)} + 1\cdot\frac{1}{\dfrac{2}{9}\cdot(1 + 1 + 1^2)} = 1 + \frac{3}{2} = \frac{5}{2} $$

Не забываем, что с предыдущих преобразований за нами еще "тащится" хвост, равный $\dfrac{1}{2}$. Итоговый результат:

$$ \frac{1}{2} + \frac{5}{2} = \frac{6}{2} = 3$$