const MACRO =
{    
    // Тригонометрические функции
    "\\tg":     "\\mathop{\\rm tg}\\nolimits",
    "\\ctg":    "\\mathop{\\rm ctg}\\nolimits",

    //
    // Специальные функции
    //

    // Сигнум
    "\\sgn":    "\\mathop{\\rm sgn}\\nolimits",

    // "Потолок" и "пол" числа
    "\\ceil":   "\\left\\lceil #1 \\right\\rceil",
    "\\floor":  "\\left\\lfloor #1 \\right\\rfloor",

    //
    // Сокращения
    //

    // Расширенная числовая прямая
    "\\RR":     "\\overline{\\mathbb{R}}",

    // Предел при n -> oo
    "\\limn":   "\\lim\\limits_{n\\to\\infty}",

    // Предел функции
    "\\limf":   "\\lim\\limits_{ #1 \\to #2 }",

    // Множество
    "\\set":    "\\left\\{#1\\right\\}",

    // И/ИЛИ скобки
    "\\andcases": "\\begin{cases}#1\\end{cases}",
    "\\orcases": "\\left[\\begin{array}{ll} #1 \\end{array}\\right.",

    // Произвольная группа действий
    "\\scope":  "\\left| \\ \\begin{gathered} #1 \\end{gathered} \\ \\right|"
}

module.exports = MACRO;