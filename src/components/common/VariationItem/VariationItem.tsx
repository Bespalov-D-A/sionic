import {FC} from "react"
import s from './VariationItem.module.css'

interface VariationItemI {
  price: number
}

const VariationItem: FC<VariationItemI> = ({price}) => {
return <div className={s.price}>{price}</div>
}

export default VariationItem
