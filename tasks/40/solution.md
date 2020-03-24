Выполненное измерение величины $x$ с погрешностью $\Delta_x$ будет колебаться в пределах:
$$ x - \Delta_x \leq x \leq x + \Delta_x $$

Выполненное измерение величины $y$ с погрешностью $\Delta_y$ будет колебаться в пределах:
$$ y - \Delta_y \leq y \leq y + \Delta_y $$

Перемножим эти неравенства:
$$ xy - (x\Delta_y + y\Delta_x - \Delta_x\Delta_y) \leq xy \leq xy + x\Delta_y + y\Delta_x + \Delta_x\Delta_y $$

В неравенстве выше видем две возможные оценки для абсолютной погрешности $\Delta_{xy}$:

\begin{align*}
    \Delta_{xy} &\leq (x\Delta_y + y\Delta_x - \Delta_x\Delta_y) \\[5px]
    \Delta_{xy} &\leq x\Delta_y + y\Delta_x + \Delta_x\Delta_y
\end{align*}

Вторая оценка, очевидно, покрывает первую (потому что она больше), поэтому ей и будем пользоваться:

$$ \Delta_{xy} \leq x\Delta_y + y\Delta_x + \Delta_x\Delta_y $$

Делим это неравенство на $xy$:

$$ \frac{\Delta_{xy}}{xy} \leq \frac{\Delta_y}{y} + \frac{\Delta_x}{x} + \frac{\Delta_x\Delta_y}{xy} $$

Каждая дробь представляет собой относительную погрешность, так как ее формула:
$$ \delta_a = \frac{\Delta_a}{|a|} $$

Поэтому, получаем

$$ \delta_{xy} \leq \delta(x) + \delta(y) + \delta(x)\delta(y) $$

$\blacksquare$