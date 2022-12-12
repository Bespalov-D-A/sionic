import {FC} from "react"
import {IProductVariation} from "../../../types/productTypes"
import s from './VariationItem.module.css'

interface VariationItemI {
  variation: IProductVariation,
    setSelectedVariation: any,
    index:number
}

const VariationItem: FC<VariationItemI> = ({index, variation, setSelectedVariation}) => {
  const {price} = variation
  return <div className={s.price} onClick={()=>setSelectedVariation(variation)}>вариант {index + 1}</div>
}

export default VariationItem
