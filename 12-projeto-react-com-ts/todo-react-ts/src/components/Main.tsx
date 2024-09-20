import { ReactNode } from "react"

export default function Main({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-8 text-center">
      {children}
    </div>
  )
}