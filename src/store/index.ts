import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "redux-orm";
import { orm } from "./models/models";
import shopSlice from "./slices/shopSlice";

export const ormReducer = createReducer(orm);

export const store = configureStore({
  reducer: {
    ormReducer,
    shopSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
