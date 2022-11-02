import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariationPropListValues extends Model {
  static modelName = "ProductVariationPropListValues";
  toString(this: SessionBoundModel<ProductVariationPropListValues>) {
    return `ProductVariationPropListValues: ${this.name}`;
  }
}

ProductVariationPropListValues.fields = {
  id: attr(),
  title: attr(),
  value: attr(),
  product_variation_property_id: fk({
    to: "VariationProperties",
    as: "variationProperties",
    relatedName: "propertiesListValues",
  }),
};
