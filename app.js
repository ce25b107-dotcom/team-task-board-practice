const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const statusInput = document.getElementById("status");
const filterInput = document.getElementById("filter");
const taskList = document.getElementById("taskList");
const formError = document.getElementById("formError");
const message = document.getElementById("message");

let tasks = [];

async function loadTasks() {
  const response = await fetch("/api/tasks");
  tasks = await response.json();
  renderTasks();
}

function renderTasks() {
  const filter = filterInput.value;
  const visibleTasks =
    filter === "All" ? tasks : tasks.filter(task => task.status === filter);

  taskList.innerHTML = "";

  if (visibleTasks.length === 0) {
    message.textContent = "No tasks to display.";
    return;
  }

  message.textContent = "";

  visibleTasks.forEach(task => {
    const card = document.createElement("article");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description || ""}</p>
      <strong>${task.status}</strong>
      <p>${task.createdAt || ""}</p>
      <div class="task-actions">
        <button data-action="edit" data-id="${task.id}">Edit</button>
        <button data-action="delete" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(card);
  });
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formError.textContent = "";

  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleInput.value,
      description: descriptionInput.value,
      status: statusInput.value
    })
  });

  const data = await response.json();

  if (!response.ok) {
    formError.textContent = data.error || "Could not create task.";
    return;
  }

  taskForm.reset();
  await loadTasks();
});

filterInput.addEventListener("change", renderTasks);

taskList.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = button.dataset.id;

  if (button.dataset.action === "delete") {
    if (!confirm("Delete this task?")) return;

    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    await loadTasks();
  }

  if (button.dataset.action === "edit") {
    alert("Edit functionality is not implemented yet.");
  }
});

loadTasks();
