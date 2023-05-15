const formSubmit = document.getElementsByClassName("form__submit")
const cancelButtons = document.getElementsByClassName("cancel")

export function displayForm(form, button){
    for(let child of form.children){
        child.style.display ="block"
    }
    button.style.display = "none"
}

function hideForm(form, cancel){
    for(let child of form.children){
        child.style.display ="none"
        if(child.classList.contains("btn--add-task")){
            child.style.display = "block"
        }
    }
}

for(let cancel of cancelButtons){
    cancel.addEventListener("click", (e) =>{
        hideForm(cancel.parentNode, cancel)
    })
}