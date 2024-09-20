import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

import { TaskProps } from "../types"

interface TaskExtendedProps extends TaskProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTaskId: React.Dispatch<React.SetStateAction<number>>;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
}

export default function Task({ id, title, difficulty, setShowModal, setEditTaskId, tasks, setTasks }: TaskExtendedProps) {

  const difficultyName = ["Muito facil", "Facil", "Moderada", "Dificil", "Muito Dificil"][difficulty]

  const handleEdit = (id: number) => {
    setShowModal(true)
    setEditTaskId(id)
  }

  const handleDelete = (id: number) => {
    console.log("Deletar", id)

    const confirm = window.confirm("Tem certeza que deseja deletar essa tarefa?")
    if (!confirm) return

    const tasksUpdated = tasks.filter((task) => task.id !== id)
    setTasks(tasksUpdated)
  }

  return (
    <div className="border border-gray-200 rounded p-4 w-96 my-2 text-left flex justify-between">
      <div>
        <div className="font-bold text-lg">
          <span className="hidden">#{id}</span>
          <span>{title}</span>
        </div>
        <div className="text-md">Dificuldade: {difficultyName}</div>
      </div>
      <div className="flex gap-2 items-start">
        <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleEdit(id)}><FaEdit /></button>
        <button className="block bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded" onClick={() => handleDelete(id)}><MdDelete /></button>
      </div>
    </div>
  )
}