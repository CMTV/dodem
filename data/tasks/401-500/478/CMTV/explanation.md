$$ \limf{x}{0} \frac{1+\sin x-\cos x}{1+\sin px - \cos px} = \ldots $$

Воспользуемся формулой двойного угла косинуса:

$$ \cos(2\alpha) = 2\cos^2(\alpha) - 1 = 1 - 2\sin^2(\alpha) $$

$$ \ldots = \limf{x}{0} \frac{ \sin x + 1 - 1 + 2\sin^2\left(\frac{x}{2}\right) }{\sin px + 1 - 1 + 2\sin^2\left( \frac{px}{2} \right)} = \limf{x}{0} \frac{2\sin^2\left(\frac{x}{2}\right) + \sin x}{2\sin^2\left( \frac{px}{2} \right) + \sin px} = \ldots $$

Каждое слагаемое приведем к такому виду, чтобы было удобно использовать первый замечательный предел (<p:[f/limits/first-wonderful]>) вместе с теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \ldots = \limf{x}{0} \frac{ 2\left(\frac{x}{2}\right)^2\frac{\sin^2\left(\frac{x}{2}\right)}{\left(\frac{x}{2}\right)^2} + x\frac{\sin x}{x} }{ 2\left(\frac{px}{2}\right)^2\frac{\sin^2\left(\frac{px}{2}\right)}{\left(\frac{px}{2}\right)^2} + px\frac{\sin px}{px} } = \limf{x}{0} \frac{\frac{x}{2} \frac{\sin^2\left(\frac{x}{2}\right)}{\left(\frac{x}{2}\right)^2} + \frac{\sin x}{x} }{ \frac{p^2x}{2} \frac{\sin^2\left( \frac{px}{2} \right)}{\left(\frac{px}{2}\right)^2} + p\frac{\sin px}{px} } = \\[10px] = \scope{u = \frac{x}{2}, \ v = \frac{px}{x}, \ z = px \\[5px] u,v,z \to 0 } = \\[10px] = \frac{ \limf{x}{0}\frac{x}{2} \limf{u}{0}\frac{\sin^2 u}{u} + \limf{x}{0}\frac{\sin x}{x} }{ \limf{x}{0} \frac{p^2x}{2} \limf{v}{0} \frac{\sin^2 v}{v} + p\limf{z}{0}\frac{\sin z}{z} } = \frac{1}{p} $$