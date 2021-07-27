Пусть $a>1$.

Введем обозначение $x_n$:

$$
    x_n = a^{\frac{1}{n}} - 1
    \\[5px]
    a^{\frac{1}{n}} = x_n + 1
    \\[5px]
    \frac{\ln a}{n} = \ln (1 + x_n)
    \\[5px]
    n = \frac{\ln a}{\ln (1+x_n)}
$$

Теперь рассмотрим последовательность из условия, предел которой нам нужно найти:

$$ n (a^{\frac{1}{n}}-1) = n x_n $$

Заменим $n$ справа найденным выше значением:

$$ n (a^{\frac{1}{n}}-1) = \frac{x_n \ln a}{\ln (1+x_n)} $$

Теперь введем еще одну последовательность $k_n$:

$$ k_n = \floor{\frac{1}{x_n}} $$

Тогда, по определению "пола" и "потолка числа":

$$ \floor{\frac{1}{x_n}} \leq \frac{1}{x_n} \leq \ceil{\frac{1}{x_n}} $$

Воспользуемся неравенством:

$$ \ceil{\frac{1}{x_n}} \leq \floor{\frac{1}{x_n}} + 1 $$

||| spoiler Доказательство

Докажем, что для любого $x$ выполняется неравенство:

$$ \ceil{x} \leq \floor{x} + 1 $$

Рассмотрим, чему может быть равна разница:

$$ \ceil{x} - \floor{x} $$

Если $x$ — целое число, то эта разница равна $0$. Если нет, то разница равна $1$. То есть, справедливо следующее неравенство:

$$ \ceil{x} - \floor{x} \leq 1 $$

$$ \ceil{x} \leq \floor{x} + 1 $$

$\blacksquare$

|||

$$ \floor{\frac{1}{x_n}} \leq \frac{1}{x_n} \leq \floor{\frac{1}{x_n}} + 1 $$

Введем обозначение

$$ k_n = \floor{\frac{1}{x_n}} $$

$$ k_n \leq \frac{1}{x_n} \leq k_n+1 $$

"Перевернем" дроби:

$$ \frac{1}{k_n+1} \leq x_n \leq \frac{1}{k_n} $$

По пункту а) задачи <t:75>:

$$ \frac{1}{k_n + 2} < \ln\left( 1 +\frac{1}{k_n + 1} \right) \leq \ln(1+x_n) \leq \ln\left(1+\frac{1}{k_n}\right) < \frac{1}{k_n} $$

$$ \frac{1}{k_n + 2} < \ln(1+x_n) < \frac{1}{k_n} $$

$$ k_n < \frac{1}{\ln(1+x_n)} < k_n + 2 $$

Теперь вернемся к равенству, полученному выше:

$$ n (a^{\frac{1}{n}}-1) = \frac{x_n \ln a}{\ln (1+x_n)} $$

$$ \frac{k_n}{k_n + 1}\ln a < n(a^{\frac{1}{n}} - 1) < \frac{k_n + 2}{k_n} \ln a $$

$$ \left(1 - \frac{1}{k_n + 1}\right) \ln a < n(a^{\frac{1}{n}} - 1) < \left( 1 + \frac{2}{k_n} \right)\ln a $$

Найдем предел $x_n$:

$$ \limn x_n = a^{\limn \frac{1}{n}} - 1 = a^0 - 1 = 0 $$

Раз $x_n\to 0$, то $\frac{1}{x_n}$, по прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/bm-bb)> $\frac{1}{x_n}\to +\infty$. Но тогда и $k_n = \floor{\frac{1}{x_n}}\to +\infty$, так как $k_n \geq \frac{1}{x_n}$. Наконец, по все той же прото-задаче
последовательности $\frac{1}{k_n + 1}$ и $\frac{2}{k_n}$ стремятся к $0$, то есть в неравенстве

$$ \left(1 - \frac{1}{k_n + 1}\right) \ln a < n(a^{\frac{1}{n}} - 1) < \left( 1 + \frac{2}{k_n} \right)\ln a $$

последовательности слева и справа стремятся к $\ln a$, а значит, по теореме о двух милиционерах, "зажатая" между ними последовательность тоже стремится к $\ln a$:

$$ \limn n(a^{\frac{1}{n}} - 1) = \ln a $$

---

Теперь рассмотрим вариант, когда $0 < a < 1$. Тогда $\frac{1}{a} > 1$, а искомый предел можно записать в следующем виде:

$$
    \limn n(a^{\frac{1}{n}} - 1) = \limn (-a^{\frac{1}{n}})\cdot n\left(\left(\frac{1}{a}\right)^{\frac{1}{n}} - 1\right) =
    \\[5px]
    = -\limn a^{\frac{1}{n}}\limn n\left(\left(\frac{1}{a}\right)^{\frac{1}{n}} - 1\right) = -\ln\frac{1}{a} = \ln a
$$