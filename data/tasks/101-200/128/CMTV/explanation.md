## Пункт а)

$$ x_n + y_n $$

Может как сходиться:

$$ x_n = n, \qquad y_n = -n $$

$$ \limn x_n + y_n = \limn n - n = \limn 0 = 0 $$

$$ \limn x_n + y_n = 0 $$

Так и расходиться:

$$ x_n = n, \qquad y_n = n $$

$$ \limn x_n + y_n = \limn n+n = \limn 2n = +\infty $$

$$ \limn x_n + y_n = +\infty $$

## Пункт б)

$$ x_n y_n $$

Может сходиться:

$$
    x_n = 0, 1, 0, 1,\ldots = \frac{1 + (-1)^n}{2}
    \\[5px]
    y_n = 1, 0, 1, 0,\ldots = \frac{1-(-1)^n}{2}
$$

У каждой из этих последовательностей есть два разных частичных предела (для четных и нечетных номеров), а значит они расходятся, так как у сходящейся последовательности не может быть больше одной предельной точки (см. прото-задачу <p:[sequences/limits/limit-point]>).

$$
    \limn x_n y_n = \limn \frac{(1+(-1)^n)(1-(-1)^n)}{4} =
    \\[5px]
    = \limn \frac{1^2 - \left((-1)^2\right)^n}{4} = \limn \frac{1^2 - 1^n}{4} = \limn \frac{0}{4} = \limn 0 = 0
$$

$$ \limn x_n y_n = 0 $$

Может расходиться:

$$ x_n = n, \qquad y_n = n $$

$$ \limn x_n y_n = \limn n\cdot n = \limn n^2 = +\infty $$

$$ \limn x_n y_n = +\infty $$