var mainAddTask = document.querySelector(".main_add_task")
var mainAddTaskBtn = document.querySelector("#main_add_task_btn")
var mainDoneTaskBtn = document.querySelector("#main_done_task_btn")
var mainTaskList = document.querySelector(".main_task_list")


var taskList = [
    "разобрать зимнюю одежду", 
    "вынести вторсырьё", 
    "приготовить лазанью", 
    "проверить наличие бытовой химии"
]

// function createElementFromHTML(htmlString) {
//     var div = document.createElement('div');
//     div.innerHTML = htmlString.trim();
  
//     // Change this to div.childNodes to support multiple top-level nodes.
//     return div.firstChild;
// }
// taskList.forEach((v,i) => {createElementFromHTML(`<li class="main_task-list_item"><label><input class="main_check" type="checkbox" name="item_${i}" id="">${v}</label></li>`)})

function renderTaskList() {
    mainTaskList.innerHTML = ""

    for (let index = 0; index < taskList.length; index++) {
        const taskText = taskList[index];
    
        // createElementFromHTML('<li class="main_task-list_item"><label><input class="main_check" type="checkbox" name="" id="">разобрать зимнюю одежду</label></li>')
        var input = document.createElement('input');
        input.classList.add("main_check")
        input.type="checkbox"
        input.name=("item_" + index) //`item_${index}`
    
        var label = document.createElement('label');
        label.append(input)
        label.append(taskText)
        
        var li = document.createElement('li');
        li.classList.add("main_task_list_item")
        li.append(label)
        
        mainTaskList.append(li)
    }
}
renderTaskList()

function mainAddTaskBtnClickHandler(event) {
    const value = mainAddTask.value
    taskList.push(value)
    mainAddTask.value = ''
    renderTaskList()
}
mainAddTaskBtn.addEventListener("click", mainAddTaskBtnClickHandler)

// анонимная функция
mainDoneTaskBtn.addEventListener("click", function(event) {
    const array = mainTaskList.querySelectorAll("input")
    const deletedIndex = []
    for (let i = 0; i < array.length; i++) {
        const child = array[i];
        const childName = child.name
        const index = parseInt(childName.substr(5)) //+childName.substr(5)
        
        if (child.checked) {
            if (index > -1 && index < taskList.length) {
                deletedIndex.push(index) // 2nd parameter means remove one item only
            }
        }
        
    }

    const newTaskList = []
    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i]
          if (!deletedIndex.includes(i)) {
               newTaskList.push(task)
          }

    }
    taskList = newTaskList
    renderTaskList()
})

// Блок important

var importantAddTask = document.querySelector("#important_add_task")
var importantAddTaskBtn = document.querySelector("#important_add_task_btn")
var importantDoneTaskBtn = document.querySelector("#important_done_task_btn")
var importantTaskList = document.querySelector("#important_task_list")

var taskList2 = [
"позвонить в салон",
"оплатить счета",
"ремонт розетки"
]

function renderTaskList2 () {
    importantTaskList.innerHTML = ""

    for (let index = 0; index < taskList2.length; index++) {
        const taskText = taskList2[index];
    
        var input = document.createElement('input');
        input.classList.add("main_check")
        input.type="checkbox"
        input.name=("item_" + index) 
    
        var label = document.createElement('label');
        label.append(input)
        label.append(taskText)
        
        var li = document.createElement('li');
        li.classList.add("important_task_list_item")
        li.append(label)
        
        importantTaskList.append(li)
    }
}
renderTaskList2()

function importantAddTaskBtnClickHandler(event) {
    const value = importantAddTask.value
    taskList2.push(value)
    importantAddTask.value = ''
    renderTaskList2()
}
importantAddTaskBtn.addEventListener("click", importantAddTaskBtnClickHandler)

importantDoneTaskBtn.addEventListener("click", function(event) {
    const array = importantTaskList.querySelectorAll("input")
    const deletedIndex = []
    for (let i = 0; i < array.length; i++) {
        const child = array[i];
        const childName = child.name
        const index = parseInt(childName.substr(5)) //+childName.substr(5)
        
        if (child.checked) {
            if (index > -1 && index < taskList2.length) {
                deletedIndex.push(index) // 2nd parameter means remove one item only
            }
        }
        
    }

    const newTaskList = []
    for (let i = 0; i < taskList2.length; i++) {
        const task = taskList2[i]
          if (!deletedIndex.includes(i)) {
               newTaskList.push(task)
          }

    }
    taskList2 = newTaskList
    renderTaskList2()
})

// Блок Shopping list

var shoppingAddTask = document.querySelector("#shopping_add_task")
var shoppingAddTaskBtn = document.querySelector("#shopping_add_task_btn")
var shoppingDoneTaskBtn = document.querySelector("#shopping_done_task_btn")
var shoppingTaskList = document.querySelector("#shopping_task_list")

var taskList3 = [
"молоко",
"хлеб",
"авокадо",
"помидоры",
"рис",
"сметана"
]

function renderTaskList3 () {
    shoppingTaskList.innerHTML = ""

    for (let index = 0; index < taskList3.length; index++) {
        const taskText = taskList3[index];
    
        var input = document.createElement('input');
        input.classList.add("main_check")
        input.type="checkbox"
        input.name=("item_" + index) 
    
        var label = document.createElement('label');
        label.append(input)
        label.append(taskText)
        
        var li = document.createElement('li');
        li.classList.add("shoping_task_list_item")
        li.append(label)
        
        shoppingTaskList.append(li)
    }
}
renderTaskList3()

function shoppingAddTaskBtnClickHandler(event) {
    const value = shoppingAddTask.value
    taskList3.push(value)
    shoppingAddTask.value = ''
    renderTaskList3()
}
shoppingAddTaskBtn.addEventListener("click", shoppingAddTaskBtnClickHandler)

shoppingDoneTaskBtn.addEventListener("click", function(event) {
    const array = shoppingTaskList.querySelectorAll("input")
    const deletedIndex = []
    for (let i = 0; i < array.length; i++) {
        const child = array[i];
        const childName = child.name
        const index = parseInt(childName.substr(5)) //+childName.substr(5)
        
        if (child.checked) {
            if (index > -1 && index < taskList3.length) {
                deletedIndex.push(index) // 2nd parameter means remove one item only
            }
        }
        
    }

    const newTaskList = []
    for (let i = 0; i < taskList3.length; i++) {
        const task = taskList3[i]
          if (!deletedIndex.includes(i)) {
               newTaskList.push(task)
          }

    }
    taskList3 = newTaskList
    renderTaskList3()
})
