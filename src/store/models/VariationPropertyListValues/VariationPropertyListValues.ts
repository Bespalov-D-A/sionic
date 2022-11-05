import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariationPropListValues extends Model {
  static modelName = "ProductVariationPropListValues";
  static reducer(action: any, ProductVariationPropListValues: any, session: any) {
    switch (action.type) {
      case 'ADD_PRODUCT_VARIATION_PROP_LIST_VALUES': {
        ProductVariationPropListValues.create(action.payload)
        break
      }
    }
  }

  toString(this: SessionBoundModel<ProductVariationPropListValues>) {
    return `ProductVariationPropListValues: ${this.name}`;
  }
}

ProductVariationPropListValues.fields = {
  id: attr(),
  title: attr(),
  value: attr(),
  product_variation_property_id: fk({
    to: "ProductVariationProperty",
    as: "variationProperty",
    relatedName: "propertiesListValues",
  }),
};
