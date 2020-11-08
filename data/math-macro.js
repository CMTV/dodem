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

    // Предел при n -> oo
    "\\limn":   "\\lim\\limits_{n\\to\\infty}",

    // Множество
    "\\set":    "\\left\\{#1\\right\\}",

    // И/ИЛИ скобки
    "\\andcases": "\\begin{cases}#1\\end{cases}",
    "\\orcases": "\\left[\\begin{array}{ll} #1 \\end{array}\\right."
}

module.exports = MACRO;