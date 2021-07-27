Упростим выражение, используя формулы из указания:

$$ \frac{\tg^3 x - 3\tg x}{\cos(x+\frac{\pi}{6})} = \frac{\tg x \left( \tg^2 x - 3 \right)}{\cos x \cos \frac{\pi}{6} - \sin x \sin \frac{\pi}{6}} = \\[10px] = \frac{\tg x  \dfrac{\sin^2 x - 3\cos^2 x}{\cos^2 x} }{\frac{\sqrt{3}}{2}\cos x - \frac{1}{2}\sin x} = \frac{\tg x (\sin x - \sqrt{3}\cos x)(\sin x + \sqrt{3}\cos x)}{-\frac{1}{2}\cos^2 x\left( \sin x - \sqrt{3}\cos x \right)} = \\[10px] = \frac{\tg x (\sin x + \sqrt{3} \cos x)}{-\frac{1}{2}\cos^2 x} $$

Найдем теперь предел, пользуясь его арифметическими свойствами и непрерывностью синуса, косинуса и тангенса (<b:[П-ссылка](advanced/proto/f-continuity/trigonom)>):

$$ \limf{x}{\frac{\pi}{3}} \frac{\tg x (\sin x + \sqrt{3} \cos x)}{-\frac{1}{2}\cos^2 x} = \frac{\tg\frac{\pi}{3} (\sin\frac{\pi}{3} + \sqrt{3}\cos\frac{\pi}{3})}{-\frac{1}{2}\cos^2\frac{\pi}{3}} = \\[10px] = \frac{ \sqrt{3} (\frac{\sqrt{3}}{2} + \sqrt{3}\frac{1}{2}) }{-\frac{1}{2}\cdot\frac{1}{4}} = \frac{3}{-\frac{1}{8}} = - 24 $$