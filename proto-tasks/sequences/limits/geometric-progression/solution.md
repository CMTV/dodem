Докажем, что если $|q| < 1$, то
$$ \lim_{n\to\infty} C\cdot q^n = 0 $$

Покажем, что $q^n \to 0$. По определению:
$$ \lim_{n\to\infty} q^n = 0 \Leftrightarrow \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |q^n| < \varepsilon $$

Рассмотрим неравенство в конце:
\begin{equation}\label{to-prove}
    |q^n| < \varepsilon
\end{equation}

Воспользуемся свойством модуля:
$$ |a\cdot b| = |a||b| $$

Поэтому:
$$ |q^n| = |q\cdot q\cdot q\ldots| = |q||q|\ldots = |q|^n < \varepsilon $$
$$ |q|^n < \varepsilon $$

Прологарифмируем это неравенство по основанию $|q|$. Так как основание $ 0 < |q| < 1$, то знак неравенства меняется на противоположный:
$$ n > \log_{|q|} \varepsilon $$

Какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\log_{|q|} \varepsilon$ и тогда требуемое по определению предела неравенство \eqref{to-prove} будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:
$$ N(\varepsilon) = \max\left( 1, \ceil{\log_{|q|} \varepsilon} \right) $$

По этой формуле мы берем $N(\varepsilon) = 1$, если логарифм окажется отрицательным:
$$ n > N = 1 > 0 > \log_{|q|} \varepsilon $$
$$ n > \log_{|q|} \varepsilon $$

Если логарифм окажется положительным, то получаем его округление сверху ("потолок"). Из определения "потолка" числа:
$$ \ceil{\log_{|q|} \varepsilon} \geq \log_{|q|} \varepsilon $$

Так как в условии у нас $n > N(\varepsilon)$, то следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$:
$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\log_{|q|} \varepsilon} \geq \log_{|q|} \varepsilon $$
$$ n > \log_{|q|} \varepsilon $$

Итак, мы показали, что любые натуральные $ n > N(\varepsilon) $ удовлетворяют требуемому по определению предела неравенству \eqref{to-prove}.

Мы доказали по определению, что:
$$ \lim_{n\to\infty} q^n = 0 $$

Теперь вернемся к исходному пределу:
$$ \lim_{n\to\infty} C\cdot q^n = 0 $$

Выносим константу $C$ из предела:
$$ \lim_{n\to\infty} C\cdot q^n = C\cdot\lim_{n\to\infty}q^n = C\cdot 0 = 0 $$

$\blacksquare$

---

Докажем, что если $|q| > 1$, то
$$ \lim_{n\to\infty} C\cdot q^n = \infty $$

Покажем, что $q^n \to \infty$. По определению:
$$ \lim_{n\to\infty} q^n = \infty \Leftrightarrow \forall E > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |q^n| > E $$

Рассмотрим неравенство в конце:
$$ |q^n| > E \Leftrightarrow \frac{1}{|q^n|} < \frac{1}{E} $$

$$ \frac{1}{|q^n|} = \frac{|1|}{|q^n|} = \left|\frac{1}{q}^n\right| < \frac{1}{E} $$

Но $\left(\frac{1}{q}\right)^n$ — геометрическая прогрессия, причем раз $|q| > 1$, то $ \left|\frac{1}{q}\right| < 1 $.
Выше мы уже показали, что любая геометрическая прогрессия, в которой знаменатель по модулю меньше $1$, стремится к нулю.
Значит и наша последовательность $\frac{1}{q}^n \to 0$.

$$  $$