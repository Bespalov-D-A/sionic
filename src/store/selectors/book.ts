import { createSelector } from "redux-orm";
import { orm } from "./../models/models";

export const itIsBook = createSelector(orm, orm.get('Book'))
