## Доказательство левой части

Докажем, что

$$ \left(\frac{n}{e}\right)^n < n! $$

Рассмотрим последовательность

$$ x_n = \left(\frac{n}{e}\right)^n $$

Найдем отношение двух идущих друг за другом членов этой последовательности:

$$ \frac{x_{n+1}}{x_n} = \frac{ \left(\frac{(n+1)}{e}\right)^{n+1} }{ \left(\frac{n}{e}\right)^n } = \frac{(n+1)^{n+1}}{e^{n+1}}\frac{e^n}{n^n} = \left(\frac{n+1}{n}\right)^n\frac{n+1}{e} $$

В задаче <t:69> мы доказали, что последовательность $\left(1 + \frac{1}{n}\right)^n$ всегда меньше $e$:

$$ \frac{x_{n+1}}{x_n} = \underbrace{\left(\frac{n+1}{n}\right)^n}_{\Large < e}\frac{n+1}{e} $$

$$ \frac{x_{n+1}}{x_n} < \frac{e}{e}(n+1) $$

$$ \frac{x_{n+1}}{x_n} < n+1 $$

Итак,

$$ x_{n+1} < (n+1)x_n $$

Докажем по методу математической индукции:

$$ (n+1) x_n < (n+1)! $$

**База индукции**: пусть $n=1$:

$$ 2 \frac{1}{e} < 2! \qquad \frac{1}{e} < 1 $$

**Индукционный переход**:

Предположим, что это неравенство выполняется для натурального $k$:

$$ (k+1)x_k < (k+1)! $$

Умножим обе части на $(k+2)$:

$$ (k+1)(k+2)x_k < (k+2)! $$

Докажем, что

$$ (k+2)x_{k+1} < (k+1)(k+2)x_k $$

$$ x_{k+1} < (k+1)x_k $$

Последнее мы доказали выше.

Итак, по цепному неравенству:

$$ (k+2)x_{k+1} < (k+1)(k+2)x_k < (k+2)! $$

$$ (k+2)x_{k+1} < (k+2)! $$

Итак, мы доказали, что неравенство выполняется и для $k+1$. Значит для всех $n$ выполняется:

$$ x_{n+1} < (n+1)x_n < (n+1)! $$

$$ x_{n+1} < (n+1)! $$

Итак, мы доказали неравенство

$$ \left(\frac{n}{e}\right)^n < n! $$

для $n>1$, так как любое $n>1$ можно представить в виде $n=t+1$, а верность для $t+1$ мы уже показали выше по индукции.

Проверим это неравенство для $n=1$:

$$ \frac{1}{e} < 1! $$

Итак, мы доказали, что для любых натуральных $n$ выполняется

$$ \left(\frac{n}{e}\right)^n < n! $$

$\blacksquare$

## Доказательство правой части

Докажем, что

$$ n! < e\left(\frac{n}{2}\right)^n $$

В задаче <t:8> мы доказали неравенство:

$$ n! < \left(\frac{n+1}{2}\right)^n \quad (n > 1) $$

Представим $\left(\frac{n+1}{2}\right)^n$ в следующем виде:

$$ \left(\frac{n+1}{2}\right)^n = \left(\frac{n+1}{n}\right)^n\left(\frac{n}{2}\right)^n = \left(1 + \frac{1}{n}\right)^n\left(\frac{n}{2}\right)^n $$

Итак,

$$ n! < \left(1 + \frac{1}{n}\right)^n\left(\frac{n}{2}\right)^n \quad (n > 1) $$

В задаче <t:69> мы доказали, что последовательность $\left(1 + \frac{1}{n}\right)^n$ всегда меньше $e$:

$$ n! < \left(1 + \frac{1}{n}\right)^n\left(\frac{n}{2}\right)^n < e\left(\frac{n}{2}\right)^n $$

$$ n! < e\left(\frac{n}{2}\right)^n $$

Заметим, что нам уже не требуется ограничение на $n>1$, так как и при $n=1$ это неравенство выполняется. Итак, мы доказали, что

$$ n! < e\left(\frac{n}{2}\right)^n $$

$\blacksquare$