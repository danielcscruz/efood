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
  font-weight: 400;
  margin-top: 8px;
  line-height: 22px;
  text-align: left;
`
export const Title = styled.h3`
  font-size: 16px;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.rosinha};
  max-width: 1024px;
  width: 100%;
  height: 344px;
  position: relative;
  z-index: 1;


    h4 {
      font-size: 18px;
      font-weight: 400;
    }
  }



`
export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Content = styled.div`
  display: flex;
  margin: 32px;
`

export const ImageModal = styled.img`
  height: 280px;
  width: 280px;
`
export const TextContent = styled.div`
  margin-left: 32px;

  h2 {
    font-size: 18px;
    font-weight: 900;
  }
  h3,
  h4 {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
export const BtnModal = styled.button`
  margin-top: 16px;
  background-color: ${cores.begeEscuro};
  color: ${cores.rosinha};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 7px;
  cursor: pointer;
`
