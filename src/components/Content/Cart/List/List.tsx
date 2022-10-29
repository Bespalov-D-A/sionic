import React, {FC} from 'react'
import s from './List.module.css'
import Product from './Product/Product'

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  return <div className={s.list}>
    <Product />
  </div>
}

export default List
