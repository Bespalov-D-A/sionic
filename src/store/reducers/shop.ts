import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShopState {
  value: number;
  dataIsLoad: boolean;
  selectedCategory: number | null,
  beforeSelectedCat: number[]
}

const initialState: ShopState = {
  value: 0,
  dataIsLoad: false,
  selectedCategory: null,
  beforeSelectedCat: []
};

export const shopSlice = createSlice({
  name: "shop",
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
    },
    setBeforeSelectedCat: (state, action) => {
      state.beforeSelectedCat = [...state.beforeSelectedCat, action.payload]
    }
  },
});

export const { setCategory, setBeforeSelectedCat, dataLoading } = shopSlice.actions

export default shopSlice.reducer;
