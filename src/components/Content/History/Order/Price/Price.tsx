import React, {FC} from 'react'
import s from './Price.module.css'
import OrderDataBlock from '../../../../Global/OrderDataBlock/OrderDataBlock'

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
return <OrderDataBlock title='Стоимость заказа'>
    <p className={s.data}>250 000₽</p>
  </OrderDataBlock>
}

export default Price
