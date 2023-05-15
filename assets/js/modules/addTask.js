let tasksArray = []
let taskObject = {}


export function addTask(){
    const form = event.target.parentNode
    for(let input of form){
        if(input.nodeName.toLowerCase() == "textarea"){
            const titleTask = input.value
            
             taskObject = {
    title: titleTask,
    status: false,
    description: "",
    createDate: "",
    deadline:"",
}
        }   
         
    }


tasksArray.push(taskObject);
console.log(tasksArray)
// function completerObject () {
let date1 = Date()
let date2 = Date.now 

document.getElementById

}

console.log(taskObject)

