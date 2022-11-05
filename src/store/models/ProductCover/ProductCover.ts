import { Model, many, attr, SessionBoundModel, fk, oneToOne } from "redux-orm";

export class ProductCover extends Model {
  static modelName = "ProductCover";
  static reducer(action: any, ProductCover: any, session: any) {
    switch (action.type) {
      case 'ADD_PRODUCT_COVER': {
        ProductCover.create(action.payload)
        break
      }
    }
  }

  toString(this: SessionBoundModel<ProductCover>) {
    return `ProductCover: ${this.name}`;
  }
}

ProductCover.fields = {
  id: attr(),
  image_name: attr(),
  image_url: attr(),
  product_id:fk({
    to: 'Product' ,
    as: 'product',
    relatedName: 'cover'
  })
};

