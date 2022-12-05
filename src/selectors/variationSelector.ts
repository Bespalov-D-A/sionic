import {createSelector} from "redux-orm"
import {orm} from "../store/models/models"

export const getAllVariationProperties = createSelector(
  orm,
  session => {
    return session.ProductVariationProperty.all().toRefArray()
  }
)
