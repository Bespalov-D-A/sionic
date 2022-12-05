import { Model,  attr,  fk } from "redux-orm";
import {addPackDataCase} from "../../cases/commonCases";

export const ADD_PRODUCT_VARIATION_PROPERTY_VALUE = 'ADD_PRODUCT_VARIATION_PROPERTY_VALUE'

export class ProductVariationPropertyValue extends Model {
  static modelName = "ProductVariationPropertyValue";
  static reducer(action: any, ProductVariationPropertyValue: any, session: any) {
    const {payload, type} = action
    switch (type) {
      case ADD_PRODUCT_VARIATION_PROPERTY_VALUE: {
        return addPackDataCase(payload, ProductVariationPropertyValue)
      }
    }
  }
}

ProductVariationPropertyValue.fields = {
  id: attr(),
  product_variation_id: fk({
    to: "ProductVariation",
    as: "productVariation",
    relatedName: "productVariationProperty",
  }),
  product_variation_property_id: fk({
    to: "ProductVariationProperty",
    //as: "productVariationProperty",
    relatedName: "productVariationPropertyValues",
  }),
  value_string: attr(),
  value_int: attr(),
  value_float: attr(),
  product_variation_property_list_value_id: fk({
    to: "ProductVariationPropListValues",
    as: "productVariationPropListValue",
    relatedName: "productVariationPropListValues",
  }),
};
