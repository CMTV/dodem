---
{
    "attrs": [
        "check"
    ]
}
---

Функция $f(x)$ имеющая период $2l$ может быть представленна рядом Фурье

\[f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n \pi x}{l} + b_n \sin\frac{n \pi x}{l}\]

где

\[a_n = \frac{1}{l}\int_{-l}^l f(x)\cos\frac{n \pi x}{l}dx\; (n = 0, 1, 2 ...)\]

\[b_n = \frac{1}{l}\int_{-l}^l f(x)\sin\frac{n \pi x}{l}dx\; (n = 1, 2 ...)\]

В нашей задаче $f(x) = \sgn(\cos(x))$. Период $\cos(x)$ — $2\pi$, значит период $f(x) = \sgn(\cos(x))$ тоже $2\pi$. Таким образом $l = \pi$ 

Аналогично тому, как было получено, что $a_n = 0$ в задаче <t:2951>, $b_n=0$

Осталось найти $a_n$

\[a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} \sgn(\cos x)\cos(nx)dx\]

Воспользуемся тем, что $\sgn(\cos x)\cos(nx)$ — чётная функция и интервал, по которому мы интегрируем, симмертичен.

\[a_n = \frac{2}{\pi}\int_{0}^{\pi} \sgn(\cos x)\cos(nx)dx\]

$\sgn (\cos x)$ — разрывная функция

\[\sgn (\cos x)=
\begin{cases}
1, 0 \leq x < \frac{\pi}{2} \\ 
-1, \frac{\pi}{2} < x \leq \pi 
\end{cases}\]

Поэтому разобъём интеграл на два

\[a_n = \frac{2}{\pi}\left(\int_{0}^{\pi / 2}\cos(nx)dx - \int_{\pi / 2}^{\pi}\cos(nx)dx\right) = 
\frac{2}{\pi}\frac{1}{n}\left( \left. \sin nx \right|_{0}^{\pi / 2} - \left. \sin nx \right|_{\pi / 2}^{\pi} \right)
\]

$\sin \pi n = \sin 0 = 0$

\[a_n = \frac{2}{\pi}\frac{1}{n}\left( \sin \frac{\pi}{2}n + \sin \frac{\pi}{2}n \right) = \frac{4}{\pi n} \sin \frac{\pi}{2}n\]

Расмотрим отдельно чётные и нечётные $n$

При $n=2k, k \in \mathbb{N} \cup \{0\} $

\[\sin \frac{\pi}{2}n = \sin \pi k = 0\]

При $n=2k+1, k \in \mathbb{N} \cup \{0\}  $

\[\sin \frac{\pi}{2}n = \sin \left( \pi k + \frac{\pi}{2} \right)=(-1)^k\]

Значит $a_{2k}=0$ и $a_{2k+1} = (-1)^k \frac{4}{\pi (2k+1)}$

Подставим $n=2k+1$ и $a_{2k+1}$ в формулу ряда Фурье

\[f(x) = \sum_{k = 0}^{\infty} (-1)^k \frac{4}{\pi (2k+1)}\cos(2k+1)x\]

\[f(x) = \frac{4}{\pi}\sum_{k = 0}^{\infty} (-1)^k \frac{\cos(2k+1)x}{2k+1}\]