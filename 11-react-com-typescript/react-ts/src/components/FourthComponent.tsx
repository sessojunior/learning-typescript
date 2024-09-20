type Props = {
  id: number,
  title: string,
  description: string,
  tags: string[],
}

export default function FourthComponent({ id, title, description, tags }: Props) {
  return (
    <>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Tags: {tags.join(', ')}</p>
    </>
  )
}