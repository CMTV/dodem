Запишем, чему равен $x_{n+1}$

$$ x_{n+1} = \frac{x_n + x_{n-1}}{2} $$

Вычтем из обеих частей $x_n$:

$$ x_{n+1} - x_n = \frac{x_n + x_{n-1}}{2} - x_n = \frac{-x_n + x_{n-1}}{2} = \frac{x_n - x_{n-1}}{-2} $$

$$ x_{n+1} - x_n = \frac{x_n - x_{n-1}}{-2} $$

Теперь применим то же равенство для $x_n - x_{n-1}$ и далее:

$$  x_{n+1} - x_n = \frac{x_n-x_{n-1}}{-2} = \frac{x_{n-1} - x_{n-2}}{(-2)(-2)} = \ldots = \frac{b-a}{(-2)^{n-1}} $$

Итак,

$$ x_{n+1} - x_n = \frac{b-a}{(-2)^{n-1}} $$

Теперь запишем $x_n$ в виде:

$$ x_n = \underbrace{x_1}_{\large a} + \underbrace{(x_2 - x_1)}_{\large = \frac{b-a}{(-2)^{0}}} + \underbrace{(x_3 - x_2)}_{\large = \frac{b - a}{(-2)^1}} + \ldots + \underbrace{(x_n-x_{n-1})}_{\large = \frac{b-a}{(-2)^{n-2}}} $$

$$\small x_n = a + (b-a)\left(-\frac{1}{2}\right)^0 + (b-a)\left(-\frac{1}{2}\right)^1 + \ldots + (b-a)\left(-\frac{1}{2}\right)^{n-2} $$

Итак, сразу после слагаемого $a$ идет сумма $n-2$ членов геометрической прогрессии с первым членом, равным $b-a$ и знаменателем $-\frac{1}{2}$.
Воспользуемся формулой для суммы:

$$ S_{n-2} = \frac{(b-a)\left( 1 - \frac{1}{(-2)^{n-2}} \right)}{1 - (-\frac{1}{2})} = \frac{(b-a)\left( 1-\frac{1}{(-2)^{n-2}} \right)}{\frac{3}{2}} $$

$$ S_{n-2} = \frac{(2b-2a)\left( 1-\frac{1}{(-2)^{n-2}} \right)}{3} $$

Итак,

$$ x_n = a + \frac{2b-2a}{3}\left( 1-\frac{1}{(-2)^{n-2}} \right) $$

Найдем предел:

$$ \limn x_n = a + \frac{2b-2a}{3}\left(1-\limn\frac{1}{(-2)^{n-2}}\right) $$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/geometric-progression)>:

$$ \limn \frac{1}{(-2)^{n-2}} = \limn 4\left(-\frac{1}{2}\right)^n = 0 $$

Поэтому

$$ \limn x_n = a + \frac{2b-2a}{3}\left( 1 - 0 \right) = \frac{a + 2b}{3} $$

$$ \limn x_n = \frac{a + 2b}{3} $$