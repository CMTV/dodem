Из определения $\sin$:

$$ \left| \sin\frac{n\pi}{4} \right| \leq 1 $$

Возведем это неравенство в квадрат по пункту 3 прото-задачи <b:[П-ссылка](advanced/proto/common/simple-abs)>:

$$ \sin^2\frac{n\pi}{4} \leq 1 $$

Домножим обе части неравенства на положительное число $\frac{n}{n+1}$:

$$ \frac{n}{n+1}\sin^2\frac{n\pi}{4} \leq \frac{n}{n+1} $$

Но $\frac{n}{n+1}$ — правильная дробь, поэтому

$$ \frac{n}{n+1}\sin^2\frac{n\pi}{4} \leq \frac{n}{n+1} < 1 $$

$$ \frac{n}{n+1}\sin^2\frac{n\pi}{4} < 1 $$

Итак, мы показали, что $1$ — верхняя граница последовательности $x_n$.

Рассмотрим предел подпоследовательности

$$
    \limn x_{8n-2} = \limn \frac{8n-2}{8n-1}\sin^2\frac{(8n-2)\pi}{4} =
    \\[5px]
    = \limn \frac{8n-1 - 1}{8n-1} \limn \sin^2\frac{(8n-2)\pi}{4} =
    \\[5px]
    = \limn\left( 1 - \frac{1}{8n-1} \right)\limn \sin^2\left( 2\pi n - \frac{2\pi}{4} \right) =
    \\[5px]
    = \left(1 - \limn\frac{1}{8n-1}\right)\limn\sin^2-\frac{2\pi}{4} = (1-0)(-1)^2 = 1
$$

Выше мы использовали то, что $\frac{1}{8n-1}\to 0$. Это легко показать по теореме о двух милиционерах, зажав эту последовательность между $0\to 0$ и $\frac{1}{n}\to 0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>):

$$ 0 \leq \frac{1}{8n-1} \leq \frac{1}{n} $$

Итак, мы показали что $1$ — верхняя граница последовательности $x_n$, а также

$$ \limn x_{8n-2} = 1 $$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/limit-point-bounds)> это означает, что

$$ \overline{\limn} x_n = 1 $$

---

Квадрат любого числа не может быть отрицательным числом, поэтому

$$ 0 \leq \sin^2\frac{\pi n}{4} $$

Обе части умножим на положительное число $\frac{n}{n+1}$:

$$ 0 \leq \frac{n}{n+1}\sin^2\frac{\pi n}{4} $$

Итак $0$ — нижняя граница последовательности $x_n$.

Рассмотрим предел подпоследовательности

$$
    \limn x_{8n-4} = \limn \frac{8n-4}{8n-3}\sin^2\frac{(8n-4)\pi}{4} =
    \\[5px]
    = \limn \frac{8n-3 - 1}{8n-3} \limn \sin^2\frac{(8n-4)\pi}{4} =
    \\[5px]
    = \limn\left( 1 - \frac{1}{8n-3} \right)\limn \sin^2\left( 2\pi n - \pi\right) =
    \\[5px]
    = \left(1 - \limn\frac{1}{8n-3}\right)\limn\sin^2-\pi = (1-0)(0)^2 = 0
$$

Выше мы использовали то, что $\frac{1}{8n-3}\to 0$. Это легко показать по теореме о двух милиционерах, зажав эту последовательность между $0\to 0$ и $\frac{1}{n}\to 0$:

$$ 0 \leq \frac{1}{8n-3} \leq \frac{1}{n} $$

Итак, мы показали что $0$ — нижняя граница последовательности $x_n$, а также

$$ \limn x_{8n-4} = 0 $$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/limit-point-bounds)> это означает, что

$$ \underline{\limn} x_n = 0 $$