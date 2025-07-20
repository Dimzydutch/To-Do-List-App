// Responsive To-Do List App JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const todoInput = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  // Add new task
  addBtn.addEventListener('click', addTask);
  todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
  });

  function addTask() {
    const task = todoInput.value.trim();
    if (!task) return;
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span>${task}</span>
      <div class="todo-actions">
        <button class="complete-btn" title="Mark as completed">✔️</button>
        <button class="delete-btn" title="Delete">🗑️</button>
      </div>
    `;
    todoList.appendChild(li);
    todoInput.value = '';
    todoInput.focus();
    attachItemEvents(li);
  }

  function attachItemEvents(li) {
    li.querySelector('.complete-btn').addEventListener('click', function() {
      li.classList.toggle('completed');
    });
    li.querySelector('.delete-btn').addEventListener('click', function() {
      li.remove();
    });
  }
});
