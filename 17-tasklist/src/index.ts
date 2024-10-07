let listElement = document.querySelector("#listTasks") as HTMLUListElement
let inputAddElement = document.querySelector("#inputAddTask") as HTMLInputElement
let inputSearchElement = document.querySelector("#inputSearchTask") as HTMLInputElement

let tasks: string[] = localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")!) : []

const handleAdd = () => {
	const task: string = inputAddElement.value
	if (task.trim().length === 0) {
		alert("Digite alguma tarefa")
		return
	}
	tasks.push(task)
	listElement.innerHTML = tasks.map((task) => `<li>${task} <a href="#" onclick="handleDelete('${task}')">Deletar</a></li>`).join("")
	saveData()

	inputAddElement.value = ""
}

const handleSearch = () => {
	console.log("handleSearch")
	const taskSearch: string = inputSearchElement.value
	const filteredTasks = tasks.filter((task) => task.includes(taskSearch))
	listElement.innerHTML = filteredTasks.map((task) => `<li>${task} <a href="#"  onclick="handleDelete('${task}')">Deletar</a></li>`).join("")
}

const handleDelete = (task: string) => {
	console.log("handleDelete", task)
	tasks = tasks.filter((t) => t !== task)
	listElement.innerHTML = tasks.map((task) => `<li>${task} <a href="#" onclick="handleDelete('${task}')">Deletar</a></li>`).join("")
	saveData()
}

const saveData = () => {
	localStorage.setItem("tasks", JSON.stringify(tasks))
}

const loadData = () => {
	tasks = localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")!) : []
	listElement.innerHTML = tasks.map((task) => `<li>${task} <a href="#"  onclick="handleDelete('${task}')">Deletar</a></li>`).join("")
}

loadData()
