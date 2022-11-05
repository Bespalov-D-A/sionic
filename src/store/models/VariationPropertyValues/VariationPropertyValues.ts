import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariationPropertyValue extends Model {
  static modelName = "ProductVariationPropertyValue";
  static reducer(action: any, ProductVariationPropertyValue: any, session: any) {
    switch (action.type) {
      case 'ADD_PRODUCT_VARIATION_PROPERTY_VALUE': {
        ProductVariationPropertyValue.create(action.payload)
        break
      }
    }
  }

  toString(this: SessionBoundModel<ProductVariationPropertyValue>) {
    return `ProductVariationPropertyValue: ${this.name}`;
  }
}

ProductVariationPropertyValue.fields = {
  id: attr(),
  product_variation_id: fk({
    to: "ProductVariation",
    as: "productVariation",
    relatedName: "productVariationProperyValues",
  }),
  product_variation_property_id: fk({
    to: "ProductVariationProperty",
    as: "productVariationProperty",
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