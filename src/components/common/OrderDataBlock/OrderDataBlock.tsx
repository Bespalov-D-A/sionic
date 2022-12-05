import React, {FC} from 'react'
import s from './OrderDataBlock.module.css'

interface OrderDataBlockProps {
  readonly title: string;
  readonly style?: object | undefined;
  children: React.ReactElement | React.ReactNode;
}

const OrderDataBlock: FC<OrderDataBlockProps> = ({style, title, children}) => {
  return <div className={s['order']} style={style}>
  <p className={s.title}>{title}</p>
  {children}
  </div>
}

export default OrderDataBlock
