Рассмотрим последовательность:
$$ \frac{(-2)^n + 3^n}{(-2^{n+1} + 3^{n+1})} $$

В числителе вынесем за скобки $3^n$, а в знаменателе $3^{n+1}$:
$$ \frac{(-2)^n + 3^n}{(-2^{n+1} + 3^{n+1})} = \frac{3^n}{3^{n+1}} \cdot \frac{1 + \left(-\frac{2}{3}\right)^n}{1 + \left(-\frac{2}{3}\right)^{n+1}} = \frac{1}{3}\cdot \frac{1 + \left(-\frac{2}{3}\right)^n}{1 + \left(-\frac{2}{3}\right)^{n+1}} $$

Теперь находим предел, используя арифметические свойства предела:

\begin{gather*}
\lim_{n\to\infty} \frac{(-2)^n + 3^n}{(-2^{n+1} + 3^{n+1})} = \\[5px]
= \lim_{n\to\infty} \frac{1}{3}\cdot \frac{1 + \left(-\frac{2}{3}\right)^n}{1 + \left(-\frac{2}{3}\right)^{n+1}} = \frac{1}{3} \cdot \frac{\lim\limits_{n\to\infty} 1 + \left(-\frac{2}{3}\right)^n}{\lim\limits_{n\to\infty} 1 + \left(-\frac{2}{3}\right)^{n+1}} = \\[5px]
= \frac{1}{3} \cdot \frac{1 + \lim\limits_{n\to\infty} \left(-\frac{2}{3}\right)^n}{1 + \left(-\frac{2}{3}\right) \lim\limits_{n\to\infty} \left(-\frac{2}{3}\right)^n} = \\[5px]
= \frac{1}{3} \cdot \frac{1 + 0}{1 + \left(-\frac{2}{3}\right) \cdot 0} = \frac{1}{3}
\end{gather*}

Выше использовался факт, что $\left(-\frac{2}{3}\right)^n\to 0$, так как это геометрическая прогрессия, у которой модуль знаменателя меньше $1$. Такие геометрические прогрессии являются бесконечно малыми (см. прото-задачу "[Предел геометрической прогрессии](/proto/sequences/limits/geometric-progression)").