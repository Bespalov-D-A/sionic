import { createSelector, ORM } from "redux-orm";
import {useAppSelector} from "../hooks/hooks";
import { orm } from "./../models/models";

export const itIsProduct = createSelector(orm, () => {
  let pr = useAppSelector(state => state)
  let ses = orm.session(pr.ormReducer)
  let my = ses['Product'].all().toRefArray()
  return my
})
