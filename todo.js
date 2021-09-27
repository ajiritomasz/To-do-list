const addtodo = document.getElementById('addTodo');
const todocontainer = document.getElementById('todocontainer');
const inputfield = document.getElementById('inputField');

addtodo.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})