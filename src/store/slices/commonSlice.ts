import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface commonState {
  selectedCategory: number | null,
    limit: number,
    menuIsOpen: boolean
}

const initialState: commonState = {
  selectedCategory: null,
  limit: 15,
  menuIsOpen: false
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSelectedCategory: (state,action: PayloadAction<number> ) => {
      state.selectedCategory = action.payload
    },
    setMenuIsOpen: (state) => {
      state.menuIsOpen = !state.menuIsOpen
    },
    closeMobileMenu: (state) => {
      if(state.menuIsOpen)
        state.menuIsOpen = false
    }
  },
})

export const { closeMobileMenu, setMenuIsOpen, setSelectedCategory} = commonSlice.actions

export default commonSlice.reducer
