import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface timeI {
  value: string,
    label: string
}

export interface deliveryFormState {
  name: string;
  phone: string;
  address: string;
  date: string | null,
  time: string | null
}

const initialState: deliveryFormState = {
  name: "",
  phone: "",
  address: "",
  date: null,
  time: null
};

export const deliveryFormSlice = createSlice({
  name: "deliveryForm`",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },

    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    updateAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    updateTime: (state, action: PayloadAction<string | null>) => {
      state.time = action.payload;
    },
    clearForm: (state) => {
      state.address = ''
      state.date = null
      state.name = ''
      state.phone = ''
      state.time = null
    }
  },
});

export const { updateDate, clearForm, updateTime, updatePhone, updateAddress, updateName } =
  deliveryFormSlice.actions;

export default deliveryFormSlice.reducer;
