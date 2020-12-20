/*************
 * SELECTORS *
 *************/
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

/*******************
 * EVENT LISTENERS *
 *******************/
todoButton.addEventListener('click', addTodo);

/*************
 * FUNCTIONS *
 *************/
const addTodo = (event) => {
    event.preventDefault();
    console.log(todoInput.value);
    const li = document.createElement('li');
    li.innerText = todoInput.value;
    todoList.appendChild(li);
}