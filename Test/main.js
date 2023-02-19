// JavaScript
document.querySelector('#push').onclick = function() {
  
    // Get input value
    let inputValue = document.querySelector('#newtask input').value;

    // Check if input is empty
    if (inputValue.length == 0) {
        alert("Please enter a task name!");
        return;
    }

    // Create a new list item
    let listItem = document.createElement('li');
    
    // Create a span element to hold the task name
    let span = document.createElement('span');
    span.innerText = inputValue;

    // Create a button element to delete the task
    let button = document.createElement('button');
    button.innerText = "Delete";

    // Append span and button to list item
    listItem.appendChild(span);
    listItem.appendChild(button);

     // Append list item to list
     document.querySelector('#list').appendChild(listItem);

     // Clear input value
     document.querySelector('#newtask input').value = "";

     // Add event listener to mark task as done when clicked on span
     span.onclick = function() {
         listItem.classList.toggle('done');
     }

     // Add event listener to delete task when clicked on button
     button.onclick = function() {
         listItem.remove();
     }
}