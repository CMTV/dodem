---
{
    "tags": [
        "unDone"
    ]
}
---

Докажем, что нет наибольшего элемента. Докажем от противного. Пусть есть какая-то наибольшая дробь $\frac{m}{n}$. Рассмотрим такую дробь:

$$ \frac{m}{n} + \frac{1}{n+1} $$

Эта дробь немного больше, чем $\frac{m}{n}$. Докажем, что она правильная, то есть:

$$ \frac{m}{n} + \frac{1}{n+1} < 1 $$

$$ \frac{mn + n + m}{n(n+1)} < 1 $$

$$ mn + n + m < n^2 + n $$

$$ n^2 > mn + m $$

По условию нам известно, что $n > m$. Так как $n$ и $m$ — натуральные числа, верно неравенство:

$$ n-1 \geq m $$

Поэтому достаточно показать верность неравенства при $m=n-1$, тогда оно будет выполняться и для всех меньших $m$:

$$ n^2 > (n-1)n + (n-1) \geq mn + m $$

Итак, докажем, что

$$
    n^2 > (n-1)n + (n-1)
    \\
    n^2 > n^2 - n + n -1
    \\
    0 > -1
$$

Мы показали, что

$$ \frac{m}{n} < \frac{m}{n} + \frac{1}{n+1} < 1, $$

то есть дробь $\frac{m}{n}$ не является наибольшей. Получили противоречие.

Итак, мы показали, что не существует наибольшей правильной дроби.

$\blacksquare$

Доказательство того, что не существует наименьшего элемента, производится аналогично. Для этого надо лишь рассмотреть дробь:

$$ \frac{m}{n} - \frac{1}{n+1} $$

---

Обозначим рассматриваемое множество правильных дробей за $X$:

$$ X = \set{\frac{m}{n}} $$

Докажем, что $1$ — точная верхняя грань множества $X$:

$$ \sup X = 1 $$

Для этого надо доказать два пункта:

1. $ \forall x \in X \ : \ x \leq 1 $
2. $ \forall \varepsilon > 0 \ \exists x' \in X \ : \ x' > 1 - \varepsilon $

**Доказательство п.1**

Докажем, что

$$ \forall x \in X \ : \ x \leq 1 $$

То есть, какую бы правильную дробь $x$ мы не взяли, она всегда будет строго меньше $1$.

Рассмотрим произвольный элемент $x\in X$. Это некоторая правильная дробь $\frac{m}{n}$. Докажем, что она меньше $1$:

$$ x = \frac{m}{n} \leq 1 $$

Домножим обе части на $n$:

$$ m < n $$

Это верное неравенство, так как это и есть часть определения правильной дроби (это также приведено в условии этой задачи).

$\blacksquare$

**Доказательство п.2**

Докажем, что

$$ \forall \varepsilon > 0 \ \exists x' \in X \ : \ x' > 1 - \varepsilon $$

То есть, если мы уменьшим на $1$ на какую-то произвольно маленькую величину $\varepsilon$, то найдется такая правильная дробь, которая будет больше $1-\varepsilon$.

Если $\varepsilon \geq 1$, то $1-\varepsilon \leq 0$. Поэтому любая правильная дробь и будет тем самым $x'$, так как любая правильная дробь — положительное число.

Теперь рассмотрим случай, когда $\varepsilon < 1$. Тогда:

$$ 0 < 1 - \varepsilon < 1 $$

Если $1 - \varepsilon$ — рациональное число, то оно является правильной дробью, которую можно представить в виде

$$ 1-\varepsilon = \frac{m_\varepsilon}{n_\varepsilon} $$

В начале решения мы доказали, что у множества правильных дробей нет наибольшего элемента, поэтому за $x'$ можно взять следующую дробь:

$$ 1 > x' = \frac{m_\varepsilon}{n_\varepsilon} + \frac{1}{n_\varepsilon + 1} > 1 - \varepsilon $$

Если $1-\varepsilon$ — иррациональное число, то есть какое-то сечение $A/A'$ в рациональных числах, которое и определяет число $1-\varepsilon$.