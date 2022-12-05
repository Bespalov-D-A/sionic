import React, { FC } from "react";
import s from "./HistoryOrders.module.css";
import Order from "./Order/Order";

interface HistoryOrdersProps {}

const HistoryOrders: FC<HistoryOrdersProps> = ({}) => {
  return (
    <div className={s.history}>
      <h3 className={s.title}>История заказов</h3>
      <Order />
      <Order />
    </div>
  );
};

export default HistoryOrders;
