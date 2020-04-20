Примем следующее обозначение:

$$ s_n = x_1 + x_2 + \ldots + x_n $$

Раз $x_n$ сходится, то существует какое-то $A$ такое, что

$$ \limn x_n = A $$

Распишем это по определению предела:

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |x_n - A| < \varepsilon $$

Возьмем теперь произвольное $\varepsilon' > 0$. Число $\frac{\varepsilon'}{3}$ тоже положительное, поэтому для него выполняется определение выше, то есть существует такое $N'$, что выполняется неравенство:

$$ |x_n - A| < \frac{\varepsilon'}{3} $$

Рассмотрим теперь, чему равно $|\xi_n - A|$:

$$ |\xi_n - A| = \left| \frac{x_1 + x_2 + \ldots + x_{N'} + x_{N'+1} + \ldots + x_n}{n} - A \right| $$

Разделим эту большую дробь на две поменьше:

$$ |\xi_n - A| = \left| \frac{x_1 + x_2 + \ldots + x_{N'}}{n} + \frac{x_{N'+1} + \ldots + x_n}{n} - A \right| $$

Воспользуемся свойством модуля (см. прото-задачу <p:[abs-properties]>):

\begin{gather*}
    |\xi_n - A| = \left| \frac{x_1 + x_2 + \ldots + x_{N'}}{n} + \frac{x_{N'+1} + \ldots + x_n}{n} - A \right| \leq
    \\[5px]
    \leq \left| \frac{x_1 + \ldots + x_{N'}}{n} \right| + \left| \frac{x_{N'+1} + \ldots + x_n}{n} - A \right|
\end{gather*}

Теперь рассмотрим оба слагаемых по отдельности. Начнем с

$$ \frac{x_1 + \ldots + x_{N'}}{n} $$

Числитель этой дроби — константа, поэтому легко найти предел:

$$ \limn \frac{x_1 + \ldots + x_{N'}}{n} = 0 $$

Здесь мы воспользовались тем, что $\frac{1}{n}\to 0$.

По определению это означает, что

$$ \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{x_1 + \ldots + x_{N'}}{n} \right| < \varepsilon $$

Раз выполняется для любого $\varepsilon$, то и для $\frac{\varepsilon'}{3}$ найдется такое $N''$, что для всех $n>N''$ будет выполняться неравенство

$$ \left| \frac{x_1 + \ldots + x_{N'}}{n} \right| < \frac{\varepsilon'}{3} $$

Итак, возвращаясь к нашему неравенству, имеем

$$ \left|\xi_n - A\right| < \underbrace{\left| \frac{x_1 + \ldots + x_{N'}}{n} \right|}_ {\Large < \frac{\varepsilon'}{3}} + \left| \frac{x_{N'+1} + \ldots + x_n}{n} - A \right| $$

$$ |\xi_n - A| < \frac{\varepsilon'}{3} + \left| \frac{x_{N'+1} + \ldots + x_n}{n} - A \right| $$

Стоит заметить, что здесь речь уже идет о $n > \max(N', N'')$, чтобы выполнялись сразу оба неравенства из определений для $x_n\to A$ и $\frac{x_1 + \ldots + x_{N'}}{n}\to 0$.

Разберемся теперь со вторым модулем:

$$ \left|\frac{x_{N'+1} + \ldots + x_n}{n} - A\right| $$

Но для всех $x_n$ при $n>N'$ выполняется неравенство $|x_n - A| < \frac{\varepsilon'}{3}$. Упростим это неравенство по пункту 1 прото-задачи <p:[simple-abs]>:

$$ |x_n - A| < \frac{\varepsilon'}{3} \Leftrightarrow \begin{cases} x_n - A < \frac{\varepsilon'}{3} \\ x_n - A > - \frac{\varepsilon'}{3} \end{cases} $$

Нас интересует только первое неравенство справа:

$$ x_n - A < \frac{\varepsilon'}{3} $$

$$ x_n < \frac{\varepsilon'}{3} + A $$

Итак,

\begin{gather*}
    \left|\frac{x_{N'+1} + \ldots + x_n}{n} - A\right| \leq \left| \frac{(A + \frac{\varepsilon'}{3}) + (A + \frac{\varepsilon'}{3}) + \ldots}{n} - A \right| =
    \\[5px]
    = \left| \left(A + \frac{\varepsilon'}{3}\right)\frac{n-N'}{n} - A \right| = \left| \left(A + \frac{\varepsilon'}{3}\right)\left( 1 - \frac{N'}{n} \right) - A \right| =
    \\[5px]
    = \left| \left(A + \frac{\varepsilon'}{3}\right) - \left(A + \frac{\varepsilon'}{3}\right)\frac{N'}{n} - A \right| = \left| \frac{\varepsilon'}{3} - \left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n} \right| \leq
    \\[5px]
    \leq \left| \frac{\varepsilon'}{3} \right| + \left| \left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n} \right| = \frac{\varepsilon'}{3} + \left| \left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n} \right|
\end{gather*}

Имеем следующее выражение:

$$ \left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n} $$

В нем все кроме $n$ является константой, поэтому все это выражение тоже стремится к $0$ (как и дробь, которую мы рассмотрели выше).
Значит, можно найти такое $N'''$, что для любого $n>N'''$ выполняется неравенство:

$$ \left| \left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n} \right| < \frac{\varepsilon'}{3} $$

Возвращаемся к неравенству:

$$ \left|\frac{x_{N'+1} + \ldots + x_n}{n} - A\right| \leq \frac{\varepsilon'}{3} + \underbrace{\left| \left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n} \right|}_{\Large < \frac{\varepsilon'}{3}} $$

$$ \left|\frac{x_{N'+1} + \ldots + x_n}{n} - A\right| \leq \frac{\varepsilon'}{3} + \frac{\varepsilon'}{3}  $$

$$ \left|\frac{x_{N'+1} + \ldots + x_n}{n} - A\right| \leq \frac{2\varepsilon'}{3} $$

Стоит заметить, что здесь речь уже идет о $n > \max(N', N'', N''')$, чтобы выполнялись сразу стри неравенства из определений для $x_n\to A$ и $\frac{x_1 + \ldots + x_{N'}}{n}\to 0$ и $\left( A + \frac{\varepsilon'}{3} \right)\frac{N'}{n}$.

Итак,

$$ |\xi_n - A| < \frac{\varepsilon'}{3} + \underbrace{\left| \frac{x_{N'+1} + \ldots + x_n}{n} - A \right|}_{\Large < \frac{2\varepsilon'}{3}} $$

$$ |\xi_n - A| < \frac{\varepsilon'}{3} + \frac{2\varepsilon'}{3} $$

$$ |\xi_n - A| < \varepsilon' $$

Мы показали, что какое бы положительное число $\varepsilon$ мы не взяли, всегда найдутся три таких $N', N'', N'''$, что для любого $n> N=\max(N',N'',N''')$ будет выполняться неравенство:

$$ |\xi_n - A| < \varepsilon $$

Это по определению означает, что

$$ \limn \xi_n = \limn x_n = A $$

$$ \limn \xi_n = \limn x_n $$

---

В качестве примера неверности обратного утверждения рассмотрим последовательность $y_n = (-1)^{n}$:

$$ y_n = (-1)^{n} = -1, 1, -1, 1, \ldots $$

У этой последовательности есть два разных частичных предела $1$ для четных $n$ и $-1$ для нечетных $n$. Это значит, $y_n$ расходится.

Рассмотрим теперь $\xi_{y_n}$:

$$ \xi_{y_n} = \frac{y_1 + y_2 + \ldots + y_n}{n} = \frac{-1 + 1 -1 + 1 - 1 + \ldots}{n} $$

Если $n$ — четное, то количество $-1$ будет равно количеству $1$ и числитель, а значит и само $\xi_{y_{2n}} = 0$.
Если $n$ — нечетное, то в числителе все слагаемые тоже обратятся в $0$ за исключением последней $-1$.

Итак, получили две подпоследовательности:

$$ \xi_{y_{2n}} = 0 \qquad \xi_{y_{2n-1}} = -\frac{1}{n} $$

$$ \limn \xi_{y_{2n}} = \limn 0 = 0 $$

$$ \limn \xi_{y_{2n-1}} = \limn -\frac{1}{n} = 0 $$

Получается, что $0$ — предельная точка $\xi_{y_n}$. Но любой член $\xi_{y_n}$ лежит либо в $\xi_{y_{2n}}$, либо в $\xi_{y_{2n-1}}$, а по прото-задаче <p:[sequences/limits/max-limit-points]> это означает, что
других предельных точек у $\xi_{y_n}$ нет.

Итак, у $\xi_{y_n}$ есть только одна предельная точка $0$. По прото-задаче <p:[sequences/limits/limit-point]> это означает, что

$$ \limn \xi_{y_n} = 0 $$

Мы доказали, что существует такая расодящаяся $y_n$, что ее последовательность средних арифметических сходится.