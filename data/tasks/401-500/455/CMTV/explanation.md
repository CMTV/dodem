---
{
    "tags": ["past"]
}
---

## Пункт а)

$$ \limf{x}{1} \frac{\sqrt[m]{x}-1}{\sqrt[n]{x} - 1} = \scope{ y = x-1 \\[5px] \limf{x}{1} y(x) = 0 \\[5px] y \to 0 } = \limf{y}{0} \frac{\sqrt[m]{y+1}-1}{\sqrt[n]{y+1}-1}\cdot\frac{y}{y} = \\[10px] = \limf{y}{0} \frac{\dfrac{\sqrt[m]{y+1}-1}{y}}{\dfrac{\sqrt[n]{y+1}-1}{y}} = \frac{n}{m} $$

Выше мы воспользовались теоремой о пределе сложной функции (<p:[f/limits/composition]>), а также предыдущей задачей <t:[454]>.

## Пункт б)

Конечного предела в пункте б) нет. Скорее всего, в его условии содержится опечатка.

$$ \limf{x}{1} \left( \frac{3}{1-\sqrt{x}} - \frac{3}{1-\sqrt[3]{x}} \right) = \limf{x}{1} 3\left( \frac{1}{\sqrt[3]{x}-1} - \frac{1}{\sqrt{x} - 1} \right) = \\[10px] = \scope{ y = x-1 \\[5px] \limf{x}{1} y(x) = 0 \\[5px] y\to 0 } = \limf{y}{0} 3\left( \frac{1}{(\sqrt[3]{y+1}-1)\cdot\dfrac{y}{y}} - \frac{1}{(\sqrt{y+1}-1)\cdot\dfrac{y}{y}} \right) = \\[10px] = \limf{y}{0} 3\left( \frac{1}{\dfrac{\sqrt[3]{y+1}-1}{y}y} - \frac{1}{\dfrac{\sqrt{y+1} - 1}{y}y} \right) = \\[10px] = \limf{y}{0}\frac{3}{y}\left( \frac{1}{\dfrac{\sqrt[3]{y+1}-1}{y}} - \frac{1}{\dfrac{\sqrt{y+1}-1}{y}} \right) $$

Разберемся, почему конечного предела тут нет.

Функция $\frac{3}{y}$ стремится к бесконечности (см. прото-задачу <p:[f/limits/bm-bb]>).

Функция в скобках имеет конечный ненулевой предел (по задаче <t:[454]>). Раз она имеет конечный ненулевой предел, то существует окрестность $0$, в которой она не равна $0$.

Значит, по прото-задаче <p:[f/limits/bm-bb-operations]> получаем ситуацию $\infty \cdot f(x)$, которая равна $\infty$:

$$ \limf{x}{1} \left( \frac{3}{1-\sqrt{x}} - \frac{3}{1-\sqrt[3]{x}} \right) = \infty $$