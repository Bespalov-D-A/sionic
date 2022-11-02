import { Model, attr, many, SessionBoundModel } from "redux-orm";

export class Author extends Model {
  static modelName = "Author";
  toString(this: SessionBoundModel<Author>) {
    return `Author: ${this.name}`;
  }
}

Author.fields = {
  id: attr(),
  name: attr()
};
