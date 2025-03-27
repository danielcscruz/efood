import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import { Restaurant } from '../Home'
import { useEffect, useState } from 'react'

const Detail = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <div>
      {restaurant && <Banner restaurant={restaurant} />}
      {restaurant && <DishList restaurant={restaurant} />}
    </div>
  )
}
export default Detail
