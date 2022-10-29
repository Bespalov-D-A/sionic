import React, {FC} from 'react'
import OrderDataBlock from '../../../../Global/OrderDataBlock/OrderDataBlock'
import s from './Address.module.css'

interface AddressProps {}

const Address: FC<AddressProps> = ({}) => {
return <OrderDataBlock title='Адрес доставки'>
    <p className={s.data}>ул. Коммунистич...д.1, стр.1</p>
  </OrderDataBlock>

}

export default Address
