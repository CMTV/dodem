По условию известно, что

$$ \limn \frac{x_{n+1}}{x_n} = A $$

Значит, по задаче <t:140> к тому же пределу сходится и последовательность средних геометрических:

$$ \limn \frac{x_{n+1}}{x_n} = \limn \sqrt[n]{\frac{x_2}{x_1}\frac{x_3}{x_2}\ldots\frac{x_{n+1}}{x_n}} = \limn \sqrt[n]{\frac{x_{n+1}}{x_1}} = A $$

$$ \limn \sqrt[n]{\frac{x_{n+1}}{x_1}} = \frac{\limn \sqrt[n]{x_{n+1}}}{x_1^{\limn \frac{1}{n}}} = \frac{\limn \sqrt[n]{x_{n+1}}}{x_1^0} = \limn \sqrt[n]{x_{n+1}} = A $$

$$ \limn \sqrt[n]{x_{n+1}} = A $$

Здесь мы воспользовались тем, что $\frac{1}{n}\to 0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>).

---

Вновь рассмотрим исходную последовательность

$$ \limn \frac{x_{n+1}}{x_n} = A $$

Число $A\geq 0$, если бы оно было отрицательным, то с какого-то номера $N$ все элементы последовательности $\frac{x_{n+1}}{x_n}$ должны были быть отрицательными, но этого не может быть, так как по условию $x_n > 0$.

## $A$ положительное

Распишем по определению, что означает $\frac{x_{n+1}}{x_n}\to A$:

$$ \forall \varepsilon > 0 \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{x_{n+1}}{x_n} - A \right| < \varepsilon $$

Раз выполняется для любого положительного $\varepsilon$, то и для положительного $\frac{A}{2}$ существует какое-то $N$, что для любого $n>N$ выполняется неравенство:

$$ \left| \frac{x_{n+1}}{x_n} - A \right| < \frac{A}{2} $$

Распишем это неравенство в цепное с помощью пункта 1 прото-задачи <b:[П-ссылка](advanced/proto/common/simple-abs)>:

$$ -\frac{A}{2} < \frac{x_{n+1}}{x_n} - A < \frac{A}{2} $$

Прибавим ко всем частям $A$:

$$ \frac{A}{2} < \frac{x_{n+1}}{x_n} < \frac{3A}{2} $$

"Перевернем" дроби:

$$ \frac{2}{3A} < \frac{x_n}{x_{n+1}} < \frac{2}{A} $$

Умножим все части на положительное $x_{n+1}$:

$$ \frac{2}{3A}x_{n+1} < x_n < \frac{2}{A}x_{n+1} $$

Возьмем корень $n$-степени из каждой части неравенства:

$$ \sqrt[n]{\frac{2}{3A}}\sqrt[n]{x_{n+1}} < \sqrt[n]{x_n} < \sqrt[n]{\frac{2}{A}}\sqrt[n]{x_{n+1}} $$

Предел левой части неравенства:

$$ \limn \sqrt[n]{\frac{2}{3A}}\sqrt[n]{x_{n+1}} = \left(\frac{2}{3A}\right)^{\limn \frac{1}{n}}\limn\sqrt[n]{x_{n+1}} = 1 \cdot A = A $$

Предел правой части неравенства:

$$ \limn \sqrt[n]{\frac{2}{A}}\sqrt[n]{x_{n+1}} = \left(\frac{2}{A}\right)^{\limn \frac{1}{n}}\limn\sqrt[n]{x_{n+1}} = 1\cdot A = A $$

Итак, обе части неравенства стремятся к $A$, а значит, по теореме о двух милиционерах, "зажатая" между ними $\sqrt[n]{x_n}$ тоже стремится к $A$:

$$ \limn \sqrt[n]{x_n} = A $$