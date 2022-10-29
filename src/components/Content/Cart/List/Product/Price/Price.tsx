import React, { FC } from "react";
import s from "./Price.module.css";

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
  return (
    <div className={s.price}>
      <p className={s.current}>от 350 000 ₽</p>
      <p className={s.discount}>450 500 ₽</p>
    </div>
  );
};

export default Price;
