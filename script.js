class Task {
  constructor(taskText) {
    this.taskText = taskText;
    this.createTaskElement();
  }
  //create method that makes an HTML element for the task

  createTaskElement() {
    this.taskElement = document.createElement('li');
    //variable for created li element
    this.taskElement.textContent = this.taskText;
    // sets the li's text to the input text


    this.taskElement.addEventListener('click', () => {
      this.taskElement.classList.toggle('complete');
    });
    //add onclick event listener to toggle the 'complete'class for our list items

    this.taskElement.addEventListener('dblclick', () => this.taskElement.remove());
  }
}

class ToDoList {
  constructor() {
    this.taskInput = document.getElementById('taskInput');
    this.addTaskButton = document.getElementById('addTask');
    this.taskList = document.getElementById('taskList');
    this.addEventListeners();
  }

  addTask() {
    let taskText = this.taskInput.value.trim();
    if (taskText !== '') {
      let newTask = new Task(taskText);
      this.taskList.appendChild(newTask.taskElement);
      this.taskInput.value = '';
    }
  }

  addEventListeners(){
    this.addTaskButton.addEventListener('click', () => this.addTask());
    // creates task object when clicking on add task button

    this.taskInput.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        this.addTask();
      }
    });
  }
}

let toDoList = new ToDoList();



