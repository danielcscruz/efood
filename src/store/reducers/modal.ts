import { createSlice } from '@reduxjs/toolkit'

type ModalState = {
  pageOpen: 'cart' | 'checkout' | 'payment' | 'confirmation'
}

const initialState: ModalState = {
  pageOpen: 'cart'
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    goCart: (state) => {
      state.pageOpen = 'cart'
    },
    goCheckout: (state) => {
      state.pageOpen = 'checkout'
    },
    goPayment: (state) => {
      state.pageOpen = 'payment'
    },
    goConfirmation: (state) => {
      state.pageOpen = 'confirmation'
    }
  }
})

export const { goCart, goCheckout, goConfirmation, goPayment } =
  modalSlice.actions
export default modalSlice.reducer
