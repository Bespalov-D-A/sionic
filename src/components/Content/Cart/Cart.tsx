import React, {FC} from "react";
import s from './Cart.module.css'
import Bar from "./Bar/Bar";
import Top from "./Top/Top";
import List from "./List/List";


interface CartProps {
}

const Cart: FC<CartProps> = ({}) => {
  return <div className={s.cart}>
  <Top />
  <Bar />
  <List />
  </div>;
};

export default Cart;
