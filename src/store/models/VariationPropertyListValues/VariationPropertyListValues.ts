import { Model,  attr,  fk } from "redux-orm";
import {addPackDataCase} from "../../cases/commonCases";

export const ADD_PRODUCT_VARIATION_PROP_LIST_VALUES  = 'ADD_PRODUCT_VARIATION_PROP_LIST_VALUES'

export class ProductVariationPropListValues extends Model {
  static modelName = "ProductVariationPropListValues";
  static reducer(action: any, ProductVariationPropListValues: any, session: any) {
    const {payload, type} = action
    switch (type) {
      case ADD_PRODUCT_VARIATION_PROP_LIST_VALUES: {
        return addPackDataCase(payload, ProductVariationPropListValues)
      }
    }
  }
}

ProductVariationPropListValues.fields = {
  id: attr(),
  title: attr(),
  value: attr(),
  product_variation_property_id: fk({
    to: "ProductVariationProperty",
    as: "productVariationProperty",
    relatedName: "propertiesListValues",
  }),
};
