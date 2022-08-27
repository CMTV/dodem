Упростим числитель, пользуясь формулами разности синусов и косинусов (см. указание):

$$ \sin(a+2x) - 2\sin(a+x) + \sin a = \\[5px] = \sin(a+2x) - \sin(a+x) + \sin a - \sin (a+x) = \\[5px] = 2\sin\left(\frac{x}{2}\right)\cos\left( a + \frac{3x}{2} \right) + 2\sin\left(-\frac{x}{2}\right)\cos\left(a + \frac{x}{2}\right) = \\[5px] = 2\sin\left(\frac{x}{2}\right)\left[ \cos\left( a + \frac{3x}{2} \right) - \cos\left(a + \frac{x}{2}\right) \right] = \\[5px] = 2\sin\left(\frac{x}{2}\right)(-2)\sin\left( a+x \right)\sin\left( \frac{x}{2} \right) = \\[5px] = -4\sin^2\left(\frac{x}{2}\right)\sin(a+x) $$

Теперь воспользуемся упрощенным числителем и решим задачу с применением теоремы о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), первого замечательного предела (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>), а также непрерывности синуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{0} \frac{ \sin(a+2x) (- 2) \sin(a+x) + \sin a }{x^2} = \\[10px] = \limf{x}{0} \frac{-4\sin^2\left(\frac{x}{2}\right)\sin(a+x)}{x^2} = \\[10px] = -\limf{x}{0} \frac{\sin^2 \left(\frac{x}{2}\right)}{\left(\frac{x}{2}\right)^2}\sin(a+x) = \\[10px] = \scope{u = \frac{x}{2}, \quad v = a + x \\[10px] u \to 0, \quad v\to a} = \\[10px] = -\limf{u}{0} \frac{\sin^2 u}{u^2}\limf{v}{a}\sin v = -\sin a $$