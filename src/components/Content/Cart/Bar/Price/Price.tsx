import React, {FC} from 'react'
import s from './Price.module.css'

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
  return <div className={s.price}>
  <p className={s.title}>Стоимость корзины:</p>
  <p className={s.num}>1 185 000₽ </p>
  </div>
}

export default Price
