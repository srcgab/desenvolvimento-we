const titleList = document.getElementById("listTitle");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const noTasksImage = document.getElementById("noTasksImage");
const completedTasks = document.getElementById("completedTasks");
const completedTasksList = document.getElementById("completedTasksList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let nextTaskId = 0;

function createCheckbox(taskId) {
  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("taskCheckbox");
  check.id = `task-${taskId}`;
  return check;
}

function createLabel(taskId, text) {
  const label = document.createElement("label");
  label.htmlFor = `task-${taskId}`;
  label.textContent = text;
  label.addEventListener("dblclick", () => {
    label.contentEditable = true;
    label.focus();
  });
  label.addEventListener("blur", () => {
    label.contentEditable = false;
    if (label.textContent.trim() === "") {
      label.textContent = text;
    }
  });
  return label;
}

function createDeleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "x";
  return deleteBtn;
}

function createDateInfo() {
  const dateInfo = document.createElement("p");
  dateInfo.classList.add("dateInfo");
  dateInfo.textContent = `Criado em: ${new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "numeric", year: "numeric" })}`;
  return dateInfo;
}

function toggleTaskCompletion(taskItem, checkbox) {
  if (checkbox.checked) {
    taskItem.classList.add("completed");
    completedTasksList.appendChild(taskItem);
  } else {
    taskItem.classList.remove("completed");
    taskList.appendChild(taskItem);
  }
  updateCompletedSectionVisibility();
}

function updateNoTasksImageVisibility() {
  if (taskList.children.length === 0 && completedTasksList.children.length === 0)
    noTasksImage.style.display = "inline";
}

function deleteTask(taskItem) {
  taskItem.remove();
  updateCompletedSectionVisibility();
  updateNoTasksImageVisibility();
}

function updateCompletedSectionVisibility() {
  const hasCompletedTasks = completedTasksList.children.length > 0;
  completedTasks.style.display = hasCompletedTasks ? "block" : "none";
  clearCompletedBtn.style.display = hasCompletedTasks ? "block" : "none";
}

function clearCompletedTasks() {
  while (completedTasksList.firstChild) {
    completedTasksList.removeChild(completedTasksList.firstChild);
  }
  updateCompletedSectionVisibility();
  if (taskList.children.length === 0) {
    noTasksImage.style.display = "block";
  }
}

function createTaskElement(taskText) {
  const newTask = document.createElement("li");
  newTask.classList.add("listItem");

  const taskId = nextTaskId++;
  const check = createCheckbox(taskId);
  const label = createLabel(taskId, taskText);
  const deleteBtn = createDeleteButton();
  const dateInfo = createDateInfo();

  newTask.appendChild(check);
  newTask.appendChild(label);
  newTask.appendChild(deleteBtn);
  newTask.appendChild(dateInfo);

  check.addEventListener("change", () => toggleTaskCompletion(newTask, check));
  deleteBtn.addEventListener("click", () => deleteTask(newTask));
  
  return newTask;
}

addTaskBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    noTasksImage.style.display = "none";
    taskInput.value = "";
    taskInput.focus();
  }
});

clearCompletedBtn.addEventListener("click", clearCompletedTasks);