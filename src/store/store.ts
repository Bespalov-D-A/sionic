import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReducer } from "redux-orm";
import { ormReducer } from "./models/models";
import counterSlice from "./reducers/shop";

//const ormReducer = createReducer(orm)

const rootReducer = combineReducers({
  counterSlice,
  ormReducer
})

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
