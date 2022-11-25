import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariation extends Model {
  static modelName = "ProductVariation";
  toString(this: SessionBoundModel<ProductVariation>) {
    return `ProductVariation: ${this.name}`;
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

