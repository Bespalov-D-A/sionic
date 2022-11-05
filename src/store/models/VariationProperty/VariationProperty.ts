import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariationProperty extends Model {
  static modelName = "ProductVariationProperty";
  static reducer(action: any, ProductVariationProperty: any, session: any) {
    switch (action.type) {
      case 'ADD_PRODUCT_VARIATION_PROPERTY': {
        ProductVariationProperty.create(action.payload)
        break
      }
    }
  }

  toString(this: SessionBoundModel<ProductVariationProperty>) {
    return `ProductVariationProperty: ${this.name}`;
  }
}

ProductVariationProperty.fields = {
  id: attr(),
  name: attr(),
  type: attr(),
};

