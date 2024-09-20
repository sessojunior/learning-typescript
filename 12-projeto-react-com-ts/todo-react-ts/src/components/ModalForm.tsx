import React, { useEffect, useState } from "react"
import { RiCloseFill } from "react-icons/ri"

import { TaskProps } from "../types"

interface ModalFormProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  editTaskId: number
  tasks: TaskProps[]
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
}

export default function ModalForm({ showModal, setShowModal, editTaskId, tasks, setTasks }: ModalFormProps) {

  const [title, setTitle] = useState('')
  const [difficulty, setDifficulty] = useState(0)

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(false);
  }

  useEffect(() => {
    if (editTaskId !== undefined) {
      
      //console.log("editTaskId", editTaskId);

      const task = tasks.find((task) => task.id === editTaskId);
      if (!task) return;

      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [editTaskId, tasks])

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editTaskId !== undefined) {
      const task = tasks.find((task) => task.id === editTaskId);
      if (!task) return;

      const updatedTask = {
        ...task,
        title,
        difficulty
      };

      const updatedTasks = tasks.map((t) => t.id === editTaskId ? updatedTask : t)
      setTasks(updatedTasks)

      setShowModal(false);
    }
  }

  return (
    <div className={`p-8 w-96 border border-gray-200 bg-white rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${!showModal && "hidden"}`}>
      <form onSubmit={handleEdit}>
        <div className="absolute top-4 right-4"><button onClick={handleClose} type="button" className="border bg-gray-200 hover:bg-gray-900 hover:text-white rounded-full p-1"><RiCloseFill className="w-6 h-6" /></button></div>
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="text-2xl font-bold pb-8">Editar tarefa</h2>
          <div className="pb-4 text-left w-full">
            <label htmlFor="title" className="block font-bold pb-1">Título:</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-400 rounded px-2 py-1" />
          </div>
          <div className="pb-4 text-left w-full">
            <label htmlFor="difficulty" className="block font-bold pb-1">Dificuldade:</label>
            <select name="difficulty" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(Number(e.target.value))} className="w-full border border-gray-400 rounded px-2 py-1">
              <option value="0">Muito fácil</option>
              <option value="1">Fácil</option>
              <option value="2">Moderada</option>
              <option value="3">Difícil</option>
              <option value="4">Muito difícil</option>
            </select>
          </div>
          <div className="pb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">Alterar</button>
          </div>
        </div>
      </form>
    </div>
  )
}