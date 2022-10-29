import React, {FC} from 'react'
import Count from './Count/Count'
import Cover from './Cover/Cover'
import Del from './Del/Del'
import Info from './Info/Info'
import Price from './Price/Price'
import s from './Product.module.css'

interface ProductProps {}

const Product: FC<ProductProps> = ({}) => {
  return <div className={s.product}>
    <Cover />
    <Info />
    <Count />
    <Price />
    <Del />
  </div>
}

export default Product
