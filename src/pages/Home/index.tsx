import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'
import pizza from '../../assets/images/pizza.png'
import temaki from '../../assets/images/temaki1.webp'
import mexicana from '../../assets/images/mexicana0.jpg'
import nachos from '../../assets/images/nachos.webp'
import burritos from '../../assets/images/burritos.jpg'
import baiana from '../../assets/images/baiana.jpg'
import acaraje from '../../assets/images/acaraje.jpg'
import moqueca from '../../assets/images/moqueca.webp'
import lambreta from '../../assets/images/lambreta.jpg'
import caranguejo from '../../assets/images/caranguejo.jpeg'
import arabe from '../../assets/images/arabe.jpg'
import kibe from '../../assets/images/kibe.jpg'
import shawarma from '../../assets/images/shawarma.png'
import ceviche from '../../assets/images/ceviche.jpeg'

import RestaurantsList from '../../components/RestaurantsList'
import Restaurant from '../../models/Restaurants'

const lista: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.1,
    category: 'Japonesa',
    dishes: [
      {
        id: 20,
        name: 'Sushi',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '1 a 2 pessoas',
        price: 99.9,
        image: sushi
      },
      {
        id: 21,
        name: 'Temaki',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '1 a 2 pessoas',
        price: 99.9,
        image: temaki
      }
    ],
    image: sushi,
    featured: true
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 3.6,
    category: 'Italiana',
    dishes: [
      {
        id: 9,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: pizza
      },
      {
        id: 10,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: pizza
      },
      {
        id: 22,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: pizza
      },
      {
        id: 23,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: pizza
      },
      {
        id: 24,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: pizza
      },
      {
        id: 25,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: pizza
      }
    ],
    image: pasta
  },
  {
    id: 3,
    name: 'El Burrito Loco',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
    rating: 4.7,
    category: 'Mexicana',
    dishes: [
      {
        id: 11,
        name: 'Nachos',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: nachos
      },
      {
        id: 12,
        name: 'Burritos',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: burritos
      }
    ],
    image: mexicana
  },
  {
    id: 4,
    name: 'Tabuleiro do Axé',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
    rating: 5.0,
    category: 'Baiana',
    dishes: [
      {
        id: 13,
        name: 'Acarajé',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: acaraje
      },
      {
        id: 14,
        name: 'Moqueca',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: moqueca
      },
      {
        id: 26,
        name: 'Lambreta',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: lambreta
      },
      {
        id: 27,
        name: 'Carangueijo',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: caranguejo
      }
    ],
    image: baiana
  },
  {
    id: 5,
    name: 'Hummus na Veia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
    rating: 4.8,
    category: 'Arabe',
    dishes: [
      {
        id: 15,
        name: 'Kibe',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: kibe
      },
      {
        id: 16,
        name: 'Shawarma',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: shawarma
      }
    ],
    image: arabe
  },
  {
    id: 6,
    name: 'Peruviche',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
    rating: 4.6,
    category: 'Peruana',
    dishes: [
      {
        id: 17,
        name: 'Ceviche',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero aliquam reprehenderit inventore laudantium accusantium quae harum fugit assumenda, amet necessitatibus facere.',
        serve: '2 a 3 pessoas',
        price: 60.9,
        image: ceviche
      }
    ],
    image: ceviche
  }
]

const Home = () => (
  <>
    <RestaurantsList restaurants={lista} />
  </>
)

export default Home
