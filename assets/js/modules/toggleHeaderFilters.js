import { btnHeaderFilters } from "../script.js"

const headerFilters = document.getElementById("header_filters")

export function toggleHeaderFilter(){
    headerFilters.classList.toggle("display-header-filters")
    btnHeaderFilters.classList.toggle("btn__filter--invert")
}