import {Model, attr, many, SessionBoundModel} from "redux-orm";
import {orm} from "../models";

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
export function authorReducer(dbState: any, action: any) {
  const sess = orm.session(dbState);
  const { Author }: any = sess;

  switch (action.type) {
    case "CREATE_AUTHOR":
      Author.create(action.payload);
      break;
    case "UPDATE_AUTHOR":
      Author.withId(action.payload.id).update(action.payload);
      break;
    case "REMOVE_AUTHOR":
      Author.withId(action.payload.id).delete();
      break;
    case "ADD_BOOK_TO_AUTHOR":
      Author.withId(action.payload.bookId).authors.add(action.payload.author);
      break;
    case "REMOVE_BOOK_TO_AUTHOR":
      Author.withId(action.payload.bookId).authors.remove(
        action.payload.authorId
      );
      break;
  }
  return sess.state;
}
