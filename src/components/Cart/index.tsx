import * as S from './styles'

// import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { goCheckout } from '../../store/reducers/modal'
import { useEffect, useState } from 'react'
// import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const { pageOpen } = useSelector((state: RootReducer) => state.modal)
  const [isCartEmpty, setIsCartEmpty] = useState(true)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  useEffect(() => {
    if (items.length === 0) {
      setIsCartEmpty(true)
    } else {
      setIsCartEmpty(false)
    }
  })

  const getTotalPrice = () => {
    return items.reduce((acumulador, restaurant) => {
      const restaurantTotal = restaurant.items.reduce((subtotal, menuItem) => {
        return subtotal + menuItem.preco
      }, 0)
      return acumulador + restaurantTotal
    }, 0)
  }

  const formatPreco = (valor: number | null) => {
    if (valor === null) {
      return 'Preço indisponível'
    }

    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const removeItem = (restaurantId: number, itemId: number) => {
    dispatch(remove({ restaurantId, itemId }))
  }

  return (
    <>
      <ul>
        {items.map((restaurant) =>
          restaurant.items.map((menuItem) => (
            <S.CardItem key={menuItem.id}>
              <img src={menuItem.foto} alt={menuItem.nome} />
              <div>
                <h3>{menuItem.nome}</h3>
                <span>{formatPreco(menuItem.preco)}</span>
              </div>
              <button
                type="button"
                onClick={() => removeItem(restaurant.restaurantId, menuItem.id)}
              />
            </S.CardItem>
          ))
        )}
      </ul>
      <S.Total>
        <span>Valor total</span>
        <span>{formatPreco(getTotalPrice())}</span>
      </S.Total>

      <S.Button
        type="button"
        disabled={isCartEmpty}
        title="Clique aqui para continuar a compra"
        onClick={() => dispatch(goCheckout())}
      >
        {items.length === 0
          ? 'O carrinho está vazio. Adicione um produto'
          : 'Continuar com o pagamento'}
      </S.Button>
    </>
  )
}

export default Cart
