По условию последовательность $x_n$ сходится, то есть

$$ \exists \limn x_n = a $$

По определению это означает, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |x_n - a| < \varepsilon $$

Неравенство в конце можно разложить (<p:[simple-abs]>):

$$ |x_n - a| < \varepsilon \\[5px] a - \varepsilon < x_n < a + \varepsilon $$

В последнем неравенстве у $x_n$ индекс может быть равен любому натуральному числу, начиная с $N+1$:

$$
	a - \varepsilon < x_{N+1} < a + \varepsilon
    \\
    a - \varepsilon < x_{N+2} < a + \varepsilon
    \\
    \cdots
    \\
    a - \varepsilon < x_{n} < a + \varepsilon
$$

Сложим все эти неравенства друг с другом:

$$ (n - N)(a-\varepsilon) < x_{N+1} + \ldots + x_n < (n-N)(a+\varepsilon)  $$

$$ a-\varepsilon < \frac{x_{N+1} + \ldots + x_n}{n-N} < a + \varepsilon $$

$$ \left| \frac{x_{N+1} + \ldots + x_n}{n-N} - a \right| < \varepsilon $$

---

Теперь рассмотрим последовательность $\xi_n$:

$$
	\xi_n = \frac{1}{n}(x_1 + \ldots + x_n) = \\[10px] =
    \frac{n-N}{n-N} \cdot \frac{x_1 + \ldots + x_{N} + x_{N+1} + x_{N+2} + \ldots + x_n}{n} = \\[10px] =
    \frac{n-N}{n} \cdot \left( \frac{x_1 + \ldots + x_{N}}{n-N} + \frac{x_{N+1} + \ldots + x_n}{n-N} \right)
$$

Найдем теперь предел последовательности $\xi_n$:

$$ \limn{\xi_n} = \\[10px] = \limn \frac{n-N}{n} \cdot \left( \limn \frac{x_1 + \ldots + x_N}{n-N} + \limn \frac{x_{N+1} + \ldots + x_n}{n-N} \right) $$

||| spoiler Первый предел

$$ \limn \frac{n-N}{n} = \limn 1 - \frac{N}{n} = 1 - 0 = 1 $$

|||

||| spoiler Второй предел

$$ \limn \frac{x_1 + \ldots + x_N}{n-N} = 0 $$

Действительно, в числителе имеем сумму конечного числа членов, то есть константу, а в знаменателе бесконечно возрастающую последовательность натуральных чисел (начиная с $n = N+1$).

|||

|| spoiler Третий предел



|||