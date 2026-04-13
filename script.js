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

const timeRemainingElement = document.getElementById
