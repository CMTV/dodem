**Доказательство для $p_n$**

Раз $p_n\to +\infty$ то отбросим конечное число первых членов этой последовательности, которые меньше $1$. По прото-задаче <p:[sequences/limits/first-members-independency/]> при рассмотрении только тех членов $p_n$, которые больше $1$ искомый предел не изменится.

Итак, дальше исходим из того, что $p_n > 1$.

Докажем, что

$$ \limn \left( 1 + \frac{1}{p_n} \right)^{p_n} = e $$

Рассмотрим следующую последовательность $k_n$:

$$ k_n = \floor{p_n} $$

Раз $p_n\to +\infty$, то и $k_n\to +\infty$.

Воспользуемся неравенством

$$ \floor{p_n} \leq p_n \leq \floor{p_n} + 1 $$

::: spoiler Доказательство неравенства
Докажем, что для любого $x$ выполняется неравенство

$$ \floor{x} \leq x \leq \floor{x} + 1 $$

Рассмотрим, какие значения может принимать разница

$$ \ceil{x} - \floor{x} $$

Эта разница равна $0$, когда $x$ — целое число и $1$ в остальных случаях.

В любом случае, выполняется неравенство

$$ \ceil{x} - \floor{x} \leq 1 $$

Тогда

$$ \ceil{x} \leq 1 + \floor{x} $$

Отсюда

$$ \floor{x} \leq x \leq \ceil{x} \leq \floor{x} + 1 $$

$$ \floor{x} \leq x \leq \floor{x} + 1 $$

$\blacksquare$
:::

$$ k_n \leq p_n \leq k_n + 1 $$

"Перевернем" дроби:

$$ \frac{1}{k_n + 1} \leq \frac{1}{p_n} \leq \frac{1}{k_n} $$

Прибавим ко всем частям неравенства по $1$:

$$ 1+\frac{1}{k_n + 1} \leq 1 + \frac{1}{p_n} \leq 1 + \frac{1}{k_n} $$

Тогда

$$ \left( 1+\frac{1}{k_n + 1} \right)^{k_n} \leq \left( 1+\frac{1}{p_n} \right)^{p_n} \leq \left(1+\frac{1}{k_n}\right)^{k_n + 1} $$

::: spoiler Пояснение с возведением в степень

Докажем, что если

$$ a \leq b \leq c \quad (a,b,c > 1) $$

и

$$ x \leq y \leq z \quad (x,y,z > 0) $$

то

$$ a^x \leq b^y \leq c^z $$

Прологарифмируем первое неравенство сверху:

$$ \ln a \leq \ln b \leq \ln c $$

Умножим это неравенство на второе сверху:

$$ x\ln a \leq y\ln b \leq z\ln c $$

Представим каждую часть неравенства как показатель степени с основанием $e$ (знак неравенств не изменится, так как $e>1$):

$$ e^{x\ln a} \leq e^{y\ln b} \leq e^{z\ln c} $$

$$ a^x \leq b^y \leq c^z $$

$\blacksquare$
:::

$$ \frac{\left( 1 + \frac{1}{k_n + 1} \right)^{k_n + 1}}{\left( 1 + \frac{1}{k_n + 1} \right)} \leq \left( 1+\frac{1}{p_n} \right) \leq \left(1 + \frac{1}{k_n}\right)^{k_n + 1} $$

Рассмотрим отдельно пределы последовательностей в правой и левой частях этого неравенства.

*Предел правой части*

Из [задачи 69](/tasks/69) известно

$$ \limn \left(1 + \frac{1}{n}\right)^{n+1} = e $$

Последовательность $k_n$ состоит только из натуральных чисел и стремится к $+\infty$, а значит, по прото-задаче <p:[sequences/limits/expand]>

$$ \limn \left(1+\frac{1}{k_n}\right)^{k_n + 1} = e $$

*Предел левой части*

Известно, что

