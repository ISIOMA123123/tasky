const checkbox = document.getElementById("checkbox");
const title = document.getElementById("title");
const statusText = document.getElementById("status");

const dueDateElement = document.getElementById("dueDate");
const timeRemainingElement = document.getElementById("timeRemaining");

// Fixed due date (you can change this)
const dueDate = new Date("2026-04-20T18:00:00");

// Show due date
dueDateElement.textContent = "Due " + dueDate.toDateString();
dueDateElement.setAttribute("datetime", dueDate.toISOString());

// Time calculation
function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (diff < 0) {
    timeRemainingElement.textContent = "Overdue";
  } else if (minutes < 1) {
    timeRemainingElement.textContent = "Due now!";
  } else if (hours < 1) {
    timeRemainingElement.textContent = "Due in " + minutes + " minutes";
  } else if (days === 0) {
    timeRemainingElement.textContent = "Due today";
  } else if (days === 1) {
    timeRemainingElement.textContent = "Due tomorrow";
  } else {
    timeRemainingElement.textContent = "Due in " + days + " days";
  }
}

// Run immediately
updateTime();

// Update every 60 seconds
setInterval(updateTime, 60000);

// Checkbox behavior
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    title.classList.add("done");
    statusText.textContent = "Done";
  } else {
    title.classList.remove("done");
    statusText.textContent = "Pending";
  }
});

// Buttons
document.querySelector("[data-testid='test-todo-edit-button']")
  .addEventListener("click", function () {
    console.log("Edit clicked");
  });

document.querySelector("[data-testid='test-todo-delete-button']")
  .addEventListener("click", function () {
    alert("Delete clicked");
  });

  