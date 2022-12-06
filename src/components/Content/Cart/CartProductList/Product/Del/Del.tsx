import  {FC} from 'react'
import {useCart} from 'react-use-cart'
import s from './Del.module.css'

interface DelProps {
  productId: string
}

const Del: FC<DelProps> = ({productId}) => {
  const { removeItem } = useCart()

  return <div onClick={()=>removeItem(productId)} className={s.del}></div>
}

export default Del
