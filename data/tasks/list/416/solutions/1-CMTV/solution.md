Вынесем из всех скобок $x$ в соответствующей степени и воспользуемся арифметическими свойствами пределов, вместе с элементарными пределами из прото-задачи <b:[П-ссылка](advanced/proto/f-lim/elementary)>:

$$ \limf{x}{\infty} \frac{(2x-3)^{20}(3x+2)^{30}}{(2x+1)^{50}} = \limf{x}{\infty} \frac{x^{50}}{x^{50}}\cdot\frac{\left(2-\frac{3}{x}\right)^{20} \left(3 + \frac{2}{x}\right)^{30}}{\left(2 + \frac{1}{x}\right)^{50}} = \\[5px] = \frac{\left(2-\limf{x}{\infty}\frac{3}{x}\right)^{20} \left(3+\limf{x}{\infty} \frac{2}{x}\right)^{30}}{\left(2+\limf{x}{\infty}\frac{1}{x}\right)^{50}} = \frac{(2-0)^{20} (3 + 0)^{30}}{(2 + 0)^{50}} = \\[5px] = \frac{2^{20}3^{30}}{2^{50}} = \left(\frac{3}{2}\right)^{30} $$