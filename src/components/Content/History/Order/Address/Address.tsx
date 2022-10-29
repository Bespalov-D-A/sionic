import React, {FC} from 'react'
import OrderDataBlock from '../../../../Global/OrderDataBlock/OrderDataBlock'
import s from './Address.module.css'

interface AddressProps {}

const Address: FC<AddressProps> = ({}) => {
  const style = {
  marginRight: 0
  }

return <OrderDataBlock style={style} title='Адрес доставки'>
    <p className={s.data}>ул. Коммунистич...д.1, стр.1</p>
  </OrderDataBlock>

}

export default Address
