По аналогии с [предыдущей задачей](/tasks/138) введем обозначение для последовательности средних геометрических:

$$ \xi_n = \frac{x_1 + x_2 + \ldots + x_n}{n} $$

Итак, нам известно, что

$$ \limn x_n = +\infty $$

Распишем это по определению:

$$ \forall M > 0 \ \exists N = N(M) \ \forall n > N \ : \ x_n > M $$

Будем рассматривать какое-то $M'>0$. Тогда $3M'$ тоже положительное и для него существует такое $N'$, что для любого $n>N'$:

$$ x_n > 3M' $$

Рассмотрим теперь $\xi_n$ для тех же $n$:

$$ \xi_n = \frac{x_1 + x_2 + \ldots + x_{N'} + x_{N'+1} + \ldots + x_n}{n} $$

Разделим эту дробь на две:

$$ \xi_n = \frac{x_1 + \ldots + x_{N'}}{n} + \frac{x_{N'+1} + \ldots + x_n}{n} $$

Рассмотрим дробь справа:

$$ \frac{x_{N'+1} + \ldots + x_n}{n} $$

Для каждого слагаемого в числителе выполняется неравенство $x_i > 3M'$, поэтому можно заменить все эти слагаемые на $3M'$:

$$ \frac{x_{N'+1} + \ldots + x_n}{n} > \frac{3M' + 3M' + \ldots}{n} = 3M'\frac{n-N}{n} $$

$$ \frac{x_{N'+1} + \ldots + x_n}{n} > 3M'\left(1 - \frac{N}{n}\right) $$

Итак:

$$ \xi_n = \frac{x_1 + \ldots + x_{N'}}{n} + \underbrace{\frac{x_{N'+1} + \ldots + x_n}{n}}_{\large > 3M'\left( 1 - \frac{N}{n} \right)} $$

$$ \xi_n > \frac{x_1 + \ldots + x_{N'}}{n} + 3M'\left( 1 - \frac{N}{n} \right) $$

Найдем предел последовательности в скобках справа (принимая во внимание, что $N'$ — константа):

$$ \limn \left(1-\frac{N'}{n}\right) = 1-N'\limn\frac{1}{n} = 1 - N'\cdot 0 = 1 $$

Мы воспользовались тем, что $\frac{1}{n}\to 0$ (см. прото-задачу <p:[sequences/limits/elementary]>).

Мы показали, что

$$ \limn 1-\frac{N'}{n} = 1 $$

По определению это значает, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left|1-\frac{N}{n} - 1\right| < \varepsilon $$

Раз выполняется для любого положительного $\varepsilon$, то выполняется и для $\frac{1}{2}$. Итак, для $\frac{1}{2}$ существует такое $N''$, что
для любого $n> N''$ выполняется неравенство:

$$ \left|1-\frac{N'}{n} - 1\right| < \frac{1}{2} $$

Упростим это неравенство с модулем по пункту 1 прото-задачи <p:[simple-abs]>:

$$ \left|1-\frac{N'}{n} - 1\right| < \frac{1}{2} \Leftrightarrow \begin{cases} 1-\frac{N'}{n} - 1 < \frac{1}{2} \\ 1-\frac{N'}{n} - 1 > -\frac{1}{2}  \end{cases} $$

Рассмотрим нижнее неравенство справа:

$$ 1-\frac{N'}{n} - 1 > -\frac{1}{2} $$

Прибавим к обеим частям $1$:

$$ 1-\frac{N'}{n} > \frac{1}{2} $$

Возвращаемся к нашему неравенству с $\xi_n$:

$$ \xi_n > \frac{x_1 + \ldots + x_{N'}}{n} + 3M'\underbrace{\left( 1 - \frac{N'}{n} \right)}_{\Large > \frac{1}{2}} $$

$$ \xi_n > \frac{x_1 + \ldots + x_{N'}}{n} + \frac{3M'}{2} $$

Стоит заметить, что здесь речь уже идет о $n > \max(N', N'')$, чтобы выполнялись сразу оба неравенства из определений для $x_n\to +\infty$ и $\left( 1 - \frac{N'}{n} \right)\to 1$.

Рассмотрим теперь дробь

$$ \frac{x_1 + \ldots + x_{N'}}{n} $$

Найдем предел этой последовательности (принимая во внимание, что $x_1 + \ldots + x_{N'}$ — константа):

$$ \limn \frac{x_1 + \ldots + x_{N'}}{n} = (x_1 + \ldots + x_{N'})\limn\frac{1}{n} = 0 $$

По определению это означает, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{x_1 + \ldots + x_{N'}}{n} \right| < \varepsilon $$

Раз выполняется для любого положительного $\varepsilon$, то и для числа $\frac{M'}{2}$ найдется такое $N'''$, что для любого $n>N'''$ будет выполняться неравенство

$$ \left| \frac{x_1 + \ldots + x_{N'}}{n} \right| < \frac{M'}{2} $$

Упростим это неравенство с модулем по пункту 1 прото-задачи <p:[simple-abs]>:

$$ \left|\frac{x_1 + \ldots + x_{N'}}{n}\right| < \frac{M'}{2} \Leftrightarrow \begin{cases} \frac{x_1 + \ldots + x_{N'}}{n} < \frac{M'}{2} \\ \frac{x_1 + \ldots + x_{N'}}{n} > -\frac{M'}{2} \end{cases} $$

Рассмотрим нижнее неравенство справа:

$$ \frac{x_1 + \ldots + x_{N'}}{n} > -\frac{M'}{2} $$

Прибавим к обеим частям $\frac{3M'}{2}$:

$$ \frac{x_1 + \ldots + x_{N'}}{n} + \frac{3M'}{2} > -\frac{M'}{2} + \frac{3M'}{2} $$

$$ \frac{x_1 + \ldots + x_{N'}}{n} + \frac{3M'}{2} > M' $$

Итак,

$$ \xi_n > \frac{x_1 + \ldots + x_{N'}}{n} + \frac{3M'}{2} > M' $$

$$ \xi_n > M' $$

Стоит заметить, что здесь речь уже идет о $n > \max(N', N'', N''')$, чтобы выполнялись все три неравенства из определений для $x_n\to +\infty$, $\left( 1 - \frac{N'}{n} \right)\to 1$ и $\frac{x_1 + \ldots + x_{N'}}{n} \to 0$.

Мы показали, что какое бы положительное число $M$ мы не взяли, всегда найдутся три таких $N', N'', N'''$, что для любого $n>N=\max(N', N'', N''')$ будет выполняться неравенство:

$$ \xi_n = \frac{x_1 + \ldots + x_n}{n} > M $$

$$ \frac{x_1 + x_2 + \ldots + x_n}{n} > M $$

Это по определению означает, что

$$ \limn \frac{x_1 + x_2 + \ldots + x_n}{n} = +\infty $$