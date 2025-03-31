import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  NavBar,
  Subtitulo,
  Container,
  Logo,
  LinkRest,
  CartLink
} from './styles'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const location = useLocation()

  // Set isHome based on whether the path is "/"
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? (
        <Container>
          <NavBar>
            <Link to="/">
              <Logo src={logo} alt="eFood" />
            </Link>
          </NavBar>

          <Subtitulo>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Subtitulo>
        </Container>
      ) : (
        <Container>
          <NavBar>
            <LinkRest to="/">Restaurantes</LinkRest>
            <Link to="/">
              <Logo src={logo} alt="eFood" />
            </Link>
            <CartLink>
              <h3 onClick={openCart}>{items.length} produto(s) no carrinho</h3>
            </CartLink>
          </NavBar>
        </Container>
      )}
    </>
  )
}

export default Header
