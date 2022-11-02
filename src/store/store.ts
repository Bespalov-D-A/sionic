import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {createReducer} from "redux-orm";
import {orm} from "./models/models";
//import {authorReducer} from "./reducers/Author";
//import {bookReducer} from "./reducers/Book";
import counterSlice from "./reducers/shop";

export const ormReducer = createReducer(orm)

const rootReducer = combineReducers({
  counterSlice,
  //bookReducer,
  //authorReducer,
  ormReducer
})

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
