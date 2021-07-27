Рассмотрим произвольное слагаемое в квадратных скобках:

$$ \left(x + \frac{a}{n}i\right)^2 = x^2 + \frac{2a}{n}i + \left(\frac{a}{n}\right)^2i^2 $$

Переменная $i$ пробегает натуральные числа от $1$ до $n-1$, значит имеем $n-1$ слагаемых:

$$ \left[ \left( x + \frac{a}{n} \right)^2 + \left( x + \frac{2a}{n} \right)^2 + \ldots + \left( x + \frac{(n-1)a}{n} \right)^2 \right] = \\[10px] = (x^2 + x^2 + \ldots) + \\[5px] + \frac{2a}{n}[1 + 2 + \ldots + (n-1)] + \\[5px] + \left(\frac{a}{n}\right)^2\left[1^2 + 2^2 + \ldots + (n-1)^2\right] = \ldots $$

Пользуемся формулами для суммы первых $n-1$ натуральных чисел из задачи <t:1> и суммы первых $n-1$ квадратов натуральных чисел из задачи <t:2>:

$$ \ldots = (n-1)x^2 + \frac{2a}{n}\frac{n(n-1)}{2} + \frac{a^2}{n^2}\frac{(n-1)n(2n-1)}{6} = \\[10px] = (n-1)x^2 + (n-1)a + \frac{(n-1)\left(2 - \frac{1}{n}\right)a^2}{6} = \\[10px] = (n-1)\left[ x^2 + a + \frac{\left(2-\frac{1}{n}\right)a^2}{6} \right] $$

Теперь найдем значение предела, пользуясь элементарными пределами последовательностей из <b:[П-ссылка](advanced/proto/sequence-lim/elementary)>:

$$ \limn \frac{1}{n}\left[ \left( x + \frac{a}{n} \right)^2 + \left( x + \frac{2a}{n} \right)^2 + \ldots + \left( x + \frac{(n-1)a}{n} \right)^2 \right] = \\[10px] = \limn \frac{n-1}{n}\left[ x^2 + a + \frac{\left(2-\frac{1}{n}\right)a^2}{6} \right] = \\[10px] = 1\cdot\left[x^2 + a + \frac{(2-0)a^2}{6}\right] = \\[10px] = x^2 + a + \frac{a^2}{3} $$