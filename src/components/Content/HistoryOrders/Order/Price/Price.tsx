import React, {FC} from 'react'
import OrderDataBlock from '../../../../common/OrderDataBlock/OrderDataBlock'
import s from './Price.module.css'

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
return <OrderDataBlock title='Стоимость заказа'>
    <p className={s.data}>250 000₽</p>
  </OrderDataBlock>
}

export default Price
