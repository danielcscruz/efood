import { useLocation } from 'react-router-dom'

import { NavBar, Subtitulo, Container, Logo } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
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
            <h3>Restaurantes</h3>
            <Link to="/">
              <Logo src={logo} alt="eFood" />
            </Link>
            <div>
              <h3>0 produto(s) no carrinho</h3>
            </div>
          </NavBar>
        </Container>
      )}
    </>
  )
}

export default Header
