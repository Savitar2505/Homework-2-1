let remove =document.getElementById('remove')
remove.remove()

let div = document.createElement('div')
div.setAttribute('class', 'item')

let span = document.createElement('span')
span.setAttribute('class', 'qty')

let divContent = document.createTextNode('Canned Fish ')
let spanContent = document.createTextNode('x 4')

div.appendChild(divContent)
span.appendChild(spanContent)
div.appendChild(span)

let replace = document.getElementById('replace')
let parent = replace.parentNode

parent.replaceChild(div, replace)