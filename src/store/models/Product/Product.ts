import { Model, many, attr, SessionBoundModel, fk, QuerySet } from "redux-orm";
import {AnyModel} from "redux-orm/Model";

interface ProductData {
  getModelById: any;
}

export class Product extends Model {
  static modelName = "Product";



 static reducer = (action: any, Product: any, session: any) => {
    switch (action.type) {
      case 'ADD_PRODUCT': {
        Product.upsert(action.payload)  
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
