import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${cores.begeEscuro};
  padding: 0 8px;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 8px 0;
  }
  &.none {
    display: none;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-size: 14px;
    font-weight: 700;
    margin: 8px 0;
  }
  input {
    width: 100%;
    height: 32px;
    border: 1px solid ${cores.begeEscuro};
    background-color: ${cores.begeEscuro};
    color: ${cores.cinza2};
    font-size: 14px;
    font-weight: 700;
    padding: 0 8px;

    &.error {
      border: 1px solid ${cores.vermelho};
      background-color: ${cores.rosinha};
    }
    &.w-87 {
      width: 110px;
    }
    &.end {
      margin-left: auto;
    }
  }
`

export const DoubleGroup = styled.div`
  display: flex;
  justify-items: space-between;
  gap: 34px;
  width: 100%;
`
export const Button = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.rosinha};
  border: none;
  display: flex;
  width: 100%;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 24px;
  &:disabled {
    background-color: transparent;
    color: ${cores.branca}; /* Change text color */
    border: 1px solid ${cores.begeClaro};
    cursor: not-allowed; /* Change cursor */
    opacity: 0.5; /* Reduce opacity */
  }
`
export const ButtonGroup = styled.div`
  margin-top: 16px;
`
export const ConfirmText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0;
`
