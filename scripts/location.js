function get_location(str_location)
{
    let arr_location = str_location.split('.');

    return {
        "section": { 
            "id": arr_location[0], 
            "title": TOC[arr_location[0]].title 
        },

        "paragraph": {
            "id": arr_location[1],
            "title": TOC[arr_location[0]].paragraphs[arr_location[1] - 1] 
        }
    }
}