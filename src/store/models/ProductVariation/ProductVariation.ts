import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class ProductVariation extends Model {
  static modelName = "ProductVariation";
  static reducer(action: any, ProductVariation: any, session: any) {
    switch (action.type) {
      case 'ADD_PRODUCT_VARIATION': {
        ProductVariation.create(action.payload)
        break
      }
    }
  }

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

