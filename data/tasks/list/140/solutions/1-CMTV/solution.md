Обозначим за $y_n$

$$ y_n = \sqrt[n]{x_1 x_2 \ldots x_n} $$

Введем в рассмотрение следующую последовательность:

$$ \ln y_n = \ln (x_1 x_2 \ldots x_n)^{\frac{1}{n}} = \frac{1}{n}\ln(x_1 x_2 \ldots x_n) $$

$$ \ln y_n = \frac{\ln x_1 + \ln x_2 + \ldots + \ln x_n}{n} $$

Из условия известно, что

$$ \limn x_n = A $$

По прото-задаче <b:[П-ссылка](advanced/proto/sequence-lim/exp-log-transition)>:

$$ \limn x_n = A \Rightarrow \limn \ln x_n = \ln A $$

Получаем, что последовательность $\ln x_n$ сходится. Значит, к тому же числу сходится и последовательность ее средних геометрических:

$$ \limn \frac{\ln x_1 + \ln x_2 + \ldots + \ln x_n}{n} = \limn \ln y_n = \ln A $$

$$ \limn \ln y_n = \ln A $$

Последовательность $y_n$ можно представить в виде:

$$ y_n = e^{\ln y_n} $$

Найдем ее предел (воспользовавшись прото-задачей <b:[П-ссылка](advanced/proto/sequence-lim/exp-log-transition)>):

$$ \limn y_n = \limn e^{\ln y_n} = e^{\limn \ln y_n} = e^{\ln A} = A $$

Итак, мы показали, что

$$ \limn y_n = \limn x_n = A $$

$$ \limn \sqrt[n]{x_1 x_2 \ldots x_n} = \limn x_n $$