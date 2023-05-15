import { tasksArray } from "./addTask.js";

let tasksContainers = document.getElementsByClassName("section--content")

export function showTasks(){

    for(let container of tasksContainers){
        container.innerHTML=""
    }


    tasksArray.forEach(element => {
        let taskForm = document.getElementById(element.type) 
        let taskSplitId = taskForm.id.split("__")
        let taskType = taskSplitId[0]


        for(let container of tasksContainers){
            if(container.dataset.type == taskType){
                container.innerHTML += `
                    <article id="task-${element.id}">
                        <p>Tâche n°${element.id}</p>
                        <h3>${element.title}</h3>
                        <p>${element.description}</p>
                        <p>Date de création : ${element.createDate}</p>
                    </aticle>
                `
            }
        }
        
    });
}