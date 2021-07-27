В числителе видим многочлен $5$-ой степени. Причем коэффициент при $x^5$ равен $1$. В знаменателе вынесем $x^5$:

$$ \frac{(x-1)(x-2)(x-3)(x-4)(x-5)}{(5x-1)^5} = \frac{x^5 + c_1 x^4 + \ldots}{x^5\left( 5 - \frac{1}{x} \right)^5} $$

Найдем предел, воспользовавшись арифметическими свойствами пределов и пределом многочлена из прото-задачи <b:[П-ссылка](advanced/proto/f-lim/elementary)>:

$$ \limf{x}{\infty} \frac{x^5 + c_1 x^4 + \ldots}{x^5\left(5-\frac{1}{x}\right)^5} = \limf{x}{\infty} \frac{x^5}{x^5}\cdot\frac{1 + \frac{c_1}{x} + \ldots}{\left(5-\frac{1}{x}\right)^5} = \\[5px] = \frac{1 + \limf{x}{\infty} \frac{c_1}{x} + \ldots}{\left( 5 - \limf{x}{\infty} \frac{1}{x} \right)^5} = \frac{1 + 0 + \ldots}{(5-0)^5} = \frac{1}{5^5} = 5^{-5} $$