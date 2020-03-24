**Доказательство а)**

$$ \inf\set{-x} = -\sup\set{x} $$

Докажем, что $-\sup\set{x}$ является нижней границей множества $\set{-x}$:

$$ \forall \overline{x} \in \set{-x} \ : \ -\sup\set{x} \leq \overline{x} $$

Будем доказывать от противного:

$$ \exists \overline{x} \in \set{-x} \ : \ -\sup\set{x} > \overline{x} $$

Умножим неравенство в конце на $-1$. Получаем, что

$$ \exists \overline{x} \in \set{-x} \ : \ \sup\set{x} < -\overline{x} $$

Так как $\overline{x}\in\set{-x}$, то $-\overline{x}\in\set{x}$ (по определению множеств $\set{x}$ и $\set{-x}$).

По определению $\sup\set{x}$ означает, что
$$ \forall x \in \set{x} \ : \ x \leq \sup\set{x} $$

Но $-\overline{x}$ тоже принадлежит $\set{x}$, поэтому неравенство должно выполняться и для него тоже:
$$ -\overline{x} \leq \sup\set{x} $$

Получаем два противоречащих друг другу неравенства:
$$ \sup\set{x} < -\overline{x}  \qquad -\overline{x} \leq \sup\set{x} $$

Получается, что $\sup\set{x}$ одновременно меньше и не меньше числа $-\overline{x}$. Получили противоречие.

Итак, мы показали, что

$$ \forall \overline{x} \in \set{-x} \ : \ -\sup\set{x} \leq \overline{x} $$

То есть, $-\sup\set{x}$ является нижней границей множества $\set{-x}$.

Теперь докажем, что $-\sup\set{x}$ является точной нижней границей множества $\set{-x}$:

$$ \forall \varepsilon > 0 \ \exists \overline{x}' \in \set{-x} \ : \ \overline{x}' < -\sup\set{x} + \varepsilon $$

Будем доказывать от противного:

$$ \exists \varepsilon > 0 \ \forall \overline{x}' \in \set{-x} \ : \ \overline{x}' \geq -\sup\set{x} + \varepsilon  $$

Умножим неравенство в конце на $-1$. Получаем, что

$$ \exists \varepsilon > 0 \ \forall \overline{x}' \in \set{-x} \ : \ -\overline{x}' \leq \sup\set{x} - \varepsilon  $$

Так как $\overline{x}\in\set{-x}$, то $-\overline{x}\in\set{x}$ (по определению множеств $\set{x}$ и $\set{-x}$).

По определению $\sup\set{x}$ означает, что
$$ \forall \varepsilon \ \exists x'\in\set{x} \ : \ x' >  $$

---

**Доказательство б)**