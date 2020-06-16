//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)




// Functions


function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
     
    //todo DIV
    const todoDiv =document.createElement("div")   ;
     todoDiv.classList.add("todo");

     //create LI
     const newTodo= document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value="";
}


function deleteCheck(e) {
    const item = e.target; 
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;        
        todo.remove();
    }
}