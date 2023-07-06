const todoInput = document.getElementById('Input');
const todoList = document.getElementById('List');
const taskCount = document.getElementById('Count');
let todos = [];
function addTodo() {
  const newTodo = todoInput.value.trim();
  if (newTodo !== '') {
    todos.push({
      task: newTodo,
      completed: false
    });
    todoInput.value = '';
    updateTodoList();
  }
}
function updateTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      toggleComplete(index);
    });
    const span = document.createElement('span');
    span.textContent = todo.task;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodo(index);
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    if (todo.completed) {
      li.classList.add('completed');
    }
    todoList.appendChild(li);
  });
  updateTaskCount();
}
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  updateTodoList();
}
function deleteTodo(index) {
  todos.splice(index, 1);
  updateTodoList();
}
function updateTaskCount() {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const remainingTasks = totalTasks - completedTasks;
  taskCount.textContent = `TOTAL TASKS: ${totalTasks} | COMPLETED: ${completedTasks} | REMAINING: ${remainingTasks}`;
}
updateTodoList();