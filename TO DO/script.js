const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const popup = document.getElementById('popup');
const reminderText = document.getElementById('reminderText');
const deleteTaskButton = document.getElementById('deleteTask');
const completeTaskButton = document.getElementById('completeTask');

let tasks = [];

addTaskButton.addEventListener('click', (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', () => {
      reminderText.textContent = task;
      popup.style.display = 'flex';
    });
    taskList.appendChild(li);
  });
}

deleteTaskButton.addEventListener('click', () => {
  const index = tasks.indexOf(reminderText.textContent);
  if (index !== -1) {
    tasks.splice(index, 1);
    popup.style.display = 'none';
    renderTasks();
  }
});

completeTaskButton.addEventListener('click', () => {
  const index = tasks.indexOf(reminderText.textContent);
  if (index !== -1) {
    tasks.splice(index, 1);
    popup.style.display = 'none';
    renderTasks();
  }
});
