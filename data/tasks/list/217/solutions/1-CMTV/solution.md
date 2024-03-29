Рассмотрим два произвольных $x_1$ и $x_2$ из указанного в условии промежутка, такие, что $x_2 > x_1$. Нам нужно доказать, что

$$ f(x_2) > f(x_1) \\ 2x_2 + \sin x_2 > 2x_1 + \sin x_1 \\ 2(x_2 - x_1) + (\sin x_2 - \sin x_1) > 0 $$

Рассмотрим, чему равно выражение (будем пользоваться свойствами модуля из <b:[П-ссылка](advanced/proto/common/abs)>):

$$ |\sin x_2 - \sin x_1| = 2\underbrace{\left|\cos\frac{x_2 + x_1}{2}\right|}_{\normalsize \leq 1}\left|\sin\frac{x_2 - x_1}{2}\right| \leq \\ \leq 2 \left| \sin \frac{x_2 - x_1}{2} \right| $$

Теперь воспользуемся неравенством $|\sin\alpha| \leq |\alpha|$ из прото-задачи <b:[П-ссылка](advanced/proto/common/sin-arg-tg-inequality)>:

$$ |\sin x_2 - \sin x_1| \leq \left| \sin \frac{x_2 - x_1}{2} \right| \leq \frac{2}{2}|x_2 - x_1| $$

$$ |\sin x_2 - \sin x_1| \leq |x_2 - x_1| $$

От модуля справа можно избавиться, так как по условию $x_2 > x_1$.

$$ |\sin x_2 - \sin x_1| \leq x_2 - x_1 $$

Разложим это неравенство по прото-задаче <b:[П-ссылка](advanced/proto/common/simple-abs)>:

$$ -(x_2 - x_1) \leq \sin x_2 - \sin x_1 \leq x_2 - x_1 $$

Теперь прибавляем ко всем частям неравенства $2(x_2 - x_1)$:

$$ x_2 - x_1 \leq 2(x_2-x_1) + (\sin x_2 - \sin x_1) \leq 3(x_2 - x_1) $$

Но по условию $x_2 - x_1 > 0$, поэтому:

$$ 0 < x_2 - x_1 \leq 2(x_2-x_1) + (\sin x_2 - \sin x_1) $$

$$ 0 < 2(x_2-x_1) + (\sin x_2 - \sin x_1) $$

А это неравенство и означает, что

$$ f(x_2) > f(x_1) $$

$\blacksquare$