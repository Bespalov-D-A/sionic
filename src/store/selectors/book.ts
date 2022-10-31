import { createSelector } from "redux-orm";
import { Book, orm } from "./../models/models";

export const book = createSelector(orm,  orm.get('Book'))
