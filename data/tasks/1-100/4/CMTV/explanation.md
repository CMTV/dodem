Так как $1=2^0$ и $2=2^1$, то доказать нужно следующее равенство:

$$ 2^0 + 2^1 + 2^2 + \ldots + 2^{n-1} = 2^n - 1 $$

Докажем по методу математической индукции.

## База индукции

Пусть $n=1$. Получаем:

$$ 2^{1-1} = 2^0 = 1 \qquad 2^1 - 1 = 1 $$

## Индукционный переход

Предположим, что равенство выполняется для натурального числа $k$, то есть для суммы первых $k-1$ натуральных степеней числа $2$:

$$ 2^0 + 2^1 + 2^2 + \ldots + 2^{k-1} = 2^k - 1 $$

К обеим частям равенства прибавляем $2^k$:

$$ 2^0 + 2^1 + 2^2 + \ldots + 2^{k-1} + 2^k = 2^k - 1 + 2^k $$

Преобразуем правую часть:

$$ 2^k + 2^k - 1 = 2 \cdot 2^k - 1 = 2^{k+1} - 1 $$

С учетом обновленной правой части получаем следующее равенство:

$$ 2^0 + 2^1 + 2^2 + \ldots + 2^{k-1} + 2^k = 2^{k+1} - 1 $$

Итак, мы из равенства для $k$ вывели равенство для $k+1$. Индукционный переход доказан.
Значит, равенство из условия выполняется для любых натуральных чисел.

$\blacksquare$