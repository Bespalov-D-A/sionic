
import { Model,  attr, SessionBoundModel, fk } from "redux-orm";
import {addPackDataCase, removeAllProductsCase} from "../../cases/commonCases";

export const ADD_PRODUCTS_PACK = 'ADD_PRODUCTS_PACK'
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS'

interface ProductData {
  getModelById: any;
}

export class Product extends Model {
  static modelName = "Product";

 static reducer = (action: any, Product: any, session: any) => {
   const {type, payload} = action
    switch (type) {
      case ADD_PRODUCTS_PACK:
        return addPackDataCase(payload, Product)
      case REMOVE_ALL_PRODUCTS:
        return removeAllProductsCase(Product)
    }
  }
}

Product.fields = {
  id: attr(),
  name: attr(),
  description: attr(),
  category_id: fk({
    to: "Category",
    as: "category",
    relatedName: "products",
  }),
};
