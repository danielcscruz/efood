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
// import { useDispatch, useSelector } from 'react-redux'
// import { RootReducer } from '../../store'
// import { close, remove } from '../../store/reducers/cart'
// import { formataPreco } from '../ProductsList'

const Cart = () => {
  // const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  // const dispatch = useDispatch()

  // const closeCart = () => {
  //   dispatch(close())
  // }

  // const getTotalPrice = () => {
  //   return items.reduce((acumulador, valorAtual) => {
  //     return (acumulador += valorAtual.prices.current!)
  //   }, 0)
  // }
  // const removeItem = (id: number) => {
  //   dispatch(remove(id))
  // }
  return (
    // <CartContainer className={isOpen ? 'is-open' : ''}>
    <CartContainer>
      {/* <Overlay onClick={closeCart} /> */}
      <Overlay />
      <SideBar>
        <ul>
          {/* {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.media.thumbnail} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CardItem>
          ))} */}
          <CardItem>
            <img src={burritos} />
            <div>
              <h3>Burritos</h3>
              <span>r$ 20</span>
            </div>
            {/* <button type="button" onClick={() => removeItem(item.id)} /> */}
            <button type="button" />
          </CardItem>
          <CardItem>
            <img src={burritos} />
            <div>
              <h3>Burritos</h3>
              <span>r$ 20</span>
            </div>
            {/* <button type="button" onClick={() => removeItem(item.id)} /> */}
            <button type="button" />
          </CardItem>
        </ul>
        <Total>
          <p>Valor total</p>
          <span>R$20</span>
        </Total>

        <Button type="button" title="Clique aqui para continuar a compra">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
