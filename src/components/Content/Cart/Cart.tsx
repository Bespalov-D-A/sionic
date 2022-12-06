import React, { FC } from "react";
import s from "./Cart.module.css";
import Bar from "./Bar/Bar";
import Top from "./Top/Top";
import CartProductList from "./CartProductList/CartProductList";

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  return (
    <>
      <Top />
      <div className={s.cart}>
        <Bar />
        <CartProductList />
      </div>
    </>
  );
};

export default Cart;
