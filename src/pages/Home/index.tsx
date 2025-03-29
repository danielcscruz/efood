import RestaurantsList from '../../components/RestaurantsList'
import { useEffect, useState } from 'react'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  // const [rest, setRest] = useState<Restaurant[]>([])
  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setRest(res))
  // }, [])

  const { data: rest } = useGetRestaurantsQuery()

  return (
    <>
      <RestaurantsList restaurants={rest || []} />
    </>
  )
}

export default Home
