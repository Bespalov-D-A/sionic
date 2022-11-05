import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class Product extends Model {
  static modelName = "Product";

 static reducer = (action: any, Product: any, session: any) => {
    switch (action.type) {
      case 'ADD_PRODUCT': {
        Product.create(action.payload)  
        break
      }
    }
  }

  toString(this: SessionBoundModel<Product>) {
    return `Product: ${this.name}`;
  }
}


Product.fields = {
  id: attr(),
  name: attr(),
  description: attr(),
  category_id: fk({
    to: "Category",
    as: "category",
    relatedName: "products",
  }),
};
