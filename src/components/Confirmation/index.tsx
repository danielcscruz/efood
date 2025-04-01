import { useDispatch, useSelector } from 'react-redux'

import { goCart } from '../../store/reducers/modal'
import * as S from './styles'

const Confimation = () => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(goCart())}>Voltar para o carrinho</button>
  )
}

export default Confimation
