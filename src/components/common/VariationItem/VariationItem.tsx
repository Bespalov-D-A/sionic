import {FC} from "react"
import {IProductVariation} from "../../../types/productTypes"
import s from './VariationItem.module.css'

interface VariationItemI {
  variation: IProductVariation,
setSelectedVariation: any
}

const VariationItem: FC<VariationItemI> = ({variation, setSelectedVariation}) => {
  const {price} = variation
  return <div className={s.price} onClick={()=>setSelectedVariation(variation)}>{price}</div>
}

export default VariationItem
