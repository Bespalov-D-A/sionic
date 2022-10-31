import { createSelector } from "redux-orm";
import { orm } from "./../models/models";

export const book = createSelector(orm,  orm.get('Book'))
