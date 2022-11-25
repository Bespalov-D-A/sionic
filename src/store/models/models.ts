import { ORM } from "redux-orm";
import {Author} from "./Author/Author";
import {Book} from "./Book/Book";
import {proxyClassForORM} from "./proxy/proxy";

export const orm = new ORM({
  stateSelector: (state) => state.ormReducer,
});

orm.register(proxyClassForORM(Book), proxyClassForORM(Author));
