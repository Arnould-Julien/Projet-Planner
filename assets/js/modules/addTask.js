import { showTasks } from "./showTasks.js";

export let tasksArray = JSON.parse(localStorage.getItem("tasks")) || []

export function addTask(){
    const form = event.target.parentNode
    for(let input of form){
        if(input.nodeName.toLowerCase() == "textarea"){
            addObjectToArray(input.value, form)
        }   
    }
}

function addObjectToArray(titleTask, form){
    let taskObject = {
        id: Date.now(),
        type: form.id, 
        title: titleTask,
        status: false,
        description: "",
        createDate: new Date().toDateString(),
        deadline: null,
    }
    tasksArray.push(taskObject);
    localStorage.setItem("tasks", JSON.stringify(tasksArray))
    showTasks()
}
