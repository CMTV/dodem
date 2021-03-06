## Верхняя грань
 
Легко видеть, что $f(x)$ при увеличении $x$ уходит в $+\infty$. Докажем это.

Пускай $f(x)$ ограничена сверху некоторым числом $E>0$. Но тогда нам достаточно взять $x = E$ и получаем:

$$ f(E) = E + \frac{1}{E} > E $$

Получили противоречие. Посколько подобное можно проделать для любой наперед заданной верхней границы, получаем, что у $f(x)$ ее просто нет. По определению это означает, что точной верхней гранью $f(x)$ является $+\infty$.

$\blacksquare$

## Нижняя грань

Нужно заметить, что $f(x)$ интересно себя ведет. При больших $x$ большую роль в значение функции вкладывает левое слагаемое, а правое можно чуть ли не игнорировать. Но это работает и в обратную сторону. При маленьких $x$ уже левым слагаемым можно пренебречь, наибольший вклад дает правое.

Итак, $f(x)$ быстро уходит в $+\infty$ как при маленьких, так и при больших $x$. Значит, минимум стоит искать где-то посередине. Отличный вариант получаем при $x=1$. Тогда $f(1) = 2$.

Докажем, что это и есть нижняя граница $f(x)$:

$$ x + \frac{1}{x} \geq 2 \\ \frac{x^2 + 1}{x} \geq 2 \\ x^2 + 1 \geq 2x \\ x^2 - 2x + 1 \geq 0 \\ (x-1)^2 \geq 0 $$

Итак, $2$ действительно нижняя граница $f(x)$. Но она же является и точной нижней границей. Пусть это не так и есть еще одна нижняя граница, которая больше $2$. Но тогда $f(1) = 2$ оказывается ниже этой границы, чего по определению не может быть. Значит, не существует нижних границ больше $2$.

Получается, что $2$ — точная нижняя грань $f(x)$.