$$ \phi[\phi(x)] $$

Пусть $x \leq 0$. Тогда $\phi(x) = 0$ и

$$ \phi(\phi(x)) = \phi(0) = 0 $$

Поэтому

$$ \phi(x) = \phi(\phi(x)) = 0 $$

Пусть $x > 0$. Тогда $\phi(x) = x$ и

$$ \phi(\phi(x)) = \phi(x) = x $$

Мы доказали, что для всех чисел $x$ имеем:

$$ \phi[\phi(x)] = \phi(x) $$

---

$$ \psi[\psi(x)] $$

Для $x\leq 0$ значения функции $\psi(x)$ точно такие же, как и у $\phi(x)$, поэтому:

$$ \psi(x) = \psi(\psi(x)) = 0 $$

Пусть $x>0$. Тогда $\psi(x) = -x^2$. То есть получаем только отрицаетльные значения. Это значит, что применяя функцию $\psi$ еще раз будем получать $0$.

Итак, при любых $x$

$$ \psi[\psi(x)] = 0 $$

---

$$ \phi[\psi(x)] $$

Для $x\leq 0$ опять имеем:

$$ \phi[\psi(x)] = 0 $$

Для положительных $x > 0$ имеем $\psi(x) = -x^2$, то есть отрицательные значения. Применяя $\phi$ к отрицательным значениям получаем $0$, поэтому для любых $x$

$$ \phi[\psi(x)] = 0 $$

---

$$ \psi[\phi(x)] $$

Для $x\leq 0$:

$$ \psi(\phi(x)) = 0 $$

Пусть $x>0$, тогда $\phi(x) = x$, то есть положительные значения. Применяя $\phi$ к положительным значениям получаем $-x^2$. В итоге наши результаты совпадают с самим определением функции $\psi$, поэтому:

$$ \psi[\phi(x)] = \psi(x) $$