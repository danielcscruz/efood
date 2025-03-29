import {
  Overlay,
  CartContainer,
  SideBar,
  Total,
  CardItem,
  Button
} from './styles'

import burritos from '../../assets/images/burritos.jpg'

// import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
// import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
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

  const getTotalPrice = () => {
    return items.reduce((acumulador, restaurant) => {
      const restaurantTotal = restaurant.items.reduce((subtotal, menuItem) => {
        return subtotal + menuItem.preco
      }, 0)
      return acumulador + restaurantTotal
    }, 0)
  }

  const removeItem = (restaurantId: number, itemId: number) => {
    dispatch(remove({ restaurantId, itemId }))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((restaurant) =>
            restaurant.items.map((menuItem) => (
              <CardItem key={menuItem.id}>
                <img src={menuItem.foto} alt={menuItem.nome} />
                <div>
                  <h3>{menuItem.nome}</h3>
                  <span>{formatPreco(menuItem.preco)}</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    removeItem(restaurant.restaurantId, menuItem.id)
                  }
                />
              </CardItem>
            ))
          )}
        </ul>
        <Total>
          <p>Valor total</p>
          <span>{formatPreco(getTotalPrice())}</span>
        </Total>

        <Button type="button" title="Clique aqui para continuar a compra">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
