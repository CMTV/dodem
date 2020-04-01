Докажем следующее неравенство

$$ -e-\frac{\sqrt{2}}{2} < \left(1 + \frac{1}{n} \right)^n\cdot(-1)^n+\sin\frac{n\pi}{4} < e + 1 $$

Сначала докажем, что

$$ \left(1 + \frac{1}{n} \right)^n\cdot(-1)^n+\sin\frac{n\pi}{4} < e + 1 $$

Если $n$ — нечетное, то есть $n=2p-1$, тогда

$$ -\left( 1 + \frac{1}{2p-1} \right)^{2p-1} < 0 < e $$

$$ -\left( 1 + \frac{1}{2p-1} \right)^{2p-1} < e $$

В [задаче 69](/tasks/69) мы показали, что

$$ \left(1 + \frac{1}{n}\right)^{n} < e $$

Если $n$ — четное, то есть $n=2p$, то, согласно неравенству выше

$$ \left( 1 + \frac{1}{2p} \right)^{2p} < e $$

Итак, при любых $n$ (четных и нечетных) выполняется неравенство:

$$ \left(1 + \frac{1}{n}\right)^n\cdot(-1)^n < e $$

По определению синуса:

$$ \sin\frac{\pi n}{4} \leq 1 $$

Сложим оба неравенства выше и получаем, что

$$ \left(1 + \frac{1}{n}\right)^n\cdot(-1)^n + \sin\frac{\pi n}{4} < e + 1 $$

$\blacksquare$

---

Теперь докажем, что

$$ -e-\frac{\sqrt{2}}{2} < \left(1 + \frac{1}{n} \right)^n\cdot(-1)^n+\sin\frac{n\pi}{4} $$

Пусть $n$ — четное, то есть $n = 2p$, тогда

$$ -e-\frac{\sqrt{2}}{2} < 0 < \left(1+\frac{1}{2p}\right)^{2p} $$

$$ -e-\frac{\sqrt{2}}{2} < \left(1+\frac{1}{2p}\right)^{2p} $$

$$ \sin(2p)\frac{\pi}{2} = \sin \pi p = 0 $$

$$ 0 \leq \sin(2p)\frac{\pi}{2} $$

Складываем последние два неравенства и получаем, что при четных $n$

$$ -e-\frac{\sqrt{2}}{2} < \left(1+\frac{1}{2p}\right)^{2p} + \sin(2p)\frac{\pi}{2} $$

Вновь воспользуемся неравенством из задачи 69 при условии, что $n$ — нечетное, то есть $n=2p-1$:

$$ \left( 1 + \frac{1}{2p-1} \right)^{2p-1} < e $$

Уножим неравенство на $-1$:

$$ -e < -\left( 1 + \frac{1}{2p-1} \right)^{2p-1} $$

Теперь разберемся с синусом:

$$ \sin(2p-1)\frac{\pi}{2} = \sin\left(\pi p - \frac{\pi}{2} \right) \geq -\frac{\sqrt{2}}{2} $$

Сложим неравенства выше:

$$ -e -\frac{\sqrt{2}}{2} < -\left( 1 + \frac{1}{2p-1} \right)^{2p-1} + \sin(2p-1)\frac{\pi}{2} $$

Итак, мы показали, что при любых $n$ (четных и нечетных) выполняется неравенство:

$$ -e - \frac{\sqrt{2}}{2} < \left( 1 + \frac{1}{n} \right)^n\cdot(-1)^n+\sin\frac{n\pi}{4} $$

$\blacksquare$

---

Итак, мы показали, что $-e-\frac{\sqrt{2}}{2}$ — нижняя граница последовательности $x_n$, и что $e + 1$ — верхняя граница.

Теперь найдем предел следующей подпоследовательности:

\begin{gather*}
    \limn x_{8n-6} = \limn \left(\left(1 + \frac{1}{8n-6}\right)^{8n-6} + \sin\frac{(8n-6)\pi}{4}\right) =
    \\[5px]
    = \limn \left(1+\frac{1}{8n-6}\right)^{8n-6} + \limn\sin\left(2\pi n - \frac{3\pi}{2} \right) =
    \\[5px]
    = e + \limn 1 = e + 1
\end{gather*}

Выше мы использовали то, что

$$ \limn \left(1 + \frac{1}{n}\right)^n = e $$

А значит, по прото-задаче "[Единственность предельной точки](/proto/sequences/limits/limit-point)", любая подпоследовательность тоже стремится к $e$, то есть

$$ \limn \left(1+\frac{1}{8n-6}\right)^{8n-6} = e $$

Итак, мы показали, что

$$ \limn x_{8n-6} = e + 1 $$

и $e+1$ — верхняя граница $x_n$, то по прото-задаче "[Точные грани и предельные точки](/proto/sequences/limits/limit-point-bounds)"

$$ \overline{\limn} x_n = e + 1 $$

Найдем предел следующей подпоследовательности:

\begin{gather*}
    \limn x_{8n-1} = \limn -\left(\left(1 + \frac{1}{8n-1}\right)^{8n-1} + \sin\frac{(8n-1)\pi}{4}\right) =
    \\[5px]
    = -\limn \left(1+\frac{1}{8n-1}\right)^{8n-1} + \limn\sin\left(2\pi n - \frac{\pi}{4} \right) =
    \\[5px]
    = -e + \limn -\frac{\sqrt{2}}{2} = -e -\frac{\sqrt{2}}{2}
\end{gather*}

Итак, мы показали, что

$$ \limn x_{8n-1} = - e - \frac{\sqrt{2}}{2} $$

и $-e-\frac{\sqrt{2}}{2}$ — нижняя граница $x_n$, то по прото-задаче "Точные грани и предельные точки"

$$ \underline{\limn} x_n = -e- \frac{\sqrt{2}}{2} $$