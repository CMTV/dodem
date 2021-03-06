---
{ "tags": ["unDone"] }
---

Выясним, в каких границах лежит $r$:

$$ 7.1 \leq r \leq 7.3 $$

Формула площади круга:

$$ S = \pi \cdot r^2 $$

Умножим неравенство выше само на себя:

$$ 50.41 \leq r^2 \leq 53.29 $$

Домножим все части неравенства на $\pi$:

$$ 158.2874 \leq S = \pi\cdot r^2 \leq 167.3306 $$

Найдем площадь круга, используя средние значение радиуса:

$$ 3.14 \cdot 7.2^2 = 162.7776  $$

Итак,

$$ 158.2874 \leq 162.7776 \leq 167.3306 $$

Из неравенства выше мы можем найти верхние границы для абсолютной погрешности:

$$
\begin{aligned}
    \Delta_1 = 162.7776 - 158.2874 &= 4.4902 \\
    \Delta_2 = 167.3306 - 162.7776 &= 4.553
\end{aligned}
$$

Видим, что $\Delta_2 > \Delta_1$, поэтому реальная абсолютная погрешность будет не больше $\Delta_2$ (худшего варианта):

$$ \Delta \leq \Delta_2 = 4.553 $$