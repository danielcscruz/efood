import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.rosinha};
  position: relative;
  width: 472px;
  height: 412px;
  margin-top: 48px;
  border: 0.5px solid ${cores.rosinha};
  position: relative;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  align-items: center;

  h3 {
    font-size: 18px;
  }
`
export const Rate = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0 8px;
  }
`

export const Cat = styled.h4`
  background-color: ${cores.rosinha};
  color: ${cores.begeEscuro};
  margin-left: 8px;
  padding: 6px 4px;
  font-size: 12px;
`
export const Top = styled.div`
  display: inline-block;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 0 6px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Imagem = styled.img`
  height: 217px;
  width: 100%;
`

export const Botao = styled.button`
  background-color: ${cores.rosinha};
  color: ${cores.begeEscuro};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  margin: 8px 8px;
  margin-top: 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  bottom: 1px;
  left: 1px;
`
