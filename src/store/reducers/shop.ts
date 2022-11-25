import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShopState {
  value: number;
  dataIsLoad: boolean;
}

const initialState: ShopState = {
  value: 0,
  dataIsLoad: false,
};

export const shopSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    dataLoading: (state) => {
      state.dataIsLoad = true;
    },
  },
});

export const { dataLoading } = shopSlice.actions

export default shopSlice.reducer;
