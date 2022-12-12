import {FC} from "react"
import Address from "./Address/Address"
import Count from "./Count/Count"
import OrderNumber from "./OrderNumber/OrderNumber"
import Price from "./Price/Price"
import Status from "./Status/Status"
import s from './OrderItem.module.css'
import {IReadyOrder} from "../../../types/orderTypes"

interface OrderItemI extends IReadyOrder {
}

const OrderItem: FC<OrderItemI> = (props) => {
  const {productCount, date, cartTotal, orderId, paid} = props
  const {cover } = props.products[0]
  const {address} = props.delivery
  console.log(props.products)
  return (
    <div className={s.order}>
      <div className={s.main}>
        <img src={cover} alt="" className={s.brend} />
        <h3 className={s.title}>Xiaomi</h3>
        <div className={s.bar}>
          <span className={s["bar-date"]}>{date}</span>
          <a href="#" className={s.details}>
            Подрбнее
          </a>
        </div>
      </div>
      <div className={s.info}>
        <Status  paid={paid}/>
        <OrderNumber orderId={orderId} />
        <Count quantity={productCount} />
        <Price price={cartTotal}/>
        <Address address={address}/>
      </div>
    </div>
  );

}

export default OrderItem
