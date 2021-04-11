## Поиск функции

Имеем

$$ f\left( 1+\frac{1}{x} \right) = x^2 + \frac{1}{x^2} $$

Дополним до полного квадрата:

$$ f\left( 1+\frac{1}{x} \right) = \left(x^2 + 2x\frac{1}{x} + \frac{1}{x^2}\right) - \underbrace{2x\frac{1}{x}}_{\normalsize =2} $$

$$ f\left( 1+\frac{1}{x} \right) = \left(x + \frac{1}{x}\right)^2 - 2 $$

Обозначим $1+\frac{1}{x}$ за $x$:

$$ f(x) = x^2 - 2 $$

## Новое ограничение на $x$

Выше мы нашли функцию $f(x)$ и обозначили $x + \frac{1}{x}$ за $x$. Сейчас, чтобы не путаться, обозначим $x+\frac{1}{x}$ за $t$.

$$ t = x+\frac{1}{x} $$

В условии задачи на $x$ наложено ограничение: $|x| \geq 2$. Нам нужно узнать, какое теперь ограничение лежит на $t$?

Выразим $x$ через $t$:

$$ t = x+\frac{1}{x} \\ tx = x^2 + 1 \\ x^2 - tx + 1 = 0 $$

Получили квадратное уравнение. Это означает, что мы не можем напрямую выразить $x$ через $t$.

Найдем два корня через дискриминант:

$$ x_1 = \frac{t + \sqrt{t^2 - 4}}{2} \qquad x_2 = \frac{t - \sqrt{t^2 - 4}}{2} $$

Найденные корни можно считать за функции $x(t)$. Другими словами при попытке выразить $x$ через $t$ мы получили две функции, которые вместе и представляют собой выражение $x$ от $t$.

Естественно, на каждую из этих корней-функций дествует ограничение $|x(t)| \geq 2$.

---

Решим неравенство для $x_1$:

$$ |x_1| \geq 2 \\ \left| \frac{t+\sqrt{t^2-4}}{2} \right| \geq 2 $$

Избавимся от модуля по прото-задаче <p:[simple-abs]>:

$$ \left| \frac{t+\sqrt{t^2-4}}{2} \right| \geq 2 \Leftrightarrow \orcases{\frac{t+\sqrt{t^2-4}}{2} \geq 2 \\[5px] \frac{t+\sqrt{t^2-4}}{2} \leq -2} $$

Проведем упрощения справа:

$$ \orcases{\frac{t+\sqrt{t^2-4}}{2} \geq 2 \\[5px] \frac{t+\sqrt{t^2-4}}{2} \leq -2} \Leftrightarrow \orcases{\sqrt{t^2-4} \geq 4 - t \\[5px] \sqrt{t^2 - 4} \leq -t-4 } $$

Для решения получившихся справа неравенств с корнями воспользуемся прото-задачей <p:[irr-inequality]>.

||| spoiler Верхнее неравенство

Рассмотрим отдельно строгое неравенство и случай, когда выражения слева и справа равны.

$$ \sqrt{t^2-4} > 4 - t \Leftrightarrow \orcases{ \andcases{4-t \geq 0 \\ t^2 - 4 > 16 - 8t + t^2} \\[15px] \andcases{t^2 - 4 \geq 0 \\ 4-t < 0} } \Leftrightarrow \\[15px] \Leftrightarrow \orcases{ \andcases{t\leq 4 \\ t > \frac{5}{2}} \Leftrightarrow \frac{5}{2} < t \leq 4 \\[15px] \andcases{ |t| \geq 2 \\ t > 4 } \Leftrightarrow t > 4 } \Leftrightarrow \orcases{ \frac{5}{2} < t \leq 4 \\[5px] t > 4 } \Leftrightarrow \\[15px] \Leftrightarrow t > \frac{5}{2} $$

---

Осталось только найти случай равенства:

$$ \sqrt{t^2-4} = 4-t $$

Без угрызений совести возводим обе части равенства в квадрат:

$$ t^2 - 4 = 16 - 8t +  t^2 $$

$$ t = \frac{5}{2} $$

---

Объединяя результат строгого неравенства и уравнения, получаем, что:

$$ t \geq \frac{5}{2} $$

|||

||| spoiler Нижнее неравенство

Рассмотрим отдельно строгое неравенство и случай, когда выражения слева и справа равны.

$$ \sqrt{t^2-4} < -t-4 \Leftrightarrow \andcases{t^2 - 4 \geq 0 \\ -t-4 > 0 \\ t^2 + 8t + 16 > t^2 - 4} \Leftrightarrow \\[15px] \Leftrightarrow \andcases{|t| \geq 2 \\ t < -4 \\ t > -\frac{5}{2}} $$

Обратите внимание на два нижних неравенства. Они противоречат друг другу. Это значит, что нет таких $t$, чтобы выполнялось наше строгое неравенство.

---

Найдем случай равенства:

$$ \sqrt{t^2-4} = -t-4 $$

Возводим обе части равенства в квадрат:

$$ t^2 - 4 = t^2 + 8t + 16 $$

$$ t = -\frac{5}{2} $$

Пытаемся подставить этот $t$ в исходное равенство и получаем противоречие: корень слева равен отрицательному числу справа.

---

Итак, нет таких $t$, что

$$ \sqrt{t^2-4} \leq -t-4 $$

|||

Результат:

$$ \orcases{\sqrt{t^2-4} \geq 4 - t \\[5px] \sqrt{t^2 - 4} \leq -t-4 } \Leftrightarrow t \geq \frac{5}{2} $$

Итак, для функции $x_1(t)$ неравенству $|x_1(t)|\geq 2$ удовлетворяют следующие $t$:

$$ t \geq \frac{5}{2} $$

---

Аналогичные действия (мне вас жаль) проводим для неравенства $|x_2| \geq 2$ и получаем, что:

$$ t \leq -\frac{5}{2} $$

---

Итак, объединяя результаты неравенств $|x_1|\geq 2$ и $|x_2|\geq 2$, получаем, что на $t$ действует следующее ограничение:

$$ |t| \geq \frac{5}{2} $$

Вспоминаем, что $t$ у нас лишь для удобства. На самом деле мы заменяли $x + \frac{1}{x}$ на "новый" $x$. Поэтому ограничение для нового $x$:

$$ |x| \geq \frac{5}{2} $$