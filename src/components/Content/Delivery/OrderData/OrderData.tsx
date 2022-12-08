import { FC, useState } from "react";
import { useCart } from "react-use-cart";
import { numFormat } from "../../../../utilites/formatNumbers";
import {IDeliveryFormError} from "../../../../validators/deliveryFormValidate";
import s from "./OrderData.module.css";

interface OrederDataProps {
  createOrder: ()=>void,
    errors: IDeliveryFormError
}

const OrederData: FC<OrederDataProps> = ({errors, createOrder}) => {
  const { cartTotal } = useCart();
  const [delivery, setDelivery] = useState(200584);

  return (
    <div className={s["order-data"]}>
      <div className={s.wrapper}>
        <div>
          <p className={s.cost}>
            Стоимость доставки:{" "}
            <span className={s.num}>{numFormat(delivery)}₽</span>
          </p>
          <p className={s.cost}>
            Стоимость товаров:{" "}
            <span className={s.num}>{numFormat(cartTotal)}₽</span>
          </p>
        </div>
        <p className={s.total}>
          Итого:{" "}
          <span className={s.num}>{numFormat(delivery + cartTotal)}₽</span>
        </p>
      </div>
      <button type='submit' className={s.btn + " blue-btn"}>
        Сделать заказ
      </button>
    {!Object.keys(errors).length || 'Форма доставки заолнена не верно' }
    </div>
  );
};

export default OrederData;
