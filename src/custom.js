const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemsList = document.querySelector(".todo-items");

let todos = [];

window.onload = () => {
    getFromLocalStorage()
    refreshLayout(todos);
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo(todoInput.value);
});

function addTodo(item) {
    if (item !== '') {
        const todo = {
            id: Math.random().toString(),
            name: item,
            completed: false
        };
        todos.push(todo);
        addToLocalStorage(todos);
        todoInput.value = '';
    }
}

// console.log(todos)

function refreshLayout(todos) {
    todoItemsList.innerHTML = '';
    todos.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        li.innerHTML = ` ${item.name}
      <button class="delete-button">Delete</button>
    `;
        todoItemsList.append(li);
    })
}

function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    refreshLayout(todos);
}

function getFromLocalStorage() {
    let localTodos = localStorage.getItem('todos');
    console.log(JSON.parse(localTodos));
    if (localTodos) {
        todos = JSON.parse(localTodos);
        refreshLayout(todos);
    }
}

function toggle(id) {
    todos.forEach(function (item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todos);
}

function deleteTodo(id) {
    todos = todos.filter((item) =>
        item.id != id
    );
    // update the localStorage
    addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});

