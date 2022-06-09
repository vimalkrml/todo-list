var push = document.querySelector('#push');
var newInput = document.querySelector('#newtask input');
var tasks = document.querySelector('#tasks');

newtask.onsubmit = function (e) {
    e.preventDefault();
    addTask(newInput.value);
    newInput.value = '';
}

function addTask(value) {
    if (newInput.value.length == 0) {
        alert("No Values Entered ! Please Enter")
    }
    else {
        innerHTML = '';
        const dataId = Math.random().toString();
        tasks.innerHTML += `
            <div class="task" data-id="${dataId}">
                <span id="taskname">
                    ${newInput.value}
                </span>
                <button onclick="deleteTask(${dataId})" class="delete">
                    <span>Delete</span>
                </button>
            </div>
        `;
    }
}

function deleteTask(id) {
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].getAttribute('data-id') === id.toString()) {
            console.log('delete', tasks[i].getAttribute('data-id'))
            tasks[i].remove();
        }
    }
    // tasks.filter((task) => task.attributes['data-id'] !== id);

    // var current_tasks = document.querySelectorAll(".delete");
    // for (var i = 0; i < current_tasks.length; i++) {
    //     current_tasks[i].onclick = function () {
    //         this.parentNode.remove();
    //     }
    // }
}