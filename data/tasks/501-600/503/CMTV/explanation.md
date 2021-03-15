С помощью формулы разности квадратов избавимся от иррациональности в числителе:

$$ \frac{1-\sqrt{\cos x}}{1-\cos(\sqrt{x})}\cdot\frac{1+\sqrt{\cos x}}{1+\sqrt{\cos x}} = \frac{1 - \cos x}{(1-\cos(\sqrt{x}))(1+\sqrt{\cos x})} = \ldots $$

Теперь приведем числитель и левую скобку знаменателя к такому виду, чтобы можно было использовать первый замечательный предел:

$$ \ldots = \frac{ \dfrac{1-\cos x}{\dfrac{x^2}{2}} \cdot \dfrac{x^2}{2} }{ \left[ \dfrac{1-\cos(\sqrt{x})}{\dfrac{\sqrt{x}^2}{2}}\cdot\dfrac{\sqrt{x}^2}{2} \right](1+\sqrt{\cos x}) } = \\[10px] = x\dfrac{\dfrac{1-\cos x}{\dfrac{x^2}{2}}}{\dfrac{1-\cos(\sqrt{x})}{\dfrac{\sqrt{x}^2}{2}}(1+\sqrt{\cos x})} $$

Теперь найдем значение предела, используя теорему о пределе сложной функции (<p:[f/limits/composition]>), первый замечательный предел (<p:[f/limits/first-wonderful]>), непрерывность степенной функции (<p:[f/limits/f-power]>) и непрерывность косинуса (<p:[f/limits/continuity/trigonom]>):

$$ \limf{x}{0} x\dfrac{\dfrac{1-\cos x}{\dfrac{x^2}{2}}}{\dfrac{1-\cos(\sqrt{x})}{\dfrac{\sqrt{x}^2}{2}}(1+\sqrt{\cos x})} = \scope{ y = \sqrt{x} \\[5px] y \to 0 } = \\[10px] = 0 \cdot \frac{ \limf{x}{0} \dfrac{1-\cos x}{\dfrac{x^2}{2}} }{ \limf{y}{0} \dfrac{1-\cos y}{\dfrac{y^2}{2}} \limf{x}{0} (1 + \sqrt{\cos x}) } =  0 \cdot \frac{1}{1\cdot 2} = 0 $$