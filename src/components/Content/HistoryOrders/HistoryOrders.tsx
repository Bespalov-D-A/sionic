import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { IReadyOrder } from "../../../types/orderTypes";
import List from "../../common/List";
import OrderItem from "../../common/OrderItem/OrderItem";
import s from "./HistoryOrders.module.css";
interface HistoryOrdersProps {}

const HistoryOrders: FC<HistoryOrdersProps> = ({}) => {
  const orders = useAppSelector((state) => state.orderHistorySlice.orders);
  console.log(orders);
  return (
    <div className={s.history}>
      <h3 className={s.title}>История заказов</h3>
      <List
        items={orders}
        renderItem={(order: IReadyOrder) => (
          <OrderItem
            product={order.product}
            delivery={order.delivery}
            orderId={order.orderId}
            paid={order.paid}
            date={order.date}
            key={order.product.id}
          />
        )}
      />
    </div>
  );
};

export default HistoryOrders;
