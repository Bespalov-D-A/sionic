import React, { FC } from "react";
import Address from "./Address/Address";
import Count from "./Count/Count";
import s from "./Order.module.css";
import OrderNumber from "./OrderNumber/OrderNumber";
import Price from "./Price/Price";
import Status from "./Status/Status";

interface OrderProps {}

const Order: FC<OrderProps> = ({}) => {
  return (
    <div className={s.order}>
      <div className={s.main}>
        <img src="#" alt="" className={s.brend} />
        <h3 className={s.title}>Xiaomi</h3>
        <div className={s.bar}>
          <span className={s["bar-date"]}>21.12.2020</span>
          <a href="#" className={s.details}>
            Подрбнее
          </a>
        </div>
      </div>
      <div className={s.info}>
        <Status  />
        <OrderNumber />
        <Count />
        <Price />
        <Address />
      </div>
    </div>
  );
};

export default Order;
