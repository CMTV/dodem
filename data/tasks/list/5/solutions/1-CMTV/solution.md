||| spoiler Что вообще такое $a^{\left[ n \right]}$?

Сначала разберемся, что вообще такое $a^{\left[ n \right]}$. Запишем данное в условии определение чуть более понятным образом:

$$ a^{\left[ n \right]} = (a-0\cdot h)(a - 1\cdot h)(a-2\cdot h)\ldots(a - (n-1)h) $$

Короче, это просто некоторая операция, похожая на степень. Плюс, эта операция зависит от какого-то числа $h$.

Пример выражения $a^{\left[ n \right]}$ при $h=3$:

$$ a^{\left[ n \right]} = a(a-3)(a-6)\ldots(a-(n-1)\cdot 3) $$

Пример выражения $a^{\left[ 2 \right]}$:

$$ a^{\left[ 2 \right]} = (a-0\cdot h)(a-1\cdot h) = a(a-h) $$

|||

Сразу стоит прояснить важный частный случай, когда $h = 0$:

$$ a^{\left[ n \right]} = a\cdot a\ldots a = a^n $$

Другими словами, при $h=0$ выражение $a^{\left[ n \right]}$ является обычным возведением $a$ в степень $n$.

Теперь докажем следующее равенство для всех натуральных $n$:

$$ (a+b)^{\left[ n \right]} = \sum\limits^n_{m=0} C^m_n a^{\left[ n-m \right]}b^{\left[ m \right]} $$

Докажем по методу математической индукции.

## База индукции

Пусть $n=1$.

В левой части равенства получаем:

$$ (a+b)^{\left[ 1 \right]} = (a+b) - 0\cdot h = a + b $$

В правой:

$$ \sum\limits^1_{m=0} C^m_1 a^{\left[ 1-m \right]}b^{\left[ m \right]} = C^0_1 a^{\left[ 1 \right]}b^{\left[ 0 \right]} + C^1_1 a^{\left[ 0 \right]}b^{\left[ 1 \right]} = a+b, $$

так как $C^0_1 = C^1_1 = 1$ и $a^{\left[ 0 \right]} = b^{\left[ 0 \right]} = 1$ (по условию). Итак, база индукции выполняется.

## Индукционный переход

Предположим, что равенство выполняется для некоторого натурального $k$:

$$ (a+b)^{\left[ k \right]} = \sum\limits^k_{m=0} C^m_k a^{\left[ k-m \right]}b^{\left[ m \right]} $$

Докажем, что равенство выполняется и для $k+1$:

$$ (a+b)^{\left[ k+1 \right]} = \sum\limits^{k+1}_{m=0} C^m _{k+1} = a^{\left[ k+1-m \right]}b^{\left[ m \right]} $$

Рассмотрим левую часть равенства и примем $t=a+b$:

$$ t^{\left[ k + 1 \right]} = t(t-h)\ldots(t-(k-1)h)(t-kh) $$

Замечаем, что все множители кроме последнего по определению образуют $t^{\left[ k \right]}$:

$$ t^{\left[ k + 1 \right]} = t^{\left[ k \right]} \cdot (t-kh) $$

Возвращаемся от $t$ обратно к $a+b$:

$$ (a+b)^{\left[ k + 1 \right]} = (a+b)^{\left[ k \right]} \cdot (a+b-kh) $$

Исходя из предположения индукционного перехода мы можем заменить $(a+b)^{\left[ k \right]}$ на сумму:

$$ (a+b)^{\left[ k + 1 \right]} = (a+b-kh) \cdot \sum\limits^k_{m=0} C^m_k a^{\left[ k-m \right]}b^{\left[ m \right]} $$

Итак, скобка умножается на каждое слагаемое из суммы. Распишем несколько подобных умножений.

Для первого слагаемого ($m=0$):

$$ (a+b-kh)\cdot\left( C^0_k a^{\left[ k \right]}b^{\left[ 0 \right]} \right) = \\ = (a-kh)\cdot\left( C^0_k a^{\left[ k \right]}b^{\left[ 0 \right]} \right) + b\cdot\left( C^0_k a^{\left[ k \right]}b^{\left[ 0 \right]} \right) = \\ = C^0_k a^{\left[ k+1 \right]}b^{\left[ 0 \right]} + C^0_k a^{\left[ k \right]} b^{\left[ 1 \right]} $$

Для второго слагаемого ($m=1$):

