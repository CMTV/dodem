Преобразуем уравнение $x^2+z^2=2az$

$$ x^2+z^2-2az=0 \\ x^2+z^2-2az+a^2=a^2 $$

Выделим полный квадрат:

$$ x^2+(z-a)^2=a^2 $$

Это уравнение задаёт цилиндр c осью, совпадающей с координатной осью $y$, и поднятый на $a$ по оси $z$Ж

![Иллюстрация 1]([[ assets ]]/pic-1.png)

Введём смещённые цилиндрические координаты:

$$ x=a \sin(\varphi) \\ y = y \\ z=a+a \cos(\varphi) $$

Элемент площади $dS=\sqrt{EG-F^2} d\varphi dy$:

$$ E=\left ( \frac{\partial x}{\partial \varphi } \right )^2 + \left ( \frac{\partial y}{\partial \varphi } \right )^2+\left ( \frac{\partial z}{\partial \varphi } \right )^2=a^2\cos^2(\varphi)+0+a^2\sin^2(\varphi)=a^2(\cos^2(\varphi)+\sin^2(\varphi))=a^2 $$

$$ F=\frac{\partial x}{\partial \varphi }\cdot \frac{\partial x}{\partial y } + \frac{\partial y}{\partial \varphi }\cdot \frac{\partial y}{\partial y } + \frac{\partial z}{\partial \varphi }\cdot \frac{\partial z}{\partial y }=0+0+0=0$$

$$ G=\left ( \frac{\partial x}{\partial y } \right )^2 + \left ( \frac{\partial y}{\partial y } \right )^2+\left ( \frac{\partial z}{\partial y } \right )^2=0+1+0=0 $$

$$ dS=\sqrt{EG-F^2} d\varphi dy=\sqrt{a^2 \cdot 1 + 0}=a $$

Найдём граничные условия для $y$ из условия $z=\sqrt{x^2+y^2}$.

Так как $z>0$ возведём в квадрат:

$$ z^2=x^2+y^2 \\ y^2=z^2-x^2 \\ y=\pm \sqrt{z^2-x^2} $$

Подставим введёную параметризацию:

$$ y=\pm \sqrt{(z^2-x^2)}=\pm \sqrt{\left(a-a\cos\left ( \varphi  \right )\right)^2-\left ( a\sin\left ( \varphi  \right ) \right )^2}=\pm\sqrt{a^2+2a^2\cos\left ( \varphi  \right )+a^2\cos^2\left ( \varphi  \right )-a^2\sin^2\left ( \varphi  \right )}=\pm a\sqrt{1+2\cos\left ( \varphi  \right )+\cos^2\left ( \varphi  \right )-\sin^2\left ( \varphi  \right )}=\pm a\sqrt{1+2\cos\left ( \varphi  \right )+\cos^2\left ( \varphi  \right )-\left ( 1-\cos^2\left ( \varphi  \right ) \right )}=\pm a\sqrt{2\cos\left ( \varphi  \right )+2\cos^2\left ( \varphi  \right )}=\pm\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}
$$

Таким образом верхняя граница для $y$:

$$ y= \sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}$$

Нижняя:

$$ y= -\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}$$

Теперь найдём границы для $\varphi$. Для этого рассмотрим проекцию на плоскость $XOZ$:

![Иллюстрация 2]([[ assets ]]/pic-2.png)

Проекция $x^2+z^2=2az$ — окружность $x^2+(z-a)^2=a^2$, а $z=\sqrt{x^2+y^2}$ &ndash;  $z\leqslant \left | x \right |$.

Найдём точки пересечения этих графиков (для поиска точек пересечения нужен график $z= \left | x \right |$). Для этого раскорем модуль и решим две системы уравнений:

$$
\begin{cases}x^2+(z-a)^2=a^2\\ z=x \end{cases}
\qquad
\begin{cases}x^2+(z-a)^2=a^2\\ z=-x \end{cases}
$$

Рассмотрим решение только первой системы уравнений, второе решается абсолютно аналогично. Подставим второе уравнение в первое:

$$
x^2+(x-a)^2=a^2
\\
2x^2-2ax+a^2=a^2
\\
2x^2-2ax=0
\\
x(x-a)=0
$$

