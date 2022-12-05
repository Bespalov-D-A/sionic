import React, {FC} from 'react'
import OrderDataBlock from '../../../../common/OrderDataBlock/OrderDataBlock'
import s from './Status.module.css'

interface StatusProps {}

const Status: FC<StatusProps> = ({}) => {
  return <OrderDataBlock title='Статус заказа'>
    <p className={s.data}>Оплачен</p>
  </OrderDataBlock>
}

export default Status
