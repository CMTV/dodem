## Пункт а)

$$ |x-y| \geq ||x|-|y|| $$

Упростим неравенство, возведя обе его части в квадрат (см. прото-задачу <b:[П-ссылка](advanced/proto/common/simple-abs)>):

$$ x^2 - 2xy + y^2 \geq x^2 - 2|x||y| + y^2 $$

$$ |x||y| \geq xy $$

Воспользуемся свойством модуля (см. прото-задачу <b:[П-ссылка](advanced/proto/common/abs)>):

$$ |x||y| = |xy| \geq xy \\ |xy| \geq xy $$

Если $xy \geq 0$, то $|xy| = xy$, поэтому выполняется

$$ xy \geq xy $$

Если $xy < 0$, то $|xy| = -xy$, поэтому

$$ -xy \geq xy $$

Моделим обе части на $xy$. Так как $xy < 0$, то знак меняем на противоположный:
$$ -1 \leq 0 $$

Это тоже верно.

Итак, мы доказали, что

$$ |x-y| \geq ||x|-|y|| $$

$\blacksquare$

## Пункт б)

$$ |x+x_1+\ldots+x_n| \geq |x| - (|x_1| + \ldots + |x_n|) $$

В этом пункте мы будем постоянно пользоваться следующим свойством модуля (см. прото-задачу <b:[П-ссылка](advanced/proto/common/abs)>):

$$ |f+g| \geq |f| - |g| $$

Назовем это свойство "важным".

Перейдем теперь к доказательству. Доказывать будем по методу математической индукции.

**База индукции**: пусть $n = 1$:

$$ |x + x_1| \geq |x| - |x_1| $$

Это неравенство выполняется (по "важному" свойству).

**Индукционный переход**:

Пусть доказываемое неравенство выполняется для какого-то $k$:

$$ |x+x_1+\ldots+x_k| \geq |x| - (|x_1| + \ldots + |x_k|) $$

Докажем, что неравенство выполняется и для $k+1$:

$$ |x+x_1+\ldots+x_k + x_{k+1}| \geq |x| - (|x_1| + \ldots + |x_k| + |x_{k+1}|) $$

В левой неравенства возьмем в скобки все слагаемые от $x$ до $x_k$:

$$ |(x+x_1+\ldots+x_k) + x_{k+1}| $$

Воспольуземся "важным" свойством:

$$ |(x+x_1+\ldots+x_k) + x_{k+1}| \geq |x+x_1+\ldots+x_k| - |x_{k+1}| $$

Усилим неравенство, применив индукционное предположение для первого слагаемого правой части неравенства:

$$
    |(x+x_1+\ldots+x_k) + x_{k+1}| \geq |x+x_1+\ldots+x_k| - |x_{k+1}| \geq
    \\
    \geq |x| - (|x_1| + \ldots + |x_k|) - |x_{k+1}|
$$

Осталось занести $|x_{k+1}|$ под скобку в правой части:

$$ |x+x_1+\ldots+x_k + x_{k+1}| \geq |x| - (|x_1| + \ldots + |x_k| + |x_{k+1}|) $$

Индукционный переход доказан.

Мы доказали, что

$$ |x+x_1+\ldots+x_n| \geq |x| - (|x_1| + \ldots + |x_n|) $$

$\blacksquare$