Представим все слагаемые в более удобном виде с одинаковыми знаменателями в показателях степени:

$$ \limf{x}{+\infty} \frac{\sqrt{x} + \sqrt[3]{x} + \sqrt[4]{x}}{\sqrt{2x+1}} = \limf{x}{+\infty} \frac{x^{\frac{6}{12}} + x^{\frac{4}{12}} + x^{\frac{3}{12}}}{\sqrt{2x+1}} = \ldots $$

Теперь вынесем $x^{\frac{6}{12}}=\sqrt{x}$ из числителя и из знаменателя:

$$ \ldots = \limf{x}{+\infty} \frac{\sqrt{x}}{\sqrt{x}}\cdot\frac{1 + \frac{1}{x^{\frac{2}{12}}}+\frac{1}{x^{\frac{3}{12}}}}{\sqrt{2+\frac{1}{x}}} $$

Найдем теперь значение предела, пользуясь арифметическими свойствами предела, пределом степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>), а также теоремой о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), которой мы воспользуемся в знаменателе:

$$ \limf{x}{+\infty} \frac{1 + \frac{1}{x^{\frac{2}{12}}}+\frac{1}{x^{\frac{3}{12}}}}{\sqrt{2+\frac{1}{x}}} = \scope{y = 2+\frac{1}{x} \\[10px] \limf{x}{+\infty} y(x) = 2 \\[10px] y \to 2} = \\[10px] = \frac{\limf{x}{+\infty} 1 + \frac{1}{x^{\frac{2}{12}}}+\frac{1}{x^{\frac{3}{12}}}}{\limf{y}{2} \sqrt{y}} = \frac{1 + 0 + 0}{\sqrt{2}} = \frac{1}{\sqrt{2}} $$