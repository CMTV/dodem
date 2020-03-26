**Доказательство а)**

$$ \inf\set{-x} = -\sup\set{x} $$

Доказывать будем в обратную сторону, то есть

$$ -\sup\set{x} = \inf\set{-x} $$

Нужно доказать два пункта:

1. $-\sup\set{x}$ является нижней границей $\set{-x}$
2. $\forall \varepsilon > 0 \ \exists y' \in \set{-x} \ : \ y' < -\sup\set{x} + \varepsilon$

*Доказательство 1*

Докажем, что $-\sup\set{x}$ является нижней границей $\set{-x}$, то есть

$$ \forall y \in \set{-x} \ : \ -\sup\set{x} \leq y $$

Будем доказывать от противного:

$$ \exists y \in \set{-x} \ : \ -\sup\set{x} > y $$

Умножим неравенство в конце на $-1$. Получаем, что

$$ \exists y \in \set{-x} \ : \ \sup\set{x} < -y $$

Так как $y\in\set{-x}$, то $-y\in\set{x}$ (по определению множеств $\set{x}$ и $\set{-x}$).

Из определения $\sup\set{x}$:
$$ \forall x \in \set{x} \ : \ x \leq \sup\set{x} $$

Но $-y$ тоже принадлежит $\set{x}$, поэтому неравенство должно выполняться и для него тоже:
$$ -y \leq \sup\set{x} $$

Получаем два противоречащих друг другу неравенства:
$$ \sup\set{x} < -y  \qquad -y \leq \sup\set{x} $$

Получается, что $\sup\set{x}$ одновременно меньше и не меньше числа $-y$. Противоречие.

Итак, мы показали, что

$$ \forall y \in \set{-x} \ : \ -\sup\set{x} \leq y $$

То есть, $-\sup\set{x}$ является нижней границей множества $\set{-x}$.

$\blacksquare$

*Доказательство 2*

По определению $\sup\set{x}$:

$$ \forall \varepsilon > 0 \ \exists x' \in \set{x} \ : \ x' > \sup\set{x} - \varepsilon $$

Неравенство в конце умножим на $-1$:

$$ \forall \varepsilon > 0 \ \exists x' \in \set{x} \ : \ -x' < -\sup\set{x} + \varepsilon $$

Но если $x'\in\set{x}$, то $y' = -x'$ принадлежит $\set{-x}$ (по определению множеств $\set{x}$ и $\set{-x}$).

Поэтому верно следующее

$$ \forall \varepsilon > 0 \ \exists y' \in \set{-x} \ : \ y' < -\sup\set{x} + \varepsilon $$

$\blacksquare$

---

**Доказательство б)**

$$ \sup\set{-x} = -\inf\set{x} $$

Доказывать будем в обратную сторону, то есть

$$ -\inf\set{x} = \sup\set{-x} $$

Нужно доказать два пункта:

1. $-\inf\set{x}$ является верхней границей $\set{-x}$
2. $\forall \varepsilon > 0 \ \exists y' \in \set{-x} \ : \ y' > -\inf\set{x} - \varepsilon$

*Доказательство 1*

Докажем, что $-\inf\set{x}$ является верхней границей $\set{-x}$, то есть

$$ \forall y \in \set{-x} \ : \ y \leq -\inf\set{x} $$

Будем доказывать от противного:

$$ \exists y \in \set{-x} \ : \ y > -\inf\set{x} $$

Умножим неравенство в конце на $-1$:

$$ \exists y \in \set{-x} \ : \ -y < \inf\set{x} $$

Так как $y\in\set{-x}$, то $-y\in\set{x}$ (по определению множеств $\set{x}$ и $\set{-x}$).

Из определения $\inf\set{x}$:

$$ \forall x \in \set{x} \ : \ x \geq \inf\set{x} $$

Но $-y$ тоже принадлежит $\set{x}$, поэтому неравенство должно выполняться и для него тоже:

$$ -y \geq \inf\set{x} $$

Получаем два противоречащих друг другу неравенства:
$$ \inf\set{x} \leq -y  \qquad -y < \inf\set{x} $$

Получается, что $\inf\set{x}$ одновременно больше и не больше числа $-y$. Противоречие.

Итак, мы показали, что

$$ \forall y \in \set{-x} \ : \ y \leq -\inf\set{x} $$

То есть, $-\inf\set{x}$ является верхней границей множества $\set{-x}$.

*Доказательство 2*

По определению $\inf\set{x}$:

$$ \forall \varepsilon > 0 \ \exists x' \in \set{x} \ : \ x' < \inf\set{x} + \varepsilon $$

Неравенство в конце умножим на $-1$:

$$ \forall \varepsilon > 0 \ \exists x' \in \set{x} \ : \ -x' < -\inf\set{x} - \varepsilon $$

Но если $x'\in\set{x}$, то $y' = -x'$ принадлежит $\set{-x}$ (по определению множеств $\set{x}$ и $\set{-x}$).

Поэтому верно следующее

$$ \forall \varepsilon > 0 \ \exists y' \in \set{-x} \ : \ y' < -\inf\set{x} - \varepsilon $$

$\blacksquare$