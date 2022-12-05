import React, {FC} from 'react'
import OrderDataBlock from '../../../../common/OrderDataBlock/OrderDataBlock'
import s from './Count.module.css'

interface CountProps {}

const Count: FC<CountProps> = ({}) => {
return <OrderDataBlock title='Кол-во товаров'>
    <p className={s.data}>4 шт.</p>
  </OrderDataBlock>

}

export default Count
