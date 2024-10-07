"use strict";
let listElement = document.querySelector("#listTasks");
let inputAddElement = document.querySelector("#inputAddTask");
let inputSearchElement = document.querySelector("#inputSearchTask");
let tasks = localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")) : [];
const handleAdd = () => {
    const task = inputAddElement.value;
    if (task.trim().length === 0) {
        alert("Digite alguma tarefa");
        return;
    }
    tasks.push(task);
    listElement.innerHTML = tasks.map((task) => `<li>${task} <a href="#" onclick="handleDelete('${task}')">Deletar</a></li>`).join("");
    saveData();
    inputAddElement.value = "";
};
const handleSearch = () => {
    console.log("handleSearch");
    const taskSearch = inputSearchElement.value;
    const filteredTasks = tasks.filter((task) => task.includes(taskSearch));
    listElement.innerHTML = filteredTasks.map((task) => `<li>${task} <a href="#"  onclick="handleDelete('${task}')">Deletar</a></li>`).join("");
};
const handleDelete = (task) => {
    console.log("handleDelete", task);
    tasks = tasks.filter((t) => t !== task);
    listElement.innerHTML = tasks.map((task) => `<li>${task} <a href="#" onclick="handleDelete('${task}')">Deletar</a></li>`).join("");
    saveData();
};
const saveData = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
const loadData = () => {
    tasks = localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")) : [];
    listElement.innerHTML = tasks.map((task) => `<li>${task} <a href="#"  onclick="handleDelete('${task}')">Deletar</a></li>`).join("");
};
loadData();
