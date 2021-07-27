Рассмотрим цепочку произведений из условия:

$$ \sqrt{2} \sqrt[4]{2} \sqrt[8]{2} \ldots \sqrt[2n]{2} $$

Представим корни в виде рациональной степени:

$$ 2^{\frac{1}{2}}2^{\frac{1}{4}}2^{\frac{1}{8}}\ldots 2^{\frac{1}{2n}} $$

Воспользуемся свойством степеней:

$$ a^d\cdot a^t = a^{d + t} $$

$$ 2^{\frac{1}{2}}2^{\frac{1}{4}}2^{\frac{1}{8}}\ldots 2^{\frac{1}{2n}} = 2^{ \frac{1}{2} + \frac{1}{4} +\frac{1}{8} + \ldots + \frac{1}{2n} } $$

Рассмотрим сумму дробей в показателе:

$$ \frac{1}{2} + \frac{1}{4} +\frac{1}{8} + \ldots + \frac{1}{2n} $$

Перезапишем эту сумму вот так:

$$ \frac{1}{2} + \frac{1}{2}\cdot\left( \frac{1}{2} \right)^1 + \frac{1}{2}\cdot\left( \frac{1}{2} \right)^2 + \ldots $$

Воспользуемся формулой суммы первых $n$ членов геометрической прогрессии с первым членом, равным $\frac{1}{2}$ и знаменателем, равным $\frac{1}{2}$:

$$ \frac{1}{2} + \frac{1}{2}\cdot\left( \frac{1}{2} \right)^1 + \frac{1}{2}\cdot\left( \frac{1}{2} \right)^2 + \ldots = \frac{\frac{1}{2}\left(\left(\frac{1}{2}\right)^n - 1\right)}{\frac{1}{2} - 1} = 1-\frac{1}{2^n} $$

Мы получили формулу показателя степени $2$:

$$ 2^{1-\frac{1}{2^n}} = 2^1\cdot 2^{-\frac{1}{2^n}} = \frac{2}{2^{\frac{1}{2^n}}} $$

Теперь находим предел:

$$
    \lim_{n\to\infty} \left( \sqrt{2} \sqrt[4]{2} \sqrt[8]{2} \ldots \sqrt[2n]{2} \right) = \lim_{n\to\infty} \frac{2}{2^{\frac{1}{2^n}}} = \\[5px]
    = 2\cdot \lim_{n\to\infty} \left(\frac{1}{2}\right)^{\frac{1}{2^n}} = 2\cdot\left(\frac{1}{2}\right)^{\lim\limits_{n\to\infty} \left(\frac{1}{2}\right)^n} = 2 \cdot \left(\frac{1}{2}\right)^0 = 2
$$

Выше мы использовали предельный переход в показательной функции (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/exp-log-transition)>) и тот факт, что $\left(\frac{1}{2}\right)^n\to 0$ (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/geometric-progression)>).