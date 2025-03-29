import {
  Button,
  Card,
  Image,
  List,
  Text,
  Title,
  Container,
  Modal,
  ModalContent,
  CloseButton,
  Content,
  ImageModal,
  TextContent,
  BtnModal
} from './styles'

import close from '../../assets/images/close.png'
import { Restaurant } from '../../pages/Home'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  restaurant: Restaurant
}

type ModalState = {
  isVisible: boolean
  imagem: string
  titulo: string
  descricao: string
  serve: string
  id: number | null
  preco: number | null
}

const DishList = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    if (modal.preco !== null && modal.id !== null) {
      dispatch(
        add({
          restaurantId: restaurant.id,
          item: {
            id: modal.id, // Assuming titulo is a unique name, use prato.id if available
            nome: modal.titulo,
            preco: modal.preco,
            foto: modal.imagem,
            descricao: modal.descricao,
            porcao: modal.serve
          }
        })
      )
      dispatch(open())
    }
  }
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    imagem: '',
    titulo: '',
    descricao: '',
    serve: '',
    preco: null,
    id: null
  })
  const closeModal = () => {
    setModal({
      isVisible: false,
      imagem: '',
      titulo: '',
      descricao: '',
      serve: '',
      preco: null,
      id: null
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 167) + '...'
    }
    return descricao
  }
  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  const formatPreco = (valor: number | null) => {
    if (valor === null) {
      return 'Preço indisponível'
    }

    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  return (
    <>
      <Container>
        <List>
          {restaurant.cardapio.map((prato) => (
            <Card key={prato.id}>
              <Image src={prato.foto} alt={prato.nome} />
              <Title>{prato.nome}</Title>
              <Text>{getDescricao(prato.descricao)}</Text>
              <Button
                onClick={() => {
                  setModal({
                    isVisible: true,
                    imagem: prato.foto,
                    titulo: prato.nome,
                    descricao: prato.descricao,
                    serve: prato.porcao,
                    preco: prato.preco,
                    id: prato.id
                  })
                }}
                type="button"
              >
                Mais detalhes
              </Button>
            </Card>
          ))}
        </List>
      </Container>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <CloseButton
            src={close}
            onClick={() => closeModal()}
            alt="botao fechar"
          />
          <Content>
            <ImageModal src={modal.imagem} alt="imagem" />
            <TextContent>
              <h2>{modal.titulo}</h2>
              <h3>{modal.descricao}</h3>
              <h4>{modal.serve}</h4>
              <BtnModal onClick={addCart} type="button">
                Adicionar ao carrinho - {formatPreco(modal.preco)}
              </BtnModal>
            </TextContent>
          </Content>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default DishList
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
