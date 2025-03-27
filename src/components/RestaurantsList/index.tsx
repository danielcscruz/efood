import { Restaurant } from '../../pages/Home'
import Store from '../Store'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Store
            key={restaurant.id}
            name={restaurant.titulo}
            description={restaurant.descricao}
            image={restaurant.capa}
            rating={restaurant.avaliacao}
            category={restaurant.tipo}
            featured={restaurant.destacado || false}
            id={restaurant.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
