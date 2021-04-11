---
{
    "tags": ["unChecked"]
}
---

Параметризуем нашу окружность:

$$ \begin{cases} x=a\cos t \\ y=a\sin t \end{cases}, \quad 0\le t\le 2\pi $$

Продифференцируем:

$$ \begin{cases} dx=-a\sin t dt\\ dy=a\cos t dt \end{cases} $$

$$ \oint\limits_C\frac{a(\cos t+\sin t)(-a\sin t dt+)-a(\cos t-\sin t)(a\cos t dt)}{a^2(\cos^2 t+\sin^2 t)}= \\[10px] = \oint\limits_C\frac{-a^2(\cos t\sin t +\sin^2 t)dt-a^2(\cos^2 t-\sin t\cos t )dt}{a^2(\cos^2 t+\sin^2 t)}= \\[10px] = -\oint\limits_C1dt=-\int\limits_0^{2\pi}1dt=\left. -t\right|_0^{2\pi}=-\ 2\pi $$