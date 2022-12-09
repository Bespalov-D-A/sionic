import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface orderHistoryState {
  orders: any[] 
}

const initialState: orderHistoryState = {
  orders: []
}

export const  orderHistorySlice =  createSlice({
  name: 'history',
  initialState,
  reducers: {
    updateOrders: (state,action: PayloadAction<any[]> ) => {
      state.orders = state.orders.concat(action.payload) 
    }
  },
})

export const {updateOrders} = orderHistorySlice.actions

export default orderHistorySlice.reducer
