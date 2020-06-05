По условию дано, что $x_n$ убывает и не меньше $\alpha$. По признаку Вейерштрасса это означает, что $x_n$ сходится к некоторому числу $X$:

$$ \limn x_n = X $$

По этому же признаку

$$ \limn y_n = Y $$

По условию известно, что

$$ \limn x_n - y_n = 0 $$

Так как $x_n$ и $y_n$ сходятся, то можно воспользоваться одним из свойств пределов:

$$ \limn x_n - y_n = \limn x_n - \limn y_n = X - Y = 0 $$

$$ X - Y = 0 $$

$$ X = Y $$

По условию дано, что

$$ x_n \geq \alpha $$

Тогда, воспользовавшись прото-задачей <p:[sequences/limits/limits-inequality]>

$$ \limn x_n = X \geq \limn \alpha = \alpha $$

$$ X \geq \alpha $$

Аналогичным образом получаем, что

$$ Y \leq \alpha $$

Итак, имеем

$$ X = Y \qquad X\geq\alpha \qquad Y\leq \alpha $$

Это возможно только в одном случае:

$$ X = Y = \alpha $$