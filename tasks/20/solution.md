Докажем сначала важное свойство. Если числовое множество $\set{x}$ состоит из неотрицательных чисел, то $\inf\set{x} \geq 0$ и $\sup\set{x} \geq 0$.

Запишем, что означает, что $\set{x}$ состоит из неотрицательных чисел:

$$ \forall x \in \set{x} \ : \ x \geq 0 $$

Из этой записи по определению следует, что $0$ — нижняя граница $\set{x}$. Если $0$ и является точной нижней границей, то все нормально. Если нет, то точная нижняя граница будет, по определению, больше $0$.

Итак, мы доказали, что если $\set{x}$ состоит из неотрицательных чисел, то $\inf\set{x} \geq 0$.

Точная верхняя грань не меньше любого элемента из $\set{x}$, а потому она не меньше, чем $\inf\set{x}$:

$$ \sup\set{x} \geq \forall x \in \set{x} \geq \inf\set{x} \geq 0 $$

---

**Доказательство а)**

$$ \inf\set{xy} = \inf\set{x}\inf\set{y} $$

Нужно доказать два пункта:

$$ \text{1) } \forall (xy) \in \set{xy} \ : \ (xy) \geq \inf\set{x}\inf\set{y} $$

$$ \text{2) } \forall \varepsilon > 0 \ \exists (x'y')\in\set{xy} \ : \ (x'y') < \inf\set{x}\inf\set{y} + \varepsilon $$

*Доказательство п.1)*

Докажем от противного:

$$ \exists (xy) \in \set{xy} \ : \ (xy) < \inf\set{x}\inf\set{y} $$ 

То есть, существует такое произведение $(xy)$, которая меньше произведения инфинумов множеств $\set{x}$ и $\set{y}$.
Раз существует произведение, то существуют и составляющие его множители: $x$ и $y$.

Из определения $\inf\set{x}$:

$$ x \geq \inf\set{x} $$

Из определения $\inf\set{y}$:

$$ y \geq \inf\set{y} $$

Уножим друг на друга оба неравенства (мы можем их умножить, так как $\inf\set{x} \geq 0$ и $\inf\set{y} \geq 0$, как мы показали в начале решения):

$$ xy \geq \inf\set{x}\inf\set{y} $$

Получаем два противоречащих друг другу неравенства:

\begin{gather*}
    xy \geq \inf\set{x}\inf\set{y}
    \\[5px]
    xy < \inf\set{x}\inf\set{y}
\end{gather*}

То есть, $xy$ одновременно меньше и не меньше произведения инфинумов. Противоречие.

Значит, выполняется обратное, то есть

$$ \forall (xy) \in \set{xy} \ : \ (xy) \geq \inf\set{x}\inf\set{y} $$

$\blacksquare$

*Доказательство п.2)*

Докажем от противного:

$$ \exists \varepsilon' > 0 \ \forall (x'y')\in\set{xy} \ : \ (x'y') \geq \inf\set{x}\inf\set{y} + \varepsilon' $$

То есть, существует такое $\varepsilon' > 0$ что произвольное произведение $x'y'$ не будет меньше произведения инфинумов, плюс $\varepsilon'$.
Раз мы рассматриваем произвольное произведение $(x'y')$, то есть какие-то множители $x'\in\set{x}$ и $y'\in\set{y}$, из которых оно состоит.

Из определения $\inf\set{x}$:

$$ \forall \varepsilon > 0 \ \exists x' < \inf\set{x} + \varepsilon $$

Так как это выражение работает для любого $\varepsilon$, то оно работает и для числа
$$ \frac{\inf\set{x}\varepsilon'}{\inf\set{x} + \inf\set{y}} $$

То есть, для положительного числа выше

$$ \exists x'' < \inf\set{x} + \frac{\inf\set{x}\varepsilon'}{\inf\set{x} + \inf\set{y}} $$

Из определения $\inf\set{y}$:

$$ \forall \varepsilon > 0 \ \exists y' < \inf\set{y} + \varepsilon $$

Так как это выражение работает для любого $\varepsilon$, то оно работает и для числа
$$ \frac{\inf\set{y}\varepsilon'}{\inf\set{x} + \inf\set{y}} $$

То есть, для положительного числа выше

$$ \exists y'' < \inf\set{y} + \frac{\inf\set{y}\varepsilon'}{\inf\set{x} + \inf\set{y}} $$

Итак, имеем два неравенства:

$$ x'' < \inf\set{x} + \frac{\inf\set{x}\varepsilon'}{\inf\set{x} + \inf\set{y}} $$

$$ y'' < \inf\set{y} + \frac{\inf\set{y}\varepsilon'}{\inf\set{x} + \inf\set{y}} $$

Умножим эти два неравенства друг на друга:

$$ x''y'' < \inf\set{x}\inf\set{y} + \frac{\inf\set{x}\varepsilon' + \inf\set{y}\varepsilon'}{\inf\set{x} + \inf\set{y}} + \frac{\inf\set{x}\inf\set{y}\varepsilon'^2}{(\inf\set{x} + \inf\set{y})^2} $$

$$ x''y'' < \inf\set{x}\inf\set{y} + \varepsilon' + \frac{\inf\set{x}\inf\set{y}\varepsilon'^2}{(\inf\set{x} + \inf\set{y})^2} $$

Неравенство можно усилить, отбросив последнее положительное слагаемое:

$$ x''y'' < \inf\set{x}\inf\set{y} + \varepsilon' $$

По предположению от противного,

$$ \forall (x'y')\in\set{xy} \ : \ (x'y') \geq \inf\set{x}\inf\set{y} + \varepsilon' $$

Раз выполняется для всех сумм, то выполняется и для произведения $x''y''$, поэтому получаем два противоречащих друг другу неравенства:

\begin{gather*}
    x''y'' \geq \inf\set{x}\inf\set{y} + \varepsilon'
    \\[5px]
    x''y'' < \inf\set{x}\inf\set{y} + \varepsilon'
\end{gather*}

Произведение $x''y''$ получается одновременно меньше и не меньше произведения инфинумов, плюс $\varepsilon'$. Противоречение.

Значит, выполняется обратное, то есть

$$ \forall \varepsilon > 0 \ \exists (x'y')\in\set{xy} \ : \ (x'y') < \inf\set{x}\inf\set{y} + \varepsilon $$

$\blacksquare$

Итак, по пункту 1) произведение $\inf\set{x}\inf\set{y}$ является нижней гранью множества $\set{xy}$, а по пункту 2) оно является точной нижней гранью:

$$ \inf\set{xy} = \inf\set{x}\inf\set{y} $$

$\blacksquare$

---

**Доказательство б)**

$$ \sup\set{xy} = \sup\set{x}\sup\set{y} $$

Доказательство точно такое же, как и доказательство а), приведенное выше, только доказать надо следующие два пункта:

$$ \text{1) } \forall (xy) \in \set{xy} \ : \ (xy) \leq \sup\set{x}\sup\set{y} $$

$$ \text{2) } \forall \varepsilon > 0 \ \exists (x'y')\in\set{xy} \ : \ (x'y') > \sup\set{x}\sup\set{y} - \varepsilon $$