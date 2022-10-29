import React, {FC} from "react";
import s from './History.module.css'
import Order from "./Order/Order";

interface HistoryProps {
}

const History: FC<HistoryProps> = ({}) => {
  return <div className={s.history}>
<h3 className={s.title}>История заказов</h3>
<Order />
  </div>;
};

export default History;
