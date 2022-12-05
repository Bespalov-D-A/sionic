import React, { FC } from "react";
import s from "./Price.module.css";

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
  return (
    <div className={s.price}>
      <h3 className={s.title}>от 350 000 ₽</h3>
      <div className={s["discount-block"]}>
        <span className={s.before}>450 000 ₽</span>
        <span className={s.discount}>10%</span>
      </div>
    </div>
  );
};

export default Price;
