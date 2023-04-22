// Initialize an empty array to store the todos
const todos = [];

// Get references to the form and todo list elements
const form = document.querySelector('form');
const todoList = document.querySelector('#todoList');

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent page from refreshing
  const newTodoInput = document.querySelector('#newTodo');
  const newTodo = newTodoInput.value.trim(); // Remove leading/trailing white space
  if (newTodo) { // Only add non-empty todos
    todos.push(newTodo); // Add the new todo to the array
    newTodoInput.value = ''; // Clear the input field
    renderTodoList(); // Update the todo list on the page
  }
});

// Render the todo list on the page
function renderTodoList() {
  // Use the map method to create an array of list items from the todos array
  const todoListItems = todos.map(todo => `<li>${todo}</li>`);
  // Set the innerHTML of the todo list element to the list items
  todoList.innerHTML = todoListItems.join('');
}
