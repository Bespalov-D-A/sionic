import  {FC} from 'react'
import OrderDataBlock from '../../OrderDataBlock/OrderDataBlock'
import s from './Price.module.css'

interface PriceProps {
  price: number
}

const Price: FC<PriceProps> = ({price}) => {
return <OrderDataBlock title='Стоимость заказа'>
    <p className={s.data}>{price}₽</p>
  </OrderDataBlock>
}

export default Price
