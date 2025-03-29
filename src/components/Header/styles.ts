import styled from 'styled-components'
import { cores } from '../../styles'

import fundo from '../../assets/images/fundo.png'

export const Container = styled.div`
  background: url(${fundo});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  heigh: 100%;
  color: ${cores.rosinha};
`

export const Logo = styled.img`
  flex-direction: column;
  width: 125px;
  height: 58px;
`
export const NavBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 2080px;
  width: 100%;
  height: 200px;
  justify-content: center;

  a {
    cursor: pointer;
  }

  /* Forces spacing for left and right elements */
  & > h3,
  & > div {
    flex: 1; /* Takes equal space */
    display: flex;
    justify-content: center;
  }

  /* Ensures the logo stays centered */
  & > ${Logo} {
    flex-shrink: 0;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkRest = styled.a`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.rosinha}
  text-decoration: none;
`
export const Subtitulo = styled.h3`
  font-weight: bold;
  font-size: 36px;

  margin-top: 140px;
  margin-bottom: 40px;
  text-align: center;
`
