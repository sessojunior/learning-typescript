import { ChangeEvent, useState } from "react"

export default function State() {

  const [text, setText] = useState<string | null>(null)
  const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText3(e.target.value)
  }

  return (
    <>
      <p>Texto: {text}</p>
      <p><button onClick={() => setText("Novo valor")}>Alterar texto</button></p>
      <p>Texto 2: <input value={text2} onChange={(e) => setText2(e.target.value)} /></p>
      <p>Texto 3: {text3}</p>
      <p><input value={text3} onChange={handleChange} /></p>
    </>
  )
}