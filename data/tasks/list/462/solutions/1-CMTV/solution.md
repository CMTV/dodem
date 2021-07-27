Вынесем $x$ из обоих слагаемых:

$$ \sqrt[3]{x^3+3x^2} - \sqrt{x^2-2x} = x \left[ \left( 1 + \frac{3}{x} \right)^{\frac{1}{3}} - \left( 1 - \frac{2}{x} \right)^{\frac{1}{2}} \right] = \\[10px] = x\left[ \left[\left(1 + \frac{3}{x}\right)^2\right]^{\frac{1}{6}} - \left[\left(1-\frac{2}{x}\right)^{3}\right]^{\frac{1}{6}} \right] $$

Избавимся от иррациональности с помощью равенства из прото-задачи <b:[П-ссылка](advanced/proto/common/power-diff)>:

$$ \frac{x\left[ \left(1+\dfrac{3}{x}\right)^2 - \left(1-\dfrac{2}{x}\right)^3 \right]}{ \left(1+\dfrac{3}{x}\right)^{\frac{5}{6}} + \ldots + \left(1-\dfrac{2}{x}\right)^{\frac{5}{6}} } $$

В знаменателе имеем 6 слагаемых, причем каждое из них по отдельности стремится к $1$ (по прото-задачам <b:[П-ссылка](advanced/proto/f-lim/elementary)>, <b:[П-ссылка](advanced/proto/f-lim/f-power)> и <b:[П-ссылка](advanced/proto/f-lim/composition)>). Поэтому сразу запишем, чему равен предел знаменателя:

$$ \limf{x}{+\infty} \left(1+\dfrac{3}{x}\right)^{\frac{5}{6}} + \ldots + \left(1-\dfrac{2}{x}\right)^{\frac{5}{6}} = \\[5px] = (1 + 0)^{\frac{5}{6}} + \ldots + (1-0)^{\frac{5}{6}} = 1 + \ldots + 1 = 6 $$

Теперь разберемся с числителем:

$$ x\left[ \left(1+\dfrac{3}{x}\right)^2 - \left(1-\dfrac{2}{x}\right)^3 \right] = \\[10px] = x\left[ 1 + \frac{6}{x} + \frac{9}{x^2} - 1 + \frac{6}{x} - \frac{12}{x^2} + \frac{8}{x^3} \right] = 12 - \frac{3}{x} + \frac{8}{x^2} $$

Предел числителя:

$$ \limf{x}{+\infty} 12 - \frac{3}{x} + \frac{8}{x^2} = 12 - 0 + 0 = 12 $$

Объединяем оба полученных результата вместе и получаем, что

$$ \limf{x}{+\infty} \left( \sqrt[3]{x^3+3x^2} - \sqrt{x^2-2x} \right) = \frac{12}{6} = 2 $$