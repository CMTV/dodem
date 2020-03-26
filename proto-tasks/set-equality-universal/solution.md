**Доказательство $\Rightarrow$**

$$ \left.\begin{array}{rr} A\subseteq B \\ \Omega \setminus A \subseteq \Omega \setminus B \end{array} \ \right\} \Rightarrow A = B $$

Распишем равенство $A=B$ по определению:

$$ A = B \Leftrightarrow A\subseteq B \text{ и } B\subseteq A $$

То, что $A\subseteq B$ напрямую следует из условия. Поэтому нужно лишь доказать, что $B\subseteq A$.

Докажем от противного. Пусть $B\nsubseteq A$, то есть

$$ \exists b \in B \ : \ b \notin A $$

Раз $b\notin A$, то $b\in \Omega\setminus A$, так в этом множестве находятся все элементы $\Omega$, которые не находятся в $A$. Раз $b\in\Omega\setminus A$, то, по условию, $b\in\Omega\setminus B$.

Итак, получается, что

\begin{gather*}
    b\in B
    \\[5px]
    b\in\Omega\setminus B
\end{gather*}

Но раз $b\in B$, то $b$ по определению не может быть в $\Omega\setminus B$ и наоборот. Противоречение.

Значит $ B\subseteq A $.

$\blacksquare$

---

**Доказательство $\Leftarrow$**

$$ \left.\begin{array}{rr} A\subseteq B \\ \Omega \setminus A \subseteq \Omega \setminus B \end{array} \ \right\} \Leftarrow A = B $$

Распишем равенство $A=B$ по определению:

$$ A = B \Leftrightarrow A\subseteq B \text{ и } B\subseteq A $$

Раз $A\subseteq B$ верно по условию, нужно доказать только, что

$$ \Omega \setminus A \subseteq \Omega \setminus B $$

Докажем от противного. Пусть

$$ \exists a' \in \Omega \setminus A \ : \ a' \notin \Omega \setminus B $$

Раз $a' \in \Omega \setminus B$, то, по определению операции разности множеств, $a \in B$. По условию известно, что $B\subseteq A$, а значит $a\in A$.

Итак, получается, что

\begin{gather*}
    a \in A
    \\[5px]
    a \in \Omega\setminus A
\end{gather*}

Но раз $a\in A$, то $a$ по определению операции разности множеств не может быть в $\Omega\setminus A$ и наоборот. Противоречие.

Значит
$$ \Omega \setminus A \subseteq \Omega \setminus B $$

$\blacksquare$

---

**Доказательство дополнения**

Для начала покажем, что:

$$ A = \Omega\setminus \left( \Omega\setminus A \right) $$

Действительно, $\Omega\setminus A$ означает все элементы из $\Omega$, не принадлежащие $A$. Тогда $\Omega\setminus \left( \Omega\setminus A \right)$ — множество элементов $\Omega$, не не принадлежащие $A$, то есть это и
есть элементы самого $A$.
 
По этому же свойству:

$$ B = \Omega\setminus\left( \Omega\setminus B \right) $$

Воспользуемся доказанной выше теоремой:

$$ \left.\begin{array}{rr} \Omega \setminus A \subseteq \Omega\setminus B \\ \Omega\setminus (\Omega \setminus A) \subseteq \Omega\setminus (\Omega\setminus B) \end{array} \ \right\} \Leftrightarrow \Omega \setminus A = \Omega \setminus B $$

$\blacksquare$