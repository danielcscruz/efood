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
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  label {
    font-size: 14px;
    font-weight: 700;
    margin: 8px 0;
  }
  input {
    width: 100%;
    height: 32px;
    border: none;
    background-color: ${cores.begeEscuro};
    color: ${cores.cinza2};
    font-size: 14px;
    font-weight: 700;
  }
  .w-155 {
    width: 155px;
  }
  .w-87 {
    width: 87px;
  }
  .w-228 {
    width: 190px;
  }
`

export const DoubleGroup = styled.div`
  display: flex;
  gap: 34px;
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
`
export const ButtonGroup = styled.div`
  margin-top: 16px;
`
