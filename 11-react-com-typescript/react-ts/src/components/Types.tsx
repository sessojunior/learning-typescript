type TextOrNull = string | null

export default function Types() {

  const name: TextOrNull = "João"
  const title: TextOrNull = null

  return (
    <>
      <p>Nome: {name}</p>
      <p>Título: {title ?? "Não informado"}</p>
    </>
  )
}
