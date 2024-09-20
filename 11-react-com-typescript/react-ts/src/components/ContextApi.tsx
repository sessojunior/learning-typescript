import { createContext } from "react"

import ConsumindoContext from "./ConsumindoContext"

interface IContext {
  language: string
  framework: string
  projects: number
}

const contextValue: IContext = {
  language: "TypeScript",
  framework: "React",
  projects: 5
}

export const Context = createContext<IContext | null>(contextValue)

export default function ContextApi() {

  return (
    <Context.Provider value={contextValue}>
      <ConsumindoContext />
    </Context.Provider>
  )
}