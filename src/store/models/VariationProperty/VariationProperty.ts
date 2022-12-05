import { Model,  attr } from "redux-orm";
import {addPackDataCase} from "../../cases/commonCases";

export const ADD_PRODUCT_VARIATION_PROPERTY = 'ADD_PRODUCT_VARIATION_PROPERTY'

export class ProductVariationProperty extends Model {
  static modelName = "ProductVariationProperty";
  static reducer(action: any, ProductVariationProperty: any, session: any) {
    const {payload, type} = action
    switch (type) {
      case ADD_PRODUCT_VARIATION_PROPERTY: {
        return addPackDataCase(payload, ProductVariationProperty )
      }
    }
  }
}

ProductVariationProperty.fields = {
  id: attr(),
  name: attr(),
  type: attr(),
};

