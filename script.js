function addTask() {
    var taskInput = document.getElementById('taskInput');
    var descriptionInput = document.getElementById('descriptionInput');
    var dueDateInput = document.getElementById('dueDate');
    var priorityInput = document.getElementById('priorityInput');
  
    var todoList = document.getElementById('todoList');
    var selectedDate = new Date(dueDateInput.value);
    var today = new Date();
  
    if (taskInput.value !== '') {
      var li = document.createElement('tr');
      var taskCell = document.createElement('td');
      taskCell.textContent = taskInput.value;
      li.appendChild(taskCell);
  
      var descriptionCell = document.createElement('td');
      descriptionCell.textContent = descriptionInput.value;
      li.appendChild(descriptionCell);
  
      var dueDateCell = document.createElement('td');
      dueDateCell.textContent = dueDateInput.value;
      li.appendChild(dueDateCell);
  
      var priorityCell = document.createElement('td');
      priorityCell.textContent = priorityInput.value;
      li.appendChild(priorityCell);
  
      var actionCell = document.createElement('td');
      var deleteBtn = document.createElement('button');
      deleteBtn.appendChild(document.createTextNode('❌'));
      deleteBtn.onclick = function() {
        li.parentNode.removeChild(li);
        saveTasksToLocalStorage(); // Save tasks after deletion
      };
      actionCell.appendChild(deleteBtn);
  
      var completeBtn = document.createElement('button');
      completeBtn.appendChild(document.createTextNode('✓'));
      completeBtn.onclick = function() {
        li.parentNode.removeChild(li);
        var completedList = document.getElementById('completedList');
        completedList.appendChild(li);
        saveTasksToLocalStorage(); // Save tasks after completion
      };
      actionCell.appendChild(completeBtn);
  
      if (selectedDate < today) {
        li.classList.add('overdue-task');
        li.appendChild(actionCell);
        document.getElementById('overdueList').appendChild(li);
      } else {
        li.appendChild(actionCell);
        todoList.appendChild(li);
      }
  
      taskInput.value = '';
      descriptionInput.value = '';
      dueDateInput.value = '';
      priorityInput.value = '';
  
      saveTasksToLocalStorage(); // Save tasks after adding a new task
    } else {
      alert('Please enter a task!');
    }
  }
  