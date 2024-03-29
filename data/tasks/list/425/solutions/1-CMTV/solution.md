Воспользуемся равенством из прото-задачи <b:[П-ссылка](advanced/proto/common/power-diff)>:

$$ x^n - 1 = (x-1)(x^{n-1} + x^{n-2} + \ldots + 1) $$

Воспользуемся им для числителя и знаменателя и, с помощью арифметических свойств пределов и предела многочлена из <b:[П-ссылка](advanced/proto/f-lim/elementary)>, найдем значение предела:

$$ \limf{x}{1} \frac{x^m - 1}{x^n - 1} = \limf{x}{1} \frac{(x-1)(x^{m-1} + x^{m-2} + \ldots + 1)}{(x-1)(x^{n-1} + x^{n-2} + \ldots + 1)} = \\[5px] = \frac{\overbrace{1 + 1 + 1 + \ldots}^{\small m \text{ раз}}}{\underbrace{1 + 1 + 1 + \ldots}_{\small n \text{ раз}}} = \frac{m}{n} $$