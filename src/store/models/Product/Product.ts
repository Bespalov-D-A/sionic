import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class Product extends Model {
  static modelName = "Product";
  toString(this: SessionBoundModel<Product>) {
    return `Product: ${this.name}`;
  }
}

Product.fields = {
  id: attr(),
  name: attr(),
  category_id:fk({
    to: 'Category' ,
    as: 'category',
    relatedName: 'products'
  })
};

