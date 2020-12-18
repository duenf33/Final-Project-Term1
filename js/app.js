
const input = document.querySelector('.todo-input').value;
const button = document.querySelector('button')

// const printTodo = () => {
//     const li = document.createElement('li');
//     li.innerText = document.querySelector('.todo-input').value;
//     const ul = document.querySelector('.todo-list');
//     ul.appendChild(li);
// }

button.addEventListener('click', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = input;
    const ul = document.querySelector('.todo-list');
    ul.appendChild(li);
})