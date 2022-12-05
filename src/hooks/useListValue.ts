import {useMemo} from "react"
import {orm} from "../store/models/models"
import {useAppSelector} from "./useAppSelector"

export const useListValue = (id: number) => {
  const state = useAppSelector(state => state)

  const getValue = useMemo(()=> {
    const session = orm.session(state.ormReducer)
    return session.ProductVariationPropListValues.filter({id}).first()?.ref
  }, [id])
  return getValue
}
