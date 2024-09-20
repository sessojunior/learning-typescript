import { useState } from "react"

import { TaskProps } from "../types"

export default function Form({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>> }) {

  const [title, setTitle] = useState("")
  const [difficulty, setDifficulty] = useState(0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    //console.log(title, difficulty)

    if (!title) {
      alert("Preencha todos os dados!")
      return
    }

    const newTask: TaskProps = {
      id: Date.now(),
      title: title,
      difficulty: difficulty
    }

    setTasks((oldTasks) => [...oldTasks, newTask])
    setTitle("")
    setDifficulty(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-2xl font-bold pb-8">O que você vai fazer?</h2>
        <div className="pb-4 text-left w-96">
          <label htmlFor="title" className="block font-bold pb-1">Título:</label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-400 rounded px-2 py-1" />
        </div>
        <div className="pb-4 text-left w-96">
          <label htmlFor="dificulty" className="block font-bold pb-1">Dificuldade:</label>
          <select name="dificulty" id="dificulty" value={difficulty} onChange={(e) => setDifficulty(Number(e.target.value))} className="w-full border border-gray-400 rounded px-2 py-1">
            <option value="0">Muito fácil</option>
            <option value="1">Fácil</option>
            <option value="2">Moderada</option>
            <option value="3">Difícil</option>
            <option value="4">Muito difícil</option>
          </select>
        </div>
        <div className="pb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">Cadastrar</button>
        </div>
      </div>
    </form>
  )
}