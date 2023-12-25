// storage.js

// Function to save tasks to local storage
function saveTasksToLocalStorage(tasksArray) {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }
  
  // Function to load tasks from local storage
  function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }
  