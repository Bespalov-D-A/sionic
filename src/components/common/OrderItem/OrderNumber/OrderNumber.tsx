import  { FC } from "react";
import OrderDataBlock from "../../OrderDataBlock/OrderDataBlock";
import s from "./OrderNumber.module.css";

interface OrderNumberProps {
  orderId: string
}

const OrderNumber: FC<OrderNumberProps> = ({orderId}) => {
  const style = {
    width: "250px",
  };

  return (
    <OrderDataBlock style={style} title="Номер заказа">
      <p className={s.data}>#{orderId}</p>
    </OrderDataBlock>
  );
};

export default OrderNumber;
