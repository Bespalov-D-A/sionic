import  {FC} from "react";
import OrderData from "./OrderData/OrderData";
import s from './Delivery.module.css'
import DeliveryForm from "./DeliveryForm/DeliveryForm";

interface DeliveryProps {
}

const Delivery: FC<DeliveryProps> = ({}) => {
  return <div className={s.delivery}>
    <DeliveryForm />
    <OrderData />
  </div>;
};

export default Delivery;
