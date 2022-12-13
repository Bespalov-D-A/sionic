import {createSelector} from "redux-orm";
import {orm} from "../store/models/models";

export const getProductsByCategoryId = createSelector(
  orm,
  //@ts-ignore
  state => state.commonSlice.selectedCategory,
  //@ts-ignore
  state => state.ormReducer.Product,
  //@ts-ignore
  (session, selectedCategory, products) => {
      if(!selectedCategory) return session.Product.all().toRefArray()
        else return session.Product.filter({category_id: selectedCategory}).toRefArray();
  }
)

export const getProductsLengthByCategoryId = createSelector(
  orm,
  //@ts-ignore
  state => state.commonSlice.selectedCategory,
  //@ts-ignore
  (session, selectedCategory) => {
    if(!selectedCategory) return session.Product.count()
    return session.Product.filter({category_id: selectedCategory}).count();

  }
)
