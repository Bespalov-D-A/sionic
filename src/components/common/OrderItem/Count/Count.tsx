import  {FC} from 'react'
import OrderDataBlock from '../../OrderDataBlock/OrderDataBlock'
import s from './Count.module.css'

interface CountProps {
  quantity: number
}

const Count: FC<CountProps> = ({quantity}) => {
return <OrderDataBlock title='Кол-во товаров'>
    <p className={s.data}>{quantity} шт.</p>
  </OrderDataBlock>

}

export default Count
