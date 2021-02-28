---
{
    "tags": ["past", "unChecked"]
}
---

Функция $f(x)$ имеющая период $2l$ может быть представленна рядом Фурье

\[f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n \pi x}{l} + b_n \sin\frac{n \pi x}{l}\]

где

\[a_n = \frac{1}{l}\int_{-l}^l f(x)\cos\frac{n \pi x}{l}dx\; (n = 0, 1, 2 ...)\]

\[b_n = \frac{1}{l}\int_{-l}^l f(x)\sin\frac{n \pi x}{l}dx\; (n = 1, 2 ...)\]

В нашей задаче $f(x) = \arcsin(\sin(x))$. Период $\sin(x)$ — $2\pi$, значит период $f(x) = \arcsin(\sin(x))$ тоже $2\pi$. Таким образом $l = \pi$

$f(x) = \arcsin(\sin(x))$ — нечётная функция, действительно

\[f(-x) = \arcsin(\sin(-x)) = \arcsin(-\sin(x)) = \\ = -\arcsin(\sin(x)) = -f(x)\]

Аналогично тому, как было получено, что $a_n = 0$ в задаче <t:[2951]>, $a_n=0$

Осталось найти $b_n$

\[b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} \arcsin(\sin x)\sin(nx)dx\]

Воспользуемся тем, что $\arcsin(\sin x)\sin(nx)$ — чётная функция и интервал, по которому мы интегрируем, симмертичен.

\[b_n = \frac{2}{\pi}\int_{0}^{\pi} \arcsin(\sin x)\sin(nx)dx\]

Вычислим $\arcsin(\sin x)$

При $x \in \left[ 0;\frac{\pi}{2} \right]$

\[ \arcsin(\sin x) =  x\]

При $x \in \left[ \frac{\pi}{2};\pi \right]$

Сделаем замену переменных $y=\pi - x,\; y \in \left[ 0;\frac{\pi}{2} \right]$

\[ \arcsin(\sin x) =  \arcsin(\sin (\pi - x)) = \arcsin(\sin y) =  y = \pi -x\]

Таким образом

\[\arcsin(\sin x)=
\begin{cases}
x, 0 \leq x \leq \frac{\pi}{2} \\ 
\pi -x, \frac{\pi}{2} \leq x \leq \pi 
\end{cases}\]

Функция задана кусочно, поэтому разобъём интеграл на два

\[a_n = \frac{2}{\pi}\left(\int_{0}^{\pi / 2}x\sin(nx)dx + \int_{\pi / 2}^{\pi}(\pi-x)\sin(nx)dx\right) = 
\frac{2}{\pi}\left(\int_{0}^{\pi / 2}x\sin(nx)dx  - \int_{\pi / 2}^{\pi} x\sin(nx)dx + \int_{\pi / 2}^{\pi}\pi\sin(nx)dx \right)

%\frac{2}{\pi}\left(2\int_{0}^{\pi}x\sin(nx)dx - \int_{\pi / 2}^{\pi}\pi\sin(nx)dx\right)
\]

Рассмотрим каждый интеграл по отдельности

В первом интеграле $\int_{0}^{\pi / 2}x\sin(nx)dx$ воспользуемся форумлой интегрирования по частям $\int udv = uv-\int vdu$, где

\[u = x; \; dv = \sin(nx)dx\\
  du=dx; \; v = -\frac{1}{nx}\cos nx\]
  
\[ \int_{0}^{\pi / 2} x \sin (nx)dx = 
\left. -\frac{1}{n}x\cos nx\right|_{0}^{\pi / 2} + \frac{1}{n} \int_{0}^{\pi / 2} \cos (nx)dx =
\frac{1}{n^2} \sin \frac{\pi}{2} n\]

Аналогично для второго интеграла $\int_{\pi / 2}^{\pi} x\sin(nx)dx$ (изменены тоолько пределы интегрирования)

\[ \int_{\pi / 2}^{\pi} x \sin (nx)dx = 
\left. -\frac{1}{n}x\cos nx\right|_{\pi / 2}^{\pi} + \frac{1}{n} \int_{\pi / 2}^{\pi} \cos (nx)dx = \\[5px] =
\frac{\pi}{n}\cos\pi n - \frac{1}{n^2} \sin \frac{\pi}{2} n\]

Третий интеграл

\[\int_{\pi / 2}^{\pi}\pi\sin(nx)dx =
- \frac{\pi}{n}\cos\pi n\]

Подставим полученные значения интегралов в выражение $b_n$

\[a_n = \frac{2}{\pi}\left(\frac{1}{n^2} \sin \frac{\pi}{2} n  - \frac{\pi}{n}\cos\pi n + \frac{1}{n^2} \sin \frac{\pi}{2} n - \frac{\pi}{n}\cos\pi n \right) =
\frac{4}{\pi n^2}\sin \frac{\pi}{2} n\]

Рассмотрим отдельно чётные и нечётные $n$

При $n=2k, k \in \mathbb{N}$

\[\sin \frac{\pi}{2}n = \sin \pi k = 0\]

Значит $b_{2k}$ = 0

При $n=2k+1, k \in \mathbb{N}$

\[\sin \frac{\pi}{2}n = \sin \left( \pi k + \frac{\pi}{2} \right)=\]

Значит $b_{2k+1} = (-1)^k\frac{4}{\pi (2k+1)^2}$

Подставим $n=2k+1$ и $b_{2k+1}$ в формулу ряда Фурье

\[f(x) = \sum_{k=0}^\infty (-1)^k\frac{4}{\pi (2k+1)^2}\sin((2k+1)x) \]

\[f(x) = \frac{4}{\pi}\sum_{k=0}^\infty \frac{(-1)^k}{ (2k+1)^2}\sin(2k+1)x\]