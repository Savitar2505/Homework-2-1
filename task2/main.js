let elements = document.getElementsByTagName('div')

for(let i=0;i<elements.length;i++) {
    elements[i].style.color='green'
    elements[elements.length-i-1].style.color='red'
}