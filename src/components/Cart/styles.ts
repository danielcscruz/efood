import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.rosinha};
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 26px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Total = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.begeEscuro};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const CardItem = styled.li`
  color: ${cores.rosinha};
  display: flex;
  background-color: ${cores.begeEscuro};
  position: relative;
  height: 100px;
  margin-top: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 0 8px;
  }
  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-top: 8px;
  }
  span {
    margin-top: 16px;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${fechar});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Button = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.rosinha};
  border: none;
  display: flex;
  width: 100%;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`
