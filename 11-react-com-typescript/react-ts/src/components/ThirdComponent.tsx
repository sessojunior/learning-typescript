interface Props {
  user: {
    name: string
    age?: number
  }
}

export default function ThirdComponent({ user }: Props) {
  return (
    <>
      <p>Este é o terceiro componente.</p>
      <p>O nome é {user.name} {user.age && <>e a idade é de {user.age} anos.</>}</p>
    </>
  )
}
