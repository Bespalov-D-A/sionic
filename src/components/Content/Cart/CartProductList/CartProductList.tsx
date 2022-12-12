import  {FC} from 'react'
import {useCart} from 'react-use-cart';
import List from '../../../common/List';
import s from './CartProductList.module.css'
import Product from './Product/Product'

interface CartProductListI {}

const CartProductList: FC<CartProductListI> = ({}) => {
const { items } = useCart();

  return <div className={s.list}>
    <List
      items={items}
      renderItem={(product:any)=> <Product key={product.id} product={product}/>}
    />
  </div>
}

export default CartProductList
