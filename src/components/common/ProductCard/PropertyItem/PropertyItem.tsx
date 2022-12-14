import {FC, useMemo} from "react"
import {ERROR, UNKNOWN_ERROR} from "../../../../constants/messages"
import {useGetPropertyValue} from "../../../../hooks/useGetPropertyValue"
import {useListValue} from "../../../../hooks/useListValue"
import {IProductVariation} from "../../../../types/productTypes"
import s from './PropertyItem.module.css'

interface PropertyItemI {
  title: string,
  id: number,
  selectedVariation: IProductVariation | null
}

const PropertyItem: FC<PropertyItemI> = ({id, title, selectedVariation}) => {
  const value:any = useGetPropertyValue(id, selectedVariation)  

    const listId = value ? value.product_variation_property_list_value_id : null
  const listValue = useListValue(listId)

  const getVal = useMemo(() => {
    if(!value) return null
    switch(id) {
      case 1: return value.value_string
      case 2: return value.value_int
      case 3: return value.value_int
      case 4: return value.value_int
      case 5: return value.value_float
      case 6: return listValue ? listValue.title : ERROR
      case 7: return listValue ? listValue.title : ERROR
      default: return UNKNOWN_ERROR
    }
  }, [listValue, value])

  return <div className={s.property}>
    <p className={s.title}>{title}</p> <p className={s.value + ' ' + (getVal || s.load)}>{!getVal ? '' : getVal}</p>
  </div>
}

export default PropertyItem
