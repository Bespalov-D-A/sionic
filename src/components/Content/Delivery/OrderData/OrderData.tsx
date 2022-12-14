import { FC, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import {
  CART_IS_EMPTY,
  DELIVERY_FORM_NOT_VALID,
} from "../../../../constants/messages";
import { numFormat } from "../../../../utilites/formatNumbers";
import { IDeliveryFormError } from "../../../../validators/deliveryFormValidate";
import s from "./OrderData.module.css";

interface OrederDataProps {
  errors: IDeliveryFormError;
  isSubmitting: boolean;
}

const OrederData: FC<OrederDataProps> = ({ errors, isSubmitting }) => {
  const { items, cartTotal } = useCart();
  const [isSubmitingState, setIsSubmitingState] = useState<boolean>(false);
  const [delivery] = useState(200584);

  useEffect(() => {
    if (isSubmitting) setIsSubmitingState(true);
  }, [isSubmitting]);

  return (
    <div className={s["order-data"]}>
      <div className={s.wrapper}>
        <div>
          <p className={s.cost}>
            Стоимость доставки:{" "}
            <span className={s.num}>{numFormat(delivery, " ")}₽</span>
          </p>
          <p className={s.cost}>
            Стоимость товаров:{" "}
            <span className={s.num}>{numFormat(cartTotal, " ")}₽</span>
          </p>
        </div>
        <p className={s.total}>
          Итого:{" "}
          <span className={s.num}>{numFormat(delivery + cartTotal, " ")}₽</span>
        </p>
      </div>
      <button type="submit" className={s.btn + " blue-btn"}>
        Сделать заказ
      </button>
      <span className={s.err}>
        {isSubmitingState && Object.keys(errors).length
          ? DELIVERY_FORM_NOT_VALID
          : !items.length
          ? CART_IS_EMPTY
          : " "}
      </span>
    </div>
  );
};

export default OrederData;
