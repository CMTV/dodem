## $A$ не имеет наибольшего

Итак, у нас есть класс $A$, который состоит из рациональных $a$, таких что $a^3 < 2$:

$$ A = \left\{ a \in \mathbb{Q} : a^3 < 2 \right\} $$

Покажем, что у этого класса нет наибольшего элемента, то есть какое бы $a\in A$ мы не взяли, существует еще более большое $a'\in A$. 

Докажем от противного. Пусть $a$ — наибольший элемент класса $A$. Тогда рассмотрим вот такое $a'$:

$$ a' = a + \frac{1}{n}, $$

где $n$ — какое-то натуральное число.

Очевидно, что $a' > a$, так как мы прибавили к $a$ небольшое положительное число $\frac{1}{n}$.

Теперь покажем, что $a'$ принадлежит классу $A$. Для этого надо показать, что $a'^3 < 2$:

$$ a'^3 = \left(a + \frac{1}{n}\right)^3 = a^3 + \frac{3a^2}{n} + \frac{3a}{n^2} + \frac{1}{n^3} < 2 $$

Перенесем $a^3$ в правую часть неравенства:

$$ \frac{3a^2}{n} + \frac{3a}{n^2} + \frac{1}{n^3} < 2 - a^3 $$

Усилим неравенство, заменив $\frac{1}{n^3}$ на $\frac{1}{n}$:

$$ \frac{3a^2}{n} + \frac{3a}{n^2} + \frac{1}{n^3} < \frac{3a^2}{n} + \frac{3a}{n^2} + \frac{1}{n} < 2 - a^3 $$

Другими словами, если мы найдем такие $n$, что выполняется более сильное неравенство в правой части, то, увеличив на $2$ степень в знаменателе, мы еще больше уменьшим (ослабим) это неравенство и для него найденная $n$ тоже будет работать, то есть знак сохранится.

Итак, имеем

$$ \frac{3a^2}{n} + \frac{3a}{n^2} + \frac{1}{n} < 2 - a^3 $$

Вновь усилим неравенство, заменив $\frac{3a}{n^2}$ на $\frac{3a}{n}$:

$$ \frac{3a^2}{n} + \frac{3a}{n^2} + \frac{1}{n} < \frac{3a^2}{n} + \frac{3a}{n} + \frac{1}{n} < 2 - a^3 $$

Суть осталась такой же. Найдем $n$, для которого выполняется правая часть, то левая, так как она меньше, тем более будет верна при найденном $n$.

Имеем

$$ \frac{3a^2}{n} + \frac{3a}{n} + \frac{1}{n} = \frac{3a(a+1) + 1}{n} < 2 - a^3 $$

Вынесем $n$ из под знаменателя:

$$ n > \frac{3a(a+1) + 1}{2-a^3} $$

Итак мы показали, что какое $a$ за наибольший элемент класса $A$ не принимай, всегда можно найти натуральное $n$, а через него такое $a'$, что $a' > a$ и $a'^3 < 2$, а значит $a$ уже не наибольший элемент класса $A$. Противоречие.

Это значит, что наибольшего элемента у класса $A$ нет.

$\blacksquare$

## $B$ не имеет наименьшего

Теперь возьмемся за класс $B$. В условии сказано, что "класс $B$ содержит все остальные рациональные числа".
С таким определением работать неудобно. Уточним его.

Раз классе $A$ у рациональные числа $a$, такие что $a^3 < 2$, то для класса $B$ остаются все
рациональные числа $b$, такие что $b^3 \geq 2$.

Итак,

$$ B = \left\{ b \in \mathbb{Q} : b^3 \geq 2 \right\} $$

Покажем, что у этого класса нет наименьшего элемента, то есть какое бы $b\in B$ мы не взяли, существует еще более маленькое $b'\in B$. 

Докажем от противного. Пусть $b$ — наименьший элемент класса $B$. Тогда рассмотрим вот такой $b'$:

$$ b' = b - \frac{1}{n}, $$

где $n$ — какое-то натуральное число.

Очевидно, что $b' < b$, так как мы отняли от $b$ небольшое положительное число $\frac{1}{n}$.

Теперь покажем, что $b'$ принадлежит классу $B$. Для этого надо показать, $b'^3 \geq 2$:

$$ b'^3 = \left(b-\frac{1}{n}\right)^3 = b^3 - \frac{3b^2}{n} + \frac{3b}{n^2} - \frac{1}{n^3} \geq 2 $$

$$ - \frac{3b^2}{n} + \frac{3b}{n^2} - \frac{1}{n^3} \geq 2 - b^3 $$

Усилим неравенство, убрав из него слагаемое $\frac{3a}{n^2}$:

$$ - \frac{3b^2}{n} + \frac{3b}{n^2} - \frac{1}{n^3} > - \frac{3b^2}{n} - \frac{1}{n^3} \geq 2 - b^3 $$

Другими словами, если мы найдем такие $n$, что выполняется более сильное правое неравенство, то, добавив к нем еще положительное слагаемое $\frac{1}{n^2}$ (ослабив его) знак неравенства тем более не изменится.

Итак, имеем

$$ - \frac{3b^2}{n} - \frac{1}{n^3} \geq 2 - b^3 $$

Теперь выясним, какой знак стоит между следующими дробями:

$$ -\frac{1}{n^3} \ ? \ -\frac{1}{n} $$

Домножим обе части на положительное $n^3$:

$$ -1 \ ? \ -n^2 \\ n^2 \ ? \ 1 $$

Но мы знаем, что $n^2 \geq 1$. Значит, знаки вопроса выше можно заменить на найденный знак $\geq$, вплоть до нужного нам неравенства, с которого мы начали:

$$ -\frac{1}{n^3} \geq -\frac{1}{n} $$

Прибавим к обеим сторонам дробь $-\frac{3b^2}{n}$:

$$ -\frac{3b^2}{n} - \frac{1}{n^3} \geq -\frac{3b^2}{n} - \frac{1}{n} $$

Только что мы вновь усилили наше неравенство:

$$ -\frac{3b^2}{n} - \frac{1}{n^3} \geq -\frac{3b^2}{n} - \frac{1}{n} \geq 2 - b^3 $$

Имеем

$$ -\frac{3b^2}{n} - \frac{1}{n} = -\frac{3b^2 + 1}{n} \geq 2 - b^3 $$

Домножим обе части на $-1$ и вынесем $n$ из знаменателя:

$$ n \geq \frac{3b^2 + 1}{b^3 - 2} $$

Итак мы показали, что какое $b$ за наименьший элемент класса $B$ не принимай, всегда можно найти натуральное $n$, а через него такое $b'$, что $b' < b$ и $b'^3 \geq 2$, а значит $b$ уже не наименьший элемент класса $B$. Противоречие.

Это значит, что наименьшего элемента у класса $B$ нет.

$\blacksquare$

---

Мы доказали, что у класса $A$ нет наибольшего элемента, а у класса $B$ нет наименьшего.