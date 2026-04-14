let dueDate = new Date();

const checkbox = document.getElementById("checkbox");
const title = document.getElementById("title");
const description = document.getElementById("description");
const priority = document.getElementById("priority");
const statusText = document.getElementById("status");

const dueDateElement = document.getElementById("dueDate");
const timeRemainingElement = document.getElementById("timeRemaining");

// ADD TASK
function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  const priorityInput = document.getElementById("priorityInput").value;
  const dateInput = document.getElementById("dateInput").value;

  if (!taskInput || !dateInput) {
    alert("Enter task and date");
    return;
  }

  title.textContent = taskInput;
  description.textContent = "User task";
  priority.textContent = priorityInput;

  // Change badge color
  priority.className = "badge " + priorityInput.toLowerCase();

  dueDate = new Date(dateInput);
  dueDateElement.textContent = "Due " + dueDate.toDateString();

  updateTime();
}

// TIME LOGIC
function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (diff < 0) {
    timeRemainingElement.textContent = "Overdue";
  } else if (hours < 1) {
    timeRemainingElement.textContent = "Due now!";
  } else if (days === 0) {
    timeRemainingElement.textContent = "Due today";
  } else if (days === 1) {
    timeRemainingElement.textContent = "Due tomorrow";
  } else {
    timeRemainingElement.textContent = "Due in " + days + " days";
  }
}

setInterval(updateTime, 60000);

// CHECKBOX
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    title.classList.add("done");
    statusText.textContent = "Done";
  } else {
    title.classList.remove("done");
    statusText.textContent = "Pending";
  }
});

// BUTTONS
document.querySelector("[data-testid='test-todo-edit-button']")
  .addEventListener("click", () => console.log("Edit clicked"));

document.querySelector("[data-testid='test-todo-delete-button']")
  .addEventListener("click", () => alert("Delete clicked"));


  
