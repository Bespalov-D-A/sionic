import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariationProperty extends Model {
  static modelName = "ProductVariationProperty";
  toString(this: SessionBoundModel<ProductVariationProperty>) {
    return `ProductVariationProperty: ${this.name}`;
  }
}

ProductVariationProperty.fields = {
  id: attr(),
  name: attr(),
  type: attr(),
};

