
const formSubmit = document.getElementsByClassName("form__submit")
const cancelButtons = document.getElementsByClassName("cancel")

export function displayForm(form, button){
    button.style.display = "none"
    console.log(button)
    console.log(form)
    // form.style.display ="flex"
}

function hideForm(cancel){
    cancel.parentNode.nextSibling.nextSibling.style.display = "flex"
    cancel.parentNode.style.display = "none"
}

for(let cancel of cancelButtons){
    cancel.addEventListener("click", (e) =>{
        hideForm(cancel)
    })
}