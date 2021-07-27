## Пункт а)

$$ ax + ay = az $$

Делим обе части равенства на $a$:

$$ z = x + y $$

## Пункт б)

$$ \frac{1}{x} + \frac{1}{y} = \frac{1}{z} $$

Упростим левую часть равенства:

$$ \frac{x+y}{xy} = \frac{1}{z} $$

Выразим $z$:

$$ z = \frac{xy}{x+y} $$

## Пункт в)

$$ \arctg x + \arctg y = \arctg z $$

Возьмем тангенс от обеих частей равенства:

$$ \tg(\arctg x + \arctg y) = \tg(\arctg z) $$

$$ z = \tg(\arctg x + \arctg y) $$

Воспользуемся формулой тангенса суммы:

$$ z = \frac{\tg\arctg x + \tg\arctg y}{1 - \tg\arctg x \cdot \tg\arctg y} $$

$$ z = \frac{x + y}{1 - xy} $$

## Пункт г)

$$ \log\frac{1+x}{1-x} + \log\frac{1+y}{1-y} = \log\frac{1+z}{1-z} $$

Воспользуемся формулой $\log a + \log b = \log a\cdot b$:

$$ \log \frac{1+x}{1-x}\cdot\frac{1+y}{1-y} = \log\frac{1+z}{1-z} $$

Можем перейти к рассмотрению равенства аргументов:

$$ \frac{1+x}{1-x} \cdot \frac{1+y}{1-y} = \frac{1+z}{1-z} $$

Обозначим временно всю левую часть за $C$ и изолируем $z$:

$$ C = \frac{1+z}{1-z} \\ C(1-z) = 1 + z \\ C - Cz = 1 + z \\ C - 1 = z + Cz \\ C-1 = z(C+1) \\ z = \frac{C-1}{C+1} $$

Возвращаем изначальное значение вместо $C$ и упрощаем:

$$ z = \frac{\frac{1+x}{1-x} \frac{1+y}{1-y} - 1}{\frac{1+x}{1-x} \frac{1+y}{1-y} + 1} = \frac{ \frac{(1+x)(1+y) - (1-x)(1-y)}{(1-x)(1-y)} }{ \frac{(1+x)(1+y) + (1-x)(1-y)}{(1-x)(1-y)} } = \\ = \frac{1 + x + y + xy - 1 + y + x - xy}{1 + x + y + xy + 1 -x -y + xy} = \\ = \frac{x+y}{1 + xy} $$

$$ z = \frac{x+y}{1+xy} $$