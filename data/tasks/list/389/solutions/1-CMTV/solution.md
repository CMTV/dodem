Покажем, что $f(x)$ четная:

$$ f(-x) = \frac{1}{1+(-x)^2} = \frac{1}{1+(-1)^2x^2} = \frac{1}{1+x^2} = f(x) $$

Значит, можем ограничиться только положительными $x$.

## Верхняя грань

Как уже написали выше, изучаем положительные $x$:

$$ x \geq 0 $$

Возводим обе части в квадрат:

$$ x^2 \geq 0 $$

Прибавляем к обеим частям $1$:

$$ 1+x^2 \geq 1 $$

Делим обе части на $1+x^2$:

$$ f(x)=\frac{1}{1+x^2} \leq 1 $$

Получается, что $1$ является верхней границей $f(x)$. Она также является и точной, ведь, какую более маленькую границу не возьми, всегда $f(0) = 1$ окажется больше ее. Поэтому $1$ является наименьшей, то есть точной верхней гранью $f(x)$.

## Нижняя грань

Замечаем, что при увеличении $x$ знаменатель $f(x)$ уходит в бесконечность, отчего сама $f(x)$ уходит в $0$. Отсюда можно предположить, что $0$ и является точной нижней гранью.

По крайней мере, $0$ является обычной нижней границей, так как какой $x$ не возьми, $f(x)$ всегда будет строго больше $0$:

$$ f(x) \geq 0 \qquad \frac{1}{1+x^2} \geq 0 \qquad 1 \geq 0 $$

Покажем, что $0$ является наибольшей нижней границей. Для этого построим следующую последовательность значений функции:

$$ y_n = \frac{1}{1+n^2} $$

Ее предел равен $0$:

$$ \limn y_n = 0 $$

||| spoiler Доказательство

Последовательность $y_n$ можно "зажать" между двумя другими последовательностями:

$$ 0 \leq y_n = \frac{1}{1+n^2} \leq \frac{1}{n^2} $$

Последовательность из $0$ слева стремится к $0$. Последовательность справа тоже стремится к $0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>). Значит, по теореме о двух милиционерах, "зажатая" между ними последовательность $y_n$ тоже стремится к $0$

$\blacksquare$

|||

По определению это означает, что какую окрестность $0$ не возьми, в ней всегда будет находится бесконечное число значений функции. Значит, не может существовать никакой нижней границы, большей $0$, ведь тогда между ней и $0$ окажется бесконечно много значений функции.

Поэтому $0$ — точная нижняя грань $f(x)$.

$\blacksquare$