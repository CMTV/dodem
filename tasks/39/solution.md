Выполненное измерение стороны $x$ прямоугольника с погрешностью $\Delta$ будет колебаться в пределах:
$$ x - \Delta \leq x \leq x + \Delta $$

Выполненное измерение стороны $y$ прямоугольника с погрешностью $\Delta$ будет колебаться в пределах:
$$ y - \Delta \leq y \leq y + \Delta $$

Перемножим эти неравенства:
$$ xy - (x\Delta + y\Delta - \Delta^2) \leq S = xy \leq xy + x\Delta + y\Delta + \Delta^2 $$

В неравенстве выше видем две возможные оценки для абсолютной погрешности площади $\Delta_S$:

\begin{align*}
    \Delta_S &\leq (x\Delta + y\Delta - \Delta^2) \\[5px]
    \Delta_S &\leq x\Delta + y\Delta + \Delta^2
\end{align*}

Вторая оценка, очевидно, покрывает первую (потому что она больше), поэтому ей и будем пользоваться:

$$ \Delta_S \leq x\Delta + y\Delta + \Delta^2 $$

По условию требуется, чтобы абсолютная погрешность площади $\Delta_S$ была меньше $0.01$:
$$ \Delta_S \leq x\Delta + y\Delta + \Delta^2 < 0.01 $$

$$ x\Delta + y\Delta + \Delta^2 < 0.01 $$

Из условия нам известно, что $x \leq 10$ и $y\leq 10$. Сложим эти два неравенства:
$$ x+y\leq 20 $$

Домножим обе части на $\Delta$ и добавим к обеим частям $\Delta^2$:
$$ x\Delta + y\Delta + \Delta^2 \leq 20\Delta + \Delta^2 < 0.01 $$

Если мы найдем такое $\Delta$, что
$$ 20\Delta + \Delta^2 < 0.01 $$
то автоматом (по цепному неравенству) будет выполнятся и нужное нам неравенство
$$ x\Delta + y\Delta + \Delta^2 < 0.01 $$

Итак, разбираемся с неравенством
$$ 20\Delta + \Delta^2 < 0.01 $$

$$ \Delta^2 + 20\Delta - 0.01 < 0 $$

Найдем корень из дискриминанта этого квадратного уравнения:
$$ \sqrt{D} = \sqrt{400 + 0.04} \approx 20.001 $$

Найдем корни:
$$ \Delta_{1} = \frac{-20 + 20.001}{2} = 0.0005 $$
$$ \Delta_{2} = \frac{-20 - 20.001}{2} = -20,0005‬‬ $$

Так как ветви параболы направлены вверх, то область меньше $0$ будет находится между ее корнями, то есть
$$ \Delta < 0.0005 $$

---

Итак, чтобы определить площадь прямоугольника с точностью до $0.01\text{ м}^2$ надо измерить стороны $x$ и $y$ с точностью до $0.0005\text{ м}$.

$$ \Delta < 0.0005\text{ м} $$