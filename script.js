// Get references to the input, button, todo list, and task count elements
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count-number");

// Add an event listener to the add button to add a new todo item when clicked
addButton.addEventListener("click", () => {
  // Get the text entered in the input field
  const todoText = input.value;
  if(todoText==="")
  {
    alert("Please Enter Your Task");
    return;
  }
  // Clear the input field
  input.value = "";

  // Create a new todo item element
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  // Create a checkbox for the todo item
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    // When the checkbox is checked, add the "completed" class to the todo text
    // When the checkbox is unchecked, remove the "completed" class
    todoTextElement.classList.toggle("completed", checkbox.checked);
  });

  // Create a delete button for the todo item
  const deleteButton = document.createElement("button");
 

	deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      // When the delete button is clicked, remove the todo item from the list
      todoList.removeChild(todoItem);

      // Decrement the task count
      taskCount.innerHTML = parseInt(taskCount.innerHTML, 10) - 1;
    });

    // Create a span element to hold the todo text
    const todoTextElement = document.createElement("span");
    todoTextElement.classList.add("todo-text");
    todoTextElement.innerHTML = todoText;

    // Add the checkbox, delete button, and todo text to the todo item element
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(deleteButton);

    // Add the todo item to the todo list
    todoList.appendChild(todoItem);

    // Increment the task count
    taskCount.innerHTML = parseInt(taskCount.innerHTML, 10) + 1;
  });

