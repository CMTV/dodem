Воведем обе части в квадрат (см. пункт 3 прото-задачи "[Упрощение модулей в неравенстве](/proto/simple-abs)"):

\begin{gather*}
    |x+2| + |x-2| \leq 12 \Leftrightarrow \\ \Leftrightarrow (x+2)^2 + 2|x+2||x-2| + (x-2)^2 \leq 144
\end{gather*}

Воспользуемся свойством модулей
$$ |a||b| = |a\cdot b| $$
и объединим модули $|x+2|$ и $|x-2|$ в середине левой части неравенства.

\begin{gather*}
    (x+2)^2 + 2|x^2-4| + (x-2)^2 \leq 144
    \\[5px]
    2x^2 + 8 + 2|x^2-4| \leq 144
    \\[5px]
    x^2 + 4 + |x^2-4| \leq 72
    \\[5px]
    |x^2 - 4| \leq 68 - x^2
\end{gather*}

Теперь разложим это неравенство (пункт 2 прото-задачи "Упрощение модулей в неравенстве"):
$$ |x^2 - 4| \leq 68 - x^2 \Leftrightarrow \begin{cases} x^2-4 \leq 68 - x^2 \\ x^2-4 \geq x^2 - 68 \end{cases} $$

Из второго неравенства ничего полезного не получаем:

\begin{gather*}
    x^2 - 4 \geq x^2 - 68
    \\
    -4 \geq -68
\end{gather*}

Теперь разберем первое неравенство:
$$ x^2 - 4 \leq 68 - x^2 $$

Прибавим к обеим сторонам $x^2$:
\begin{gather*}
    2x^2 - 4 \leq 68
    \\
    2x^2 \leq 72
    \\
    x^2 \leq 36
\end{gather*}

Заметим, что по пункту 3 прото-задачи "Упрощение модулей в неравенстве" неравенство $x^2 \leq 36$ можно представить в виде
$$ |x| \leq 6 $$