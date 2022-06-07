var push = document.querySelector('#push');
var newInput = document.querySelector('#newtask input');
var tasks = document.querySelector('#tasks');
push.onclick = function () {
    if (newInput.value.length == 0) {
        alert("No Values Entered ! Please Enter")
    }
    else {
        innerHTML = '';
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newInput.value}
                </span>
                <button class="delete">
                    <span>Delete</span>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}
