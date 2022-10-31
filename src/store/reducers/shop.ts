import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShopState {
  value: number;
}

const initialState: ShopState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  decrement: state => {
      state.value -= 1
    }
  }
})

export default counterSlice.reducer
