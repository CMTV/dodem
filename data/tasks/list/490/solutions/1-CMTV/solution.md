Пользуясь формулой синуса разности найдем, чем равна разность тангенсов:

$$ \tg \alpha - \tg \beta = \frac{\sin \alpha}{\cos \alpha} - \frac{\sin \beta}{\cos \beta} = \frac{\sin\alpha\cos\beta - \sin\beta\cos\alpha}{\cos\alpha\cos\beta} = \\[5px]  = \frac{\sin(\alpha - \beta)}{\cos\alpha\cos\beta} $$

---

Воспользуемся найденной формулой разности тангенсов для упрощения числителя:

$$ \tg(a+2x) -2\tg(a+x) + \tg a = \\[5px] = \tg(a+2x) - \tg(a+x) + \tg a - \tg(a+x) = \\[5px] = \frac{\sin x}{\cos(a+2x)\cos(a+x)} + \frac{\sin(-x)}{\cos(a)\cos(a+x)} = \\[5px] = \sin(x)\left[ \frac{1}{\cos(a+2x)\cos(a+x)} - \frac{1}{\cos(a)\cos(a+x)} \right] = \\[5px] = \sin(x)\frac{\cos a - \cos(a+2x)}{\cos(a+2x)\cos(a+x)\cos(a)} = \ldots $$

Воспользуемся формулой разности косинусов (см. указание):

$$ \ldots = \sin(x)\frac{-2\sin\left( a + x \right)\sin(-x)}{\cos(a+2x)\cos(a+x)\cos(a)} = \\[5px] = 2\sin^2(x)\tg(a+x)\frac{1}{\cos(a+2x)\cos(a)} $$

Теперь воспользуемся упрощенным числителем и решим задачу с применением теоремы о пределе сложной функции (<b:[П-ссылка](advanced/proto/f-lim/composition)>), первого замечательного предела (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>), также непрерывности тригонометрических функция (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{0} \frac{\tg(a+2x) - 2\tg(a+x) + \tg a}{x^2} = \\[10px] = \limf{x}{0} \frac{2\sin^2(x)\tg(a+x)}{x^2\cos(a+2x)\cos(a)} = \\[10px] = \scope{u = a + x, \quad v = a + 2x \\[5px] u\to a, \quad v \to a} = \\[10px] = \frac{2}{\cos a}\limf{x}{0} \frac{\sin^2(x)}{x^2} \limf{u}{a} \tg(u) \frac{1}{\limf{v}{a}\cos(v)} = \\[10px] = \frac{2\tg a}{\cos^2a} $$