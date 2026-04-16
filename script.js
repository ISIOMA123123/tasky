let dueDate = new Date();


// where things in the form will be displayed
const checkbox = document.getElementById("checkbox");
const title = document.getElementById("title");
const description = document.getElementById("description");
const priority = document.getElementById("priority");
const statusText = document.getElementById("status");
const formInput = document.getElementById("formInput");

const dueDateElement = document.getElementById("dueDate");
const timeRemainingElement = document.getElementById("timeRemaining");

//Forms

//Cancel Task
function cancelTask() {
  formInput.style.display = "none";
}


// ADD TASK 
function addTask() {

  const descriptionInput = document.getElementById("descriptionInput").value;
  const taskInput = document.getElementById("taskInput").value;
  const priorityInput = document.getElementById("priorityInput").value;
  const dateInput = document.getElementById("dateInput").value;

  if (!taskInput || !dateInput) {
    alert("Enter task and date");
    return;
  }

  title.textContent = taskInput;
  priority.textContent = priorityInput;
  description.textContent = descriptionInput;

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


  