Откуда ${x_1}_1=0$ и ${x_1}_2=a$. Из второго уравнения ${z_1}_1=0$ и ${z_1}_2=a$.

Аналогично для второй системы ${x_2}_1=0$, ${x_2}_2=-a$, ${z_2}_1=0$, ${z_2}_2=a$.

Таким образом имеется три точки пересечения:

$$ A_1=\left ( a, a \right ) \quad A_2=\left ( -a, a \right ) \quad O=\left ( 0, 0 \right ) $$

Центр окружности $x^2+(z-a)^2=a^2$ лежит на одной прямой с $A_1$ и $A_2$. Значит угол $\varphi$ меняется от $-\frac{\pi }{2}$ до $\frac{\pi }{2}$.

Используя всё, что было получено на предыдущих шагах перейдём от исходного поверхностного интеграла первого рода к повторному:
\[\iint_s{zdS}=\iint_{s'}{\left ( a+a\cos\left ( \varphi  \right ) \right )a d\varphi dy}=
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{d\varphi\int_{-\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}}^{\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}}}{\left ( a+a\cos\left ( \varphi  \right ) \right )ady}=
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{a\left ( a+a\cos\left ( \varphi  \right ) \right )\int_{-\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}}^{\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}}{dy}}=
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{a\left ( a+a\cos\left ( \varphi  \right ) \right )2\sqrt{2}a\sqrt{\cos\left ( \varphi  \right )\left ( \cos\left ( \varphi  \right )+1 \right )}}=
2\sqrt{2}a^3\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{\sqrt{\cos\left ( \varphi  \right )\left ( 1+\cos\left ( \varphi  \right ) \right )^3}d\varphi }=
2\sqrt{2}a^3\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{\sqrt{\cos\left ( \varphi  \right )\left ( 1+\cos\left ( \varphi  \right ) \right )^3}\frac{sin\left ( \varphi  \right )}{sin\left ( \varphi  \right )}d\varphi }=
2\sqrt{2}a^3\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{\sqrt{\cos\left ( \varphi  \right )\left ( 1+\cos\left ( \varphi  \right ) \right )^3}\frac{1}{sin\left ( \varphi  \right )}d\cos\left ( \varphi  \right ) }=
2\sqrt{2}a^3\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{\sqrt{\cos\left ( \varphi  \right )\left ( 1+\cos\left ( \varphi  \right ) \right )^3}\frac{1}{\sqrt{1-\cos^2\left ( \varphi  \right )}}d\cos\left ( \varphi  \right ) }=
2\sqrt{2}a^3\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}{\frac{\sqrt{\cos\left ( \varphi  \right )\left ( 1+\cos\left ( \varphi  \right ) \right )^3}}{\sqrt{\left( 1-\cos\left ( \varphi  \right )\right ) \left( 1+\cos\left ( \varphi  \right )\right ) }}d\cos\left ( \varphi  \right ) }\]

Сделаем теперь замену переменных:

$$ t=\cos\left ( \varphi  \right ) $$

Функция косинуса чётная и переодическая. Поэтому интеграл от $-\frac{\pi}{2}$ до $\frac{\pi}{2}$ можно представить как сумму двух интегралов от $-\frac{\pi}{2}$ до $0$.
Таким образом границы интегрирования после замены переменных станут от $\cos\left( -\frac{\pi}{2} \right)=0$ до $\cos \left ( 0  \right )=1$.

Продолжим с новой переменной:

\[4\sqrt{2}a^3\int_{0}^{1}{\frac{t^{\frac{1}{2}}\left ( 1+t \right )}{\left ( 1-t\right )^{\frac{1}{2}}}dt}=
4\sqrt{2}a^3\int_{0}^{1}{t^{\frac{1}{2}}\left ( 1-t \right )^{-\frac{1}{2}}+t^{\frac{3}{2}}\left ( 1-t \right )^{-\frac{1}{2}}}=
4\sqrt{2}a^3\left (B\left ( \frac{3}{2}; \frac{1}{2} \right)+ B\left ( \frac{5}{2}; \frac{1}{2} \right)\right)=
4\sqrt{2}a^3\left(\frac{\pi }{2} + \frac{3\pi }{8}\right )=\frac{7\sqrt{2}}{2}a^3\pi\]