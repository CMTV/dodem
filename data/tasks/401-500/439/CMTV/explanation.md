В знаменателе воспользуемся формулой разности квадратов. Затем вынесем за скобки $\sqrt{x-a}$:

$$ \frac{\sqrt{x}-\sqrt{a} + \sqrt{x-a}}{\sqrt{x^2-a^2}} = \frac{\sqrt{x} - \sqrt{a} + \sqrt{x-a}}{\sqrt{x-a}\sqrt{x+a}} = \\[10px] = \frac{\sqrt{x-a}}{\sqrt{x-a}}\cdot\frac{\frac{\sqrt{x}-\sqrt{a}}{\sqrt{x-a}} + 1}{\sqrt{x+a}} = \frac{\frac{\sqrt{x}-\sqrt{a}}{\sqrt{x-a}} + 1}{\sqrt{x+a}} $$

В числителе видим дробь со знаменателем $\sqrt{x-a}$. Непорядок. Давайте избавимся от иррациональности в числителе этой дроби:

$$ \frac{\sqrt{x}-\sqrt{a}}{\sqrt{x-a}}\cdot\frac{\sqrt{x}+\sqrt{a}}{\sqrt{x}+\sqrt{a}} = \frac{x-a}{\sqrt{x-a}(\sqrt{x}+\sqrt{a})} = \frac{\sqrt{x-a}}{\sqrt{x}+\sqrt{a}} $$

Итак, после преобразований из выражения в условии получили такой результат:

$$ \frac{\frac{\sqrt{x-a}}{\sqrt{x}+\sqrt{a}}+1}{\sqrt{x + a}} $$

Найдем теперь значение предела этого выражения, пользуясь арифметическими свойствами пределов, пределом степенной функции (<p:[f/limits/f-power]>), а также теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{a} \frac{\frac{\sqrt{x-a}}{\sqrt{x}+\sqrt{a}}+1}{\sqrt{x + a}} = \scope{ y=x-a, \ g = x+a \\[5px] \limf{x}{a} y(x) = 0, \ \limf{x}{a} g(x) = 2a \\[5px] y\to 0, \ g\to 2a } = \\[10px] = \frac{\frac{\limf{y}{0} \sqrt{y}}{\limf{x}{a} \sqrt{x} + \sqrt{a}} + 1}{\limf{g}{2a} \sqrt{g}} = \frac{\frac{0}{2\sqrt{a}} + 1}{\sqrt{2a}} = \frac{1}{\sqrt{2a}} $$