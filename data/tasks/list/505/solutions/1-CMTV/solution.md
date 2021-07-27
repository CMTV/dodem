Используем формулу разности синусов (см. указание):

$$ \sin \sqrt{x+1} - \sin\sqrt{x} = \\[10px] = \sin\left(\frac{\sqrt{x+1} - \sqrt{x}}{2}\right)\cdot 2\cos\left(\frac{\sqrt{x+1}+\sqrt{x}}{2}\right) $$

Введем следующие обозначения:

$$ f(x) = \sin\left(\frac{\sqrt{x+1} - \sqrt{x}}{2}\right) \\[10px] g(x) = 2\cos\left(\frac{\sqrt{x+1}+\sqrt{x}}{2}\right) $$

## Функция $f(x)$

Докажем, что выражение под синусом стремится к $0$ при $x\to +\infty$, используя прото-задачу <b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)>, а также свойства предела степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>):

$$ \limf{x}{+\infty} \frac{\sqrt{x+1}-\sqrt{x}}{2} = \limf{x}{+\infty} \frac{1}{2(\sqrt{x+1}+\sqrt{x})} = \\[10px] = \scope{ \frac{1}{2((+\infty) + (+\infty))} = \frac{1}{2\cdot(+\infty)} = \frac{1}{+\infty} = 0 } = 0 $$

Раз аргумент синуса стремится к $0$, то, согласно непрерывности синуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>) он сам стремится к $\sin 0 = 0$.

Мы доказали, что

$$ \limf{x}{+\infty} f(x) = 0 $$

## Функция $g(x)$

По определению функции косинуса его значение ни при каких аргументах не может оказаться больше $1$ или меньше $-1$:

$$ -1 \leq \cos\left(\frac{\sqrt{x+1}+\sqrt{x}}{2}\right) \leq 1  $$

Умножим все части неравенства на $2$:

$$ -2 \leq 2\cos\left(\frac{\sqrt{x+1}+\sqrt{x}}{2}\right) \leq 2 $$

Мы показали, что $g(x)$ — ограниченная функция.

## Итог

Нам нужно найти значение следующего предела:

$$ \limf{x}{+\infty} f(x)g(x) $$

Получаем произведение бесконечно малой функции $f(x)$ и ограниченной $g(x)$. По прото-задаче <b:[П-ссылка](advanced/proto/f-lim/bm-bb-operations)> предел такого произведения равен $0$:

$$ \limf{x}{+\infty} f(x)g(x) = \limf{x}{+\infty} (\sin \sqrt{x+1} - \sin\sqrt{x}) = 0 $$