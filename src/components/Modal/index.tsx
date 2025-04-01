import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import Cart from '../Cart'
import Checkout from '../Checkout'
// import Payment from '../Payment'
// import Confirmation from '../Confirmation'

import * as S from './styles'

const Modal = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { pageOpen } = useSelector((state: RootReducer) => state.modal)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {pageOpen === 'cart' ? <Cart /> : ''}
        {pageOpen === 'checkout' ? <Checkout /> : ''}
        {/* {pageOpen === 'payment' ? <Payment /> : ''}
        {pageOpen === 'confirmation' ? <Confirmation /> : ''} */}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Modal
