---
{ "tags": ["past"] }
---

Представим последовательность в виде разности:

$$
    \frac{1}{n+1} + \ldots + \frac{1}{2n} = \\[5px] = \left( 1 + \frac{1}{2} + \ldots + \frac{1}{n} + \ldots + \frac{1}{2n} \right) - \left(1 + \frac{1}{2} + \ldots + \frac{1}{n} \right)
$$

В задаче <t:[146]> мы вывели формулу

$$ 1 + \frac{1}{2} + \ldots + \frac{1}{n} = C + \ln n + \varepsilon_n, $$

причем $\varepsilon_n \to 0$ при $n\to\infty$.

Применим эту формулу к обоим слагаемым выше:

$$ \frac{1}{n+1} + \ldots + \frac{1}{2n} = C + \ln 2n + \varepsilon_{2n} - C -\ln n - \varepsilon_n $$

$$ \frac{1}{n+1} + \ldots + \frac{1}{2n} = \ln\left(\frac{2n}{n}\right) + \varepsilon_{2n} - \varepsilon_n $$

$$ \frac{1}{n+1} + \ldots + \frac{1}{2n} = \ln 2 + \varepsilon_{2n} - \varepsilon_n $$

Найдем теперь предел

$$
    \limn \left(\frac{1}{n+1} + \ldots + \frac{1}{2n}\right) = \limn (\ln 2 + \varepsilon_{2n} - \varepsilon_n) =
    \\[5px]
    = \limn \ln 2 + \limn \varepsilon_{2n} - \limn \varepsilon_n = \ln 2 + 0 - 0
$$

Итак

$$ \limn \left( \frac{1}{n+1} + \frac{1}{n+2} + \ldots + \frac{1}{2n} \right) = \ln 2 $$