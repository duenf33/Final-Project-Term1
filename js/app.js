/*************
 * SELECTORS *
 *************/
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

/*************
 * FUNCTIONS *
 *************/
const addTodo = (todo) => {
    todos.push(todo);
}

const printTodo = (todo) => {
    const newTodo = document.createElement('li');
    newTodo.innerText = todo.text;
    newTodo.classList.add('todo-item');
    todoList.appendChild(newTodo);

    newTodo.id = todo.id;

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