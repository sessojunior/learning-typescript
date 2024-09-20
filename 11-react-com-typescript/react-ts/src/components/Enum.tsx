interface Props {
  category: Category
}

// Precisa exportar o Category
export enum Category {
  TS = "TypeScript",
  JS = "JavaScript",
  TSX = "TSX",
  JSX = "JSX",
  HTML = "HTML",
  CSS = "CSS",
}

export default function Enum({ category }: Props) {
  return (
    <>
      <p>Categoria: {category}</p>
    </>
  )
}