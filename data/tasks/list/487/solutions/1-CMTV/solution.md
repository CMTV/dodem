Найдем, чему равна разность секансов в числителе, используя формулу синуса разности углов (см. указание):

$$ \cosec x - \cosec a = \frac{1}{\sin x} - \frac{1}{\sin a} = \frac{\sin a - \sin x}{\sin x \sin a} = \\[10px] = -\frac{\sin x - \sin a}{\sin x \sin a} $$

---

В числителе воспользуемся полученной выше формулой разности косекансов, а также результатом задачи <t:482> и непрерывностью синуса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>).

$$ \limf{x}{a} \frac{\cosec x - \cosec a}{x-a} = -\limf{x}{a} \frac{\sin x - \sin a}{x - a}\limf{x}{a}\frac{1}{\sin x \sin a} = \\[10px] = -\frac{\cos a}{\sin^2 a} = - \cos a \cosec^2 a $$

Не забываем, что $a$ в этой задаче не может принимать значения, при которых синус в знаменателе косеканса равен $0$, а именно:

$$ a \neq k\pi \quad k\in\Z $$