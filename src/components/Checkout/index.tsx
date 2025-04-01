import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { goCart } from '../../store/reducers/modal'
import * as S from './styles'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { useEffect, useState } from 'react'
import { resetCart, close } from '../../store/reducers/cart'

const Checkout = () => {
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const [isAddressValid, setIsAddressValid] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const handleValidationAddress = () => {
    if (
      checkInputHasError('receiverName') ||
      checkInputHasError('addressDescription') ||
      checkInputHasError('addressCity') ||
      checkInputHasError('addressZipCode') ||
      checkInputHasError('addressNumber')
    ) {
      setIsAddressValid(false)
    } else {
      setIsAddressValid(true)
    }
  }

  const handleGoCart = () => {
    dispatch(goCart())
    alert('Não se esqueça de concluir sua compra')
  }
  const handleGoCheckout = () => {
    setIsAddressValid(false)
  }
  const handleFinish = () => {
    form.resetForm()
    setIsAddressValid(false)
    reset()
    dispatch(goCart())
    dispatch(resetCart())
    dispatch(close())
  }

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
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik({
    initialValues: {
      id: '',
      price: '',
      receiverName: '',
      addressDescription: '',
      addressCity: '',
      addressZipCode: '',
      addressNumber: '',
      addressComplement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpMonth: '',
      cardExpYear: ''
    },
    validationSchema: Yup.object({
      receiverName: Yup.string().required('Receiver name is required'),
      addressDescription: Yup.string().required('Address is required'),
      addressCity: Yup.string().required('City is required'),
      addressZipCode: Yup.string().required('ZIP Code is required'),
      addressNumber: Yup.string().required('Number is required'),
      addressComplement: Yup.string(),
      cardName: Yup.string().required('Expiration month is required'),
      cardNumber: Yup.string().required('Expiration month is required'),
      cardCode: Yup.string().required('Expiration month is required'),
      cardExpMonth: Yup.string().required('Expiration month is required'),
      cardExpYear: Yup.string().required('Expiration year is required')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.flatMap((restaurant) =>
          restaurant.items.map((menuItem) => ({
            id: menuItem.id,
            price: menuItem.preco
          }))
        ),
        delivery: {
          receiver: values.receiverName,
          address: {
            description: values.addressDescription,
            city: values.addressCity,
            zipCode: values.addressZipCode,
            number: Number(values.addressNumber),
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpMonth),
              year: Number(values.cardExpYear)
            }
          }
        }
      })
    }
  })
  useEffect(() => {
    if (
      form.values.receiverName !== '' &&
      form.values.addressDescription !== '' &&
      form.values.addressCity !== '' &&
      form.values.addressZipCode !== '' &&
      form.values.addressNumber !== ''
    ) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }
  }, [
    form.values.receiverName,
    form.values.addressDescription,
    form.values.addressCity,
    form.values.addressZipCode,
    form.values.addressNumber
  ])

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={isAddressValid ? 'none' : ''}>
        <h3>Entrega</h3>
        <S.InputGroup>
          <label>Quem irá receber</label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiverName}
            className={checkInputHasError('receiverName') ? 'error' : ''}
          ></input>
        </S.InputGroup>
        <S.InputGroup>
          <label>Endereço</label>
          <input
            type="text"
            id="addressDescription"
            name="addressDescription"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.addressDescription}
            className={checkInputHasError('addressDescription') ? 'error' : ''}
          ></input>
        </S.InputGroup>
        <S.InputGroup>
          <label>Cidade</label>
          <input
            type="text"
            id="addressCity"
            name="addressCity"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.addressCity}
            className={checkInputHasError('addressCity') ? 'error' : ''}
          ></input>
        </S.InputGroup>
        <S.DoubleGroup>
          <S.InputGroup>
            <label>CEP</label>
            <InputMask
              type="text"
              id="addressZipCode"
              name="addressZipCode"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.addressZipCode}
              className={checkInputHasError('addressZipCode') ? 'error' : ''}
              mask="99999-999"
            ></InputMask>
          </S.InputGroup>
          <S.InputGroup>
            <label>Número</label>
            <InputMask
              type="text"
              id="addressNumber"
              name="addressNumber"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.addressNumber}
              className={checkInputHasError('addressNumber') ? 'error' : ''}
              mask="99999"
            ></InputMask>
          </S.InputGroup>
        </S.DoubleGroup>
        <S.InputGroup>
          <label>Complemento (opicional)</label>
          <input
            type="text"
            id="addressComplement"
            name="addressComplement"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.addressComplement}
            className={checkInputHasError('addressComplement') ? 'error' : ''}
          ></input>
        </S.InputGroup>
        <S.ButtonGroup>
          <S.Button
            type="button"
            disabled={!isFilled}
            onClick={() => handleValidationAddress()}
          >
            {!isFilled
              ? 'Preencha os campos para prosseguir'
              : 'Continuar com o pagamento'}
          </S.Button>
          <S.Button type="button" onClick={() => handleGoCart()}>
            Voltar para o carrinho
          </S.Button>
        </S.ButtonGroup>
      </S.Container>

      <S.Container className={isAddressValid && !data ? '' : 'none'}>
        <h3>Pagamento - Valor a pagar {formatPreco(getTotalPrice())}</h3>
        <S.InputGroup>
          <label>Nome no cartão</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cardName}
            className={checkInputHasError('cardName') ? 'error' : ''}
          ></input>
        </S.InputGroup>
        <S.DoubleGroup>
          <S.InputGroup>
            <label>Número no cartão</label>
            <InputMask
              type="text"
              id="cardNumber"
              name="cardNumber"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNumber}
              className={
                checkInputHasError('cardNumber') ? 'error w-228' : 'w-228'
              }
              mask="9999 9999 9999 9999"
            ></InputMask>
          </S.InputGroup>
          <S.InputGroup>
            <label>CVV</label>
            <InputMask
              type="text"
              id="cardCode"
              name="cardCode"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardCode}
              className={
                checkInputHasError('cardCode') ? 'error w-87 end' : 'w-87 end'
              }
              mask="999"
            ></InputMask>
          </S.InputGroup>
        </S.DoubleGroup>
        <S.DoubleGroup>
          <S.InputGroup>
            <label>Mês de vencimento</label>
            <InputMask
              type="text"
              id="cardExpMonth"
              name="cardExpMonth"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardExpMonth}
              className={checkInputHasError('cardExpMonth') ? 'error' : ''}
              mask="99"
            ></InputMask>
          </S.InputGroup>
          <S.InputGroup>
            <label>Ano de vencimento</label>
            <InputMask
              type="text"
              id="cardExpYear"
              name="cardExpYear"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardExpYear}
              className={checkInputHasError('cardExpYear') ? 'error' : ''}
              mask="99"
            ></InputMask>
          </S.InputGroup>
        </S.DoubleGroup>
        <S.ButtonGroup>
          <S.Button type="submit">Confirmar pagamento</S.Button>
          <S.Button type="button" onClick={() => handleGoCheckout()}>
            Voltar para edição de endereço
          </S.Button>
        </S.ButtonGroup>
      </S.Container>

      <S.Container className={data ? '' : 'none'}>
        <>
          <h3>Pedido realizado - {data?.orderId} </h3>
          <S.ConfirmText>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.{' '}
          </S.ConfirmText>
          <S.ConfirmText>
            {' '}
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. Lembre-se da importância de
            higienizar as mãos após o recebimento do pedido, garantindo assim
            sua segurança e bem-estar durante a refeição.{' '}
          </S.ConfirmText>
          <S.ConfirmText>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.ConfirmText>
          <S.Button type="button" onClick={() => handleFinish()}>
            Concluir
          </S.Button>
        </>
      </S.Container>
    </form>
  )
}

export default Checkout
