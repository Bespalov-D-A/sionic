import React, { FC } from "react";
import s from './Bar.module.css'
import Price from "./Price/Price";

interface BarProps {}

const Bar: FC<BarProps> = ({}) => {
  return (
    <div className={s.bar}>
      <h3 className={s["product-name"]}>Xiaomi</h3>
      <div className={s.wrap}>
 <Price />
      <input className={s.btn + ' blue-btn'} type="button" value="Оформить" />

      </div>
         </div>
  );
};

export default Bar;
