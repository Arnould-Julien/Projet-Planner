import { toggleHeaderFilter } from "./modules/toggleHeaderFilters.js";
import { displayForm } from "./modules/toggleDisplayFormAndButtons.js";
import { addTask } from "./modules/addTask.js";
import { showTasks } from "./modules/showTasks.js";

export const btnHeaderFilters = document.getElementById("btn_header_filters")
const buttonsAddingTask = document.getElementsByClassName("btn--add-task")
const submitButtons = document.getElementsByClassName("form__submit")
const taskForms = document.getElementsByClassName("form--tasks")

btnHeaderFilters.addEventListener("click",toggleHeaderFilter)

for(let form of taskForms){
    form.addEventListener("click", (event) =>{
        if(event.target.classList.contains("btn--add-task")){
            displayForm(form, event.target)
        }        
        else if(event.target.classList.contains("form__submit")){
            addTask
        }
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

showTasks()