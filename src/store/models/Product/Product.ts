
import { Model,  attr, SessionBoundModel, fk } from "redux-orm";
import {addPackDataCase} from "../../cases/commonCases";

export const ADD_PRODUCTS_PACK = 'ADD_PRODUCTS_PACK'

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
