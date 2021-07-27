Найдем, чему равна разность котангенсов в числителе, используя формулу синуса разности углов (см. указание):

$$ \ctg x - \ctg a = \frac{\cos x}{\sin x} - \frac{\cos a}{\sin a} = -\frac{\sin x \cos a - \sin a \cos x}{\sin x \sin a} = \\[10px] = -\frac{\sin\left( x - a \right)}{\sin x \sin a} $$

---

В числителе воспользуемся полученной выше формулой разности котангенсов, а также теоремой о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), первым замечательным пределом (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>) и непрерывностью синуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>).

$$ \limf{x}{a} \frac{\ctg x - \ctg a}{x-a} = \limf{x}{a} -\frac{\sin(x-a)}{x-a}\cdot\frac{1}{\sin x \sin a} = \\[10px] = \scope{ y = x-a \\[10px] \limf{x}{a} y(x) = \limf{x}{a} x-a = a-a = 0 \\[10px] y \to 0 } = \\[10px] = -\limf{y}{0} \frac{\sin y}{y}\limf{x}{0}\frac{1}{\sin x \sin a} = -\frac{1}{\sin^2 a} = -\cosec^2 a $$

Не забываем, что $a$ в этой задаче не может принимать значения, при которых синус в знаменателе котангенса и косеканса равен $0$, а именно:

$$ a \neq k\pi \quad k\in\Z $$