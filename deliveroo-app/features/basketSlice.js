import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state,action) => {
      state.items = [...state.items, action.payload]
    },

    remove: (state,action) => {
      state.value -= 1
    },
  },
})

export const { add, remove } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export default basketSlice.reducer