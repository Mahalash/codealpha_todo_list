function addTask() {
    var input = document.getElementById('taskInput');
    var dateInput = document.getElementById('taskDate');
    var timeInput = document.getElementById('taskTime');
    var newTask = input.value;
    var taskDate = dateInput.value;
    var taskTime = timeInput.value;

    if (newTask !== "" && taskDate) {
        var li = document.createElement('li');

        var taskSpan = document.createElement('span');
        taskSpan.textContent = newTask;
        taskSpan.className = 'task-text';

        var dateSpan = document.createElement('span');
        dateSpan.textContent = `Due on ${taskDate}`;
        dateSpan.className = 'task-date';

        var timeSpan = document.createElement('span');
        timeSpan.textContent = ` at ${taskTime || 'any time'}`;
        timeSpan.className = 'task-time';

        li.appendChild(taskSpan);
        li.appendChild(dateSpan);
        li.appendChild(timeSpan);

        document.getElementById('taskList').appendChild(li);
        input.value = ""; // Clear the input after adding
        dateInput.value = ""; // Clear the date input
        timeInput.value = ""; // Clear the time input
    } else {
        alert("Please enter a task and a date!");
    }
}

