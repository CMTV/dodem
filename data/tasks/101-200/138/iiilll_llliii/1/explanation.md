## Лемма

Для членов сходящейся к какому-то $a$ последовательности $x_n$ справедлива следующая лемма:

Для любого $\varepsilon > 0$ существует номер $N$, такой, что любые средние арифметические от $N+1$ до произвольного $n>N$ попадают в $\varepsilon$-окрестность $a$:

$$ \left| \frac{x_{N+1} + \ldots + x_n}{n-N} - a \right| < \varepsilon $$

||| spoiler Доказательство

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

$\blacksquare$

|||

## Задача

Докажем теперь, что последовательность средних арифметических $\xi_n$ сходится к $a$. Доказывать будем по определению предела.

Фиксируем какое-то $\varepsilon > 0$. Для этого $\varepsilon$ найти такое $N$, чтобы для любого $n > N$ выполнялось неравенство $|\xi_n - a| < \varepsilon$.

Возьмем число $\dfrac{\varepsilon}{2}$ и для него по доказанной выше лемме получаем номер $N'$ и разложим $\xi_n$ следующим образом:

$$
	\xi_n = \frac{1}{n}(x_1 + \ldots + x_n) = \\[10px] =
    \frac{n-N'}{n-N'} \cdot \frac{x_1 + \ldots + x_{N'} + x_{N'+1} + x_{N'+2} + \ldots + x_n}{n} = \\[10px] =
    \underbrace{\frac{n-N'}{n}}_{\normalsize u_n} \cdot \left( \underbrace{\frac{x_1 + \ldots + x_{N'}}{n-N'}}_{\normalsize v_n} + \underbrace{\frac{x_{N'+1} + \ldots + x_n}{n-N'}}_{\normalsize w_n} \right) = \\[10px] = u_n(v_n + w_n) = u_n \cdot v_n + u_n \cdot w_n
$$

Найдем теперь пределы последовательностей $u_n$ и $v_n$ в этом разложении:

||| spoiler $$ \limn u_n = 1 $$

$$ \limn u_n = \limn \frac{n-N'}{n} = \limn 1 - \frac{N'}{n} = 1 - 0 = 1 $$

|||

||| spoiler $$ \limn v_n = 0 $$

$$ \limn v_n = \limn \frac{x_1 + \ldots + x_N'}{n-N'} = 0 $$

Действительно, в числителе имеем сумму конечного числа членов, то есть константу, а в знаменателе бесконечно возрастающую последовательность натуральных чисел (начиная с $n = N'+1$).

|||


Возвращаемся к неравенству $|\xi_n - a| < \varepsilon$, которое нам нужно доказать, и воспользуемся полученным разложением:

$$ |\xi_n - a| = |u_n v_n + u_n w_n - a| $$

Воспользуемся неравенством треугольника (<p:[abs]>):

$$ |u_n v_n + u_n w_n - a| \leq |u_nv_n| + |u_nw_n - a| $$

С учетом того, что $u_n$ при любом $n$ будет меньше $1$, можно из $|u_nw_n - a|$ получить неравенство $|u_nw_n - a| < |w_n - a|$. Итак, получаем финальный вариант неравенства:

$$ \ldots \leq |u_nv_n| + |u_nw_n - a| < |u_nv_n| + |w_n - a| $$

Вспоминаем, что мы разложили $\xi_n$ специально под $\dfrac{\varepsilon}{2}$ по лемме из начала решения. Поэтому:

$$ |w_n - a| < \frac{\varepsilon}{2} $$

Используем это в нашем неравенстве:

$$ \ldots < |u_nv_n| + |w_n - a| < |u_nv_n| + \frac{\varepsilon}{2} $$

Наконец, произведение $u_n v_n$ стремится к $1 \cdot 0$, то есть к $0$, поэтому по определению предела для $\dfrac{\varepsilon}{2}$ найдется такое $N''$, что

$$ |u_nv_n| < \frac{\varepsilon}{2} $$

Тогда введем обозначение $N = \max(N', N'')$ и для этого $N$ уже выполняется неравенство:

$$ \ldots < |u_nv_n| + \frac{\varepsilon}{2} < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} < \varepsilon $$

Теперь скроем все промежуточные звенья цепного неравенства и получаем:

$$ |\xi_n - a| \leq \ldots < \varepsilon $$

$$ |\xi_n - a| < \varepsilon $$

Итак, мы для произвольного $\varepsilon > 0$ всегда сможем найти $N = \max(N', N'')$, такое, что для любого $n > N$ будет выполняться неравенство $|\xi_n - a| < \varepsilon$. Это по определению означает, что последовательность $\xi_n$ сходится к $a$

$\blacksquare$

Пример неверности обратного утверждения приведен в конце разбора 1.