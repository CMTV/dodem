В числителе воспользуемся равенством из прото-задачи <p:[power-diff]>:

$$
\frac{\left(\sqrt{1 + x^2} + x\right)^n - \left(\sqrt{1 + x^2} - x\right)^n}{x} = \\[10px] =
\frac{2x\left[ \left(\sqrt{1+x^2} + x\right)^{n-1} + \left(\sqrt{1+x^2}+x\right)^{n-2}\left(\sqrt{1+x^2}-x\right) + \ldots \right]}{x} = \\[10px] =
2\left[ \left(\sqrt{1+x^2} + x\right)^{n-1} + \left(\sqrt{1+x^2}+x\right)^{n-2}\left(\sqrt{1+x^2}-x\right) + \ldots \right]
$$

Найдем предел каждого слагаемого в квадратных скобках, пользуясь арифметическими свойствами пределов, элементарными пределами (<p:[f/limits/elementary]>), пределом степенной функции (<p:[f/limits/f-power]>), а также теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{0} \left(\sqrt{1+x^2}+x\right)^{i}\left(\sqrt{1+x^2}-x\right)^{j} = \\[10px] = (\sqrt{1+0^2} + 0)^i(\sqrt{1+0^2}-0)^j = 1^i1^j = 1 $$

Теперь мы можем найти предел всего большого выражения выше:

$$ {\small \limf{x}{0} 2\left[ \left(\sqrt{1+x^2} + x\right)^{n-1} + \left(\sqrt{1+x^2}+x\right)^{n-2}\left(\sqrt{1+x^2}-x\right) + \ldots \right] } = \\[5px] = 2 [1 + 1 + \ldots] = 2n $$