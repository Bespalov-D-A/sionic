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
    time: timeI | null
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
    updateTime: (state, action: PayloadAction<timeI>) => {
      state.time = action.payload;
    },

  },
});

export const { updateDate, updateTime, updatePhone, updateAddress, updateName } =
  deliveryFormSlice.actions;

export default deliveryFormSlice.reducer;
