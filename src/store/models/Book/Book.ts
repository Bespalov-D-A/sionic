import { Model, many, attr, SessionBoundModel, fk } from "redux-orm";

export class Book extends Model {
  static modelName = "Book";
  toString(this: SessionBoundModel<Book>) {
    return `Book: ${this.title}`;
  }
}

Book.fields = {
  id: attr(),
  title: attr(),
  authorIds: many({
    to: 'Author' ,
    as: 'authors',
    relatedName: 'books'
  })
};

