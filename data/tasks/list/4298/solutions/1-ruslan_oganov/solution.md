---
{
    "attrs": [
        "check"
    ]
}
---

Применим формулу Грина:

$$ \oint\limits_{C} P \,dx + Q \,dy = \iint\limits_{D} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \,dx\,dy $$

$$ \oint\limits_C \underbrace{xy^2}_Q dy\underbrace{-x^2y}_Pdx=\iint\limits_D \left( \frac{\partial (xy^2)}{\partial x} - \frac{\partial (-x^2y)}{\partial y} \right) \,dx\,dy= \\[10px] = \iint\limits_D(x^2+y^2)dxdy$$

Сделаем замену в полярных координатах $x=r\cos\varphi, y=r\sin\varphi$, якобиан равен $r$.

$$ \iint\limits_D(r^2|J|)drd\varphi=\iint\limits_Dr^3drd\varphi $$

Определим пределы интегрирование:

$$ 0\le \varphi\le2\pi,$$

подставим нашу замену в уравнение окружности:

$$r^2\le a^2 (r>0) \Rightarrow 0\le r\le a$$

Вычислим повторный интеграл:

$$\int\limits_0^{2\pi}d\varphi\int\limits_0^ar^3dr=\int\limits_0^{2\pi}d\varphi \left. \frac{r^4}{4}\right|_0^a=\frac{\pi a^4}{2}$$