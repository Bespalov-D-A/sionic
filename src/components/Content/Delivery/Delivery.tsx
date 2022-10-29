import React, {FC} from "react";
import Menu from "./Menu/Menu";
import OrderData from "./OrderData/OrderData";
import s from './Delivery.module.css'

interface DeliveryProps {
}

const Delivery: FC<DeliveryProps> = ({}) => {
  return <div className={s.delivery}>
    <Menu />
    <OrderData />
  </div>;
};

export default Delivery;
