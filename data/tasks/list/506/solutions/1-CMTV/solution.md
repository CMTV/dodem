## Пункт а)

Найдем пределы основания и показателя:

$$ \limf{x}{0} \frac{1+x}{2+x} = \frac{1+0}{2+0} = \frac{1}{2} $$

$$ \limf{x}{0} \frac{1-\sqrt{x}}{1-x} = \frac{1-0}{1-0} = 1 $$

Значит, по прото-задаче <b:[П-ссылка](advanced/proto/f-continuity/complex-exp)>:

$$ \limf{x}{0} \left( \frac{1+x}{2+x} \right)^{(1-\sqrt{x})/(1-x)} = \left(\frac{1}{2}\right)^1 = \frac{1}{2} $$

## Пункт б)

Найдем предел основания:

$$ \limf{x}{1} \frac{1+x}{2+x} = \frac{1+1}{2+1} = \frac{2}{3} $$

Предел показателя найдем, избавившись от иррациональности в числителе с помощью формулы разности квадратов:

$$ \limf{x}{1} \frac{1-\sqrt{x}}{1-x} = \limf{x}{1} \frac{1-x}{(1-x)(1+\sqrt{x})} = \limf{x}{1}\frac{1}{1+\sqrt{x}} = \\[10px] = \frac{1}{1+1} = \frac{1}{2} $$

Значит, по прото-задаче <b:[П-ссылка](advanced/proto/f-continuity/complex-exp)>:

$$ \limf{x}{1} \left(\frac{1+x}{2+x}\right)^{(1-\sqrt{x})/(1-x)} = \sqrt{\frac{2}{3}} $$

## Пункт в)

Найдем предел основания, пользуясь связью б.м. и б.б. функций (<b:[П-ссылка](advanced/proto/f-lim/bm-bb)>).

$$ \limf{x}{+\infty} \frac{1+x}{2+x} = \limf{x}{+\infty} \frac{x}{x}\cdot\frac{\frac{1}{x}+1}{\frac{2}{x}+1} = \frac{0 + 1}{0 + 1} = 1 $$

Найдем предел показателя, пользуясь все той же прото-задачей, а также результом из пункта б):

$$ \limf{x}{+\infty} \frac{1-\sqrt{x}}{1-x} = \limf{x}{+\infty} \frac{1}{1+\sqrt{x}} = \scope{\frac{1}{1+\infty} \\[10px] \frac{1}{\infty}} = 0 $$

Значит, по прото-задаче <b:[П-ссылка](advanced/proto/f-continuity/complex-exp)>:

$$ \limf{x}{+\infty} \left(\frac{1+x}{2+x}\right)^{(1-\sqrt{x})/(1-x)} = 1^0 = 1 $$