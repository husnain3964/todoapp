var list = document.getElementById("list")

//input function  


function addTodo(){
var input= document.getElementById("todo-item");

//create li tag

var li = document.createElement('li')
var liText = document.createTextNode(input.value)



//create delete button

var delBtn = document.createElement("button")

var deltText = document.createTextNode("delete")
delBtn.appendChild(deltText)
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onClick","deleteItem(this)")

// create edit button

var editBtn = document.createElement("button")
var editText = document.createTextNode("edit")
editBtn.setAttribute("class","btn")
editBtn.setAttribute("onClick","editItem(this)")
editBtn.appendChild(editText)

li.appendChild(liText)
li.appendChild(editBtn)
list.appendChild(li)

li.appendChild(delBtn)

input.value= ""

console.log(li)
}
function  deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val= e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editvalue
       
}

function deleteAll(){
    list.innerHTML="" 
}
