const checkbox = document.getElementById("checkbox");

const title = document.querySelector("[data-testid='test-todo-title']");

const status = document.querySelector("[data-testid='test-todo-status']");

checkbox.addEventListener("change", function name(params) {
    if (checkbox.checked) {
        title.style.textDecoration = "line-through";
        status.textContent = "Done";
    } else {
        title.style.textDecoration = "none";
        status.textContent = "Pending";
    }
});

const dueDateElement = document.getElementById("dueDate");

const timeRemainingElement = document.getElementById("timeRemaining");

// set fixed date
const dueDate = new Date("2026-04-30T18:00:00");

// show due date
dueDateElement.textContent = "Due " + dueDate.toDateString();

// calculate time remaining

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
    } else if (days < 1) {
        timeRemainingElement.textContent = "Due in " + hours + " hours";
    } else {
        timeRemainingElement.textContent = "Due in " + days + " days";
    }   
}

// Single run
updateTime();

// Update every 60 seconds
setInterval(updateTime, 60000);

document.querySelector("[data-testid='test-todo-edit-button']")
  .addEventListener("click", function () {
    console.log("Edit clicked");
  });

document.querySelector("[data-testid='test-todo-delete-button']")
  .addEventListener("click", function () {
    alert("Delete clicked");
  });
