export let tasksArray = JSON.parse(localStorage.getItem("tasks")) || []

export function addTask(){
    const form = event.target.parentNode
    for(let input of form){
        if(input.nodeName.toLowerCase() == "textarea"){
            addObjectToArray(input.value)
        }   
    }
}

function addObjectToArray(titleTask){
    let taskObject = {
        title: titleTask,
        status: false,
        description: "",
        createDate: new Date(),
        deadline: null,
    }
    tasksArray.push(taskObject);
    localStorage.setItem("tasks", JSON.stringify(tasksArray))
}
