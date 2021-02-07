---
{ "tags": ["unDone"] }
---

Поработаем над данной в условии последовательностью:
$$ \sqrt{n+1} - \sqrt{n} $$

Домножим ее на такую дробь, чтобы получить разность квадратов:
$$ (\sqrt{n+1} - \sqrt{n})\cdot\frac{\sqrt{n+1} + \sqrt{n}}{\sqrt{n+1} + \sqrt{n}} $$

При этом сама последовательность не меняется, так как в сущности мы домножили ее на $1$.

$$ (\sqrt{n+1} - \sqrt{n})\cdot\frac{\sqrt{n+1} + \sqrt{n}}{\sqrt{n+1} + \sqrt{n}} = \frac{1}{\sqrt{n+1} + \sqrt{n}} $$

Итак:
$$ \sqrt{n+1} - \sqrt{n} = \frac{1}{\sqrt{n+1} + \sqrt{n}} $$

Теперь докажем следующее неравенство:
$$ \frac{1}{\sqrt{n+1} + \sqrt{n}} \overset{\text{?}}{<} \frac{1}{\sqrt{n}} $$

Умножаем обе части на $\sqrt{n+1} + \sqrt{n}$:
$$ 1 \overset{\text{?}}{<} \frac{\sqrt{n+1}}{\sqrt{n}} + 1 $$

Вычитаем из обеих частей $1$ и получаем очевидное неравенство (так как правая часть всегда положительна):

$$ 0 < \frac{\sqrt{n+1}}{\sqrt{n}} $$

Итак, мы доказали, что:
$$ \frac{1}{\sqrt{n+1} + \sqrt{n}} < \frac{1}{\sqrt{n}} $$

Значит, нашу последовательность из условия можно "зажать":
$$ 0 < \sqrt{n+1}-\sqrt{n} = \frac{1}{\sqrt{n+1} + \sqrt{n}} < \frac{1}{\sqrt{n}} $$

Предел $0$ при $n\to\infty$ равен $0$. Предел $\frac{1}{\sqrt{n}}$ при $n\to\infty$, как мы доказали в начале, тоже равен $0$.

По теореме о двух милиционерах это означает, что и наша "зажатая" последовательность тоже стремится к $0$:
$$ \lim_{n\to\infty} \sqrt{n+1} - \sqrt{n} = 0 $$