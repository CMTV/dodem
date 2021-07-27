Пользуясь формулой синуса разности найдем, чем равна разность котангенсов:

$$ \ctg \alpha - \ctg \beta = \frac{\cos \alpha}{\sin \alpha} - \frac{\cos \beta}{\sin \beta} = - \frac{\sin\alpha\cos\beta - \sin\beta\cos\alpha}{\sin\alpha\sin\beta} = \\[5px]  = -\frac{\sin(\alpha - \beta)}{\sin\alpha\sin\beta} $$

---

Воспользуемся найденной формулой разности тангенсов для упрощения числителя:

$$ \ctg(a+2x) -2\ctg(a+x) + \ctg a = \\[5px] = \ctg(a+2x) - \ctg(a+x) + \ctg a - \ctg(a+x) = \\[5px] = -\frac{\sin x}{\sin(a+2x)\sin(a+x)} - \frac{\sin(-x)}{\sin(a)\sin(a+x)} = \\[5px] = \sin(x)\left[ \frac{1}{\sin(a)\sin(a+x)} - \frac{1}{\sin(a+2x)\sin(a+x)}\right] = \\[5px] = \sin(x)\frac{\sin(a+2x)-\sin(a)}{\sin(a+2x)\sin(a+x)\sin(a)} = \ldots $$

Воспользуемся формулой разности синусов (см. указание):

$$ \ldots = \sin(x)\frac{2\sin\left(x\right)\cos( a + x )}{\sin(a+2x)\sin(a+x)\sin(a)} = \\[5px] = 2\sin^2(x)\ctg(a+x)\frac{1}{\sin(a+2x)\sin(a)} $$

Теперь воспользуемся упрощенным числителем и решим задачу с применением теоремы о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), первого замечательного предела (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>), также непрерывности тригонометрических функция (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{0} \frac{\ctg(a+2x) - 2\ctg(a+x) + \ctg a}{x^2} = \\[10px] = \limf{x}{0} \frac{2\sin^2(x)\ctg(a+x)}{x^2\sin(a+2x)\sin(a)} = \\[10px] = \scope{u = a + x, \quad v = a + 2x \\[5px] u\to a, \quad v \to a} = \\[10px] = \frac{2}{\sin a}\limf{x}{0} \frac{\sin^2(x)}{x^2} \limf{u}{a} \ctg(u) \frac{1}{\limf{v}{a}\sin(v)} = \\[10px] = \frac{2\ctg a}{\sin^2a} $$