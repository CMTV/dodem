Введем новую переменную $y=x+1$ и воспользуемся теоремой о пределе сложной функции:

$$ \limf{x}{0} \frac{\sqrt[n]{1+x} - 1}{x} = \scope{ y = 1 + x \\[5px] \limf{x}{0} y(x) = 1 \\[5px] y \to 1 } = \limf{y}{1} \frac{\sqrt[n]{y} - 1}{y - 1} = \limf{y}{1} \frac{\sqrt[n]{y}-1}{\sqrt[n]{y}^n - 1} $$

В знаменателе воспользуемся равенством из прото-задачи <b:[П-ссылка](advanced/proto/common/power-diff)>:

$$ \limf{y}{1} \frac{\sqrt[n]{y} - 1}{(\sqrt[n]{y}-1)(\sqrt[n]{y}^{n-1} + \sqrt[n]{y}^{n-2} + \ldots + 1)} = \\[10px] = \limf{y}{1} \frac{1}{\sqrt[n]{y}^{n-1} + \sqrt[n]{y}^{n-2} + \ldots + 1} = \frac{1}{1 + 1 + \ldots + 1} = \frac{1}{n} $$

Выше мы воспользовались арифметическими свойствами пределов, а также предлом степенной функции (<b:[П-ссылка](advanced/proto/f-lim/f-power)>).