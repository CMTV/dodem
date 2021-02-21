Распишем тангенс по определению и сократим на $\sin x$:

$$ \limf{x}{0} \frac{\tg x - \sin x}{\sin^3 x} = \limf{x}{0} \frac{\frac{\sin x}{\cos x} - \sin x}{\sin^3 x} = \limf{x}{0} \frac{1-\cos x}{\cos x \sin^2 x} = \ldots $$

В знаменателе разложим синус через основное тригонометрическое тождество:

$$ \ldots = \limf{x}{0} \frac{1-\cos x}{\cos x (1-\cos^2 x)} = \ldots $$

Разложим скобку по формуле разности квадратов

$$ \ldots = \limf{x}{0} \frac{1-\cos x}{\cos x (1-\cos x)(1+\cos x)} = \limf{x}{0} \frac{1}{\cos x(1+\cos x)} = \ldots $$

Воспользуемся арифметическими свойствами пределов, а также непрерывностью косинуса (<p:[f/limits/continuity/trigonom]>):

$$ \ldots = \frac{1}{\limf{x}{0} \cos x \cdot \left( 1 + \limf{x}{0} \cos x \right)} = \frac{1}{1\cdot(1+1)} = \frac{1}{2}  $$