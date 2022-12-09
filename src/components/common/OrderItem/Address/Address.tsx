import  {FC} from 'react'
import {threeDots} from '../../../../utilites/formatStrings'
import OrderDataBlock from '../../OrderDataBlock/OrderDataBlock'
import s from './Address.module.css'

interface AddressProps {
address: string
}

const Address: FC<AddressProps> = ({address}) => {
  const style = {
  marginRight: 0
  }

return <OrderDataBlock style={style} title='Адрес доставки'>
    <p className={s.data}>{threeDots(address, 20, true)}</p>
  </OrderDataBlock>

}

export default Address
