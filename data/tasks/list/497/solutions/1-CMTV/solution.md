Упростим выражение, используя формулы из указания:

$$ \frac{\tg(a+x)\tg(a-x) - \tg^2 a}{x^2} = \\[10px] = \frac{\dfrac{(\tg a + \tg x)(\tg a - \tg x)}{(1-\tg a \tg x)(1+\tg a \tg x)} - \tg^2 a}{x^2} = \\[10px] = \frac{ \dfrac{\tg^2 a - \tg^2 x}{1 - \tg^2 a \tg^2 x} - \tg^2 a }{ x^2 } = \\[10px] = \frac{ \tg^2a - \tg^2x - \tg^2a + \tg^4a\tg^2x }{ (1-\tg^2a\tg^2x)x^2 } = \\[10px] = \frac{\tg^2x}{x^2}\cdot\frac{\tg^4a - 1}{1-\tg^2a\tg^2x} $$

Найдем теперь значение предела, пользуясь первым замечательным пределом (<b:[П-ссылка](advanced/proto/f-lim/first-wonderful)>), а также непрерывностью тангенса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{0} \frac{\tg^2x}{x^2}\cdot\frac{\tg^4a - 1}{1-\tg^2a\tg^2x} = 1\cdot\frac{\tg^4a-1}{1-\tg^2a\cdot 0} = \tg^4a - 1 $$