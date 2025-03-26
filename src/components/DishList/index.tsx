import { Button, Card, Image, List, Text, Title, Container } from './styles'

import pizza from '../../assets/images/pizza.png'

type Dish = {
  id: number
  name: string
  description: string
  serve: string
  price: number
  image: string
}

type Props = {
  dishes: Dish[]
}

const DishList = ({ dishes }: Props) => {
  return (
    <Container>
      <List>
        {dishes.map((dish) => (
          <Card key={dish.id}>
            <Image src={dish.image} alt={dish.name} />
            <Title>{dish.name}</Title>
            <Text>{dish.description}</Text>
            <Button type="button">Adicionar ao carrinho</Button>
          </Card>
        ))}
      </List>
    </Container>
  )
}

export default DishList
