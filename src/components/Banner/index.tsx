import { Category, Container, Store } from './styles'

type Props = {
  name: string
  category: string
  image: string
}

const Banner = ({ name, category, image }: Props) => {
  return (
    <Container image={image}>
      <Category>{category}</Category>
      <Store>{name}</Store>
    </Container>
  )
}

export default Banner
