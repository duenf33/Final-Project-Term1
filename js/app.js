/*************
 * SELECTORS *
 *************/
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

/*************
 * FUNCTIONS *
 *************/
const addTodo = (todo) => {
    todos.push(todo);
}

const printTodo = (todo) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todo.text;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);

    if (todo.complete) {
        newTodo.classList.add('complete')
    }

    newTodo.addEventListener('click', (event) => {
        event.target.classList.toggle('complete')
        const id = event.target.id;
        todos[id].complete = !todos[id].complete;
    })
}

const printTodos = function() {
    for (const todo of todos) {
    printTodo(todo);
    }
}

printTodos();

const deleteCheck = (event) => {
    const item = event.target;
    
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

const clearTodos = function() {
    const todos = document.querySelectorAll('.todo-item');
    for (const todo of todos) {
        todo.remove();
    }
}

/*******************
 * EVENT LISTENERS *
 *******************/
todoButton.addEventListener('click', (event) => {
    event.preventDefault();
    // const inputBox = document.querySelector('.todo-input');
    const todo = {
        text: todoInput.value,
        priority: 2,
        complete: false,
        id: todos.length,
    }

    addTodo(todo);
    printTodo(todo);
    todoInput.value = '';
})

todoList.addEventListener('click', deleteCheck);