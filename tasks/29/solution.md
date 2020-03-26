Разложим неравенство по пункту 1 прото-задачи "[Упрощение модулей в неравенствах](/proto/simple-abs)":
$$ |x(1-x)| < 0.05 \Leftrightarrow \begin{cases} x(1-x) < 0.05 \\ x(1-x) > -0.05 \end{cases} $$

---

**Первое неравенство**

\begin{gather*}
    x(1-x) < 0.05
    \\
    x - x^2 < 0.05
\end{gather*}

$$ x^2 -x + 0.05 > 0 $$

Найдем дискриминант этого квадратного уравнения:
$$ D = b^2 - 4ac = 1 - 0.2 = 0.8 $$

$$ \sqrt{D} = \sqrt{\frac{8}{10}} = \sqrt{\frac{4}{5}} = \frac{2}{\sqrt{5}} $$

Найдем корни уравнения:
$$ x_1 = \frac{1 + \frac{2}{\sqrt{5}}}{2} = \frac{\sqrt{5} + 2}{2\sqrt{5}} $$

$$ x_2 = \frac{1-\frac{2}{\sqrt{5}}}{2} = \frac{\sqrt{5} - 2}{2\sqrt{5}} $$

Нам нужно найти промежутки $>0$. Так как в уравнении знак при $x^2$ положительный, значит ветви параболы направлены вверх, поэтому положительным будет объединение двух промежутков:
$$ x\in\left(-\infty, \frac{\sqrt{5} - 2}{2\sqrt{5}}\right) \ {\textstyle \bigcup} \ \left(\frac{\sqrt{5} + 2}{2\sqrt{5}}, +\infty\right) $$

**Второе неравенство**

\begin{gather*}
    x(1-x) > -0.05
    \\
    x - x^2 > -0.05
\end{gather*}

$$ x^2 - x - 0.05 < 0 $$

Найдем дискриминант этого квадратного уравнения:
$$ D = b^2 - 4ac = 1 + 0.2 = 1.2 $$

$$ \sqrt{D} = \sqrt{\frac{12}{10}} = \frac{\sqrt{6}}{\sqrt{5}} $$

Найдем корни уравнения:
$$ x_1 = \frac{1 + \frac{\sqrt{6}}{\sqrt{5}}}{2} = \frac{\sqrt{5} + \sqrt{6}}{2\sqrt{5}} $$

$$ x_2 = \frac{1-\frac{\sqrt{6}}{\sqrt{5}}}{2} = \frac{\sqrt{5} - \sqrt{6}}{2\sqrt{5}} $$

Нам нужно найти промежутки $<0$. Так как в уравнении знак при $x^2$ положительный, значит ветви параболы направлены вверх, поэтому отрицательным будет следующий промежуток:
$$ x \in \left( \frac{\sqrt{5} - \sqrt{6}}{2\sqrt{5}} , \frac{\sqrt{5} + \sqrt{6}}{2\sqrt{5}} \right) $$

---

Определим, что меньше:

\begin{align*}
    \frac{\sqrt{5} - \sqrt{6}}{2\sqrt{5}}  \quad &\text{?} \quad \frac{\sqrt{5} - 2}{2\sqrt{5}}
    \\[5px]
    \sqrt{5} - \sqrt{6} \quad &\text{?} \quad \sqrt{5} - 2
    \\[5px]
    2 \quad &\text{?} \quad \sqrt{6}
    \\[5px]
    4 &< 6
\end{align*}

Мы доказали, что
$$ \frac{\sqrt{5} - \sqrt{6}}{2\sqrt{5}} < \frac{\sqrt{5} - 2}{2\sqrt{5}} $$

Итак, мы определили промежуток, в котором находится $x$:
$$ \frac{\sqrt{5} - \sqrt{6}}{2\sqrt{5}} < x < \frac{\sqrt{5} - 2}{2\sqrt{5}} $$

---

Определим, что меньше:

\begin{align*}
    \frac{\sqrt{5} + 2}{2\sqrt{5}}  \quad &\text{?} \quad \frac{\sqrt{5} + \sqrt{6}}{2\sqrt{5}}
    \\[5px]
    \sqrt{5} + 2 \quad &\text{?} \quad \sqrt{5} + \sqrt{6}
    \\[5px]
    2 \quad &\text{?} \quad \sqrt{6}
    \\[5px]
    4 &< 6
\end{align*}

Мы доказали, что
$$ \frac{\sqrt{5} + 2}{2\sqrt{5}} < \frac{\sqrt{5} + \sqrt{6}}{2\sqrt{5}} $$

Итак, мы определили еще один промежуток, в котором может находится $x$:
$$ \frac{\sqrt{5} + 2}{2\sqrt{5}} < x < \frac{\sqrt{5} + \sqrt{6}}{2\sqrt{5}} $$

---

Итак, любой $x$ из двух промежутков ниже будет удовлетворять неравенству в условии:
$$ \frac{\sqrt{5} - \sqrt{6}}{2\sqrt{5}} < x < \frac{\sqrt{5} - 2}{2\sqrt{5}} $$

$$ \frac{\sqrt{5} + 2}{2\sqrt{5}} < x < \frac{\sqrt{5} + \sqrt{6}}{2\sqrt{5}} $$