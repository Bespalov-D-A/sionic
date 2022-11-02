import { Model, many, attr, SessionBoundModel, fk, oneToOne } from "redux-orm";

export class ProductCover extends Model {
  static modelName = "ProductCover";
  toString(this: SessionBoundModel<ProductCover>) {
    return `ProductCover: ${this.name}`;
  }
}

ProductCover.fields = {
  id: attr(),
  image_name: attr(),
  image_url: attr(),
  product_id:oneToOne({
    to: 'Product' ,
    as: 'product',
    relatedName: 'cover'
  })
};

