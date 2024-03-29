---
{
    "title": "Элементарные пределы последовательностей",
    "desc": "Пределы последовательностей, к которым сводятся множество задач.",
    "type": "other"
}
---

||| theorem

Если $a > 0$, то

$$ \lim_{n\to\infty}\frac{1}{n^a} = 0 $$

||| proof

Распишем по определению:

$$ \lim_{n\to\infty}\frac{1}{n^a} = 0 \Leftrightarrow \forall\varepsilon > 0 \ \exists N = N(\varepsilon) \ \forall n > N \ : \ \left| \frac{1}{n^a} \right| <\varepsilon $$

В последнем неравенстве можно избавиться от модуля, так как выражение под ним всегда положительное:

$$ \frac{1}{n^a} < \varepsilon $$

Изолируем $n$:

$$ n > \frac{1}{\sqrt[a]{\varepsilon}} $$

Какое бы $\varepsilon > 0$ мы не взяли, нам достаточно взять любое число, большее $\frac{1}{\sqrt[a]{\varepsilon}}$ и тогда требуемое по определению предела неравенство выше будет выполняться.

Но нам нужно не любое число, а натуральное, поэтому выбирать $N$ будем по следующей формуле:

$$ N(\varepsilon) = \ceil{\frac{1}{\sqrt[a]{\varepsilon}}} $$

По этой формуле мы получаем округление сверху ("потолок") числа $\frac{1}{\sqrt[a]{\varepsilon}}$. Из определения "потолка" числа:

$$ \ceil{\frac{1}{\sqrt[a]{\varepsilon}}} \geq \frac{1}{\sqrt[a]{\varepsilon}} $$

Так как в условии у нас $n > N(\varepsilon)$, то следующее натуральное число после $N(\varepsilon)$ будет $N(\varepsilon) + 1$:

$$ n \geq N(\varepsilon) + 1 > N(\varepsilon) = \ceil{\frac{1}{\sqrt[a]{\varepsilon}}} \geq \frac{1}{\sqrt[a]{\varepsilon}}  $$

$$ n > \frac{1}{\sqrt[a]{\varepsilon}} $$

Итак, мы нашли формулу для $N(\varepsilon)$, при которой определение предела выполняется. Таким образом, доказали, что:

$$ \lim_{n\to\infty}\frac{1}{n^a} = 0 $$

$\blacksquare$

|||

||| theorem

$$ \lim_{n\to\infty} \frac{n\pm 1}{n} = \limn\frac{n}{n\pm 1} = 1 $$

||| proof

$$ \lim_{n\to\infty} \frac{n\pm 1}{n} = \lim_{n\to\infty} \left(1 \pm \frac{1}{n}\right) = 1 \pm \lim_{n\to\infty} \frac{1}{n} = 1 \pm 0 = 1 $$

Последовательность $\frac{1}{n} \to 0$, так как это частный случай последовательности $\frac{1}{n^a}$ при $a = 1$. А последовательность $\frac{1}{n^a}\to 0$, как мы показали в предыдущем пункте.

Теперь разберемся с $\frac{n}{n\pm 1}$. Ее можно представить в следующем виде:

$$ \frac{n}{n\pm 1} = \frac{1}{\frac{n\pm 1}{n}} $$

Тогда

$$ \limn \frac{n}{n\pm 1} = \limn \frac{1}{\frac{n\pm 1}{n}} = \frac{\lim\limits_{n\to\infty} 1}{\lim\limits_{n\to\infty} \frac{n\pm 1}{n}} = \frac{1}{1} = 1 $$

$\blacksquare$

|||