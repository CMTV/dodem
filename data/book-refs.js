const BOOK_REFS =
{
    // Модуль
    "abs": { title: "Модуль", url: "algebra/abs" },

    // Монотонная функция
    "f-monotonic": { title: "Монотонная функция", url: "algebra/f-properties/monotonic" }
}

//
//
//

const TOC_REFS =
{
    "I.1/abs": ["abs"],
    "I.3/monotonic-f": ["f-monotonic"]
}

//
//
//

module.exports =
{
    refs: BOOK_REFS,
    toc: TOC_REFS
};