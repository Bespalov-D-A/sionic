import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShopState {
  value: number;
  dataIsLoad: boolean;
  selectedCategory: number | null
}

const initialState: ShopState = {
  value: 0,
  dataIsLoad: false,
  selectedCategory: null,
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
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    }
  },
});

export const { setCategory, dataLoading } = shopSlice.actions

export default shopSlice.reducer;
