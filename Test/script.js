window.addEventListener("load", function() {
    const todoList = document.getElementById("todoList");
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      todoList.innerHTML = storedTodos;
    }
  
    const addTodoButton = document.getElementById("addTodo");
    addTodoButton.addEventListener("click", addTodo);
  
    const checkboxes = document.querySelectorAll("li input[type=checkbox]");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("click", toggleTodo);
    });
  
    const deleteButtons = document.querySelectorAll("li button.deleteTodo");
    deleteButtons.forEach(function(button) {
      button.addEventListener("click", deleteTodo);
    });
  });
  
  function addTodo() {
    const input = document.getElementById("inputTodo");
    const todoList = document.getElementById("todoList");
    
    // create new list item
    const newTodo = document.createElement("li");
    const newTodoText = document.createTextNode(input.value);
    newTodo.appendChild(newTodoText);
  
    // add checkbox to new list item
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newTodo.insertBefore(checkbox, newTodo.firstChild);
  
    // add delete button to new list item
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteTodo");
    deleteButton.innerHTML = "Delete";
    newTodo.appendChild(deleteButton);
  
    // add new item to list and local storage
    todoList.appendChild(newTodo);
    localStorage.setItem("todos", todoList.innerHTML);
    
    // clear input field
    input.value = "";
  
    // add event listener to new checkbox
    checkbox.addEventListener("click", toggleTodo);
  
    // add event listener to new delete button
    deleteButton.addEventListener("click", deleteTodo);
  }
  
  function toggleTodo() {
    const todo = this.parentNode;
    if (this.checked) {
      todo.classList.add("completed");
    } else {
      todo.classList.remove("completed");
    }
    localStorage.setItem("todos", todoList.innerHTML);
  }
  
  function deleteTodo() {
    const todo = this.parentNode;
    todoList.removeChild(todo);
    localStorage.setItem("todos", todoList.innerHTML);
  }
  