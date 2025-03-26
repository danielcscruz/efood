import Restaurant from '../../models/Restaurants'
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
            name={restaurant.name}
            description={restaurant.description}
            image={restaurant.image}
            rating={restaurant.rating}
            category={restaurant.category}
            dishes={restaurant.dishes}
            featured={restaurant.featured || false}
            id={restaurant.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
