## Пункт 1

$$ f\left(\frac{1}{x}\right) = x + \sqrt{1+x^2} \quad (x>0) $$

Воспользуемся следующим свойством:

$$ x = \frac{1}{\frac{1}{x}} $$

$$ f\left(\frac{1}{x}\right) = \frac{1}{\frac{1}{x}} + \sqrt{1+\frac{1}{\left(\frac{1}{x}\right)^2}} $$

Проводим замену $\frac{1}{x}$ на $x$:

$$ f(x) = \frac{1}{x} + \sqrt{1 + \frac{1}{x^2}} $$

Но не забываем про наше ограничение на "новый" $x$. Для простоты будем обозначать "новый" $x$ за $t$:

$$ t = \frac{1}{x} $$

Но на $x$ по условию наложено ограничение $x>0$. Тогда какое ограничение наложено на $t$? Выразим $x$ через $t$:

$$ x = \frac{1}{t} $$

Раз $x>0$, то:

$$ x = \frac{1}{t} > 0 $$

Видим, что неравенство выполняется для любых строго положительных $t$. Поэтому

$$ t > 0 $$

Итоговый ответ:

$$ f(x) = \frac{1}{x} + \sqrt{1 + \frac{1}{x^2}} \quad (x>0) $$

## Пункт 2

$$ f\left(\frac{x}{x+1}\right) = x^2 $$

Проведем следующие преобразования с $x^2$:

$$ x^2 = \left( x\cdot\frac{x+1}{x+1} \right)^2 = \left( \frac{x}{x+1}\cdot\frac{x+1}{1} \right)^2 = \\ = \left( \frac{x}{x+1}\cdot\frac{1}{\frac{1}{x+1}} \right)^2 = \left( \frac{x}{x+1}\cdot\frac{1}{\frac{x+1 - x}{x+1}} \right)^2 = \\ = \left( \frac{x}{x+1}\cdot\frac{1}{1-\frac{x}{x+1}} \right)^2 $$

Итак:

$$ f\left(\frac{x}{x+1}\right) = \left( \frac{x}{x+1}\cdot\frac{1}{1-\frac{x}{x+1}} \right)^2 $$

Проводим замену $\frac{x}{x+1}$ на $x$:

$$ f(x) = \left( \frac{x}{1-x} \right)^2 $$