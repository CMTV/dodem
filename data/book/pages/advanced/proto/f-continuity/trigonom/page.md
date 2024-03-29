---
{
    "title": "Непрерывность тригонометрических функций",
    "seoDesc": "Доказательство непрерывности тригонометрических функций (синус, косинус, тангенс и котангенс), а также обратных тригонометрических функций (арксинус, арккосинус, арктангенс, арккотангенс).",
    "desc": "Доказательство непрерывности тригонометрических функций (включая обратные) на всей своей области определения.",
    "type": "theorem"
}
---

||| theorem

Тригонометрические функции ($\sin x$, $\cos x$, $\tg x$ и $\ctg x$) непрерывны на всей своей области определения.

Обратные тригонометрические функции ($\arcsin x$, $\arccos x$, $\arctg x$ и $\arcctg x$) тоже непрерывны на всей своей области определения.

|||

Доказывать непрерывность будем с помощью предела приращений переменной, приведенного в прото-задаче <b:[П-ссылка](advanced/proto/f-continuity/point-continuity)>.

Кроме того, в ходе рассуждений мы воспользуемся двумя пределами:

$$ \limf{x}{0} \sin (x) = 0 \qquad \qquad \limf{x}{0} \cos (x) = 1 $$

||| spoiler Доказательство

Из прото-задачи <b:[П-ссылка](advanced/proto/common/sin-arg-tg-inequality)> нам известно, что для любого $x$ выполняется неравенство:

$$ |\sin x| \leq |x| $$

Разложим это неравенство в цепное по прото-задаче <b:[П-ссылка](advanced/proto/common/simple-abs)>:

$$ -|x| \leq \sin x \leq |x| $$

Функции $-|x|$ и $|x|$ стремятся к $0$ при $x\to 0$, поэтому и "зажатая" между ними функция $\sin x$ по теореме о двух милиционерах тоже стремится к $0$:

$$ \limf{x}{0} \sin x = 0 $$

При острых углах $(-\frac{\pi}{2}, \frac{\pi}{2})$ консинус является катетом прямоугольникого треугольника, а значит его значение при этих углах положительное.

Тогда, пользуясь основным тригонометрическим тождеством:

$$ \sin^2 x + \cos^2 x = 1 \\ \cos^2 x = 1 - \sin^2 x \\ \cos x = \sqrt{1-\sin^2 x} $$

Найдем теперь значение предела функции косинуса при $x\to 0$, пользуясь пределом степенной функции <b:[П-ссылка](advanced/proto/f-lim/f-power)>, а также теоремой о пределе сложной функции <b:[П-ссылка](advanced/proto/f-lim/composition)>:

$$ \limf{x}{0} \cos x = \limf{x}{0} \sqrt{1-\sin^2 x} = \\[10px] = \scope{y = 1 - \sin^2 x \\[5px] \limf{x}{0} y(x) = \limf{x}{0} 1 - \limf{x}{0}\sin x \limf{x}{0}\sin x = 1-0 = 1 \\[5px] y \to 1} = \\[10px] = \limf{y}{1} \sqrt{y} = 1 $$

|||

## Непрерывность синуса и косинуса

Возьмем произвольную точку $x_0$ из области определения $\R$ синуса (и косинуса):

Докажем, что выполняется равенство:

$$ \limf{\Delta x}{0} \sin(x_0 + \Delta x) = \sin(x_0) $$

Воспользуемся формулой синуса суммы углов, а также арифметическими свойствами пределов:

$$ \limf{\Delta x}{0} \sin(x_0 + \Delta x) = \\[5px] = \limf{\Delta x}{0} \left[ \sin\left( x_0 \right) \cos (\Delta x) + \cos(x_0)\sin(\Delta x) \right] = \\[5px] = \sin(x_0)\limf{\Delta x}{0} \cos (\Delta x) + \cos(x_0)\limf{\Delta x}{0} \sin(\Delta x) = \ldots $$

Теперь используем два доказанных в начале решения равенства:

$$ \ldots = \sin(x_0) \cdot 1 + \cos(x_0) \cdot 0 = \sin(x_0) $$

Мы доказали, что

$$ \limf{\Delta x}{0} \sin(x_0 + \Delta x) = \sin(x_0) $$

Это по определению означает, что функция синуса непрерывна на всей своей области определения.

$\blacksquare$

Аналогичные действия проводим и для косинуса. В этот раз пользуемся формулой косинуса суммы:

$$ \limf{\Delta x}{0} \cos(x_0 + \Delta x) = \\[5px] = \limf{\Delta x}{0} \left[ \cos(x_0)\cos(\Delta x) - \sin(x_0)\sin(\Delta x) \right] = \\[5px] = \cos(x_0)\limf{\Delta x}{0}\cos(\Delta x) - \sin(x_0)\limf{\Delta x}{0} \sin(\Delta x) = \\[5px] = \cos(x_0)\cdot 1 - \sin(x_0)\cdot 0 = \cos(x_0) $$

Мы доказали, что

$$ \limf{\Delta x}{0} \cos(x_0 + \Delta x) = \cos(x_0) $$

Это по определению означает, что функция косинуса непрерывна на всей своей области определения.

$\blacksquare$

## Непрерывность тангенса и котангенса

Возьмем произвольную точку $x_0$ из области определения тангнеса или котангенса:

$$ x_0 \in \R \setminus \set{\frac{\pi}{2} + \pi n, \ n \in \Z} \quad \text{или} \quad x_0 \in \R \setminus \set{\pi n, \ n \in \Z} $$

Тогда, пользуясь определениями функций тангенса и котангенса, доказанной непрерывностью синуса и косинуса, а также арифметическими свойствами пределов, получаем, что:

$$ \limf{\Delta x}{0} \tg(x_0 + \Delta x) = \limf{\Delta x}{0} \frac{\sin(x_0 + \Delta x)}{\cos(x_0 + \Delta x)} = \frac{\sin(x_0)}{\cos(x_0)} = \tg(x_0) $$

$$ \limf{\Delta x}{0} \ctg(x_0 + \Delta x) = \limf{\Delta x}{0} \frac{\cos(x_0 + \Delta x)}{\sin(x_0 + \Delta x)} = \frac{\cos(x_0)}{\sin(x_0)} = \ctg(x_0) $$

Это по опрделению означает, что функции тангенса и котангенса непрерывны на всей своей области определения.

$\blacksquare$