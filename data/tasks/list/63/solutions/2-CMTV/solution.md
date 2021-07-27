Если $a = 1$, то

$$ \limn \sqrt[n]{1} = \limn 1 = 1 $$

---

Если $a>1$, то докажем по определению предела:

$$ \limn \sqrt[n]{a} = 1 \Leftrightarrow \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |\sqrt[n]{a} - 1| < \varepsilon $$

Займемся неравенством в конце:

$$ |\sqrt[n]{a} - 1| < \varepsilon $$

Знаки модуля можно убрать, так как выражение под ним всегда больше $1$, так как $a>1$:

$$
    a^{\frac{1}{n}} - 1 < \varepsilon
    \\
    a^{\frac{1}{n}} < \varepsilon + 1
$$

Прологарифмируем это неравество по основанию $a$, и, так как $a > $, знак неравенства не поменяется:

$$ \frac{1}{n} < \log_{a} (\varepsilon + 1) $$

Изолируем $n$:

$$ n > \frac{1}{\log_{a} (\varepsilon + 1)} $$

Выбирать $N$ из определения предела будем по следующей формуле:

$$ N(\varepsilon) = \ceil{\frac{1}{|\log_a (\varepsilon + 1)|}} $$

С таким $N$ любое $n > N$ будет натуральным и будет удовлетворять следующему неравенству:

$$ n > N(\varepsilon) = \ceil{\frac{1}{|\log_a (\varepsilon + 1)|}} \geq \frac{1}{|\log_a (\varepsilon + 1)|} \geq \frac{1}{\log_a (\varepsilon + 1)} $$

$$ n > \frac{1}{\log_a (\varepsilon + 1)} $$

Итак, для любого $\varepsilon > 0$ мы нашли такое $N$, что все дальнешие $n$ будут удовлетворять неравенству

$$ |\sqrt[n]{a} - 1| < \varepsilon $$

Мы доказали по определению предела, что

$$ \limn \sqrt[n]{a} = 1 $$

$\blacksquare$

---

Если $0 < a < 1$, введем новую величину $b$:

$$ b = \frac{1}{a} $$

Заметим, что $b>1$, так как $a < 1$. Выразим $a$:

$$ a = \frac{1}{b} $$

Возьмем корень $n$-ой степени из обеих частей равенства:

$$ \sqrt[n]{a} = \frac{\sqrt[n]{1}}{\sqrt[n]{b}} = \frac{1}{\sqrt[n]{b}} $$

Теперь перейдем к нахождению предела:

$$ \limn \sqrt[n]{a} = \limn \frac{1}{\sqrt[n]{b}} = \frac{1}{\lim\limits_{n\to\infty} \sqrt[n]{b}} = \frac{1}{1} = 1 $$

$\blacksquare$