$$ (a+b-kh)\cdot\left( C^1_k a^{\left[ k-1 \right]}b^{\left[ 1 \right]} \right) = \\ = (a-(k-1)h)\cdot\left( C^1_k a^{\left[ k-1 \right]}b^{\left[ 1 \right]}\right) + (b-h)\cdot\left( C^1_k a^{\left[ k-1 \right]}b^{\left[ 1 \right]} \right) = \\ = C^1_k a^{\left[ k \right]}b^{\left[ 1 \right]} + C^1_k a^{\left[ k-1 \right]} b^{\left[ 2 \right]} $$

Для последнего слагаемого ($m=k$):

$$ (a+b-kh)\cdot\left( C^k_k a^{\left[ 0 \right]}b^{\left[ k \right]} \right) = \\ = a \cdot \left( C^k_k a^{\left[ 0 \right]} b^{\left[ k \right]} \right) + (b-kh)\cdot\left( C^k_k a^{\left[ 0 \right]}b^{\left[ k \right]} \right) = \\ = C^k_k a^{\left[ 1 \right]}b^{\left[ k \right]} + C^k_k a^{\left[ 0 \right]}b^{\left[ k+1 \right]} $$

То есть, для каждого слагаемого мы раскладываем скобку $(a+b-kh)$ так, чтобы увеличить степень $a$ и степень $b$. Соберем все эти слагаемые вместе:

$$ (a+b)^{\left[ k + 1 \right]} = (a+b - kh) \cdot \sum\limits^k_{m=0} C^m_k a^{\left[ k-m \right]}b^{\left[ m \right]} = \\ C^0_k a^{\left[ k+1 \right]}b^{\left[ 0 \right]} + C^0_k a^{\left[ k \right]}b^{\left[ 1 \right]} + C^1_k a^{\left[ k \right]}b^{\left[ 1 \right]} + C^1_k a^{\left[ k-1 \right]}b^{\left[ 2 \right]} + \ldots + \\ + C^k_k a^{\left[ 1 \right]}b^{\left[ k \right]} + C^k_k a^{\left[ 0 \right]}b^{\left[ k + 1 \right]} = \\ = C^0_k a^{\left[ k + 1 \right]}b^{\left[ 0 \right]} + a^{\left[ k \right]}b^{\left[ 1 \right]} \left( C^0_k + C^1_k \right) + a^{\left[ k - 1 \right]}b^{\left[ 2 \right]} \left( C^1_k + C^2_k \right) + \\ + \ldots + C^k_k a^{\left[ 0 \right]}b^{\left[ k+1 \right]} $$

Все слагаемые, кроме первого и последнего, умножаются на скобку с суммой сочетаний. Сумму сочетаний можно схлопнуть с помощью свойства сочетаний:

$$ C^i_k + C^{i+1}_k = C^{i+1} _{k+1} $$

С множителями $C^0_k$ первого и $C^k_k$ последнего слагаемых можно проделать следующие преобразования:

$$ C^0_k = 1 = C^0_{k+1} \qquad C^k_k = 1 = C^{k+1}_{k+1} $$

Получаем итоговую сумму:

$$ (a+b)^{\left[ k+1 \right]} = (a+b-kh)\cdot \sum\limits^k_{m=0} C^m_k = \\ = C^0_{k+1} a^{\left[ k+1 \right]}b^{\left[ 0 \right]} + C^1_{k+1} a^{\left[ k \right]}b^{\left[ 1 \right]} + \ldots + C^{k+1}_{k+1} a^{\left[ 0 \right]} b^{\left[ k+1 \right]} = \\ = \sum\limits^{k+1} _{m=0} C^m _{k+1} a^{\left[ k+1-m \right]}b^{\left[ m \right]} $$

Индукционный переход доказан.

$\blacksquare$

Итак, мы доказали, что для всех натуральных чисел верна формула:

$$ (a+b)^{\left[ n \right]} = \sum\limits^n_{ m=0 } C^m_n a^{\left[ n-m \right]} b^{\left[ m \right]} $$

## Вывод формулы бинома Ньютона

В самом начале решения мы установили, что если $h=0$, то $a^{\left[ n \right]} = a^n$. Так вот, доказанная формула при $h=0$ принимает вид:

$$ (a+b)^n = \sum\limits^n_{m=0} C^m_n a^{n-m}b^m $$

А это и есть формула бинома Ньютона.