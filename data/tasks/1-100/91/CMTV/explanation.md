---
{ "tags": ["past"] }
---

Распишем по определению предел $x_n$:

$$ \limn x_n = a \Leftrightarrow \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |x_n-a| < \varepsilon $$

В пункте а) задачи <t:[21]> доказывалось, что

$$ |x-y| \geq ||x|-|y|| $$

Применим это свойство модуля к последнему неравенству в определении выше:

$$ ||x_n|-|a|| \leq |x_n - a| < \varepsilon $$

$$ ||x_n|-|a|| < \varepsilon $$

Получается, что

$$ \forall \varepsilon > 0 \ \exists N = (\varepsilon) \ \forall n > N \ : \ ||x_n|-|a|| < \varepsilon $$

Это по определению означает, что

$$ \limn |x_n| = |a| $$

$\blacksquare$