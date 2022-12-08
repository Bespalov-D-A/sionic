import {  configureStore } from "@reduxjs/toolkit";
import { createReducer } from "redux-orm";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/es/storage";
import { orm } from "./models/models";
import commonSlice from "./slices/commonSlice";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import deliveryFormSlice, {
  deliveryFormState,
} from "./slices/deliveryFormSlice";
import thunk from "redux-thunk";
import orderHistorySlice, {
  orderHistoryState,
} from "./slices/orderHistorySlice";

export const ormReducer = createReducer(orm);

const persistConfig = {
  key: "root",
  storageSession,
  storage,
  stateReconciler: autoMergeLevel2,
};

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    deliveryFormSlice: persistReducer<deliveryFormState, any>(
      persistConfig,
      deliveryFormSlice
    ),
    orderHistorySlice: persistReducer<orderHistoryState, any>(
      persistConfig,
      orderHistorySlice
    ),
    ormReducer,
    commonSlice,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
