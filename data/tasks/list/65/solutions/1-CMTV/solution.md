Запишем последовательность в другом виде:

$$ \sqrt[n]{n} = n^{\frac{1}{n}} = 2^{\log_2 n^{\frac{1}{n}}} = 2^{\frac{1}{n}\cdot\log_2 n} = 2^{\frac{\log_2 n}{n}} $$

Теперь найдем предел:

$$ \limn \sqrt[n]{n} = \limn 2^{\frac{\log_2 n}{n}} = 2^{\lim\limits_{n\to\infty} \frac{\log_2 n}{n}} = 2^0 = 1 $$

Здесь мы использовали предельных переход к показателю степени (см. прото-задачу <b:[П-ссылка](advanced/proto/sequence-lim/exp-log-transition)>) и результат предыдущей, <t:64> задачи.