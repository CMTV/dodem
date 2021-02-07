$$ y = \sqrt{1-x^2} $$

Сходу заметим, что $y$ получаем взятием квадратного корня, поэтому $y\geq 0$.

Возведем обе части равенства в квадрат:

$$ y^2 = 1 - x^2 \\ x^2 = 1 - y^2 $$

Берем квадратный корень из обеих частей:

$$ |x| = \sqrt{1-y^2} $$

Так как мы взяли квадратный корень, то на $y$ накладываются дополнительные ограничения, а именно:

$$ 1 - y^2 \geq 0 \\ y^2 \leq 1 \\ |y| \leq 1 $$

Последнее неравенство по прото-задаче <p:[simple-abs]> можно разложить в цепное неравенство:

$$ |y| \leq 1 \Leftrightarrow -1 \leq y \leq 1 $$

Но в начале решение мы получили $y\geq 0$, поэтому, в итоге получаем:

$$ |x| = \sqrt{1-y^2} \quad (0 \leq y \leq 1) $$

По пункту а) $-1\leq x \leq 0$, поэтому $|x| = -x$, а значит:

$$ -x = \sqrt{1-y^2} $$

$$ x = \phi(y) = -\sqrt{1-y^2} \quad (0\leq y \leq 1) $$

По пункту б) $0\leq x\leq 1$, поэтому $|x| = x$, а значит:

$$ x = \phi(y) = \sqrt{1-y^2} \quad (0\leq y \leq 1) $$