import React, { FC } from "react";
import OrderDataBlock from "../../../../Global/OrderDataBlock/OrderDataBlock";
import s from "./OrderNumber.module.css";

interface OrderNumberProps {}

const OrderNumber: FC<OrderNumberProps> = ({}) => {
  const style = {
    width: "250px",
  };

  return (
    <OrderDataBlock style={style} title="Номер заказа">
      <p className={s.data}>#664-333</p>
    </OrderDataBlock>
  );
};

export default OrderNumber;
