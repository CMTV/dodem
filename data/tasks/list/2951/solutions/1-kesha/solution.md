---
{
    "attrs": [
        "check"
    ]
}
---

$f(x)$ в интервале $(-l, l)$ может быть представленна рядом Фурье

\[f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n \pi x}{l} + b_n \sin\frac{n \pi x}{l}\]

где

\[a_n = \frac{1}{l}\int_{-l}^l f(x)\cos\frac{n \pi x}{l}dx\; (n = 0, 1, 2 ...)\]

\[b_n = \frac{1}{l}\int_{-l}^l f(x)\sin\frac{n \pi x}{l}dx\; (n = 1, 2 ...)\]

В нашей задаче $l = \frac{\pi}{2}$ и $f(x) = x\cos(x)$

Рассмотрим подробнее $f(x)$: $\cos(x)$  чётная, $x$ — нечётная. 
Произведение чётной и нечётной функции — нечётная функция. 
Значит $f(x) = x\cos(x)$ — нечётная и $f(x)\cos\frac{n \pi x}{l}$ также нечётная

\[a_n = \frac{1}{l}\int_{-l}^l x\cos(x)\cos\frac{n \pi x}{l}dx\ = 0\; (n = 0, 1, 2 ...),\]

так как мы интегрируем нечётную функцию по симметричному интервалу

Осталось найти $b_n$

\[b_n = \frac{2}{\pi}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\cos(x)\sin(2nx)dx\]

Воспользуемся формулой произведения синуса на косинус 

\[\sin \alpha \cos \beta = \frac{1}{2}\left( \sin(\alpha + \beta) + \sin(\alpha - \beta)\right),\]

Где $\alpha=2nx$, $\beta = x$

\[
		b_n=\frac{1}{\pi}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\left(\sin(2nx - x) + \sin(2nx + x)\right)dx =
		\frac{1}{\pi}\left(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\sin(2nx - x)dx + \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\sin(2nx + x)dx\right)
\]

Вычислим вспомогательный интеграл $\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x \sin(kx)dx$.
Воспользуемся формулой интегрирования по частям $\int udv = uv-\int vdu\\$

Где

\[	u = x; dv = \sin (kx) dx\\
 	du=dx; v = -\frac{1}{k}\cos kx
\]

\[\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x \sin(kx)dx = \left.-\frac{1}{k}x\cos kx\right|_{-\frac{\pi}{2}}^{\frac{\pi}{2}} + \frac{1}{k}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos (kx) dx =
\left.-\frac{1}{k}x\cos kx\right|_{-\frac{\pi}{2}}^{\frac
{\pi}{2}} + \left. \frac{1}{k^2}\sin kx \right|_{-\frac{\pi}{2}}^{\frac{\pi}{2}} =
-\frac{\pi}{k}\cos \frac{\pi}{2}k + \frac{2}{k^2}\sin\frac{\pi}{2}k
\]

Для вычисления двух суммируемых интегралолв из последнего выражения для $b_n$ достаточно подставить в вспомагательный интеграл $k=2n-1$ и $k=2n+1$.

Для $k=2n-1$ получим

\[\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\sin((2n-1)x) dx =
-\frac{\pi}{2n-1}\cos \frac{\pi}{2}(2n-1) + \frac{2}{(2n-1)^2}\sin\frac{\pi}{2}(2n-1) \]

$\cos \frac{\pi}{2}(2n-1) = 0$ и $\sin\frac{\pi}{2}(2n-1) = (-1)^{n+1}$, так как $\frac{\pi}{2}$ умнажается на целое нечётное число. Подставим эти два равенства в предыдущее и получим, что

\[\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\sin((2n-1)x) dx= 
(-1)^{n+1}\frac{2}{(2n-1)^2}
\]

Аналогично для $k=2n+1$

\[\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x\sin((2n+1)x)dx = 
(-1)^{n}\frac{2}{(2n+1)^2}\]

Подставим только что полученные значения двух интергралов в выражене для $b_n$

\[b_n = \frac{1}{\pi}\left( (-1)^{n+1}\frac{2}{(2n-1)^2} + (-1)^{n}\frac{2}{(2n+1)^2}\right)=
\frac{2}{\pi}\left( (-1)^{n+1}\frac{1}{(2n-1)^2} - (-1)^{n+1}\frac{1}{(2n+1)^2}\right)=
(-1)^{n+1}\frac{2}{\pi}\left( \frac{1}{(2n-1)^2} - \frac{1}{(2n+1)^2}\right)=
(-1)^{n+1}\frac{2}{\pi}\frac{(2n+1)^2-(2n-1)^2}{(2n-1)^2(2n+1)^2}=
(-1)^{n+1}\frac{2}{\pi}\frac{4n-(-4n)}{(4n^2-1)^2}=
(-1)^{n+1}\frac{16}{\pi}\frac{n}{(4n^2-1)^2}
\]

Подставим $b_n$ в формулу ряда Фурье и окончательно получим, что

\[f(x) = \sum_{n=1}^{\infty} (-1)^{n+1}\frac{16}{\pi}\frac{n}{(4n^2-1)^2} \sin 2nx\]
\[f(x) = \frac{16}{\pi}\sum_{n=1}^{\infty} \frac{(-1)^{n+1}n}{(4n^2-1)^2} \sin 2nx\]