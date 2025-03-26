import { Container, LogoSection, MediaSection, TextSection } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <LogoSection>
        <img className="logo" src={logo} alt="EPLAY" />
      </LogoSection>
      <MediaSection>
        <img className="media" src={instagram} alt="instagram" />
        <img className="media" src={twitter} alt="twitter" />
        <img className="media" src={facebook} alt="facebook" />
      </MediaSection>
      <TextSection>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </TextSection>
    </div>
  </Container>
)

export default Footer
