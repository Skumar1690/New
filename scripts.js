document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const tasks = document.getElementById('tasks');
    const li = document.createElement('li');
    li.className = 'task';
    li.appendChild(document.createTextNode(task));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.onclick = function() {
        tasks.removeChild(li);
    };

    li.appendChild(deleteBtn);
    tasks.appendChild(li);
}
