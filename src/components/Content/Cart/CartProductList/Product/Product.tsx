import React, {FC} from 'react'
import {useCart} from 'react-use-cart'
import Count from './Count/Count'
import Cover from './Cover/Cover'
import Del from './Del/Del'
import Info from './Info/Info'
import Price from './Price/Price'
import s from './Product.module.css'

interface ProductProps {
  product: any
}

const Product: FC<ProductProps> = ({product}) => {
  const { quantity, id, description, price, name, cover} = product

  return <div className={s.product}>
    <Cover cover={cover}/>
    <Info info={description} name={name} />
    <Count productId={id} quantity={quantity}/>
    <Price price={price} />
    <Del productId={id} />
  </div>
}

export default Product
