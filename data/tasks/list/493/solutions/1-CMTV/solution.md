Введем обозначение $t = \sin x$. Тогда в числителе и знаменателе получаем квадратичные функции общего вида:

$$ \frac{2\sin^2 x + \sin x - 1}{2\sin^2 x - 3\sin x + 1} = \frac{2t^2 + t - 1}{2t^2 - 3t + 1} = \ldots $$

Найдем корни уравнений:

$$ 2t^2 + t - 1 = \scope{ t_{1,2} = \frac{-1\pm\sqrt{9}}{4} = \begin{array}{r}= \dfrac{1}{2} \\[10px] = -1\end{array} } = 2(t+1)\left(t-\frac{1}{2}\right) $$

$$ 2t^2 - 3t + 1 = \scope{ t_{1,2} = \frac{3 \pm \sqrt{1}}{4} = \begin{array}{r} = 1 \\[10px] = \dfrac{1}{2} \end{array} } = 2(t-1)\left(t-\frac{1}{2}\right) $$

Подставим полученные выражения в числитель и знаменатель:

$$ \ldots = \frac{2(t+1)\left(t-\frac{1}{2}\right)}{2(t-1)(t-\frac{1}{2})} = \frac{t+1}{t-1} = \ldots $$

Возвращаемся обратно к синусу:

$$ \ldots = \frac{\sin x + 1}{\sin x - 1} $$

Теперь найдем значение предела, пользуясь непрерывностью синуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{\frac{\pi}{6}} \frac{\sin x + 1}{\sin x - 1} = \frac{\sin\frac{\pi}{6} + 1}{\sin\frac{\pi}{6} - 1} = \frac{\frac{1}{2} + 1}{\frac{1}{2} - 1} = -\frac{\frac{3}{2}}{\frac{1}{2}} = -3 $$