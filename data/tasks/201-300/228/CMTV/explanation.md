Итак,

$$ y = \frac{e^x - \frac{1}{e^x}}{2} $$

Обозначим $t = e^x$:

$$ y = \frac{t-\frac{1}{t}}{2} \\ 2y = t - \frac{1}{t} $$

Домножим обе части равенства на $t$:

$$ 2yt = t^2 - 1 \\ t^2 - 2yt - 1 = 0 $$

Теперь корни этого квадратного уравнения с помощью дискриминанта:

$$ t_1(y) = y + \sqrt{y^2 + 1} \qquad t_2(y) = y - \sqrt{y^2 + 1} $$

Переходим от $t$ обратно к $x$:

$$ e^{x_1} = y+\sqrt{y^2 + 1} \qquad e^{x_2} = y-\sqrt{y^2 + 1} $$

Прологарифмируем равенства по основанию $e$:

$$ x_1(y) = \ln \left(y+\sqrt{y^2+1}\right) \qquad x_2(y) = \ln\left( y - \sqrt{y^2 + 1} \right) $$

Прологарифмировав равенства, мы наложили ограничение на аргумент логарифма. По определению, он должен быть строго больше $0$.

Поэтому, для функции $x_1(y)$:

$$ y + \sqrt{y^2 + 1} > 0 \\ \sqrt{y^2 + 1} > -y $$

При положительных $y$ неравенство выполняется всегда, так как слева имеем положительное число, а справа — отрицательное. При $0$ неравенство выполняется, так как $1 > 0$. При отрицательных $y$ обе части неравенства положительные, поэтому их можно возвести в квадрат:

$$ y^2 + 1 > y^2 \\ 1 > 0 $$

Итак, функция $x_1(y)$ определена при любых $y$.

Для функции $x_2(y)$ имеем:

$$ y - \sqrt{y^2 + 1} > 0 \\ y > \sqrt{y^2 + 1} $$

При отрицательных $y$ неравенство не выполняется, так как слева имеем отрицательное число, а справа — положительное. При $0$ неравенство не выполняется, так как $0 > 1$. При положительных $y$ обе части неравенства положительные, поэтому их можно возвести в квадрат:

$$ y^2 > y^2 + 1 \\ 0 > 1 $$

Итак, нет таких $y$, чтобы функция $x_2(y)$ была определена.

Поэтому:

$$ x = \phi(y) = \ln\left( y + \sqrt{y^2 + 1} \right) \quad (-\infty < y < +\infty) $$