Будем рассмотривать две подпоследовательности для четных и нечетных $n$.

---

**Четные $n$**

$$ x_{2n} = \left( 1 + 2^{2n} \right)^{\frac{1}{2n}} $$

Внутри скобок вынесем за скобки $2^{2n}$

$$ x_{2n} = \left(2^{2n}\right)^{\frac{1}{2n}}\left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} = 2\left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} $$

$$ x_{2n} = 2\left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} $$

Найдем предел этой подпоследовательности:

$$ \limn x_{2n} = \limn 2\left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} = 2\limn \left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} $$

Докажем неравенство:

$$ \left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} < 1 + \frac{1}{2^{2n}} $$

Поделим обе части на $1 + \frac{1}{2^{2n}}$:

$$ \left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n} - 1} < \left( 1 + \frac{1}{2^{2n}} \right)^0 $$

Перейдем к сравнению показателей:

$$ \frac{1}{2^{2n}} - 1 < 0 $$

$$ 1 < 2^{2n} $$

Это неравенство выполняется при любом натуральном $n$.

Итак, мы доказали, что

$$ \left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} < 1 + \frac{1}{2^{2n}} $$

В то же время

$$ 1 < \left(1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} $$

Это неравенство верно, потому что в скобках число строго больше $1$, а корень натуральной степени из числа, большего $1$ всегда больше $1$. 

Итак, теперь мы можем "зажать" нашу последовательность:

$$ 1 < \left(1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} < 1 + \frac{1}{2^{2n}} $$

Найдем предел последовательности справа:

$$ \limn 1 + \frac{1}{2^{2n}} = 1 + \limn\frac{1}{2^{2n}} = 1 + 0 = 1 $$

То, что $\frac{1}{2^{2n}}\to 0$ легко показывается по теореме о двух милиционерах, при "зажатии" ее между $0\to 0$ и $\frac{1}{n}\to 0$ (см. прото-задачу "[Элементарные пределы последовательностей](/proto/sequences/limits/elementary)").

Итак, в цепном неравенстве

$$ 1 < \left(1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} < 1 + \frac{1}{2^{2n}} $$

"последовательность" из $1$ стремится к $1$. Последовательность справа, как мы только что показали, тоже стремится $1$. Значит, по теореме о двух милиционерах, "зажатая" между ними последовательность тоже стремится к $1$:

$$ \limn \left(1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} = 1 $$

Возвращаемся к пределу подпоследовательности $x_{2n}$:

$$ \limn x_{2n} = 2\limn \left( 1 + \frac{1}{2^{2n}} \right)^{\frac{1}{2n}} = 2 \cdot 1 = 2 $$

$$ \limn x_{2n} = 2 $$

Мы нашли первую предельную точку $x_n$.

---

**Нечетные $n$**

$$ x_{2n - 1} = \left( 1 + \frac{1}{2^{2n-1}} \right)^{\frac{1}{2n-1}} $$

Найдем предел этой подпоследовательности:

$$ \limn x_{2n - 1} = \limn \left( 1 + \frac{1}{2^{2n-1}} \right)^{\frac{1}{2n-1}} $$

Алгоритм действий такой же, что и в случае четных $n$. "Зажимаем" последовательность:

$$ 1 < \left(1+\frac{1}{2^{2n-1}}\right)^{\frac{1}{2n-1}} < 1+\frac{1}{2^{2n-1}} $$

"Последовательность" из $1$ стремится к $1$. Последовательность справа, тоже стремится $1$. Значит, по теореме о двух милиционерах, "зажатая" между ними последовательность тоже стремится к $1$:

$$ \limn x_{2n - 1} = \limn \left( 1 + \frac{1}{2^{2n-1}} \right)^{\frac{1}{2n-1}} = 1 $$

Мы нашли вторую предельную точку $x_n$.

---

Итак, любой член $x_n$ лежит либо в подпоследовательности $x_{2n}$, либо в $x_{2n-1}$. Причем обе подпоследовательности имеют предел. По прото-задаче "[Количество предельных точек](/proto/sequences/limits/max-limit-points)" это значит, что других предельных
точек у $x_n$ нет.

Поэтому

$$ \overline{\limn} x_n = 2 $$

$$ \underline{\limn} x_n = 1 $$