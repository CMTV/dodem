## Доказательство 1

$$ |f| < g \Leftrightarrow \begin{cases} f < g \\ f > -g \end{cases} $$

Рассмотрим, каким может быть $f$:

$$ f\geq 0 \text{ или } f < 0 $$

Если $f\geq 0$, то $|f| = f$ и мы сразу получаем

$$ f < g $$

Умножим обе части на $-1$:

$$ -g < -f \leq f \ \text{ т.к. } f\geq 0 $$

$$ -g < f $$

Итак, из $f\geq 0$ получаем цепное неравенство

$$ -g < f < g $$

Если $f < 0$, то $|f| = -f$ и мы получаем

$$ -f < g $$

Умножаем обе части на $-1$:

$$ -g < f $$

Так как $f < 0$, то $-f > 0$, поэтому

$$ -g < f < -f < g $$

$$ - g < f < g $$

Итак, вне зависимости от $f$ мы получаем цепное неравенство:

$$ - g < f < g $$

Его можно перезаписать в виде

$$ |f| < g \Leftrightarrow \begin{cases} f < g \\ f > -g \end{cases} $$

$\blacksquare$

## Доказательство 2

$$ |f| > g \Leftrightarrow \left[\begin{array}{ll} f > g \\ f < -g \end{array}\right. $$

Рассмотрим, каким может быть $f$:

$$ f\geq 0 \text{ или } f < 0 $$

Если $f\geq 0$, то $|f| = f$ и мы сразу получаем

$$ f > g $$

Если $f<0$, то $|f| = -f$ и мы получаем

$$ -f > g $$

Умножаем обе части на $-1$:

$$ f < -g $$

Итак, в зависимости от $f$ имеем два возможных варианта:

$$ f > g \quad (f\geq 0) \text{ или } f < -g \quad (f < 0) $$

Запишем в более привычной форме:

$$ |f| > g \Leftrightarrow \left[\begin{array}{ll} f > g \\ f < -g \end{array}\right. $$

$\blacksquare$

## Доказательство 3

$$ |f| > |g| \Leftrightarrow f^2 > g^2 $$

Возводим обе части в квадрат:

$$ |f|^2 > |g|^2 $$

Но мы знаем, что $|f|^2 = f^2$ и $|g|^2 = g^2$ (см. прото-задачу <p:[abs]>), поэтому можно "избавиться" от модулей. Получаем следующее неравенство:

$$ f^2 > g^2 $$

Итак, мы показали, что

$$ |f| > |g| \Leftrightarrow f^2 > g^2 $$

$\blacksquare$