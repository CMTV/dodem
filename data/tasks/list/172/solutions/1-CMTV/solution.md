Во время решения будем ориентироваться на следующий рисунок:

![Опорное построение]({{ assets }}/scheme.svg){: .w6 }

По определению, синус угла $x$ равен отношению противолежащего катета $h$ (в нашем случае это высота) к гипотенузе $AB$.

$$ \sin(x) = \frac{AB}{h} $$

Заменим $AB$ на ее величину (по условию) и выразим $h$:

$$ h = 6\sin(x) $$

## Площадь

Площадь любого треугольника равна половине произведения основания $AC$ на высоту $h$.

$$ S = \frac{1}{2}\cdot AC \cdot h $$

В нашем случае основание нам дано по условию ($8$ см), а высоту мы нашли ранее:

$$ S(x) = 24\sin(x) $$

Построим график функции $S(x)$ при условии, что угол $x$ изменяется от $0$ до $\frac{\pi}{2}$. Других значений $x$ принимать не может, так как угол треугольника не может быть меньше $0$ и больше $90$ градусов.

![График площади треугольника]({{ assets }}/plot-s.svg){: .w7 }

Видно, что площадь возрастает от $0$, когда обе известные стороны треугольника совмещены, до $24$, когда треугольник становится прямоугольным с данными по условию катетами.

## Сторона $a$

Найдем длину $AD$. Этот катет является прилежащим к углу $x$, поэтому его отношение к гипотенузе $AB$ равно косинусу угла $x$:

$$ \cos(x) = \frac{AD}{AB} $$

Подставим вместо $AB$ известную по условию длину и выразим из формулы $AD$:

$$ AD = 6\cos(x) $$

Теперь найдем длину $DC$:

$$ DC = AC - AD $$

Воспользуемся известными нам данными:

$$ DC = 8 - 6\cos(x) $$

Используем теорему Пифагора:

$$ a^2 = h^2 + DC^2 $$

Мы уже знаем формулы для $h$ и $DC$:

$$ a^2 = 36\sin^2(x) + (8 - 6\cos(x))^2 = \\ = 36\sin^2(x) + 64 - 96\cos(x) + 36\cos^2(x) = \\ = 36(\underbrace{\sin^2(x) + \cos^2(x)}_ {\normalsize 1}) + 64 - 96\cos(x) $$

Выше мы воспользовались основным тригонометрическим тождеством:

$$ a^2 = 36 + 64 - 96\cos(x) $$

$$ a^2 = 100 - 96\cos(x) $$

Берем квадратный корень из обеих частей равенства и получаем итоговое уравнение для стороны $a$:

$$ a(x) = \sqrt{100 - 96\cos(x)} $$

Построим график $a(x)$ при условии, что угол $x$ изменяется от $0$ до $\frac{\pi}{2}$.

![График длины стороны "a"]({{ assets }}/plot-a.svg){: .w7 }

Видно, что длина стороны возрастает от $2$, когда две другие стороны лежат друг на друге ("верхняя" короче на $2$ см), до $10$, когда треугольник становится прямоугольным.