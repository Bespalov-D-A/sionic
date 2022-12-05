import {useMemo} from "react"
import {orm} from "../store/models/models"
import {useAppSelector} from "./useAppSelector"

export const useVariation = (id:number) => {
  const state = useAppSelector(state =>state)

  const getVariation = useMemo(()=> {
    //@ts-ignore
    const session = orm.session(state.ormReducer)
    //@ts-ignore
    const product = session.Product.withId(id)
    return product.variations.toRefArray()
    //@ts-ignore
  }, [state])
  return getVariation
}
