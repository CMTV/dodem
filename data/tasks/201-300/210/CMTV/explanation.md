## Исследование

$$ f_1(x) = \frac{x}{\sqrt{1+x^2}} $$

$$ f_2(x) = \frac{f(x)}{\sqrt{1+f(x)^2}} = \frac{\frac{x}{\sqrt{1+x^2}}}{\sqrt{1 + \frac{x^2}{1+x^2}}} = \frac{x}{\sqrt{1+x^2}\frac{\sqrt{1+2x^2}}{\sqrt{1 + x^2}}} = \frac{x}{\sqrt{1+2x^2}} $$

Закономерность заметили: при увеличении $n$ увеличивается на единицу коэффициент при $x^2$ в знаменателе.

## Доказательство

Докажем, что

$$ f_n(x) = \frac{x}{\sqrt{1+nx^2}} $$

Доказывать будем по методу математической индукции.

**База индукции:**

Пусть $n=1$, тогда:

$$ f_1(x) = f(x) = \frac{x}{\sqrt{1+x^2}} $$

**Индукционный переход:**

Пусть равенство выполняется для какого-то натурального $k$:

$$ f_k(x) = \frac{x}{\sqrt{1+kx^2}} $$

Рассмотрим, чему равняется $f_{k+1}(x)$:

$$ f_{k+1}(x) = f(f_k(x)) = \frac{f_k(x)}{\sqrt{1+f_k(x)^2}} = \\ = \frac{\frac{x}{\sqrt{1+kx^2}}}{\sqrt{1 + \frac{x^2}{1+kx^2}}} = \frac{x}{\sqrt{1+kx^2}\frac{\sqrt{1+(k+1)x^2}}{\sqrt{1+kx^2}}} = \frac{x}{\sqrt{1+(k+1)x^2}} $$

Итак:

$$ f_{k+1}(x) = \frac{x}{\sqrt{1+(k+1)x^2}} $$

Индукционный переход доказан. Это означает, что доказываемая формула работает для любого натурального $n$.

$\blacksquare$

---

Ответ:

$$ f_n(x) = \frac{x}{\sqrt{1+nx^2}} $$