import React, { FC } from "react";
import s from "./CartBtn.module.css";

interface CartBtnProps {}

const CartBtn: FC<CartBtnProps> = ({}) => {
  return (
    <div className={s["cart-btn"]}>
      <div className={s.count}>
        <p className={s['count-item']}>10+</p>
      </div>
    </div>
  );
};

export default CartBtn;
