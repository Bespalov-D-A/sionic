import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface commonState {
  selectedCategory: number | null,
  limit: number
}

const initialState: commonState = {
  selectedCategory: null,
  limit: 10
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSelectedCateagory: (state,action: PayloadAction<number> ) => {
      state.selectedCategory = action.payload
    }
  },
})

export const {setSelectedCateagory} = commonSlice.actions

export default commonSlice.reducer
