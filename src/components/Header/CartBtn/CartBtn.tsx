import React, { FC } from "react";
import {useCart} from "react-use-cart";
import s from "./CartBtn.module.css";

interface CartBtnProps {}

const CartBtn: FC<CartBtnProps> = ({}) => {
  const  { totalUniqueItems }  =  useCart() ;

  return (
    <div className={s["cart-btn"]}>
      <div className={s.count}>
        <p className={s['count-item']}>{totalUniqueItems}+</p>
      </div>
    </div>
  );
};

export default CartBtn;
