Оба корня квадратного уравнения в общем виде получаются по формуле:

$$ x_{1,2} = \frac{-b\pm\sqrt{b^2-4ac}}{2a} $$

С помощью формулы разности квадратов избавимся от иррациональности в числителе:

$$ \frac{-b\pm\sqrt{b^2-4ac}}{2a} \cdot \frac{(-b\mp\sqrt{b^2-4ac})}{(-b\mp\sqrt{b^2-4ac})} = \frac{b^2 - b^2 + 4ac}{2a(-b\mp\sqrt{b^2-4ac})} = \\[10px] = \frac{4ac}{2a(-b\mp\sqrt{b^2-4ac})} = \frac{2c}{-b\mp\sqrt{b^2-4ac}} $$

Посмотрим теперь, что происходит с корнями при $a\to 0$ (пользуясь прото-задачами <b:[П-ссылка](advanced/proto/f-lim/elementary)>, <b:[П-ссылка](advanced/proto/f-lim/f-power)> и <b:[П-ссылка](advanced/proto/f-lim/composition)>):

$$ \limf{a}{0} x_1 = \limf{a}{0} \frac{2c}{-b-\sqrt{b^2-4ac}} = \frac{2c}{-b-\sqrt{b^2-0}} = -\frac{c}{b} $$

$$ \limf{a}{0} x_2 = \limf{a}{0} \frac{2c}{-b-\sqrt{b^2+4ac}} = 2c\limf{a}{0}\frac{1}{-b+\sqrt{b^2+4ac}} = \ldots $$

Видим, что знаменатель стремится к $0$, то есть является бесконечно малой функцией. По прото-задачам <b:[П-ссылка](advanced/proto/f-lim/bm-bb)> и <b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>:

$$ \ldots = 2c\cdot \infty = \infty $$

Итак, в квадратном уравнении общего вида при стремлении $a$ к $0$ один корень стремится к $-\frac{c}{b}$, а второй уходит в бесконечность.