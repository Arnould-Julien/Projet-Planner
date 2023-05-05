import { toggleHeaderFilter } from "./modules/toggleHeaderFilters.js";
import { displayForm } from "./modules/toggleDisplayFormAndButtons.js";

export const btnHeaderFilters = document.getElementById("btn_header_filters")
const buttonsAddingTask = document.getElementsByClassName("btn--add-task")


btnHeaderFilters.addEventListener("click",toggleHeaderFilter)

for(let button of buttonsAddingTask){
    button.addEventListener("click", (e) =>{
        displayForm(button)
    })
}