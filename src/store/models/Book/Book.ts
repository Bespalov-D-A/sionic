import { Model, many, attr, SessionBoundModel } from "redux-orm";
import {orm} from "../models";

export class Book extends Model {
  static modelName = "Book";
  toString(this: SessionBoundModel<Book>) {
    return `Book: ${this.name}`;
  }
}

Book.fields = {
  id: attr(),
  name: attr(),
  authors: many("Author", "books"),
};

export function bookReducer(dbState: any, action: any) {
  const sess = orm.session(dbState);
  const { Book }: any = sess;

  switch (action.type) {
    case "CREATE_BOOK":
      Book.create(action.payload);
      break;
    case "UPDATE_BOOK":
      Book.withId(action.payload.id).update(action.payload);
      break;
    case "REMOVE_BOOK":
      Book.withId(action.payload.id).delete();
      break;
    case "ADD_AUTHOR_TO_BOOK":
      Book.withId(action.payload.bookId).authors.add(action.payload.author);
      break;
    case "REMOVE_AUTHOR_FROM_BOOK":
      Book.withId(action.payload.bookId).authors.remove(
        action.payload.authorId
      );
      break;
  }
  return sess.state;
}
