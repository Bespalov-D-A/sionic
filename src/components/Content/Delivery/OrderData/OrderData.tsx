import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { numFormat } from "../../../../utilites/formatNumbers";
import s from "./OrderData.module.css";

interface OrederDataProps {}

const OrederData: FC<OrederDataProps> = ({}) => {
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
      <NavLink to="/shop" className={s.btn + " blue-btn"}>
        Сделать заказ
      </NavLink>
    </div>
  );
};

export default OrederData;
