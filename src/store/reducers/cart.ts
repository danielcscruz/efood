import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/Home'

type CartItem = {
  restaurantId: number
  items: {
    id: number
    nome: string
    preco: number
    foto: string
    descricao: string
    porcao: string
    quantity: number
  }[]
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

type AddPayload = {
  restaurantId: number
  item: {
    id: number
    nome: string
    preco: number
    foto: string
    descricao: string
    porcao: string
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddPayload>) => {
      const { restaurantId, item } = action.payload

      // Check if restaurant already exists in cart
      const restaurant = state.items.find(
        (cartItem) => cartItem.restaurantId === restaurantId
      )

      if (restaurant) {
        // Check if item already exists in the restaurant's items
        const menuItem = restaurant.items.find(
          (menuItem) => menuItem.id === item.id
        )

        if (menuItem) {
          // If the item exists, increase quantity
          menuItem.quantity += 1
        } else {
          // If not, add a new item to the restaurant's list
          restaurant.items.push({ ...item, quantity: 1 })
        }
      } else {
        // If restaurant doesn't exist, add it along with the first item
        state.items.push({
          restaurantId,
          items: [{ ...item, quantity: 1 }]
        })
      }
    },
    remove: (
      state,
      action: PayloadAction<{ restaurantId: number; itemId: number }>
    ) => {
      const { restaurantId, itemId } = action.payload
      const restaurantIndex = state.items.findIndex(
        (cartItem) => cartItem.restaurantId === restaurantId
      )

      if (restaurantIndex !== -1) {
        const restaurant = state.items[restaurantIndex]
        restaurant.items = restaurant.items.filter((item) => item.id !== itemId)

        // If restaurant has no items left, remove it from cart
        if (restaurant.items.length === 0) {
          state.items.splice(restaurantIndex, 1)
        }
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
