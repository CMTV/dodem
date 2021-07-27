Вынесем $x$ из обеих слагаемых в квадратных скобках:

$$ x^{\frac{1}{3}}\left[(x+1)^{\frac{2}{3}} - (x-1)^{\frac{2}{3}}\right] = x^{\frac{1}{3}}\left[x^{\frac{2}{3}}\left[ \left(1+\frac{1}{x}\right)^{\frac{2}{3}} - \left(1-\frac{1}{x}\right)^{\frac{2}{3}} \right]\right] = \\[10px] = x\left[ \left(1+\frac{1}{x}\right)^{\frac{2}{3}} - \left(1 - \frac{1}{x}\right)^{\frac{2}{3}} \right] = \ldots $$

Избавимся от иррациональности с помощью формулы разности кубов:

$$ \ldots = \frac{x\left[ \left(1+\dfrac{1}{x}\right)^2 - \left(1-\dfrac{1}{x}\right)^2 \right]}{\left(1+\dfrac{1}{x}\right)^{\frac{2}{3}} + \left(1 + \dfrac{1}{x}\right)^{\frac{1}{3}}\left(1-\dfrac{1}{x}\right)^{\frac{1}{3}} + \left(1-\dfrac{1}{x}\right)^{\frac{2}{3}}} $$

В знаменателе имеем 3 слагаемых, причем каждое из них по отдельности стремится к $1$ (по прото-задачам <b:[П-ссылка](advanced/proto/f-lim/elementary)>, <b:[П-ссылка](advanced/proto/f-lim/f-power)> и <b:[П-ссылка](advanced/proto/f-lim/composition)>). Поэтому сразу запишем, чему равен предел знаменателя:

$$ \limf{x}{\infty} \left(1+\dfrac{1}{x}\right)^{\frac{2}{3}} + \left(1 + \dfrac{1}{x}\right)^{\frac{1}{3}}\left(1-\dfrac{1}{x}\right)^{\frac{1}{3}} + \left(1-\dfrac{1}{x}\right)^{\frac{2}{3}} = \\[5px] = (1 + 0)^{\frac{2}{3}} + (1+0)^{\frac{1}{3}}(1-0)^{\frac{1}{3}} + (1-0)^{\frac{2}{3}} = 1 + 1 + 1 = 3 $$

Теперь разберемся с числителем:

$$ x\left[ \left(1+\dfrac{1}{x}\right)^2 - \left(1-\dfrac{1}{x}\right)^2 \right] = \\[10px] = x\left[ 1 + \frac{2}{x} + \frac{1}{x^2} - 1 + \frac{2}{x} - \frac{1}{x^2} \right] = 4 $$

Объединяем оба полученных результата вместе и получаем, что

$$ \limf{x}{\infty} x^{\frac{1}{3}}\left[ (x+1)^{\frac{2}{3}} - (x-1)^{\frac{2}{3}} \right] = \frac{4}{3} $$