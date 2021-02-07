Заметим, что под корнем степени $n$ имеем $n$ множителей. Из каждого множителя вынесем $x$. Это позволит нам вынести $x$ целиком из всего выражения:

$$ \sqrt[n]{(x+a_1)\ldots(x+a_n)} - x = \\[5px] = \sqrt[n]{x^n\left(1+\frac{a_1}{x}\right)\ldots\left(1+\frac{a_n}{x}\right)} - x = \\[10px] = x\left[ \sqrt[n]{\left(1+\frac{a_1}{x}\right)\ldots\left(1+\frac{a_n}{x}\right)} - 1 \right] $$

Воспользуемся равенством из прото-задачи <p:[power-diff]>, чтобы избавиться от иррациональности:

$$ \frac{x\left[ \left(1+\dfrac{a_1}{x}\right)\ldots\left(1+\dfrac{a_n}{x}\right) - 1 \right]}{\left[\left(1+\dfrac{a_1}{x}\right)\ldots\left(1+\dfrac{a_n}{x}\right)\right]^{\frac{n-1}{n}} + \ldots + 1} $$

Найдем предел знаменателя, пользуясь арифметическими свойствами предела, элементарными пределами (<p:[f/limits/elementary]>), пределом степенной функци (<p:[f/limits/f-power]>) и теоремой о пределе сложной функции (<p:[f/limits/composition]>):

$$ \limf{x}{+\infty} \left[\left(1+\dfrac{a_1}{x}\right)\ldots\left(1+\dfrac{a_n}{x}\right)\right]^{\frac{n-1}{n}} + \ldots + 1 = \\[10px] = [(1+0)\ldots(1+0)]^{\frac{n-1}{n}} + \ldots + 1 = 1 + \ldots + 1 = n $$

Запомним этот результат. Теперь разберемся с числителем:

$$ x\left[ \left(1+\dfrac{a_1}{x}\right)\ldots\left(1+\dfrac{a_n}{x}\right) - 1 \right] = \ldots $$

Внутри квадратных скобок имеем произведение $n$ множителей. Нам не нужно раскрывать все произведение целиком. Достаточно только заметить, что в результате мы точно получим $1$, а также $n$ дробей вида $\frac{a_i}{x}$. Все остальные члены будут иметь в знаменателе $x$ в степени от $2$ до $n$:

$$ \ldots = x\left[ 1 + \frac{a_1}{x} + \frac{a_2}{x} + \ldots + \frac{a_n}{x} + \frac{a_1a_2}{x^2} + \ldots +  - 1 \right] = \\[10px] = a_1 + a_2 + \ldots + a_n + \frac{a_1a_2}{x} + \ldots $$

Найдем предел этого выражения:

$$ \limf{x}{+\infty} a_1 + a_2 + \ldots + a_n + \frac{a_1a_2}{x} + \ldots = \\[5px] = a_1 + a_2 + \ldots + a_n + 0 + 0 + \ldots = \\[5px] = a_1 + a_2 + \ldots + a_n $$

Объединяем полученные пределы числителя и знаменателя вместе:

$$ \limf{x}{+\infty} \left[ \sqrt[n]{(x+a_1)\ldots(x+a_n)} - x \right] = \frac{a_1 + \ldots + a_n}{n} $$