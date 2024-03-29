---
{
    "title": "Предел геометрической прогрессии",
    "desc": "Сходимость к нулю убывающих и к бесконечности возрастающих геометрических прогрессий.",
    "type": "theorem"
}
---

Пусть нам дана геометрическая прогрессия ($q \neq 0$):

$$ C\cdot q^{n} $$

||| theorem Сходимость геометрической прогрессии

Если $|q| < 1$, то:

$$ \lim_{n\to\infty} C\cdot q^{n} = 0 $$

||| proof

Покажем, что $q^n \to 0$. По определению:

$$ \lim_{n\to\infty} q^n = 0 \Leftrightarrow \forall \varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ |q^n| < \varepsilon $$

Рассмотрим неравенство в конце:

$$
    |q^n| < \varepsilon
$$

Вынесем степень $n$ за знаки модуля (см. прото-задачу <b:[П-ссылка](advanced/proto/common/abs)>):

$$ |q^n| = |q|^n < \varepsilon \\ |q|^n < \varepsilon $$

Прологарифмируем это неравенство по основанию $|q|$. Так как основание $ 0 < |q| < 1$, то знак неравенства меняется на противоположный:

$$ n > \log_{|q|} \varepsilon $$

Какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\log_{|q|} \varepsilon$ и тогда требуемое по определению предела неравенство будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:

$$ N(\varepsilon) = \max\left( 1, \ceil{\log_{|q|} \varepsilon} \right) $$

Докажем, что такое $N$ будет подходить определению доказываемого предела.

По этой формуле мы берем $N(\varepsilon) = 1$, если логарифм окажется отрицательным:

$$ n > N = 1 > 0 > \log_{|q|} \varepsilon \\ n > \log_{|q|} \varepsilon $$

Если логарифм окажется положительным, то получаем его округление сверху ("потолок"). Из определения "потолка" числа:

$$ \ceil{\log_{|q|} \varepsilon} \geq \log_{|q|} \varepsilon $$

Следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$, поэтому

$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\log_{|q|} \varepsilon} \geq \log_{|q|} \varepsilon \\ n > \log_{|q|} \varepsilon $$

Итак, мы показали, что любые натуральные $ n > N(\varepsilon) $ подходят определению доказываемого предела.

Значит мы доказали по определению, что:

$$ \lim_{n\to\infty} q^n = 0 $$

Теперь вернемся к исходному пределу:

$$ \lim_{n\to\infty} C\cdot q^n = 0 $$

Выносим константу $C$ из предела:

$$ \lim_{n\to\infty} C\cdot q^n = C\cdot\lim_{n\to\infty}q^n = C\cdot 0 = 0 $$

$\blacksquare$

|||

||| theorem Расходимость геометрической прогрессии

Если $|q| > 1$ и $C\neq 0$, то:

$$ \lim_{n\to\infty} C\cdot q^{n} = \infty $$

||| proof

Представим $q^n$ в следующем виде:

$$ q^n = \frac{1}{\frac{1}{q^n}} $$

Раз $|q| > 1$, то $\frac{1}{|q|} = \left|\frac{1}{q}\right| < 1$. Но выше мы уже доказали, что геометрическая прогрессия со знаменателем, меньшим $1$, сходится к $0$, поэтому

$$ \limn \frac{1}{q^n} = 0 $$

Итак, последовательность $\frac{1}{q^n}$ — бесконечно малая. Но тогда обратная ей последовательность $\large\frac{1}{\frac{1}{q^n}}$ — бесконечно большая (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/bm-bb)>), поэтому:

$$ \limn \frac{1}{\frac{1}{q^n}} = q^n = \infty $$

Теперь вернемся к исходному пределу:

$$ \lim_{n\to\infty} C\cdot q^n = \infty $$

Выносим константу $C$ из предела:

$$ \lim_{n\to\infty} C\cdot q^n = C\cdot\lim_{n\to\infty}q^n = C\cdot \infty = \infty $$

$\blacksquare$

|||