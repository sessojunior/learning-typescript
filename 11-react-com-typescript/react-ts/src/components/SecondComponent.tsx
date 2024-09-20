type Props = {
  name: string
}

export default function SecondComponent({ name }: Props) {
  return (
    <p>
      Este é o segundo componente e contém a prop name: {name}
    </p>
  )
}