Рассмотрим формулу суммы $n$ первых членов геометрической прогрессии:

$$ S_n = \frac{b_1\left( q^n - 1 \right)}{q-1} $$

Найдем предел этой суммы в случае, когда $|q| < 1$:

$$
    \lim_{n\to\infty} S_n = \frac{b_1}{q-1} \cdot \lim_{n\to\infty} q^n - 1 = \frac{b_1}{q-1} \cdot \left(\left( \lim_{n\to\infty} q^n \right)  - 1\right) = \\
    = \frac{b_1}{q-1} \cdot \left(0 - 1\right) = \frac{b_1}{1-q}
$$

Выше использовался факт, что $q^n \to 0$, так как это геометрическая прогрессия, у которой модуль знаменателя меньше $1$. Такие геометрические прогрессии являются бесконечно малыми (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/geometric-progression)>).

---

В числителе и знаменателе последовательности из условия имеем как раз сумму геометрической прогрессии с первым членом, равным $1$:

$$
    \lim_{n\to\infty} \frac{1 + a + a^2 + \ldots + a^n}{1 + b + b^2 + \ldots + b^n} = \frac{\lim\limits_{n\to\infty} 1 + a + a^2 + \ldots + a^n}{\lim\limits_{n\to\infty} 1 + b + b^2 + \ldots + b^n} = \\
    = \frac{ \frac{1}{1-a} }{ \frac{1}{1-b} } = \frac{1-b}{1-a}
$$