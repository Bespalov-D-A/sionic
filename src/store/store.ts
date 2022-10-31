import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReducer } from "redux-orm";
import {authorReducer} from "./models/Author/Author";
import {bookReducer} from "./models/Book/Book";
import counterSlice from "./reducers/shop";

//const ormReducer = createReducer(orm)

const rootReducer = combineReducers({
  counterSlice,
  bookReducer,
  authorReducer
})

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
