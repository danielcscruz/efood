import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'

type Dish = {
  id: number
  name: string
  description: string
  serve: string
  price: number
  image: string
}

const Detail = () => {
  const location = useLocation()
  const { state } = location
  const { name, description, rating, category, dishes, image, featured } =
    state || {}
  return (
    <div>
      <Banner name={name} category={category} image={image} />
      <DishList dishes={dishes} />
    </div>
  )
}
export default Detail
