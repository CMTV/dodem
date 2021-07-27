---
{
    "attrs": [
        "check"
    ]
}
---

Cделаем замену в полярных координатах:

$$ x=\cos\varphi \\ y=\sin\varphi $$

Найдем матрицу Якоби (Якобиан):

$$
J(r, \varphi) =\begin{bmatrix}

\dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \varphi} \\[10px]

\dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \varphi} \\

\end{bmatrix}=\begin{bmatrix}

    \cos\varphi &  -r\, \sin\varphi \\

    \sin\varphi &   r\, \cos\varphi

\end{bmatrix}= r
$$

Найдем пределы интегрирование:

$$ 0\le\varphi\le2\pi $$

$$ x^2+y^2 \le a^2 $$

Подставим

$$ x=cos\varphi \\ y=sin\varphi $$

Получим

$$ r^2cos^2\varphi+r^2sin^2\varphi\le a^2= r^2\le a^2, r \ge 0,  a \ge 0 $$

Окончательно получим

$$ r\le a $$

Расставим пределы интегрирование: 

$$\int\limits_0^{2\pi}d\varphi\int\limits_0^a\sqrt{r^2\cos\varphi+r^2\sin^2\varphi}|J|dr=\\[10px]\int\limits_0^{2\pi}d\varphi\int\limits_0^ar^2dr=\int\limits_0^{2\pi}d\varphi \left. \frac{x^3}{3}\right|_0^a=\int\limits_0^{2\pi}\frac{a^3}{3}d\varphi=\left. \frac{a^3\varphi}{3} \right|_0^{2\pi}=\frac{2\pi a^3}{3}$$