import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  wodth: 100%;
  justify-content: center;
  background-color: ${cores.begeClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
  max-width: 1024px;
`
export const Card = styled.div`
  background-color: ${cores.rosinha};
  color: ${cores.begeEscuro};
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 32px;
  padding: 8px;
  box-sizing: border-box;
`
export const Text = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-top: 8px;
  line-height: 22px;
  text-align: left;
`
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 900;
  padding-top: 8px;
  text-align: left;
  width: 100%;
`
export const Image = styled.img`
  height: 167px;
  width: 304px;
`
export const Button = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.rosinha};
  border: none;
  display: flex;
  width: 98%;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`
