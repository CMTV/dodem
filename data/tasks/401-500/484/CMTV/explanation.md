Найдем, чему равна разность тангенсов в числителе, используя формулу синуса разности углов (см. указание):

$$ \tg x - \tg a = \frac{\sin x}{\cos x} - \frac{\sin a}{\cos a} = \frac{\sin x \cos a - \sin a \cos a}{\cos x \cos a} = \\[10px] = \frac{\sin\left( x - a \right)}{\cos x \cos a} $$

---

В числителе воспользуемся полученной выше формулой разности тангенсов, а также теоремой о пределе сложной функции (<p:[f/limits/composition]>), первым замечательным пределом (<p:[f/limits/first-wonderful]>) и непрерывностью косинуса (<p:[f/limits/continuity/trigonom]>).

$$ \limf{x}{a} \frac{\tg x - \tg a}{x-a} = \limf{x}{a} \frac{\sin(x-a)}{x-a}\cdot\frac{1}{\cos x \cos a} = \\[10px] = \scope{ y = x-a \\[10px] \limf{x}{a} y(x) = \limf{x}{a} x-a = a-a = 0 \\[10px] y \to 0 } = \\[10px] = \limf{y}{0} \frac{\sin y}{y}\limf{x}{0}\frac{1}{\cos x \cos a} = \frac{1}{\cos^2 a} = \sec^2 a $$

Не забываем, что $a$ в этой задаче не может принимать значения, при которых косинус в знаменателе тангенса и косеканса равен $0$, а именно:

$$ a \neq (2k+1)\frac{\pi}{2} \quad k\in\Z $$