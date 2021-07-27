---
{
    "title": "Предел отношения логарифмической и степенной последовательностей",
    "desc": "Предел отношения логарифмической и степенной последовательностей равен 0.",
    "type": "theorem"
}
---

||| theorem

$$ \limn \frac{\log_a n}{n^r} = 0 \quad (a> 0, r> 0) $$

|||

||| spoiler Лемма 1

$$ \ceil{a} - 1 \leq \floor{a} $$

Исходя из определения функций потолка и пола числа:

$$ \ceil{a} - \floor{a} = \begin{cases} 0, \ \text{если } a \text{ — целое число} \\ 1, \ \text{если } a \text{ — не целое число} \end{cases} $$

Получается, что в общем случае:

$$ \ceil{a} - \floor{a} \leq 1 $$

А отсюда сразу получаем, что

$$ \ceil{a} - 1 \leq \floor{a} $$

$\blacksquare$

|||

||| spoiler Лемма 2

$$ \forall k \ \exists N = N(k) \ \forall n > N \ : \ n^{\frac{1}{k}} < a^{n^{\frac{1}{k}}} $$

Из прото-задачи <b:[П-ссылка](advanced/proto/sequence-lim/exp-ratio)> мы знаем, что

$$ \limn \frac{n}{a^n} = 0, $$

так как это частный случай упомянутых задач при $k=1$.

Распишем по определению:

$$ \limn \frac{n}{a^n} = 0 \Leftrightarrow \forall \varepsilon > 0 \ \exists N \ \forall n > N \ : \ \left|\frac{n}{a^n}\right| < \varepsilon $$

Раз выполняется для любого положительного $\varepsilon$, то выполняется и для $\frac{1}{a}$:

$$ \text{для } \frac{1}{a} \ \exists N_1 \ \forall n > N_1 \ : \ \left|\frac{n}{a^n}\right| < \frac{1}{a} $$

Рассмотрим последнее неравенство:

$$ \left|\frac{n}{a^n}\right| < \frac{1}{a} $$

От модуля можно избавиться, так как выражение под ним больше нуля:

$$ \frac{n}{a^n} < \frac{1}{a} $$

$$ n < \frac{a^n}{a} $$

Итак:

$$ \text{для } \frac{1}{a} \ \exists N_1 \ \forall n > N_1 \ : \ n < \frac{a^n}{a} $$

Из прото-задачи <b:[П-ссылка](advanced/proto/sequence-lim/elementary)> известно, что

$$ \limn \frac{1}{n^a} = 0 \ (a > 0) $$

Значит и для $\frac{1}{k} > 0$:

$$ \limn \frac{1}{n^{\frac{1}{k}}} = 0 $$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/bm-bb)> получаем, что раз $\frac{1}{n^{\frac{1}{k}}}$ — бесконечно малая, то $n^{\frac{1}{k}}$ — бесконечно большая.

$$ \limn n^{\frac{1}{k}} = \infty \Leftrightarrow \forall E > 0 \ \exists N_2 \ \forall n > N_2 \ : \ \left| n^{\frac{1}{k}} \right| > E $$

Раз выполняется для любой положительной границы $E$, то выполняется и для числа $N_1$:

$$ \text{для } N_1 \ \exists N_2 \ \forall n > N_2 \ : \ \left| n^{\frac{1}{k}} \right| > N_1 $$

Рассмотрим неравенство в конце:

$$ \left| n^{\frac{1}{k}} \right| > N_1 $$

От модуля можно избавиться, так как выражение под ним больше нуля:

$$ n^{\frac{1}{k}} > N_1 $$

По определению округления сверху ("потолка") числа:

$$ \ceil{n^{\frac{1}{k}}} \geq n^{\frac{1}{k}} > N_1 $$

$$ \ceil{n^{\frac{1}{k}}} > N_1 $$

Итак

$$ \text{для } \frac{1}{a} \ \exists N_1 \ \forall n > N_1 \ : \ n < \frac{a^n}{a} $$

$$ \text{для } N_1 \ \exists N_2 \ \forall n > N_2 \ : \ \ceil{n^{\frac{1}{k}}} > N_1 $$

Заметим, что любое $\ceil{n^{\frac{1}{k}}}$ — натуральное число, причем, из второй записи получается, что оно больше $N_1$.
Но раз любое $\ceil{n^{\frac{1}{k}}}$ (при $n>N_2$) больше $N_1$ то все такие числа подходят для первой записи, то есть

