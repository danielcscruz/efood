import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormState = {
  price: string
  receiverName: string
  addressDescription: string
  addressCity: string
  addressZipCode: string
  addressNumber: string
  addressComplement: string
  cardName: string
  cardNumber: string
  cardCode: string
  cardExpMonth: string
  cardExpYear: string
}

const initialState: FormState = {
  price: '',
  receiverName: '',
  addressDescription: '',
  addressCity: '',
  addressZipCode: '',
  addressNumber: '',
  addressComplement: '',
  cardName: '',
  cardNumber: '',
  cardCode: '',
  cardExpMonth: '',
  cardExpYear: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveAddress: () => {
      console.log()
    }
  }
})

export const { saveAddress } = formSlice.actions
