import {FC} from "react"
import s from './VariationItem.module.css'

interface VariationItemI {
  price: number,
    id: number,
setSelectedVariation: any
}

const VariationItem: FC<VariationItemI> = ({price, id, setSelectedVariation}) => {
  return <div className={s.price} onClick={()=>setSelectedVariation(id)}>{price}</div>
}

export default VariationItem
