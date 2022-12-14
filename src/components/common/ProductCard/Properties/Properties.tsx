import {FC, useEffect} from "react"
import {variationService} from "../../../../API/variationService"
import {ERROR_PROPERTY_VALUE_LOAD} from "../../../../constants/messages"
import {useAppDispatch} from "../../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../../hooks/useAppSelector"
import {useLoader} from "../../../../hooks/useLoader"
import {getAllVariationProperties} from "../../../../selectors/variationSelector"
import {ADD_PRODUCT_VARIATION_PROPERTY_VALUE} from "../../../../store/models/VariationPropertyValues/VariationPropertyValues"
import {params} from "../../../../types/apiTypes"
import {IProductVariation, IProductVariationProperties} from "../../../../types/productTypes"
import List from "../../List"
import PropertyItem from "../PropertyItem/PropertyItem"
import s from './Properties.module.css'

interface PropertiesI {
  selectedVariation: IProductVariation | null
}

const Properties: FC<PropertiesI> = ({selectedVariation}) => {
  const state = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  //@ts-ignore
  const properties = getAllVariationProperties(state)
    const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    const response = await variationService.getProductVariationPropertyValues(params);
    dispatch({ type: ADD_PRODUCT_VARIATION_PROPERTY_VALUE, payload: response.data });
  });

  useEffect(()=> {
    if(selectedVariation)
    isFetch({
      filter: `{"product_variation_id":${selectedVariation.id}}`
    })
  }, [selectedVariation])


  return <div className={s.properties}>
    {!error ?
  <List
    //@ts-ignore
    items={properties}
    renderItem={(property: IProductVariationProperties )=> 
      <PropertyItem selectedVariation={selectedVariation} key={property.id} id={property.id} title={property.name}/>
  } />
  : <>{ERROR_PROPERTY_VALUE_LOAD}</>}
  </div>
}

export default Properties
