Возведем обе части в квадрат по прото-задаче <b:[П-ссылка](advanced/proto/common/simple-abs)>:

$$ | |x+1| - |x-1| | < 1 \Leftrightarrow |x+1| - |x-1| < 1 $$

Еще раз возводим в квадрат:

$$
    |x+1|-|x-1| < 1
    \\
    (x+1)^2 - 2|x+1||x-1| + (x-1)^2 < 1
$$

Объединим модули $|x+1|$ и $|x-1|$ в середине левой части неравенства по прото-задаче <b:[П-ссылка](advanced/proto/common/abs)>:

$$ (x+1)^2 - 2|x^2-1| + (x-1)^2 < 1 $$

$$
\begin{aligned}
    2x^2 + 2 - 2|x^2-1| &< 1
    \\
    2x^2 - 2|x^2-1| &< -1
    \\
    x^2 - |x^2-1| &< -\frac{1}{2}
\end{aligned}
$$

$$ |x^2-1| > x^2 + \frac{1}{2} $$

Разложим неравенство на два по прото-задаче <b:[П-ссылка](advanced/proto/common/simple-abs)>:

$$ |x^2-1| > x^2 + \frac{1}{2} \Leftrightarrow \left[ \begin{array}{ll} x^2 - 1 > x^2 + \frac{1}{2} \\ x^2 - 1 < - x^2 - \frac{1}{2} \end{array} \right. $$

Из первого неравенства, вычтя $x^2$ из обеих частей, получаем противоречие:

$$ -1 > \frac{1}{2} $$

Во втором неравенстве прибавим к обеим частям $x^2$:

$$ 2x^2 - 1 < -\frac{1}{2} \\ x^2 < \frac{1}{4} $$

Заметим, что по прото-задаче <b:[П-ссылка](advanced/proto/common/simple-abs)> неравенство $x^2 < \frac{1}{4}$ можно представить в виде

$$ |x| < \frac{1}{2} $$

или (по той же прото-задаче)

$$ -\frac{1}{2} < x < \frac{1}{2} $$