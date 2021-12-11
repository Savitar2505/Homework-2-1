let list = document.getElementById('tasks')
let todo
do {
    todo = prompt('Введите задание: ')
    if(todo ==='' || todo ===null) {
        break
    }
    let li = document.createElement('li')
    li.className = 'task'
    li.appendChild(document.createTextNode(todo))
    list.appendChild(li)
} while (true)