$$ \limn \left(1 + \frac{1}{n}\right)^{n} $$

Последовательность $k_n + 1$ состоит только из натуральных чисел и стремится к $+\infty$ (так как этим условиям удовлетворяет $k_n$), а значит, по прото-задаче <p:[sequences/limits/expand]>

$$ \limn \left( 1 + \frac{1}{k_n + 1} \right)^{k_n + 1} = e $$

Раз последовательность $k_n + 1\to +\infty$, то, по прото-задаче <p:[sequences/limits/bm-bb]> последовательность $\frac{1}{k_n + 1}\to 0$:

$$ \limn \left( 1 + \frac{1}{k_n + 1} \right) = 1 + \limn \frac{1}{k_n + 1} = 1 + 0 = 1 $$

Теперь мы можем найти предел левой части неравенства:

$$ \limn \frac{\left( 1 + \frac{1}{k_n + 1} \right)^{k_n + 1}}{\left( 1 + \frac{1}{k_n + 1} \right)} = \frac{\limn \left( 1 + \frac{1}{k_n + 1} \right)^{k_n + 1}}{\limn \left( 1 + \frac{1}{k_n + 1} \right)} = \frac{e}{1} = e $$

*К неравенству*

Итак, в неравенстве

$$ \frac{\left( 1 + \frac{1}{k_n + 1} \right)^{k_n + 1}}{\left( 1 + \frac{1}{k_n + 1} \right)} \leq \left( 1+\frac{1}{p_n} \right) \leq \left(1 + \frac{1}{k_n}\right)^{k_n + 1} $$

последовательности слева и справа стремятся к $e$, значит, по теореме о двух милиционерах, "зажатая" между ними последовательность тоже стремится к $e$:

$$ \limn \left( 1+\frac{1}{p_n} \right)^{p_n} = e $$

$\blacksquare$

---

**Доказательство для $q_n$**

Из условия $q_n\to -\infty$. Тогда введем новую последовательность

$$ q_n' = -q_n $$

Тогда $q_n'\to +\infty$.

$$ q_n = -q_n' $$

Рассмотрим последовательность, предел которой надо найти:

\begin{gather*}
    \left( 1+\frac{1}{q_n} \right)^{q_n} = \left( 1-\frac{1}{q_n'} \right)^{-q_n'} = \left(\frac{ 1 }{ 1 - \frac{1}{q_n'} }\right)^{q_n'} = \left( \frac{q_n'}{q_n' - 1} \right)^{q_n'} =
    \\[5px]
    = \left( \frac{q_n'-1 + 1}{q_n' -1} \right)^{q_n'} = \left( 1 + \frac{1}{(q_n'-1)} \right)^{(q_n' - 1) + 1} = 
    \\[5px]
    = \left( 1 + \frac{1}{q_n'-1} \right)^{q_n' - 1}\left(1+\frac{1}{q_n'-1}\right)
\end{gather*}

Найдем предел

\begin{gather*}
    \limn \left( 1+\frac{1}{q_n} \right)^{q_n} = \limn \left( 1 + \frac{1}{q_n'-1} \right)^{q_n' - 1}\left(1+\frac{1}{q_n'-1}\right) =
    \\[5px]
    = \limn \left( 1 + \frac{1}{q_n'-1} \right)^{q_n' - 1} \underbrace{\limn \left(1+\frac{1}{q_n'-1}\right)}_{\large = 1} =
    \\[5px]
    = \limn \left( 1 + \frac{1}{q_n'-1} \right)^{q_n' - 1} = e
\end{gather*}

с учетом того, что последовательность $q_n' - 1\to +\infty$, так как $q_n'\to +\infty$, а сходимость к $e$ для бесконечно больших последовательностей мы уже доказали выше.

Итак, мы доказали, что

$$ \limn \left( 1+\frac{1}{q_n} \right)^{q_n} = e $$

$\blacksquare$