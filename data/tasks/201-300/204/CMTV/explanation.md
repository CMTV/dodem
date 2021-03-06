Представим $f(x)$ в более удобном для преобразований виде:

$$ f(x) = \frac{a^x}{2} + \frac{a^{-x}}{2} $$

Теперь рассмотрим по отдельности, чему равны $f(x+y)$ и $f(x-y)$:

$$ f(x+y) = \frac{a^{x+y}}{2} + \frac{a^{-(x+y)}}{2} = \frac{a^x a^y}{2} + \frac{a^{-x} a^{-y}}{2} $$

$$ f(x-y) = \frac{a^{x-y}}{2} + \frac{a^{-(x-y)}}{2} = \frac{a^x a^{-y}}{2} + \frac{a^{-x}a^y}{2} $$

Теперь из левой части доказываемого неравенства получим правую:

$$ f(x+y) + f(x-y) = \\ = \frac{a^x a^y}{2} + \frac{a^{-x} a^{-y}}{2} + \frac{a^x a^{-y}}{2} + \frac{a^{-x}a^y}{2} = \\ = \frac{a^x a^y + a^x a^{-y} + a^{-x}a^{-y} + a^{-x}a^y}{2} = \\ = \frac{a^x(a^y + a^{-y}) + a^{-x}(a^y + a^{-y})}{2} = \\ = \frac{(a^x + a^{-x})(a^y + a^{-y})}{2} = \\ = 2\cdot\frac{a^x + a^{-x}}{2}\cdot \frac{a^y + a^{-y}}{2} = \\ = 2f(x)f(y) $$

Мы показали, что

$$ f(x+y) + f(x-y) = 2f(x)f(y) $$

$\blacksquare$