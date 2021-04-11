---
{
    "tags": ["unChecked"]
}
---

Применяя формулу:

$$ {\int\limits_C {f\left( {x,y} \right)dS} } = {\int\limits_\alpha ^\beta {f\left( {x\left( t \right),y\left( t \right)} \right)\sqrt {{{\left( {x'\left( t \right)} \right)}^2} + {{\left( {y'\left( t \right)} \right)}^2}} dt} ;}$$

найдем $dS$.

$$ dS=\sqrt{(x')^2+(y')^2}=\sqrt{a^2\sh^2t+a^2\ch^2t}=a\sqrt{\ch2t}dt $$

$$ \int\limits_C {xy \ dS}= \\[10px] = a^3\int\limits_0^{t_0}\ch t\sh t\sqrt{\ch2t}dt=\frac{a^3}{2}\int\limits_0^{t_0}\sh 2t\sqrt{\ch2t}dt= \\[10px] = \frac{a^3}{4}\int\limits_0^{t_0}\sqrt{\ch2t}d(\ch 2t)=\frac{a^3}{6}\left( \left. \sqrt{\ch^3 2t }=1 \right|_0^{t_9} \right)= \\[10px] = \frac{a^3}{6}\left( \sqrt{\ch^3 2t_0} -1\right)$$