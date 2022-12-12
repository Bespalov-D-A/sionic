import React, { FC } from "react";
import {NavLink} from "react-router-dom";
import {useCart} from "react-use-cart";
import s from "./CartBtn.module.css";

interface CartBtnProps {}

const CartBtn: FC<CartBtnProps> = ({}) => {
  const  { totalUniqueItems }  =  useCart() ;

  return (
    <NavLink to='/cart' className={s["cart-btn"]}>
      <div className={s.count}>
        <p className={s['count-item']}>{totalUniqueItems}+</p>
      </div>
    </NavLink>
  );
};

export default CartBtn;
