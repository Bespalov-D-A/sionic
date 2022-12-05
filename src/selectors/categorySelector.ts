import {createSelector} from 'redux-orm';
import {orm} from '../store/models/models';


export const getAllCategoriesSelector = createSelector(
    orm,
  (session) => {
    return session.Category.all().toRefArray()
    }
);


