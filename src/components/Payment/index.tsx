import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { goCart, goCheckout, goConfirmation } from '../../store/reducers/modal'
import * as S from './styles'
import { RootReducer } from '../../store'

const Payment = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

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

  return (
    <S.Container>
      <h3>Pagamento - Valor a pagar {formatPreco(getTotalPrice())}</h3>
      <S.InputGroup>
        <label>Nome no cartão</label>
        <input type="text" id="cardName" name="cardName"></input>
      </S.InputGroup>
      <S.DoubleGroup>
        <S.InputGroup>
          <label>Número no cartão</label>
          <InputMask
            className="w-228"
            type="text"
            id="cardNumber"
            name="cardNumber"
            mask="9999 9999 9999 9999"
          ></InputMask>
        </S.InputGroup>
        <S.InputGroup>
          <label>CVV</label>
          <InputMask
            className="w-87"
            type="text"
            id="cardCode"
            name="cardCode"
            mask="999"
          ></InputMask>
        </S.InputGroup>
      </S.DoubleGroup>
      <S.DoubleGroup>
        <S.InputGroup>
          <label>Mês de vencimento</label>
          <InputMask
            type="text"
            id="expMonth"
            name="expMonth"
            mask="99"
          ></InputMask>
        </S.InputGroup>
        <S.InputGroup>
          <label>Ano de vencimento</label>
          <InputMask
            type="text"
            id="expYear"
            name="expYear"
            mask="99"
          ></InputMask>
        </S.InputGroup>
      </S.DoubleGroup>
      <S.ButtonGroup>
        <S.Button onClick={() => dispatch(goConfirmation())}>
          Confirmar pagamento
        </S.Button>
        <S.Button onClick={() => dispatch(goCheckout())}>
          Voltar para edição de endereço
        </S.Button>
      </S.ButtonGroup>
    </S.Container>
  )
}

export default Payment
