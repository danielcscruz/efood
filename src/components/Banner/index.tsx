import { Restaurant } from '../../pages/Home'
import { Category, Container, Store } from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => {
  return (
    <Container image={restaurant.capa}>
      <Category>{restaurant.tipo}</Category>
      <Store>{restaurant.titulo}</Store>
    </Container>
  )
}

export default Banner
