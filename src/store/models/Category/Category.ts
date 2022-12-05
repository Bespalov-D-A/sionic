import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";
import { ADD_PRODUCT_CATEGORY, ADD_PRODUCT_CATEGORY_PACK } from "./constants";

export class Category extends Model {
  static modelName = "Category";
  static reducer(action: any, Category: any, session: any) {
    const {type, payload} = action
    switch (type) {
      case ADD_PRODUCT_CATEGORY:
        Category.create(payload);
        break;
      case ADD_PRODUCT_CATEGORY_PACK:
        for (let i = 0; i < payload.length; i++) {
          if(!Category.filter({id: payload[i].id}).exists())
          Category.create(payload[i]);
        }
        break;
    }
  }

  toString(this: SessionBoundModel<Category>) {
    return `Category: ${this.name}`;
  }
}

Category.fields = {
  id: attr(),
  name: attr(),
};
