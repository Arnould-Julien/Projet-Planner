import { toggleHeaderFilter } from "./modules/toggleHeaderFilters.js";
import { displayForm } from "./modules/toggleDisplayFormAndButtons.js";
import { addTask } from "./modules/addTask.js";

export const btnHeaderFilters = document.getElementById("btn_header_filters")
const buttonsAddingTask = document.getElementsByClassName("btn--add-task")
const submitButtons = document.getElementsByClassName("form__submit")
const taskForms = document.getElementsByClassName("form--tasks")

btnHeaderFilters.addEventListener("click",toggleHeaderFilter)

for(let form of taskForms){
    form.addEventListener("click", (event) =>{
        displayForm(form, event.target)
    })
}

for(let submit of submitButtons){
    submit.addEventListener("click", (e) =>{
        e.preventDefault()
        const form = submit.parentNode
        const titleTask = (submit.previousSibling.previousSibling.textContent)

        addTask(form, titleTask)
    })
}