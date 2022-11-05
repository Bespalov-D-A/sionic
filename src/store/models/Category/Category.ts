import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class Category extends Model {
  static modelName = "Category";
  static reducer(action: any, Category: any, session: any) {
    switch (action.type) {
      case 'ADD_PRODUCT_CATEGORY': {
        Category.create(action.payload)
        break
      }
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
