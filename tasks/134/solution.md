**Если выполняется а)**

Рассмотрим тогда последовательность $y_n = -x_n$, тогда

$$ \overline\limn (x_n - x_n) = \overline\limn 0 = 0 = \overline\limn x_n + \overline\limn (-x_n) $$

$$ -\overline\limn (-x_n) = \overline\limn x_n $$

Воспользуемся прото-задачей <p:[sequences/limits/max-min-limit-points]>:

$$ \underbrace{-\overline\limn (-x_n)}_{\large =\underline\limn x_n} = \overline\limn x_n $$

Итак

$$ \underline\limn x_n = \overline\limn x_n $$

Мы показали, что у $x_n$ есть только одна предельная точка. По прото-задаче <p:[sequences/limits/limit-point]> это означает, что $x_n$ сходится.

$\blacksquare$

---

**Если выполняется б)**

Рассмотрим последовательность $y_n = \frac{1}{x_n}$, тогда

$$ \overline\limn \left( x_n \cdot \frac{1}{x_n} \right) = \overline\limn 1 = 1 = \overline\limn x_n \cdot \overline\limn \frac{1}{x_n} $$

$$ \frac{1}{\overline\limn\frac{1}{x_n}} = \overline\limn x_n $$

Воспользуемся прото-задачей <p:[sequences/limits/max-min-limit-points]>:

$$ \underbrace{\frac{1}{\overline\limn\frac{1}{x_n}}}_{\large = \underline\limn x_n} = \overline\limn x_n $$

Итак

$$ \underline\limn x_n = \overline\limn x_n $$

Мы показали, что у $x_n$ есть только одна предельная точка. По прото-задаче <p:[sequences/limits/limit-point]> это означает, что $x_n$ сходится.

$\blacksquare$