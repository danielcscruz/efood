import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.begeEscuro};
  font-size: 10px;
  text-align: center;
  color: ${cores.rosinha};
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  .container {
    display: grid;
    place-items: center;
    max-width: 1024px;
    width: 100%;
  }

  .logo {
    width: 125px;
    height: 58px;
  }
  .media {
    width: 24px;
    height: 24px;
    margin: 8px 8px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const LogoSection = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
`
export const MediaSection = styled.div``
export const TextSection = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
`
