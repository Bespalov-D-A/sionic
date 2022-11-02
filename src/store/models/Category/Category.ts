import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class Category extends Model {
  static modelName = "Category";
  toString(this: SessionBoundModel<Category>) {
    return `Category: ${this.name}`;
  }
}

Category.fields = {
  id: attr(),
  name: attr(),
};
