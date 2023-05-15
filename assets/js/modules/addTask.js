let tasksArray = []

export function addTask(){
    const form = event.target.parentNode
    for(let input of form){
        if(input.nodeName.toLowerCase() == "textarea"){
            tasksArray.push(input.value)
            console.log(tasksArray)
        }
    }
}