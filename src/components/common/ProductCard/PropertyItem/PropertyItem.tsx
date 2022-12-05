import {FC, useMemo} from "react"
import {useGetPropertyValue} from "../../../../hooks/useGetPropertyValue"
import {useListValue} from "../../../../hooks/useListValue"

interface PropertyItemI {
  title: string,
  id: number,
  selectedVariation: number | null
}

const PropertyItem: FC<PropertyItemI> = ({id, title, selectedVariation}) => {
  const value:any = useGetPropertyValue(id, selectedVariation)  

    const listId = value ? value.product_variation_property_list_value_id : null
  const listValue = useListValue(listId)

  const getVal = useMemo(() => {
    if(!value) return 'load'
    switch(id) {
      case 1: return value.value_string
      case 2: return value.value_int
      case 3: return value.value_int
      case 4: return value.value_int
      case 5: return value.value_float
      case 6: return listValue ? listValue.title : 'error' 
      case 7: return listValue ? listValue.title : 'error' 
      default: return 'Unknown erro'
    }
  }, [listValue, value])

  return <div>{title} : {getVal}</div>
}

export default PropertyItem
