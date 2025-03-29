import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import { useGetDishesQuery } from '../../services/api'

const Detail = () => {
  const { id } = useParams()
  const { data: dishes } = useGetDishesQuery(id!)

  return (
    <div>
      {dishes && <Banner restaurant={dishes} />}
      {dishes && <DishList restaurant={dishes} />}
    </div>
  )
}
export default Detail
