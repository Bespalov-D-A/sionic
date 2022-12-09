import  {FC} from 'react'
import OrderDataBlock from '../../OrderDataBlock/OrderDataBlock'
import s from './Status.module.css'

interface StatusProps {
  paid: boolean
}

const Status: FC<StatusProps> = ({paid}) => {
  return <OrderDataBlock title='Статус заказа'>
    <p className={s.data}>{paid ? 'Оплачен' : 'Ждет оплаты'}</p>
  </OrderDataBlock>
}

export default Status
