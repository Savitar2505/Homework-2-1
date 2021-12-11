const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

let list = document.getElementById('todo-list')
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li')
        li.className='task'
        li.appendChild(document.createTextNode(tasks[i]))
        list.appendChild(li)
    }

console.log(list)