$$ \ceil{n^{\frac{1}{k}}} < \frac{a^{\ceil{n^{\frac{1}{k}}}}}{a} = a^{\ceil{n^{\frac{1}{k}}}- 1} $$

Теперь воспользуемся доказанной выше леммой 1:

$$ \ceil{n^{\frac{1}{k}}} < a^{\ceil{n^{\frac{1}{k}}}- 1} \leq a^{\floor{n^{\frac{1}{k}}}} $$

По определению округления снизу ("пола") и "потолка" числа

$$ \floor{n^{\frac{1}{k}}} \leq n^{\frac{1}{k}} $$

$$ n^{\frac{1}{k}} \leq \ceil{n^{\frac{1}{k}}} $$

Поэтому

$$ n^{\frac{1}{k}} \leq \ceil{n^{\frac{1}{k}}} < a^{\ceil{n^{\frac{1}{k}}}- 1} \leq a^{\floor{n^{\frac{1}{k}}}} \leq a^{n^{\frac{1}{k}}} $$

$$ n^{\frac{1}{k}} < a^{n^{\frac{1}{k}}} $$

$\blacksquare$

|||

||| spoiler Лемма 3

$$ \forall k \ \exists N \ \forall n > N \ : \ \log_a n < n^{\frac{1}{k}} $$

Пусть $b = \sqrt[k]{a}$. Тогда, по лемме 2

$$ \exists N \ \forall n > N \ : \ n^{\frac{1}{k}} < b^{n^{\frac{1}{k}}} $$

Возводим обе части неравенства в коцне в степень $k$:

$$ n < \left(b^k\right)^{n^{\frac{1}{k}}} = a^{n^{\frac{1}{k}}} $$

Прологарифмируем обе части неравенства по основанию $a$. Так как $a>1$, то знак неравенства не изменится:

$$ \log_a n < n^{\frac{1}{k}} $$

$\blacksquare$

*Доказательство при $a < 1$*

Раз $a<1$, то $\log_a n < 0$ (так как $n\geq 1$), поэтому для всех $n$ выполняется неравенство

$$ \log_a n < 0 < n^{\frac{1}{k}} $$

$$ \log_a n < n^{\frac{1}{k}} $$

$\blacksquare$

|||

$$ \limn \frac{\log_a n}{n} = 0 \quad (a>1) $$

## Доказательство при $a>1$

Раз $a>1$, то

$$ 0 < \log_a n $$

Пусть

$$ k = \ceil{\frac{1}{r}} + 1 $$

По лемме 3 получаем, что

$$ \log_a n < n^{\frac{1}{k}} $$

Поделим обе части неравенства на положительное число $n^r$:

$$ \frac{\log_a n}{n^r} < \frac{n^{\frac{1}{k}}}{n^r} = n^{\frac{1}{k} - r} = \frac{1}{n^{r-\frac{1}{k}}} $$

$$ \frac{\log_a n}{n^r} < \frac{1}{n^{r-\frac{1}{k}}} $$

По определению потолка числа:

$$ k = \ceil{\frac{1}{r}} + 1 > \ceil{\frac{1}{r}} \geq \frac{1}{r} $$

$$ k > \frac{1}{r} $$

Откуда

$$ r > \frac{1}{k} $$

$$ r - \frac{1}{k} > 0 $$

Запишем итоговое цепное неравенство:

$$ 0 < \frac{\log_a n}{n^r} < \frac{1}{n^{r-\frac{1}{k}}} $$

"Последовательность" из $0$ слева стремится к $0$. Последовательность справа тоже стремится к $0$, как частный случай $\frac{1}{n^{\alpha}}$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>). Значит, по теореме о двух милиционерах,
"зажатая" между ними последовательность $\frac{\log_a n}{n^r}$ тоже стремится к $0$:

$$ \limn \frac{\log_a n}{n^r} = 0 $$

$\blacksquare$

## Доказательство при $a<1$

Воспользуемся одним из свойств логарифмов:

$$ \log_a n = \log_{\frac{1}{a^{-1}}} n = \log_{\left(\frac{1}{a}\right)^{-1}} n = - \log_{\frac{1}{a}} n $$

Раз, $a<1$, то $\frac{1}{a} > 1$, поэтому

$$ \limn \log_a n = \limn \left(-\log_{\frac{1}{a}} n\right) = -\limn \log_{\frac{1}{a}} n = -0 = 0 $$

$\blacksquare$