Вынесем $\sqrt{x}$ из числителя и знаменателя:

$$ \frac{\sqrt{x+\sqrt{x + \sqrt{x}}}}{\sqrt{x+1}} = \frac{\sqrt{x+\sqrt{x}\sqrt{1+\frac{1}{\sqrt{x}}}}}{\sqrt{x}\sqrt{1 + \frac{1}{x}}} = \\[10px] = \frac{\sqrt{x}}{\sqrt{x}} \cdot \frac{\sqrt{1+\frac{1}{\sqrt{x}}\sqrt{1+\frac{1}{\sqrt{x}}}}}{\sqrt{1+\frac{1}{x}}} = \ldots $$

Представим $\frac{1}{x}$ в виде $\left(\frac{1}{\sqrt{x}}\right)^2$:

$$ \ldots = \frac{ \sqrt{1+\frac{1}{\sqrt{x}}\sqrt{1+\frac{1}{\sqrt{x}}}} }{\sqrt{1+\left(\frac{1}{\sqrt{x}}\right)^2}} $$

Теперь найдем предел, пользуясь арифметическими свойствами пределов, пределом степенной функции (<p:[f/limits/f-power]>), а также многократно применяя теорему о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{+\infty} \frac{ \sqrt{1+\frac{1}{\sqrt{x}}\sqrt{1+\frac{1}{\sqrt{x}}}} }{\sqrt{1+\left(\frac{1}{\sqrt{x}}\right)^2}} = \scope{ y = \frac{1}{\sqrt{x}} \\[10px] \limf{x}{+\infty} y(x) = 0 \\[10px] y \to 0 } = \\[10px] = \limf{y}{0} \frac{ \sqrt{1+y\sqrt{1+y}} }{ \sqrt{1+y^2} } = \frac{\sqrt{1 + 0\cdot\sqrt{1+0}}}{\sqrt{1+0^2}} = \frac{\sqrt{1}}{\sqrt{1}} = 1 $$