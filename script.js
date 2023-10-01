function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskText = taskInput.value.trim();
  taskInput.value = "";

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  var tasksContainer = document.getElementById("tasks-container");

  var taskElement = document.createElement("div");
  taskElement.className = "task";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskElement.style.textDecoration = "line-through";
    } else {
      taskElement.style.textDecoration = "none";
    }
  });

  var taskLabel = document.createElement("label");
  taskLabel.textContent = taskText;

  taskElement.appendChild(checkbox);
  taskElement.appendChild(taskLabel);
  tasksContainer.appendChild(taskElement);
}
