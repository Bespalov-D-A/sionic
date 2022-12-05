import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";
import {addPackDataCase} from "../../cases/commonCases";

export const ADD_PRODUCT_VARIATION_PACK = "ADD_PRODUCT_VARIATION_PACK"

export class ProductVariation extends Model {
  static modelName = "ProductVariation";
  static reducer(action: any, ProductVariation: any, session: any) {
    const {payload, type} = action
    switch (action.type) {
      case ADD_PRODUCT_VARIATION_PACK:
        return addPackDataCase(payload, ProductVariation)
    }
  }
}

ProductVariation.fields = {
  id: attr(),
  price: attr(),
  stock: attr(),
  product_id:fk({
    to: 'Product' ,
    as: 'product',
    relatedName: 'variations'
  })
};

