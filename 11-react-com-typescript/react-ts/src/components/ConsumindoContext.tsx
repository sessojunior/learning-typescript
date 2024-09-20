import { useContext } from "react"

import { Context } from "./ContextApi"

export default function ConsumindoContext() {

  const details = useContext(Context)

  return (
    <>
      <p>Dados:</p>
      <p>Linguagem: {details?.language}</p>
      <p>Framework: {details?.framework}</p>
      <p>Projetos: {details?.projects}</p>
    </>
  )
}