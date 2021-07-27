$$ f[f(x)] = \frac{1}{1-f(x)} = \frac{1}{1-\frac{1}{1-x}} = \frac{1}{\frac{-x}{1-x}} = \frac{1-x}{-x} = \frac{x-1}{x} $$

Чтобы не возникало деления на $0$, $x\neq 1$ и $x\neq 0$:

$$ f[f(x)] = \frac{x-1}{x} \quad (x\neq 1 \text{ и } x\neq 0) $$

---

Воспользуемся полученным выше результатом:

$$ f\{f[f(x)]\} = f\left(\frac{x-1}{x}\right) = \frac{1}{1 - \frac{x-1}{x}} = \frac{1}{\frac{1}{x}} = x $$

$$ f\{f[f(x)]\} = x \quad (x\neq 1 \text{ и } x\neq 0) $$