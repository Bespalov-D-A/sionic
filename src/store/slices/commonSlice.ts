import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface commonState {
  selectedCategory: number | null,
  limit: number
}

const initialState: commonState = {
  selectedCategory: null,
  limit: 12
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSelectedCategory: (state,action: PayloadAction<number> ) => {
      state.selectedCategory = action.payload
    }
  },
})

export const {setSelectedCategory} = commonSlice.actions

export default commonSlice.reducer
