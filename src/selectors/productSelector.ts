import {createSelector} from "redux-orm";
import {orm} from "../store/models/models";

export const getProductsByCategoryId = createSelector(
  orm,
  //@ts-ignore
  state => state.commonSlice.selectedCategory,
  //@ts-ignore
  (session, selectedCategory) => {
      if(!selectedCategory) return session.Product.all().toRefArray()
      return session.Product.withId(selectedCategory).products.toRefArray();
  }
)
