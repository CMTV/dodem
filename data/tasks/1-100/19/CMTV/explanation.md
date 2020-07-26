---
{
	"tags": ["unDone"]
}
---

## Пункт а)

$$ \inf\set{x+y} = \inf\set{x} + \inf\set{y} $$

Нужно доказать два пункта:

$$ \text{1) } \forall (x+y) \in \set{x+y} \ : \ (x+y) \geq \inf\set{x} + \inf\set{y} $$

$$ \text{2) } \forall \varepsilon > 0 \ \exists (x'+y')\in\set{x+y} \ : \ (x'+y') < \inf\set{x} + \inf\set{y} + \varepsilon $$

**Доказательство п.1)**

Докажем от противного:

$$ \exists (x+y) \in \set{x+y} \ : \ (x+y) < \inf\set{x} + \inf\set{y} $$

То есть, существует такая сумма $(x+y)$, которая меньше суммы инфинумов множеств $\set{x}$ и $\set{y}$.
Раз существует сумма, то существуют и составляющие ее слагаемые: $x$ и $y$.

Из определения $\inf\set{x}$:

$$ x \geq \inf\set{x} $$

Из определения $\inf\set{y}$:

$$ y\geq\inf\set{y} $$

Сложим оба неравенства:

$$ x+y \geq \inf\set{x} + \inf\set{y} $$

Получаем два противоречащих друг другу неравенства:

$$
    x+y \geq \inf\set{x} + \inf\set{y}
    \\
    x+y < \inf\set{x} + \inf\set{y}
$$

То есть, $x+y$ одновременно меньше и не меньше суммы инфинумов. Противоречие.

Значит, выполняется обратное, то есть

$$ \forall (x+y) \in \set{x+y} \ : \ (x+y) \geq \inf\set{x} + \inf\set{y} $$

**Доказательство п.2)**

Докажем от противного:

$$ \exists \varepsilon' > 0 \ \forall (x'+y')\in\set{x+y} \ : \ (x'+y') \geq \inf\set{x} + \inf\set{y} + \varepsilon' $$

То есть, существует такое $\varepsilon' > 0$ что произвольная сумма $x' + y'$ не будет меньше суммы инфинумов и $\varepsilon'$.
Раз мы рассматриваем произвольную сумму $(x' + y')$, то есть какие-то $x'\in\set{x}$ и $y'\in\set{y}$, из которых она состоит.

Из определения $\inf\set{x}$:

$$ \forall \varepsilon > 0 \ \exists x' < \inf\set{x} + \varepsilon $$

Так как это выражение работает для любого $\varepsilon$, то оно работает и для $\frac{\varepsilon'}{2}$:

$$ \text{для } \frac{\varepsilon'}{2} \ \exists x'' < \inf\set{x} + \frac{\varepsilon'}{2} $$

Из определения $\inf\set{y}$:

$$ \forall \varepsilon > 0 \ \exists y' < \inf\set{y} + \varepsilon $$

Так как это выражение работает для любого $\varepsilon$, то оно работает и для $\frac{\varepsilon'}{2}$:

$$ \text{для } \frac{\varepsilon'}{2} \ \exists y'' < \inf\set{y} + \frac{\varepsilon'}{2} $$

Итак, имеем два неравенства:

$$ x'' < \inf\set{x} + \frac{\varepsilon'}{2} $$

$$ y'' < \inf\set{y} + \frac{\varepsilon'}{2} $$

Сложим их:

$$ x'' + y'' < \inf\set{x} + \inf\set{y} + \varepsilon' $$

Итак, по предположению от противного,

$$ \forall (x'+y')\in\set{x+y} \ : \ (x'+y') \geq \inf\set{x} + \inf\set{y} + \varepsilon' $$

Раз выполняется для всех сумм, то выполняется и для суммы $x'' + y''$, поэтому получаем два противоречащих друг другу неравенства:

$$
    x'' + y'' \geq \inf\set{x} + \inf\set{y} + \varepsilon'
    \\
    x'' + y'' < \inf\set{x} + \inf\set{y} + \varepsilon'
$$

Сумма $x''+y''$ получается одновременно меньше и не меньше суммы инфинумов и $\varepsilon'$. Противоречение.

Значит, выполняется обратное, то есть

$$ \forall \varepsilon > 0 \ \exists (x'+y')\in\set{x+y} \ : \ (x'+y') < \inf\set{x} + \inf\set{y} + \varepsilon $$

Итак, по пункту 1) сумма $\inf\set{x} + \inf\set{y}$ является нижней гранью множества $\set{x+y}$, а по пункту 2) она является точной нижней гранью:

$$ \inf\set{x+y} = \inf\set{x} + \inf\set{y} $$

$\blacksquare$

## Пункт б)

$$ \sup\set{x+y} = \sup\set{x} + \sup\set{y} $$

Доказательство точно такое же, как и доказательство а), приведенное выше, только доказать надо следующие два пункта:

$$ \text{1) } \forall (x+y) \in \set{x+y} \ : \ (x+y) \leq \sup\set{x} + \sup\set{y} $$

$$ \text{2) } \forall \varepsilon > 0 \ \exists (x'+y')\in\set{x+y} \ : \ (x'+y') > \sup\set{x} + \sup\set{y} - \varepsilon $$