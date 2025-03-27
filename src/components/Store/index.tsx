import { Link } from 'react-router-dom'

import Dish from '../../models/Dishes'
import {
  Card,
  Descricao,
  Titulo,
  Imagem,
  Rate,
  Cat,
  Botao,
  Top
} from './styles'

import star from '../../assets/images/star.png'

type Props = {
  id?: number
  name: string
  description: string
  rating: number
  category: string
  image: string
  featured: boolean
}

const Store = ({
  name,
  description,
  rating,
  category,
  image,
  featured,
  id
}: Props) => (
  <Card>
    <Imagem src={image} alt={name} />
    <Titulo>
      <h3>{name}</h3>
      <Rate>
        <h3>{rating}</h3>
        <img src={star} />
      </Rate>
    </Titulo>
    {featured ? (
      <Top>
        <Cat>Em Destaque</Cat>
        <Cat>{category}</Cat>
      </Top>
    ) : (
      <Top>
        <Cat>{category}</Cat>
      </Top>
    )}

    <Descricao>{description}</Descricao>
    <Botao as={Link} to={`/restaurant/${id}`} type="button">
      Saiba Mais
    </Botao>
  </Card>
)

export default Store
